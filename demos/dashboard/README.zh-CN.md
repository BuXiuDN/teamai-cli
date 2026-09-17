# Dashboard 设计 Demo

对应 [issue #407](https://github.com/Tencent/teamai-cli/issues/407) 的本地视觉原型，无额外依赖。可直接打开 `index.html`，或在仓库根目录运行 `python3 -m http.server 8407 --bind 127.0.0.1`，访问 `/demos/dashboard/`。

四模块导航是建议的信息组织方式，内容仅限本工作区已经实现、已在文档说明的能力。数字、知识条目、会话文本均为示例，不是真实遥测。页面不调用 API，不执行命令、维护、同步或上传操作。

## 内容依据

| 页面内容 | 现有依据 | 原型行为 |
| --- | --- | --- |
| 模块名称与能力分组 | README.md：Team Execution / Team Context (beta) / Team Improvement (beta) | 直接使用模块名称，不添加宣传口号 |
| 本机会话 | src/types.ts：DashboardSession；src/dashboard-html.ts | 状态、目录、工具、时长、对话、干预、Token 与已捕获输出；仓库/工具筛选仅作用于示例会话列表 |
| 六项趋势 | src/dashboard-html.ts；src/dashboard.ts：/api/trends | 固定本机近 7 天与前 7 天对比，不添加 30 天选择器 |
| KB Health | src/viz.ts：VizData；src/viz-render.ts | 按类型覆盖率、已召回和沉默条目、月度召回次数，并标明数据来源范围 |
| 维护 | src/viz-render.ts；README.md | 晋升、清理、过期候选数量；仅展示现有命令语法 |
| digest、session save、share learnings | README.md | 命令/技能说明，不模拟执行 |

覆盖率表示至少被召回一次的知识数除以知识总数。不展示当前 dashboard 数据模型尚未提供的 Skill 采用率、Recall 渗透率、会话与知识关联、改进状态机、因果效果对比或虚构同步时间。

视觉沿用 logo 的炭黑（#15161a）、蓝色（#3D96EA）、白色与节点连接元素。不修改生产 dashboard 行为。

## 偏好与会话费用

页头支持英文/简体中文和日间/夜间/跟随系统主题。浏览器存储可用时在本地记住偏好。界面及无障碍标签支持翻译，命令和原始会话内容保持不变。

已移除 Shared team resources 模块。按用户要求，费用卡片改为**每会话估算费用**：示例会话总费用除以有费用数据的会话数（本期 $42 / 100 = $0.420，前期 $48 / 100 = $0.480）。这是本次明确要求的原型变更；生产 `/api/trends` 的 `avgRequestCostMicros` 仍按已计价请求计算，本 demo 未修改生产接口或直接重命名该字段。
