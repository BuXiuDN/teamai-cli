import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import YAML from 'yaml';
import { LocalConfigSchema, type LocalConfig, type DashboardEvent } from '../types.js';
import { getUserHome } from '../utils/home.js';
import { resolveAnchors, listWorktrees } from '../utils/git.js';

export interface DashboardWorkspace {
  id: string;
  label: string;
  scope: 'user' | 'project';
  root: string;
  config: LocalConfig | null;
  roots: string[];
}
async function configAt(home: string): Promise<LocalConfig | null> {
  try { return LocalConfigSchema.parse(YAML.parse(await fs.readFile(path.join(home, 'config.yaml'), 'utf8'))); }
  catch { return null; }
}
/** Read installed scopes without bootstrapping or migrating other projects. */
export async function dashboardWorkspaces(events: DashboardEvent[]): Promise<DashboardWorkspace[]> {
  const home = path.join(getUserHome(), '.teamai');
  const user = await configAt(home);
  const result: DashboardWorkspace[] = [{ id: 'user', label: 'User scope', scope: 'user', root: getUserHome(), config: user, roots: [] }];
  const seen = new Set<string>();
  async function add(root: string, dataHome: string) {
    if (!await fs.stat(root).then(stat => stat.isDirectory()).catch(() => false)) return;
    const config = await configAt(dataHome);
    if (!config || config.scope !== 'project' || seen.has(root)) return;
    seen.add(root);
    result.push({ id: createHash('sha256').update(root).digest('hex').slice(0, 24), label: path.basename(root), scope: 'project', root,
      config: { ...config, projectRoot: root, dataHome }, roots: [...new Set([root, ...await listWorktrees(root).catch(() => [])])] });
  }
  const partitions = path.join(home, 'projects');
  for (const entry of await fs.readdir(partitions, { withFileTypes: true }).catch(() => [])) {
    if (!entry.isDirectory()) continue;
    const dataHome = path.join(partitions, entry.name);
    const root = (await fs.readFile(path.join(dataHome, 'anchor'), 'utf8').catch(() => '')).trim();
    if (path.isAbsolute(root)) await add(root, dataHome);
  }
  for (const cwd of new Set([process.cwd(), ...events.map(event => event.cwd).filter(Boolean)])) {
    const anchors = await resolveAnchors(cwd).catch(() => null);
    if (anchors) {
      await add(anchors.projectAnchor, path.join(anchors.workspaceRoot, '.teamai'));
    } else if (cwd) await add(cwd, path.join(cwd, '.teamai'));
  }
  return result;
}
export function workspaceEvents(events: DashboardEvent[], workspace: DashboardWorkspace, workspaces: DashboardWorkspace[]): DashboardEvent[] {
  const inside = (cwd: string, root: string) => cwd === root || cwd.startsWith(root + path.sep);
  const owners = new Map<string, string>();
  for (const event of events) {
    const match = workspaces.filter(w => w.scope === 'project' && w.roots.some(root => inside(event.cwd ?? '', root)))
      .sort((a, b) => Math.max(...b.roots.filter(root => inside(event.cwd ?? '', root)).map(root => root.length)) - Math.max(...a.roots.filter(root => inside(event.cwd ?? '', root)).map(root => root.length)))[0];
    if (match) owners.set(event.sessionId, match.id);
  }
  return events.filter(event => (owners.get(event.sessionId) ?? 'user') === workspace.id);
}
