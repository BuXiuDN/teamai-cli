# Dashboard design demo

Local, dependency-free visual prototype for [issue #407](https://github.com/Tencent/teamai-cli/issues/407). Open `index.html` directly, or serve the repository with `python3 -m http.server 8407 --bind 127.0.0.1` and visit `/demos/dashboard/`.

The four-module navigation is a proposed organization. Page content is limited to capabilities documented and implemented in this checkout. All numbers, entries and session text are fixtures, not real telemetry. No API calls, commands, maintenance actions, sync operations or uploads are executed.

## Content sources

| Surface | Existing source | Preview behavior |
| --- | --- | --- |
| Module names and capability groups | README.md: Team Execution / Team Context (beta) / Team Improvement (beta) | Uses literal module names, without added slogans |
| Local sessions | src/types.ts: DashboardSession; src/dashboard-html.ts | Status, directory, tool, duration, prompts, interventions, tokens and captured output; repository/tool filters apply only to the sample session list |
| Six trend metrics | src/dashboard-html.ts; src/dashboard.ts: /api/trends | Fixed local 7-day vs prior 7-day sample, with no invented 30-day selector |
| KB Health | src/viz.ts: VizData; src/viz-render.ts | Coverage by type, recalled and silent entries, monthly recall counts, and explicit source scope |
| Maintenance | src/viz-render.ts; README.md | Promotion, prune and stale candidate counts; existing command syntax shown as reference |
| Digest, session save, share learnings | README.md | Command/skill reference only; no simulated execution |

Coverage means entries recalled at least once divided by all entries. No skill adoption, recall penetration, per-session knowledge attribution, improvement state machine, causal outcome comparison or fabricated sync timestamp is presented. These are not supplied by the current dashboard data model.

The preview keeps the logo's charcoal (#15161a), blue (#3D96EA), white and connected-node design. No production dashboard behavior changes.

## Preferences and session cost

The header supports English / Simplified Chinese and light / dark / system themes. Preferences are saved locally when browser storage is available. UI labels and accessible labels are translated; commands and original session content remain unchanged.

The Shared team resources panel has been removed. At the user's request, the cost card now shows estimated **cost per session**, using sample total session cost divided by the count of sessions with cost data ($42 / 100 = $0.420; prior $48 / 100 = $0.480). This is a requested prototype change: the production `/api/trends` still returns `avgRequestCostMicros` per priced request and has not been changed or relabeled by this demo.
