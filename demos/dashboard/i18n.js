// Interface translations only. Commands, repository names and session content remain verbatim.
const zhCN = {
 'Overview':'总览','Team Execution':'团队执行','Team Context':'团队上下文','Team Improvement':'团队改进',
 'Workspace':'工作区','WORKSPACE':'工作区','Dashboard':'仪表盘','Local workspace':'本机工作区',
 'Make Every Team AI Native':'让每个团队都成为 AI 原生团队','Design preview · Issue #407':'设计预览 · Issue #407',
 'INTERACTIVE DEMO · SAMPLE DATA':'交互演示 · 示例数据','Language':'语言','Theme':'主题',
 'System theme':'跟随系统','Light mode':'日间模式','Dark mode':'夜间模式',
 'All repositories':'全部仓库','All AI tools':'全部 AI 工具','Repository':'仓库','AI tool':'AI 工具',
 'Local sessions · sample':'本机会话 · 示例','sessions on this machine':'个本机会话',
 'Skills · rules · agents · hooks · MCP · env':'技能 · 规则 · 智能体 · 钩子 · MCP · 环境变量',
 'KB Health · team repo aggregate · sample':'知识库健康 · 团队仓库汇总 · 示例',
 'knowledge coverage · 96 / 120 entries':'知识覆盖率 · 96 / 120 条',
 '24 entries never recalled':'24 条知识从未被召回','View sessions':'查看会话','View KB Health':'查看知识库健康',
 'Recall · learnings · codebase · teamwiki':'召回 · 经验 · 代码库 · 团队百科',
 'KB Health maintenance candidates · sample':'知识库维护候选 · 示例','candidates for review':'个待审查候选',
 '2 promotion · 5 prune · 1 stale':'2 个晋升 · 5 个清理 · 1 个过期候选',
 'View maintenance':'查看维护候选','Usage · sessions · dashboard':'用量 · 会话 · 仪表盘',
 '7 days vs prior 7 days':'近 7 天与前 7 天对比','Local · sample':'本机 · 示例',
 'Session success':'会话成功率','Prompts / session':'平均每会话对话轮数','Active duration':'活跃时长',
 'Cost / session':'平均每会话费用','Average estimated cost per session with cost data':'有费用数据的会话平均估算费用',
 'Cache read share':'缓存读取占比','Correction rate':'纠偏率','Local sessions':'本机会话',
 'Sample data':'示例数据','FIRST USER PROMPT / DIRECTORY':'首条用户输入 / 目录','AI TOOL':'AI 工具',
 'STATUS':'状态','PROMPTS':'对话轮数','INTERVENTIONS':'干预次数',
 'Working':'工作中','Your turn':'等待输入','Error':'异常','Idle':'空闲','Ended':'已结束',
 'Details':'详情','No sessions match these filters.':'没有符合筛选条件的会话。',
 'Knowledge Base Health':'知识库健康','Team repo · aggregated across the team · sample':'团队仓库 · 全团队汇总 · 示例',
 '120 entries · 96 recalled at least once · 80% coverage':'120 条知识 · 96 条至少召回一次 · 覆盖率 80%',
 'Skills':'技能','Rules':'规则','Docs':'文档','Learnings':'经验',
 'Top recalled entries':'高频召回知识','Silent entries':'未召回知识','Sample entries':'示例条目',
 'ENTRY':'条目','TYPE':'类型','RECALLS':'召回次数','UPVOTES':'赞同次数','LAST RECALLED':'最近召回',
 'Never':'从未','Monthly recall activity':'月度召回次数','Sample':'示例',
 'July':'七月','August':'八月','September':'九月','Sep 15':'9 月 15 日','Sep 14':'9 月 14 日','Sep 12':'9 月 12 日',
 'Recall & maintenance':'召回与维护','Team knowledge recall':'团队知识召回',
 'Recall is off by default and must be explicitly enabled.':'召回默认关闭，需要显式启用。',
 'View maintenance candidates':'查看维护候选','Maintenance console':'维护控制台','KB Health · sample candidates':'知识库健康 · 示例候选',
 'Promotion candidates · 2':'晋升候选 · 2',
 'Review high-confidence learnings before promoting them to formal knowledge.':'审查高置信度经验，再决定是否晋升为正式知识。',
 'Prune candidates · 5':'清理候选 · 5',
 'Preview low-confidence learnings before deciding whether to archive them.':'预览低置信度经验，再决定是否归档。',
 'Stale entries · 1':'过期条目 · 1',
 'Review stale skills, rules and docs; draft quality updates through the CLI.':'审查过期的技能、规则和文档，通过 CLI 起草质量更新。',
 'Commands are shown for reference. No maintenance action is executed by this preview.':'命令仅供参考。本预览不会执行维护操作。',
 'Usage & sessions':'用量与会话','Weekly team digest':'团队周报',
 '7-day success, prompt, active-time, estimated cost, cache and correction trends, plus lifetime totals.':'最近 7 天的成功率、对话、活跃时长、估算费用、缓存与纠偏趋势，以及累计数据。',
 'Session summaries':'会话摘要',
 'Save privacy-scrubbed summaries with tool sequences, prompt turns and interventions.':'保存已脱敏的会话摘要，包含工具序列、对话轮数与干预记录。',
 'Share learnings':'分享经验','Agent skill':'智能体技能','Friction-based sharing':'基于执行阻碍的经验分享',
 'After a session with interruptions, corrections, tool denials or repeated tool failures, the Stop hook can suggest sharing reusable experience.':'会话出现中断、纠偏、工具调用拒绝或重复失败后，Stop 钩子可建议分享可复用经验。',
 'Local session · sample':'本机会话 · 示例','Session activity':'会话活动','Human interventions':'人工干预',
 'Token usage':'Token 用量','First user prompt':'首条用户输入','Latest user prompt':'最近用户输入',
 'AI output':'AI 输出','No output captured yet.':'尚未捕获输出。','Close details':'关闭详情',
 'Illustrative local content. This preview does not load your prompts or transcripts.':'此处为本机内容示例。本预览不会读取你的输入或会话记录。',
 'Design preview · Sample data · Not connected to the local dashboard':'设计预览 · 示例数据 · 未连接本机仪表盘',
 'Session details are local. KB Health uses its reported data source.':'会话详情仅限本机。知识库健康以其标明的数据来源为准。',
 'TeamAI Dashboard · Design preview':'TeamAI 仪表盘 · 设计预览'
};
let locale='en';
const originalText=new WeakMap();
const originalAttributes=new WeakMap();
function translateText(value){
 if(locale==='en')return value;
 const leading=value.match(/^\s*/)[0],trailing=value.match(/\s*$/)[0],text=value.trim();
 if(!text)return value;
 if(zhCN[text])return leading+zhCN[text]+trailing;
 if(text.endsWith(' →')||text.endsWith(' ↗')){const label=text.slice(0,-2);if(zhCN[label])return leading+zhCN[label]+text.slice(-2)+trailing}
 let output=text.replace(/^Workspace\s*\//,'工作区 /').replace(/^prior: /,'上期：').replace(/\$([\d.]+) est\./g,'$$$1（估算）')
 .replace(/\b(\d+)m\b/g,'$1 分钟')
 .replace(/\b(\d+) (working|your turn|idle|error|ended)\b/g,(_,n,k)=>n+' '+({'working':'工作中','your turn':'等待输入','idle':'空闲','error':'异常','ended':'已结束'}[k]))
 .replace(/(\d+ \/ \d+) recalled/,'$1 已召回').replace(/(\d+) recalls/,'$1 次召回')
 .replace(/\b(Working|Your turn|Error|Idle|Ended)\b/g,k=>zhCN[k])
 .replace(/Last tool:/g,'最近工具：').replace(/prompt turns/g,'轮对话').replace(/Interrupt:/g,'中断：').replace(/Tool reject:/g,'工具拒绝：').replace(/Correction:/g,'纠偏：')
 .replace(/Input:/g,'输入：').replace(/Output:/g,'输出：').replace(/Cache read:/g,'缓存读取：').replace(/Cache creation:/g,'缓存写入：');
 if(text.startsWith('View '))output='查看 '+text.slice(5);
 return leading+output+trailing;
}
function localize(root){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode;
  if(node.parentElement.closest('script,style,code,[data-verbatim]'))continue;
  if(!originalText.has(node))originalText.set(node,node.nodeValue);
  node.nodeValue=translateText(originalText.get(node));
 }
 for(const element of root.querySelectorAll('[aria-label]')){
  if(!originalAttributes.has(element))originalAttributes.set(element,element.getAttribute('aria-label'));
  element.setAttribute('aria-label',translateText(originalAttributes.get(element)));
 }
}
function readPreference(key,fallback){try{return localStorage.getItem(key)||fallback}catch{return fallback}}
function savePreference(key,value){try{localStorage.setItem(key,value)}catch{/* Preferences remain usable without storage. */}}
function initPreferences(){
 const langSelect=document.getElementById('language'),themeSelect=document.getElementById('theme');
 const preferred=readPreference('teamai-demo-language',navigator.language.startsWith('zh')?'zh-CN':'en');
 locale=['en','zh-CN'].includes(preferred)?preferred:'en';langSelect.value=locale;
 const theme=readPreference('teamai-demo-theme','system');themeSelect.value=['system','light','dark'].includes(theme)?theme:'system';
 const system=window.matchMedia('(prefers-color-scheme: dark)');
 function applyTheme(){document.documentElement.dataset.theme=themeSelect.value==='system'?(system.matches?'dark':'light'):themeSelect.value}
 function applyLanguage(){document.documentElement.lang=locale;document.title=translateText('TeamAI Dashboard · Design preview');localize(document.body)}
 langSelect.onchange=()=>{locale=langSelect.value;savePreference('teamai-demo-language',locale);applyLanguage()};
 themeSelect.onchange=()=>{savePreference('teamai-demo-theme',themeSelect.value);applyTheme()};
 system.addEventListener('change',applyTheme);applyTheme();applyLanguage();
}
