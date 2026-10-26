window.__ModuleLoader__.load({
  id: '@ggxx/dsh-task-progress',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'taskProgress';
    const VIEW_ID = 'task-progress';
    const PLUGIN_ID = '@ggxx/dsh-task-progress';
    const EMPTY_LIST = [];
    const EMPTY_LEGACY = {
      nodes: EMPTY_LIST,
      partial: null,
      runningCalls: EMPTY_LIST,
      turnTimings: new Map(),
    };

    const zh = {
      'view.tasks': '任务进度',
      'page.title': '会话任务进度',
      'page.aria': '会话任务进度',
      'page.subtitle.running': '正在运行 · 第 {turn} 轮',
      'page.subtitle.runningUnknown': '正在运行',
      'page.subtitle.idle': '当前没有运行中的内容',
      'page.subtitle.blank': '这个会话还没有开始',
      'page.subtitle.attention': '有需要查看的问题或等待中的交互',
      'action.backToChat': '返回 Chat',
      'action.copy': '复制',
      'action.copied': '已复制',
      'action.copyFailed': '复制失败',
      'status.running': '运行中',
      'status.idle': '空闲',
      'status.blank': '空白会话',
      'status.attention': '需要关注',
      'live.eyebrow.running': '实时运行',
      'live.eyebrow.completed': '最近一轮',
      'live.eyebrow.failed': '最近一轮',
      'live.eyebrow.blank': '尚未开始',
      'live.eyebrow.status': '运行状态',
      'live.title.running': '第 {turn} 轮 · 第 {step} 步',
      'live.title.runningTurn': '第 {turn} 轮',
      'live.title.runningUnknown': '正在处理',
      'live.title.completed': '第 {turn} 轮已完成',
      'live.title.failed': '第 {turn} 轮异常结束',
      'live.title.failedUnknown': '最近一轮异常结束',
      'live.title.blank': '等待第一个任务',
      'live.title.idle': '等待新的输入',
      'live.title.attention': '需要处理',
      'live.progress': '运行进度',
      'live.progressAria': '运行进度：{percent}%',
      'live.chars': '已生成 {count} 字符',
      'live.tools': '{count} 个工具调用',
      'live.elapsed': '已运行 {duration}',
      'live.completedIn': '用时 {duration}',
      'live.queue': '队列 {count}',
      'live.toolRunning': '正在调用 {name}',
      'live.stepChip': '第 {step} 步',
      'live.turnChip': '第 {turn} 轮',
      'live.pendingInteraction': '等待确认',
      'live.noOutput': '还没有可显示的运行内容',
      'live.done': '本轮已完成',
      'live.failed': '本轮异常结束',
      'live.completedBadge': '完成',
      'cost.live': '实时花费',
      'cost.liveTag': '本轮',
      'cost.total': '总任务花费',
      'cost.totalTag': '整个会话',
      'cost.tokens': '{tokens} tok',
      'cost.cache': '缓存命中 {percent}%',
      'cost.peak': '高峰价',
      'cost.offPeak': '空闲价',
      'cost.waiting': '等待用量数据',
      'cost.note': '按 DeepSeek 峰谷价估算，实际以账单为准。',
      'info.lastActivity': '最近活动',
      'info.queue': '队列条数',
      'info.history': '历史载入状态',
      'info.source': '来源',
      'info.source.main': '主会话',
      'info.source.subagent': '子代理',
      'info.source.depth': '层级 {depth}',
      'info.queue.value': '{count} 条',
      'info.queue.steering': '另有 {count} 条插入',
      'info.noActivity': '暂无活动',
      'history.loading': '载入中',
      'history.loadingOlder': '载入更早…',
      'history.more': '还有更早历史',
      'history.complete': '已全部载入',
      'history.cold': '尚未载入',
      'history.error': '载入失败',
      'workdir.title': '工作目录',
      'workdir.copy': '复制路径',
      'workdir.empty': '未设置工作目录',
      'session.title': '会话',
      'session.id': 'Session ID',
      'session.parent': '父会话',
      'session.format': '格式状态',
      'session.copyId': '复制 ID',
      'session.none': '无',
      'session.format.current': '当前格式',
      'session.format.migration': '需要迁移',
      'session.format.unknown': '未知',
      'runtime.title': '运行状态',
      'runtime.connection': '连接状态',
      'runtime.currentTurn': '当前回合',
      'runtime.firstTurn': '首个回合',
      'runtime.step': '当前步骤',
      'runtime.connection.open': '已连接',
      'runtime.connection.loading': '连接中',
      'runtime.connection.error': '连接失败',
      'runtime.connection.cold': '未连接',
      'runtime.connection.removed': '已移除',
      'runtime.connection.unknown': '未知',
      'runtime.listSyncing': '目录同步中',
      'runtime.listReady': '目录已同步',
      'runtime.listError': '目录同步失败',
      'runtime.turnValue': '第 {turn} 轮',
      'runtime.stepValue': '第 {step} 步',
      'errors.title': '错误提示',
      'errors.none': '没有错误',
      'errors.noneBody': '会话运行正常。',
      'errors.open': '会话打开失败',
      'errors.send': '发送失败',
      'errors.stop': '停止失败',
      'errors.lastTurn': '上一回合错误',
      'errors.lastAgent': '最近代理错误',
      'errors.maxTokens': '输出达到上限',
      'errors.maxTokensHint': '上一回合因输出 token 达到上限而结束。',
      'tasks.title': '任务计划',
      'tasks.empty': '暂无任务计划',
      'tasks.emptyBody': '本会话还没有调用 todo_write 记录任务清单；一旦记录，这里会显示每个任务的进度条。',
      'tasks.overall': '整体进度',
      'tasks.completed': '{completed} / {total} 个任务已完成',
      'tasks.hint': '任务由 todo_write 记录；进度随任务状态自动更新。',
      'steps.title': '最近步骤',
      'steps.note': '尚未记录任务清单；以下是从当前回合提取的最近步骤。',
      'steps.assistant': '第 {step} 步回复',
      'steps.running': '运行中',
      'steps.done': '已完成',
      'summary': '{completed} / {total} 个任务已完成',
      'summary.empty': '暂无任务计划',
      'overall': '整体进度',
      'overall.value': '{completed} / {total}',
      'status.pending': '待开始',
      'status.inProgress': '进行中',
      'status.completed': '已完成',
      'count.pending': '待开始 {count}',
      'count.inProgress': '进行中 {count}',
      'count.completed': '已完成 {count}',
      'task.progressAria': '任务“{content}”的进度：{percent}%',
      'empty.title': '暂无任务计划',
      'empty.body': '当 DSH 把工作拆成多个任务时，这里会为每个任务显示一条进度条。',
      'empty.loadingTitle': '正在读取任务计划…',
      'empty.loadingBody': '任务建立后，进度会随会话自动更新。',
      'hint': '任务由 todo_write 记录；进度随任务状态自动变化。',
      'list.aria': '任务进度列表',
      'time.justNow': '刚刚',
      'time.minutesAgo': '{count} 分钟前',
      'time.hoursAgo': '{count} 小时前',
      'time.daysAgo': '{count} 天前',
      'duration.seconds': '{count} 秒',
      'duration.minutes': '{minutes} 分 {seconds} 秒',
      'common.none': '—',
      'common.unknown': '未知',
    };

    const en = {
      'view.tasks': 'Task Progress',
      'page.title': 'Session Task Progress',
      'page.aria': 'Session task progress',
      'page.subtitle.running': 'Running · turn {turn}',
      'page.subtitle.runningUnknown': 'Running',
      'page.subtitle.idle': 'Nothing is running right now',
      'page.subtitle.blank': 'This session has not started yet',
      'page.subtitle.attention': 'Something needs attention or an interaction is waiting',
      'action.backToChat': 'Back to Chat',
      'action.copy': 'Copy',
      'action.copied': 'Copied',
      'action.copyFailed': 'Copy failed',
      'status.running': 'Running',
      'status.idle': 'Idle',
      'status.blank': 'Blank session',
      'status.attention': 'Needs attention',
      'live.eyebrow.running': 'Live run',
      'live.eyebrow.completed': 'Last turn',
      'live.eyebrow.failed': 'Last turn',
      'live.eyebrow.blank': 'Not started',
      'live.eyebrow.status': 'Run status',
      'live.title.running': 'Turn {turn} · step {step}',
      'live.title.runningTurn': 'Turn {turn}',
      'live.title.runningUnknown': 'Working',
      'live.title.completed': 'Turn {turn} completed',
      'live.title.failed': 'Turn {turn} ended with an error',
      'live.title.failedUnknown': 'The last turn ended with an error',
      'live.title.blank': 'Waiting for the first task',
      'live.title.idle': 'Waiting for new input',
      'live.title.attention': 'Needs attention',
      'live.progress': 'Run progress',
      'live.progressAria': 'Run progress: {percent}%',
      'live.chars': '{count} chars generated',
      'live.tools': '{count} tool calls',
      'live.elapsed': 'Running for {duration}',
      'live.completedIn': 'Took {duration}',
      'live.queue': '{count} queued',
      'live.toolRunning': 'Calling {name}',
      'live.stepChip': 'Step {step}',
      'live.turnChip': 'Turn {turn}',
      'live.pendingInteraction': 'Waiting for confirmation',
      'live.noOutput': 'No run content to show yet',
      'live.done': 'This turn is complete',
      'live.failed': 'This turn ended with an error',
      'live.completedBadge': 'Done',
      'cost.live': 'Live cost',
      'cost.liveTag': 'This turn',
      'cost.total': 'Total task cost',
      'cost.totalTag': 'Whole session',
      'cost.tokens': '{tokens} tok',
      'cost.cache': 'cache hit {percent}%',
      'cost.peak': 'peak price',
      'cost.offPeak': 'off-peak price',
      'cost.waiting': 'Waiting for usage data',
      'cost.note': 'Estimated with DeepSeek peak/off-peak pricing; the bill is authoritative.',
      'info.lastActivity': 'Last activity',
      'info.queue': 'Queue',
      'info.history': 'History load state',
      'info.source': 'Source',
      'info.source.main': 'Main session',
      'info.source.subagent': 'Subagent',
      'info.source.depth': 'Depth {depth}',
      'info.queue.value': '{count} items',
      'info.queue.steering': '{count} steering',
      'info.noActivity': 'No activity yet',
      'history.loading': 'Loading',
      'history.loadingOlder': 'Loading earlier…',
      'history.more': 'Earlier history available',
      'history.complete': 'All history loaded',
      'history.cold': 'Not loaded',
      'history.error': 'Load failed',
      'workdir.title': 'Working directory',
      'workdir.copy': 'Copy path',
      'workdir.empty': 'No working directory',
      'session.title': 'Session',
      'session.id': 'Session ID',
      'session.parent': 'Parent session',
      'session.format': 'Format status',
      'session.copyId': 'Copy ID',
      'session.none': 'None',
      'session.format.current': 'Current format',
      'session.format.migration': 'Migration required',
      'session.format.unknown': 'Unknown',
      'runtime.title': 'Run status',
      'runtime.connection': 'Connection',
      'runtime.currentTurn': 'Current turn',
      'runtime.firstTurn': 'First turn',
      'runtime.step': 'Current step',
      'runtime.connection.open': 'Connected',
      'runtime.connection.loading': 'Connecting',
      'runtime.connection.error': 'Connection failed',
      'runtime.connection.cold': 'Not connected',
      'runtime.connection.removed': 'Removed',
      'runtime.connection.unknown': 'Unknown',
      'runtime.listSyncing': 'Syncing list',
      'runtime.listReady': 'List synced',
      'runtime.listError': 'List sync failed',
      'runtime.turnValue': 'Turn {turn}',
      'runtime.stepValue': 'Step {step}',
      'errors.title': 'Errors',
      'errors.none': 'No errors',
      'errors.noneBody': 'The session is running normally.',
      'errors.open': 'Session open failed',
      'errors.send': 'Send failed',
      'errors.stop': 'Stop failed',
      'errors.lastTurn': 'Previous turn error',
      'errors.lastAgent': 'Recent agent error',
      'errors.maxTokens': 'Output limit reached',
      'errors.maxTokensHint': 'The previous turn ended because the output token limit was reached.',
      'tasks.title': 'Task plan',
      'tasks.empty': 'No task plan yet',
      'tasks.emptyBody': 'This session has not recorded a task list with todo_write yet; once it does, each task gets a progress bar here.',
      'tasks.overall': 'Overall progress',
      'tasks.completed': '{completed} of {total} tasks completed',
      'tasks.hint': 'Tasks are recorded by todo_write; each bar follows its task status.',
      'steps.title': 'Recent steps',
      'steps.note': 'No task list is recorded yet; these are the latest steps from the current turn.',
      'steps.assistant': 'Step {step} reply',
      'steps.running': 'Running',
      'steps.done': 'Done',
      'summary': '{completed} of {total} tasks completed',
      'summary.empty': 'No task plan yet',
      'overall': 'Overall progress',
      'overall.value': '{completed} / {total}',
      'status.pending': 'Pending',
      'status.inProgress': 'In progress',
      'status.completed': 'Completed',
      'count.pending': '{count} pending',
      'count.inProgress': '{count} in progress',
      'count.completed': '{count} completed',
      'task.progressAria': 'Progress for “{content}”: {percent}%',
      'empty.title': 'No task plan yet',
      'empty.body': 'When DSH breaks the work into tasks, each one gets its own progress bar here.',
      'empty.loadingTitle': 'Reading the task plan…',
      'empty.loadingBody': 'Progress updates automatically as the session continues.',
      'hint': 'Tasks are recorded by todo_write; each bar follows its task status.',
      'list.aria': 'Task progress list',
      'time.justNow': 'just now',
      'time.minutesAgo': '{count} min ago',
      'time.hoursAgo': '{count} h ago',
      'time.daysAgo': '{count} d ago',
      'duration.seconds': '{count}s',
      'duration.minutes': '{minutes}m {seconds}s',
      'common.none': '—',
      'common.unknown': 'Unknown',
    };

    const STATUS = {
      pending: { tone: 'pending', label: 'status.pending', percent: 0 },
      in_progress: { tone: 'active', label: 'status.inProgress', percent: 50 },
      completed: { tone: 'done', label: 'status.completed', percent: 100 },
    };

    // CNY per million tokens, off-peak. Peak hours double these rates.
    const PRICE_FLASH = { hit: 0.02, miss: 1, out: 4 };
    const PRICE_PRO = { hit: 0.15, miss: 4.5, out: 13.5 };
    const LIVE_PROGRESS = new Map();

    const CSS = `
.dshTp_root {
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 0;
  width: 100%;
  overflow-y: auto;
  color: var(--dsw-alias-label-primary);
  font-size: 14px;
  line-height: 22px;
}
.dshTp_inner {
  box-sizing: border-box;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 28px 24px 72px;
}
.dshTp_header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 16px;
}
.dshTp_heading { min-width: 0; }
.dshTp_titleRow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
.dshTp_title {
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.dshTp_sub {
  margin: 3px 0 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
}
.dshTp_capsule {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 1px 9px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
}
.dshTp_capsule[data-tone='running'] {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-brand-primary);
}
.dshTp_capsule[data-tone='attention'] {
  border-color: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-state-error-primary);
}
.dshTp_capsule[data-tone='blank'] {
  border-color: var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-secondary);
}
.dshTp_capsuleDot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--dsw-alias-state-idle-primary);
}
.dshTp_capsule[data-tone='running'] .dshTp_capsuleDot {
  background: var(--dsw-alias-brand-primary);
  animation: dshTp_pulse 1.7s ease-in-out infinite;
}
.dshTp_capsule[data-tone='attention'] .dshTp_capsuleDot {
  background: var(--dsw-alias-state-error-primary);
}
.dshTp_back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  height: 32px;
  padding: 0 11px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
}
.dshTp_back:hover {
  border-color: var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-2);
}
.dshTp_back:focus-visible,
.dshTp_copy:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.dshTp_live {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 16px 18px 15px;
}
.dshTp_live[data-tone='active'] {
  border-color: var(--dsw-alias-brand-primary);
}
.dshTp_live[data-tone='done'] {
  border-color: var(--dsw-alias-state-success-primary);
}
.dshTp_live[data-tone='error'] {
  border-color: var(--dsw-alias-state-error-primary);
}
.dshTp_live[data-celebrate='true'] {
  animation: dshTp_pop 520ms cubic-bezier(0.22, 0.8, 0.3, 1);
}
.dshTp_live[data-celebrate='true']::after {
  position: absolute;
  inset: 0;
  content: '';
  pointer-events: none;
  background: linear-gradient(
    110deg,
    transparent 0%,
    var(--dsw-alias-state-success-primary) 48%,
    transparent 62%
  );
  opacity: 0.16;
  animation: dshTp_sweep 1200ms ease-out;
}
.dshTp_liveHead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}
.dshTp_eyebrow {
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.dshTp_liveTitle {
  margin: 2px 0 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.dshTp_livePct {
  flex: none;
  color: var(--dsw-alias-brand-primary);
  font-size: 26px;
  line-height: 32px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.dshTp_live[data-tone='done'] .dshTp_livePct {
  color: var(--dsw-alias-state-success-primary);
}
.dshTp_live[data-tone='error'] .dshTp_livePct {
  color: var(--dsw-alias-state-error-primary);
}
.dshTp_liveTrack {
  position: relative;
  height: 8px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
}
.dshTp_liveFill {
  height: 100%;
  border-radius: inherit;
  background: var(--dsw-alias-state-idle-primary);
  transition: width 420ms cubic-bezier(0.22, 0.7, 0.3, 1);
}
.dshTp_liveFill[data-tone='active'] {
  background: var(--dsw-alias-brand-primary);
  animation: dshTp_pulse 1.8s ease-in-out infinite;
}
.dshTp_liveFill[data-tone='done'] {
  background: var(--dsw-alias-state-success-primary);
}
.dshTp_liveFill[data-tone='error'] {
  background: var(--dsw-alias-state-error-primary);
}
.dshTp_liveDetails {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 11px;
}
.dshTp_chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 18px;
  font-variant-numeric: tabular-nums;
}
.dshTp_chip[data-tone='strong'] {
  color: var(--dsw-alias-label-primary);
}
.dshTp_chip[data-tone='attention'] {
  color: var(--dsw-alias-state-error-primary);
}
.dshTp_doneBadge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 2px;
  color: var(--dsw-alias-state-success-primary);
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
}
.dshTp_doneBadge .dshTp_icon {
  animation: dshTp_pop 460ms cubic-bezier(0.22, 0.8, 0.3, 1);
}
.dshTp_costs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 10px;
}
.dshTp_cost {
  box-sizing: border-box;
  min-width: 0;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 12px 14px;
}
.dshTp_costHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.dshTp_costLabel {
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
}
.dshTp_costTag {
  flex: none;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 10.5px;
  line-height: 18px;
}
.dshTp_costValue {
  margin-top: 3px;
  color: var(--dsw-alias-brand-primary);
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}
.dshTp_costValue[data-tone='total'] {
  color: var(--dsw-alias-label-primary);
}
.dshTp_costSub {
  margin-top: 2px;
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 18px;
  font-variant-numeric: tabular-nums;
}
.dshTp_costNote {
  display: inline-block;
  margin: 7px 2px 0;
  padding: 3px 8px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 6px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 17px;
}
.dshTp_infoGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;
}
.dshTp_info {
  box-sizing: border-box;
  min-width: 0;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 11px 13px;
}
.dshTp_infoLabel {
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 18px;
  white-space: nowrap;
}
.dshTp_infoValue {
  margin-top: 3px;
  overflow-wrap: anywhere;
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.dshTp_infoSub {
  margin-top: 2px;
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 17px;
}
.dshTp_panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.dshTp_panel {
  box-sizing: border-box;
  min-width: 0;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 14px 16px;
}
.dshTp_panel[data-span='2'] { grid-column: span 2; }
.dshTp_panelHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}
.dshTp_panelTitle {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
}
.dshTp_panelCount {
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 18px;
  font-variant-numeric: tabular-nums;
}
.dshTp_path {
  box-sizing: border-box;
  margin: 0;
  padding: 8px 10px;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12.5px;
  line-height: 18px;
}
.dshTp_code {
  overflow-wrap: anywhere;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11.5px;
  line-height: 17px;
}
.dshTp_muted {
  margin: 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
}
.dshTp_copy {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  height: 26px;
  padding: 0 8px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 7px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 11.5px;
  cursor: pointer;
}
.dshTp_copy:hover {
  border-color: var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-primary);
}
.dshTp_copy[data-state='copied'] {
  border-color: var(--dsw-alias-state-success-primary);
  color: var(--dsw-alias-state-success-primary);
}
.dshTp_copy[data-state='failed'] {
  border-color: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-state-error-primary);
}
.dshTp_copy:disabled {
  opacity: 0.5;
  cursor: default;
}
.dshTp_rows { display: flex; flex-direction: column; }
.dshTp_row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.dshTp_row:first-child { border-top: 0; }
.dshTp_rowLabel {
  flex: none;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
}
.dshTp_rowValue {
  min-width: 0;
  overflow-wrap: anywhere;
  text-align: right;
  font-size: 12.5px;
  line-height: 19px;
  font-variant-numeric: tabular-nums;
}
.dshTp_rowValue[data-tone='ok'] { color: var(--dsw-alias-state-success-primary); }
.dshTp_rowValue[data-tone='warn'] { color: var(--dsw-alias-state-warn-primary); }
.dshTp_rowValue[data-tone='error'] { color: var(--dsw-alias-state-error-primary); }
.dshTp_rowSub {
  display: block;
  margin-top: 1px;
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 16px;
}
.dshTp_errorList { display: flex; flex-direction: column; }
.dshTp_error {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 8px 0;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.dshTp_error:first-child { border-top: 0; }
.dshTp_errorDot {
  flex: none;
  width: 7px;
  height: 7px;
  margin-top: 7px;
  border-radius: 999px;
  background: var(--dsw-alias-state-error-primary);
}
.dshTp_error[data-tone='warn'] .dshTp_errorDot {
  background: var(--dsw-alias-state-warn-primary);
}
.dshTp_errorBody { min-width: 0; flex: 1 1 auto; }
.dshTp_errorTitle {
  font-size: 12.5px;
  line-height: 19px;
  font-weight: 600;
}
.dshTp_errorMessage {
  margin-top: 1px;
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 18px;
}
.dshTp_errorCode {
  display: inline-block;
  margin-top: 4px;
  padding: 0 5px;
  border-radius: 4px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-state-error-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10.5px;
  line-height: 17px;
}
.dshTp_okRow {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
  color: var(--dsw-alias-state-success-primary);
  font-size: 12.5px;
  line-height: 19px;
  font-weight: 500;
}
.dshTp_okRow .dshTp_muted {
  color: var(--dsw-alias-label-secondary);
  font-weight: 400;
}
.dshTp_tasks {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.dshTp_tasksHead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}
.dshTp_sectionTitle {
  margin: 0;
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
}
.dshTp_taskCard {
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 16px 18px;
}
.dshTp_taskCard[data-complete='true'] {
  border-color: var(--dsw-alias-state-success-primary);
  animation: dshTp_pop 520ms cubic-bezier(0.22, 0.8, 0.3, 1);
}
.dshTp_cardHead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 20px;
}
.dshTp_cardLabel {
  color: var(--dsw-alias-label-secondary);
  font-weight: 500;
}
.dshTp_cardValue {
  color: var(--dsw-alias-label-primary);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.dshTp_track {
  position: relative;
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
}
.dshTp_trackLg { height: 10px; }
.dshTp_fill {
  height: 100%;
  border-radius: inherit;
  background: var(--dsw-alias-state-idle-primary);
  transition: width 360ms cubic-bezier(0.22, 0.7, 0.3, 1);
}
.dshTp_fill[data-tone='active'] {
  background: var(--dsw-alias-brand-primary);
  animation: dshTp_pulse 1.8s ease-in-out infinite;
}
.dshTp_fill[data-tone='done'] {
  background: var(--dsw-alias-state-success-primary);
}
.dshTp_legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}
.dshTp_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}
.dshTp_item {
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 11px 14px 12px 16px;
  animation: dshTp_enter 220ms ease-out both;
}
.dshTp_item[data-tone='active'] {
  box-shadow: inset 2px 0 0 var(--dsw-alias-brand-primary);
}
.dshTp_item[data-tone='done'] {
  box-shadow: inset 2px 0 0 var(--dsw-alias-state-success-primary);
}
.dshTp_itemHead {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}
.dshTp_dot {
  flex: none;
  width: 8px;
  height: 8px;
  margin-top: 7px;
  border-radius: 999px;
  background: var(--dsw-alias-state-idle-primary);
}
.dshTp_dot[data-tone='active'] {
  background: var(--dsw-alias-brand-primary);
  animation: dshTp_pulse 1.8s ease-in-out infinite;
}
.dshTp_dot[data-tone='done'] {
  background: var(--dsw-alias-state-success-primary);
}
.dshTp_itemCheck {
  display: inline-flex;
  flex: none;
  margin-top: 3px;
  color: var(--dsw-alias-state-success-primary);
}
.dshTp_itemText {
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: anywhere;
  font-size: 13.5px;
  line-height: 21px;
}
.dshTp_item[data-tone='done'] .dshTp_itemText {
  color: var(--dsw-alias-label-secondary);
}
.dshTp_status {
  flex: none;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 19px;
  white-space: nowrap;
}
.dshTp_status[data-tone='active'] {
  color: var(--dsw-alias-brand-primary);
}
.dshTp_status[data-tone='done'] {
  color: var(--dsw-alias-state-success-primary);
}
.dshTp_percent {
  flex: none;
  min-width: 36px;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.dshTp_hint {
  margin: 18px 2px 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 18px;
}
.dshTp_empty {
  box-sizing: border-box;
  margin-top: 10px;
  padding: 30px 20px;
  border: 1px dashed var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1);
  text-align: center;
}
.dshTp_emptyIcon {
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  color: var(--dsw-alias-brand-primary);
}
.dshTp_emptyTitle {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
}
.dshTp_emptyBody {
  max-width: 380px;
  margin: 5px auto 0;
  color: var(--dsw-alias-label-secondary);
  font-size: 12.5px;
  line-height: 19px;
}
.dshTp_recent {
  margin-top: 10px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  padding: 11px 14px;
}
.dshTp_recentHead {
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
  line-height: 19px;
  font-weight: 600;
}
.dshTp_recentNote {
  margin: 2px 0 6px;
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 17px;
}
.dshTp_recentList {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}
.dshTp_recentItem {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0;
  border-top: 1px solid var(--dsw-alias-border-l1);
  font-size: 12px;
  line-height: 18px;
}
.dshTp_recentItem:first-child { border-top: 0; }
.dshTp_recentName {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dshTp_recentStatus {
  flex: none;
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 18px;
}
.dshTp_recentItem:has(.dshTp_dot[data-tone='active']) .dshTp_recentStatus {
  color: var(--dsw-alias-brand-primary);
}
.dshTp_icon { flex: none; display: inline-block; vertical-align: -2px; }
@keyframes dshTp_pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
}
@keyframes dshTp_enter {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes dshTp_pop {
  0% { transform: scale(0.985); }
  55% { transform: scale(1.012); }
  100% { transform: scale(1); }
}
@keyframes dshTp_sweep {
  from { transform: translateX(-70%); }
  to { transform: translateX(70%); }
}
@media (max-width: 820px) {
  .dshTp_infoGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .dshTp_inner { padding: 20px 14px 64px; }
  .dshTp_header { flex-direction: column; gap: 10px; }
  .dshTp_title { font-size: 18px; line-height: 26px; }
  .dshTp_costs { grid-template-columns: 1fr; }
  .dshTp_infoGrid { grid-template-columns: 1fr; }
  .dshTp_panels { grid-template-columns: 1fr; }
  .dshTp_panel[data-span='2'] { grid-column: span 1; }
  .dshTp_livePct { font-size: 22px; line-height: 28px; }
  .dshTp_taskCard { padding: 14px; }
  .dshTp_item { padding: 10px 12px 11px 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .dshTp_fill, .dshTp_item, .dshTp_live, .dshTp_liveFill,
  .dshTp_live[data-celebrate='true']::after, .dshTp_doneBadge .dshTp_icon {
    transition: none;
    animation: none;
  }
  .dshTp_dot[data-tone='active'],
  .dshTp_fill[data-tone='active'],
  .dshTp_liveFill[data-tone='active'],
  .dshTp_capsule[data-tone='running'] .dshTp_capsuleDot { animation: none; }
}
`;

    function isTurn(value) {
      return typeof value === 'number' && Number.isFinite(value) && value > 0;
    }

    function messageOf(error) {
      if (error === null || error === undefined) return '';
      if (typeof error === 'string') return error;
      if (typeof error.message === 'string') return error.message;
      if (error.error !== null && typeof error.error === 'object' && typeof error.error.message === 'string') {
        return error.error.message;
      }
      try {
        return JSON.stringify(error);
      } catch (cause) {
        return String(error);
      }
    }

    function codeOf(error) {
      if (error === null || error === undefined) return '';
      if (typeof error.code === 'string') return error.code;
      if (error.error !== null && typeof error.error === 'object' && typeof error.error.code === 'string') {
        return error.error.code;
      }
      return '';
    }

    function nodeMessage(node) {
      if (node === null || node === undefined) return '';
      return messageOf(node.message === undefined ? node : node.message);
    }

    function nodeCode(node) {
      if (node === null || node === undefined) return '';
      return codeOf(node.code === undefined ? node : node.code);
    }

    function lastNodeOfKind(nodes, kind) {
      for (let index = nodes.length - 1; index >= 0; index -= 1) {
        const node = nodes[index];
        if (node !== null && typeof node === 'object' && node.kind === kind) return node;
      }
      return undefined;
    }

    function countBlockChars(blocks) {
      if (!Array.isArray(blocks)) return 0;
      let total = 0;
      for (const block of blocks) {
        if (block === null || typeof block !== 'object') continue;
        if (typeof block.text === 'string') total += block.text.length;
        if (typeof block.content === 'string') total += block.content.length;
        else if (Array.isArray(block.content)) {
          for (const part of block.content) {
            if (part !== null && typeof part === 'object' && typeof part.text === 'string') {
              total += part.text.length;
            }
          }
        }
      }
      return total;
    }

    function formatDuration(ms, t) {
      const seconds = Math.max(0, Math.floor(ms / 1000));
      if (seconds < 60) return t('duration.seconds', { count: seconds });
      return t('duration.minutes', {
        minutes: Math.floor(seconds / 60),
        seconds: seconds % 60,
      });
    }

    function formatDateTime(ms) {
      try {
        return new Date(ms).toLocaleString();
      } catch (cause) {
        return '';
      }
    }

    function formatRelative(ms, now, t) {
      if (!Number.isFinite(ms) || ms <= 0) return t('info.noActivity');
      const seconds = Math.max(0, Math.floor((now - ms) / 1000));
      if (seconds < 45) return t('time.justNow');
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return t('time.minutesAgo', { count: minutes });
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return t('time.hoursAgo', { count: hours });
      const days = Math.floor(hours / 24);
      if (days < 30) return t('time.daysAgo', { count: days });
      return formatDateTime(ms);
    }

    function formatCompactTokens(value) {
      const tokens = Number.isFinite(value) ? Math.max(0, value) : 0;
      if (tokens >= 1e9) return `${(tokens / 1e9).toFixed(1)}B`;
      if (tokens >= 1e6) return `${(tokens / 1e6).toFixed(1)}M`;
      if (tokens >= 1e3) return `${(tokens / 1e3).toFixed(1)}K`;
      return String(Math.round(tokens));
    }

    function formatMoney(value) {
      if (!Number.isFinite(value) || value < 0) return '—';
      if (value === 0) return '¥0.0000';
      if (value < 0.01) return `¥${value.toFixed(4)}`;
      if (value < 1) return `¥${value.toFixed(3)}`;
      return `¥${value.toFixed(2)}`;
    }

    function isPeakHour(now) {
      // Beijing time; official peak windows are weekdays 09:00-12:00 and 14:00-18:00.
      const beijing = new Date(now + 8 * 60 * 60 * 1000);
      const day = beijing.getUTCDay();
      const hour = beijing.getUTCHours();
      return day >= 1 && day <= 5 && ((hour >= 9 && hour < 12) || (hour >= 14 && hour < 18));
    }

    function normalizeUsage(usage) {
      const source = usage !== null && typeof usage === 'object' ? usage : {};
      return {
        uncachedInputTokens: Number(source.uncachedInputTokens ?? source.inputTokens ?? 0) || 0,
        outputTokens: Number(source.outputTokens ?? 0) || 0,
        cacheReadTokens: Number(source.cacheReadTokens ?? 0) || 0,
        cacheWriteTokens: Number(source.cacheWriteTokens ?? 0) || 0,
        routes: Array.isArray(source.routes) ? source.routes : [],
      };
    }

    function billedTokens(usage) {
      const normalized = normalizeUsage(usage);
      return normalized.uncachedInputTokens + normalized.cacheReadTokens + normalized.cacheWriteTokens + normalized.outputTokens;
    }

    function cacheHitPercent(usage) {
      const normalized = normalizeUsage(usage);
      const prompt = normalized.uncachedInputTokens + normalized.cacheReadTokens + normalized.cacheWriteTokens;
      if (prompt <= 0) return null;
      return Math.round((normalized.cacheReadTokens / prompt) * 100);
    }

    function usageCost(usage, now) {
      const normalized = normalizeUsage(usage);
      const pro = normalized.routes.some((route) => route !== null && route !== undefined && /pro/i.test(String(route.model ?? '')));
      const base = pro ? PRICE_PRO : PRICE_FLASH;
      const peak = isPeakHour(now);
      const factor = peak ? 2 : 1;
      const cost = (
        (normalized.uncachedInputTokens + normalized.cacheWriteTokens) * base.miss * factor
        + normalized.cacheReadTokens * base.hit * factor
        + normalized.outputTokens * base.out * factor
      ) / 1e6;
      return { value: cost, peak, pro };
    }

    function addUsage(total, usage) {
      const normalized = normalizeUsage(usage);
      total.uncachedInputTokens += normalized.uncachedInputTokens;
      total.outputTokens += normalized.outputTokens;
      total.cacheReadTokens += normalized.cacheReadTokens;
      total.cacheWriteTokens += normalized.cacheWriteTokens;
      if (normalized.routes.length > 0) {
        total.routes = (total.routes || []).concat(normalized.routes);
      }
    }

    function turnUsageOf(nodes, turn) {
      const total = { uncachedInputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, routes: [] };
      if (!isTurn(turn)) return total;
      for (const node of nodes) {
        if (node !== null && node !== undefined && node.kind === 'assistant' && node.turn === turn && node.usage) {
          addUsage(total, node.usage);
        }
      }
      return total;
    }

    function allUsageOf(nodes) {
      const total = { uncachedInputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, routes: [] };
      for (const node of nodes) {
        if (node !== null && node !== undefined && node.kind === 'assistant' && node.usage) {
          addUsage(total, node.usage);
        }
      }
      return total;
    }

    function costSub(usage, cost, t) {
      const tokens = billedTokens(usage);
      if (tokens <= 0) return t('cost.waiting');
      const parts = [t('cost.tokens', { tokens: formatCompactTokens(tokens) })];
      const cache = cacheHitPercent(usage);
      if (cache !== null) parts.push(t('cost.cache', { percent: cache }));
      parts.push(t(cost.peak ? 'cost.peak' : 'cost.offPeak'));
      return parts.join(' · ');
    }

    function copyTextFallback(text) {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      area.style.left = '-1000px';
      area.style.opacity = '0';
      area.style.pointerEvents = 'none';
      document.body.appendChild(area);
      const selection = window.getSelection();
      const previous = selection !== null && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      let copied = false;
      try {
        area.select();
        area.setSelectionRange(0, text.length);
        copied = document.execCommand('copy');
      } catch (cause) {
        copied = false;
      } finally {
        area.remove();
        if (selection !== null) {
          selection.removeAllRanges();
          if (previous !== null) selection.addRange(previous);
        }
      }
      if (!copied) throw new Error('copy failed');
    }

    function Icon({ kind }) {
      if (kind === 'chat') {
        return h(
          'svg',
          {
            className: 'dshTp_icon',
            viewBox: '0 0 16 16',
            width: 14,
            height: 14,
            fill: 'none',
            'aria-hidden': true,
          },
          h('path', {
            d: 'M3 3.5h10a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 11.5H8l-3.5 2.2v-2.2H3A1.5 1.5 0 0 1 1.5 10V5A1.5 1.5 0 0 1 3 3.5Z',
            stroke: 'currentColor',
            strokeWidth: 1.4,
            strokeLinejoin: 'round',
          }),
        );
      }
      if (kind === 'copy') {
        return h(
          'svg',
          {
            className: 'dshTp_icon',
            viewBox: '0 0 16 16',
            width: 13,
            height: 13,
            fill: 'none',
            'aria-hidden': true,
          },
          h('rect', {
            x: 5.2,
            y: 5.2,
            width: 8,
            height: 8,
            rx: 1.6,
            stroke: 'currentColor',
            strokeWidth: 1.3,
          }),
          h('path', {
            d: 'M10.8 5.2V4.4A1.6 1.6 0 0 0 9.2 2.8H4.4A1.6 1.6 0 0 0 2.8 4.4v4.8a1.6 1.6 0 0 0 1.6 1.6h.8',
            stroke: 'currentColor',
            strokeWidth: 1.3,
            strokeLinecap: 'round',
          }),
        );
      }
      if (kind === 'check') {
        return h(
          'svg',
          {
            className: 'dshTp_icon',
            viewBox: '0 0 16 16',
            width: 14,
            height: 14,
            fill: 'none',
            'aria-hidden': true,
          },
          h('path', {
            d: 'M3 8.5l3.1 3.1L13 4.7',
            stroke: 'currentColor',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      }
      return h(
        'svg',
        {
          className: 'dshTp_icon',
          viewBox: '0 0 16 16',
          width: 14,
          height: 14,
          fill: 'none',
          'aria-hidden': true,
        },
        h('path', {
          d: 'M8 2.4 14 13H2L8 2.4Z',
          stroke: 'currentColor',
          strokeWidth: 1.4,
          strokeLinejoin: 'round',
        }),
        h('path', {
          d: 'M8 6v3.2',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
        }),
        h('circle', { cx: 8, cy: 11.2, r: 0.8, fill: 'currentColor' }),
      );
    }

    function ListGlyph() {
      return h(
        'svg',
        {
          className: 'dshTp_emptyIcon',
          viewBox: '0 0 48 48',
          fill: 'none',
          'aria-hidden': true,
        },
        h('rect', {
          x: 6.5,
          y: 8.5,
          width: 35,
          height: 31,
          rx: 7,
          stroke: 'currentColor',
          strokeWidth: 2,
        }),
        h('rect', { x: 13, y: 16, width: 15, height: 3.5, rx: 1.75, fill: 'currentColor' }),
        h('rect', { x: 13, y: 23, width: 22, height: 3.5, rx: 1.75, fill: 'currentColor', opacity: 0.65 }),
        h('rect', { x: 13, y: 30, width: 10, height: 3.5, rx: 1.75, fill: 'currentColor', opacity: 0.4 }),
        h('circle', { cx: 33, cy: 33, r: 6.5, fill: 'currentColor' }),
        h('path', {
          d: 'M30.4 33.1l1.8 1.9 3.4-3.7',
          stroke: 'var(--dsw-alias-bg-layer-1)',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function CopyButton({ value, label, copiedLabel, failedLabel }) {
      const [state, setState] = React.useState('idle');
      const timer = React.useRef(null);
      const button = React.useRef(null);
      React.useEffect(() => () => {
        if (timer.current !== null) clearTimeout(timer.current);
      }, []);
      const copy = async () => {
        const text = String(value === null || value === undefined ? '' : value);
        if (text === '') return;
        let copied = false;
        try {
          if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            try {
              await navigator.clipboard.writeText(text);
              copied = true;
            } catch (cause) {
              copied = false;
            }
          }
          if (!copied) copyTextFallback(text);
          setState('copied');
        } catch (cause) {
          setState('failed');
        }
        if (button.current !== null) button.current.focus({ preventScroll: true });
        if (timer.current !== null) clearTimeout(timer.current);
        timer.current = setTimeout(() => setState('idle'), 1800);
      };
      const text = state === 'copied' ? copiedLabel : state === 'failed' ? failedLabel : label;
      return h(
        'button',
        {
          type: 'button',
          className: 'dshTp_copy',
          'data-state': state,
          onClick: copy,
          disabled: value === null || value === undefined || value === '',
          title: label,
          ref: button,
        },
        h(Icon, { kind: 'copy' }),
        h('span', { 'aria-live': 'polite' }, text),
      );
    }

    function InfoCard({ label, value, sub }) {
      return h(
        'div',
        { className: 'dshTp_info' },
        h('div', { className: 'dshTp_infoLabel' }, label),
        h('div', { className: 'dshTp_infoValue' }, value),
        sub ? h('div', { className: 'dshTp_infoSub' }, sub) : null,
      );
    }

    function Row({ label, value, sub, tone }) {
      return h(
        'div',
        { className: 'dshTp_row' },
        h('span', { className: 'dshTp_rowLabel' }, label),
        h(
          'span',
          { className: 'dshTp_rowValue', 'data-tone': tone },
          value,
          sub ? h('span', { className: 'dshTp_rowSub' }, sub) : null,
        ),
      );
    }

    function ErrorRow({ tone, title, message, code }) {
      return h(
        'div',
        { className: 'dshTp_error', 'data-tone': tone },
        h('span', { className: 'dshTp_errorDot', 'aria-hidden': true }),
        h(
          'div',
          { className: 'dshTp_errorBody' },
          h('div', { className: 'dshTp_errorTitle' }, title),
          message ? h('div', { className: 'dshTp_errorMessage' }, message) : null,
          code ? h('code', { className: 'dshTp_errorCode' }, code) : null,
        ),
      );
    }

    function TaskProgressView({
      useProjection,
      useSession,
      useSessions,
      useSessionStatus,
      useChat,
      sessionId,
      openView,
      t,
    }) {
      const todos = useProjection('todos');
      const turnOutline = useProjection('turnOutline');
      const tokenUsage = useProjection('tokenUsage');
      const session = useSession((snapshot) => snapshot);
      const summary = useSessions((snapshot) =>
        sessionId === undefined || snapshot === undefined || snapshot.byId === undefined
          ? undefined
          : snapshot.byId[sessionId]
      );
      const listPhase = useSessions((snapshot) => (snapshot === undefined ? undefined : snapshot.phase));
      const legacy = useChat((snapshot) => (snapshot && snapshot.legacy) || EMPTY_LEGACY);
      const navItems = useChat((snapshot) =>
        snapshot && snapshot.navigation ? snapshot.navigation.items() : EMPTY_LIST
      );
      const turnOrder = useChat((snapshot) =>
        snapshot && snapshot.timeline ? snapshot.timeline.turnOrder : EMPTY_LIST
      );
      const pendingInteraction = useSessionStatus((snapshot) => {
        if (sessionId === undefined || snapshot === undefined) return undefined;
        return snapshot.get(sessionId)?.pendingInteraction;
      });

      const [now, setNow] = React.useState(() => Date.now());
      const [celebrate, setCelebrate] = React.useState(false);
      const previousRunning = React.useRef(false);

      React.useEffect(() => {
        setNow(Date.now());
        const timer = setInterval(() => setNow(Date.now()), session !== undefined && session.running ? 1000 : 30000);
        return () => clearInterval(timer);
      }, [session !== undefined && session.running]);

      const running = session !== undefined && session.running === true;
      const openState = session === undefined || session.openState === undefined ? 'cold' : session.openState;
      const openFailed = openState === 'error';
      const openError = session === undefined ? null : session.openError;
      const promptError = session === undefined ? null : session.promptError;
      const lastAgentError = session === undefined ? null : session.lastAgentError;
      const sessionBlank = session !== undefined && session.blank === true;
      const removed = session !== undefined && session.removed === true;
      const pendingSubmissions = session !== undefined && Array.isArray(session.pendingSubmissions)
        ? session.pendingSubmissions
        : EMPTY_LIST;
      const hasMore = session !== undefined && session.hasMore === true;
      const loadingOlder = session !== undefined && session.loadingOlder === true;

      const blank = summary !== undefined && summary.blank !== undefined
        ? summary.blank === true
        : sessionBlank;
      const cwd = summary === undefined ? undefined : summary.cwd;
      const summaryUpdatedAt = summary === undefined ? undefined : summary.updatedAt;
      const formatStatus = summary === undefined ? undefined : summary.formatStatus;
      const parentSessionId = summary === undefined ? undefined : summary.parentSessionId;
      const depth = summary === undefined ? undefined : summary.depth;
      const source = summary === undefined ? undefined : summary.origin;
      const sourceSubagent = source === 'subagent' || (session !== undefined && session.subagent !== null && session.subagent !== undefined);

      const nodes = Array.isArray(legacy.nodes) ? legacy.nodes : EMPTY_LIST;
      const partial = legacy.partial || null;
      const runningCalls = Array.isArray(legacy.runningCalls) ? legacy.runningCalls : EMPTY_LIST;
      const turnTimings = legacy.turnTimings || EMPTY_LEGACY.turnTimings;

      const queued = pendingSubmissions.filter((item) => item !== null && item !== undefined && item.placement === 'queued').length;
      const steering = pendingSubmissions.filter((item) => item !== null && item !== undefined && item.placement === 'steering').length;
      const navTurns = (Array.isArray(navItems) ? navItems : EMPTY_LIST)
        .map((item) => (item === null || item === undefined ? undefined : item.turn))
        .filter(isTurn);
      const orderTurns = Array.isArray(turnOrder) ? turnOrder : EMPTY_LIST;
      const outlineTurns = (Array.isArray(turnOutline) ? turnOutline : EMPTY_LIST)
        .map((entry) => (entry === null || entry === undefined ? undefined : entry.turn))
        .filter(isTurn);
      const lastNavTurn = navTurns.length > 0 ? navTurns[navTurns.length - 1] : null;
      const firstOrderTurn = orderTurns.find(isTurn);
      const lastOrderTurn = [...orderTurns].reverse().find(isTurn);
      const firstOutlineTurn = outlineTurns.length > 0 ? outlineTurns[0] : null;
      const lastOutlineTurn = outlineTurns.length > 0 ? outlineTurns[outlineTurns.length - 1] : null;
      const currentTurn = (running && isTurn(partial === null ? undefined : partial.turn)
        ? partial.turn
        : null) ?? lastNavTurn ?? lastOutlineTurn ?? lastOrderTurn ?? null;
      const firstTurn = firstOutlineTurn ?? (navTurns.length > 0 ? navTurns[0] : (firstOrderTurn ?? null));
      const lastRunningCall = runningCalls.length > 0 ? runningCalls[runningCalls.length - 1] : null;
      const currentStep = isTurn(partial === null ? undefined : partial.step)
        ? partial.step
        : (lastRunningCall !== null && isTurn(lastRunningCall.step) ? lastRunningCall.step : null);
      const recentSteps = [];
      if (currentTurn !== null) {
        const completed = [];
        for (const node of nodes) {
          if (node === null || node === undefined || node.turn !== currentTurn) continue;
          if (node.kind === 'tool-result' && typeof node.name === 'string' && node.name !== '') {
            completed.push({ key: `tool:${node.seq ?? completed.length}:${node.name}`, name: node.name, status: 'done' });
          } else if (node.kind === 'assistant' && isTurn(node.step)) {
            completed.push({ key: `assistant:${node.seq ?? completed.length}`, name: t('steps.assistant', { step: node.step }), status: 'done' });
          }
        }
        recentSteps.push(...completed.slice(-5));
        for (const call of runningCalls.slice(-2)) {
          if (call !== null && call !== undefined && typeof call.name === 'string' && call.name !== '') {
            recentSteps.push({ key: `running:${call.callId ?? call.name}`, name: call.name, status: 'running' });
          }
        }
        if (recentSteps.length > 6) recentSteps.splice(0, recentSteps.length - 6);
      }

      const lastTurnError = lastNodeOfKind(nodes, 'turn-error');
      const lastMaxTokens = lastNodeOfKind(nodes, 'turn-max-tokens');
      const currentTurnError = lastTurnError !== undefined && isTurn(lastTurnError.turn) && lastTurnError.turn === currentTurn
        ? lastTurnError
        : undefined;
      const previousTurnError = lastTurnError !== undefined && isTurn(lastTurnError.turn) && currentTurn !== null && currentTurn - lastTurnError.turn === 1
        ? lastTurnError
        : undefined;
      const activeTurnError = currentTurnError || previousTurnError;
      const maxTokensTurn = lastMaxTokens !== undefined && isTurn(lastMaxTokens.turn) && (lastMaxTokens.turn === currentTurn || (currentTurn !== null && currentTurn - lastMaxTokens.turn === 1))
        ? lastMaxTokens
        : undefined;

      const pending = Boolean(pendingInteraction);
      const blockingAttention = openFailed || Boolean(promptError) || removed || pending || formatStatus === 'migration-required';
      const settledAttention = Boolean((currentTurnError && !running) || (previousTurnError && !running) || lastAgentError || maxTokensTurn);
      const attention = blockingAttention || settledAttention;

      const statusTone = attention ? 'attention' : running ? 'running' : blank ? 'blank' : 'idle';
      const statusLabel = attention
        ? t('status.attention')
        : running
          ? t('status.running')
          : blank
            ? t('status.blank')
            : t('status.idle');

      const pageSubtitle = attention
        ? t('page.subtitle.attention')
        : running
          ? (currentTurn !== null ? t('page.subtitle.running', { turn: currentTurn }) : t('page.subtitle.runningUnknown'))
          : blank
            ? t('page.subtitle.blank')
            : t('page.subtitle.idle');

      const chars = countBlockChars(partial === null ? undefined : partial.blocks);
      const completedTools = nodes.reduce((count, node) => {
        return count + (node !== null && node !== undefined && (node.kind === 'tool-result' || node.kind === 'tool-call') ? 1 : 0);
      }, 0);
      const runningTool = lastRunningCall;
      const runningToolName = runningTool !== null && runningTool !== undefined && typeof runningTool.name === 'string' && runningTool.name !== ''
        ? runningTool.name
        : null;
      const turnUsage = turnUsageOf(nodes, currentTurn);
      const sessionUsage = tokenUsage !== null && tokenUsage !== undefined && typeof tokenUsage === 'object'
        ? tokenUsage
        : allUsageOf(nodes);
      const turnCost = usageCost(turnUsage, now);
      const sessionCost = usageCost(sessionUsage, now);
      const turnTokens = billedTokens(turnUsage);
      const sessionTokens = billedTokens(sessionUsage);
      const timing = currentTurn !== null && turnTimings !== undefined && typeof turnTimings.get === 'function'
        ? turnTimings.get(currentTurn)
        : undefined;
      const startedAt = timing === undefined ? undefined : timing.startTime;
      const endedAt = timing === undefined ? undefined : timing.endTime;
      const elapsedMs = isTurn(startedAt) || (typeof startedAt === 'number' && startedAt > 0)
        ? (running ? now - startedAt : endedAt ? endedAt - startedAt : null)
        : null;
      const elapsed = elapsedMs === null ? null : formatDuration(Math.max(0, elapsedMs), t);
      const latestNodeTime = nodes.reduce((latest, node) => {
        return node !== null && node !== undefined && typeof node.time === 'number' && node.time > latest ? node.time : latest;
      }, 0);
      const activityAt = Math.max(
        summaryUpdatedAt ?? 0,
        latestNodeTime,
        typeof startedAt === 'number' ? startedAt : 0,
      );
      const lastActivity = activityAt > 0 ? activityAt : undefined;

      const currentTurnFailed = !running && Boolean(currentTurnError);
      const currentTurnCompleted = !running && !currentTurnFailed && currentTurn !== null && !blank;
      const liveTone = running ? 'active' : currentTurnFailed ? 'error' : currentTurnCompleted ? 'done' : 'pending';
      const liveEyebrow = running
        ? t('live.eyebrow.running')
        : currentTurnFailed
          ? t('live.eyebrow.failed')
          : currentTurnCompleted
            ? t('live.eyebrow.completed')
            : blank
              ? t('live.eyebrow.blank')
              : t('live.eyebrow.status');

      const liveTitle = running
        ? (currentTurn === null
          ? t('live.title.runningUnknown')
          : currentTurn !== null && currentStep !== null
            ? t('live.title.running', { turn: currentTurn, step: currentStep })
            : t('live.title.runningTurn', { turn: currentTurn }))
        : currentTurnFailed
          ? (currentTurn !== null ? t('live.title.failed', { turn: currentTurn }) : t('live.title.failedUnknown'))
          : currentTurnCompleted
            ? t('live.title.completed', { turn: currentTurn })
            : attention
              ? t('live.title.attention')
              : blank
                ? t('live.title.blank')
                : t('live.title.idle');

      let liveProgress = 0;
      if (running) {
        let progress = 8 + Math.min(52, chars / 24) + Math.min(24, completedTools * 4);
        if (runningCalls.length > 0) progress += 4;
        if (currentStep !== null) progress += Math.min(8, currentStep * 2);
        liveProgress = Math.min(95, Math.round(progress));
        if (liveProgress < 8) liveProgress = 8;
        const progressKey = `${sessionId === undefined ? '' : sessionId}:${currentTurn === null ? 'unknown' : currentTurn}`;
        const cachedProgress = LIVE_PROGRESS.get(progressKey);
        if (cachedProgress !== undefined && liveProgress < cachedProgress) liveProgress = cachedProgress;
        LIVE_PROGRESS.set(progressKey, liveProgress);
        if (LIVE_PROGRESS.size > 100) {
          const oldest = LIVE_PROGRESS.keys().next();
          if (!oldest.done) LIVE_PROGRESS.delete(oldest.value);
        }
      } else if (currentTurnCompleted || currentTurnFailed) {
        liveProgress = 100;
      }

      const liveChips = [];
      if (currentTurn !== null) liveChips.push(t('live.turnChip', { turn: currentTurn }));
      if (running && currentStep !== null) liveChips.push(t('live.stepChip', { step: currentStep }));
      if (running && chars > 0) liveChips.push(t('live.chars', { count: chars }));
      if (running && completedTools > 0) liveChips.push(t('live.tools', { count: completedTools }));
      if (runningToolName !== null) liveChips.push(t('live.toolRunning', { name: runningToolName }));
      if (queued > 0) liveChips.push(t('live.queue', { count: queued }));
      if (elapsed !== null) liveChips.push(t(running ? 'live.elapsed' : 'live.completedIn', { duration: elapsed }));
      if (pending) liveChips.push(t('live.pendingInteraction'));
      if (liveChips.length === 0) liveChips.push(t('live.noOutput'));

      const lastActivityLabel = lastActivity === undefined
        ? t('info.noActivity')
        : formatRelative(lastActivity, now, t);
      const lastActivitySub = lastActivity === undefined || !Number.isFinite(lastActivity) || lastActivity <= 0
        ? ''
        : formatDateTime(lastActivity);
      const historyLabel = openFailed
        ? t('history.error')
        : openState === 'loading'
          ? t('history.loading')
          : openState === 'cold'
            ? t('history.cold')
            : loadingOlder
              ? t('history.loadingOlder')
              : hasMore
                ? t('history.more')
                : t('history.complete');
      const connectionLabel = removed
        ? t('runtime.connection.removed')
        : openState === 'open'
          ? t('runtime.connection.open')
          : openState === 'loading'
            ? t('runtime.connection.loading')
            : openFailed
              ? t('runtime.connection.error')
              : openState === 'cold'
                ? t('runtime.connection.cold')
                : t('runtime.connection.unknown');
      const connectionTone = removed || openFailed
        ? 'error'
        : openState === 'open'
          ? 'ok'
          : openState === 'loading'
            ? 'warn'
            : undefined;
      const listSync = listPhase === 'pending'
        ? t('runtime.listSyncing')
        : listPhase === 'error'
          ? t('runtime.listError')
          : t('runtime.listReady');
      const currentTurnLabel = currentTurn !== null ? t('runtime.turnValue', { turn: currentTurn }) : t('common.none');
      const firstTurnLabel = firstTurn !== null ? t('runtime.turnValue', { turn: firstTurn }) : t('common.none');
      const stepLabel = currentStep !== null ? t('runtime.stepValue', { step: currentStep }) : t('common.none');
      const formatLabel = formatStatus === 'current'
        ? t('session.format.current')
        : formatStatus === 'migration-required'
          ? t('session.format.migration')
          : t('session.format.unknown');
      const sourceLabel = sourceSubagent ? t('info.source.subagent') : t('info.source.main');
      const sourceSub = depth !== undefined && typeof depth === 'number' && depth > 0
        ? t('info.source.depth', { depth })
        : '';

      const errors = [];
      if (openFailed) {
        errors.push({
          tone: 'error',
          title: t('errors.open'),
          message: messageOf(openError),
          code: codeOf(openError),
        });
      }
      if (promptError !== null && promptError !== undefined) {
        errors.push({
          tone: 'error',
          title: promptError.op === 'stop' ? t('errors.stop') : t('errors.send'),
          message: messageOf(promptError.error),
          code: codeOf(promptError.error),
        });
      }
      if (activeTurnError !== undefined) {
        errors.push({
          tone: 'error',
          title: t('errors.lastTurn'),
          message: nodeMessage(activeTurnError),
          code: nodeCode(activeTurnError),
        });
      }
      if (maxTokensTurn !== undefined) {
        errors.push({
          tone: 'warn',
          title: t('errors.maxTokens'),
          message: t('errors.maxTokensHint'),
          code: '',
        });
      }
      if (lastAgentError !== null && lastAgentError !== undefined && lastAgentError !== '') {
        const lastAgentMessage = messageOf(lastAgentError);
        const duplicate = activeTurnError !== undefined && nodeMessage(activeTurnError) === lastAgentMessage;
        if (!duplicate && lastAgentMessage !== '') {
          errors.push({
            tone: 'error',
            title: t('errors.lastAgent'),
            message: lastAgentMessage,
            code: codeOf(lastAgentError),
          });
        }
      }

      const taskLoading = todos === undefined;
      const taskList = Array.isArray(todos) ? todos : EMPTY_LIST;
      const taskTotal = taskList.length;
      const taskCounts = { pending: 0, inProgress: 0, completed: 0 };
      for (const todo of taskList) {
        if (todo !== null && todo !== undefined && todo.status === 'completed') taskCounts.completed += 1;
        else if (todo !== null && todo !== undefined && todo.status === 'in_progress') taskCounts.inProgress += 1;
        else taskCounts.pending += 1;
      }
      const taskOverall = taskTotal === 0 ? 0 : Math.round((taskCounts.completed / taskTotal) * 100);
      const taskComplete = taskTotal > 0 && taskCounts.completed === taskTotal;

      React.useEffect(() => {
        if (running) {
          previousRunning.current = true;
          setCelebrate(false);
          return undefined;
        }
        const wasRunning = previousRunning.current;
        previousRunning.current = false;
        if (!wasRunning || currentTurn === null || currentTurnError !== undefined || blank) return undefined;
        setCelebrate(true);
        const timer = setTimeout(() => setCelebrate(false), 2800);
        return () => clearTimeout(timer);
      }, [running, currentTurn, currentTurnError, blank]);

      const goChat = () => {
        if (typeof openView === 'function') openView('chat', '');
      };

      return h(
        'div',
        { className: 'dshTp_root', role: 'region', 'aria-label': t('page.aria') },
        h(
          'div',
          { className: 'dshTp_inner' },
          h(
            'header',
            { className: 'dshTp_header' },
            h(
              'div',
              { className: 'dshTp_heading' },
              h(
                'div',
                { className: 'dshTp_titleRow' },
                h('h2', { className: 'dshTp_title' }, t('page.title')),
                h(
                  'span',
                  { className: 'dshTp_capsule', 'data-tone': statusTone, 'aria-live': 'polite' },
                  h('span', { className: 'dshTp_capsuleDot', 'aria-hidden': true }),
                  statusLabel,
                ),
              ),
              h('p', { className: 'dshTp_sub' }, pageSubtitle),
            ),
            h(
              'button',
              {
                type: 'button',
                className: 'dshTp_back',
                onClick: goChat,
                disabled: typeof openView !== 'function',
              },
              h(Icon, { kind: 'chat' }),
              h('span', null, t('action.backToChat')),
            ),
          ),

          h(
            'section',
            {
              className: 'dshTp_live',
              'data-tone': liveTone,
              'data-celebrate': celebrate ? 'true' : 'false',
              'aria-label': t('live.progress'),
            },
            h(
              'div',
              { className: 'dshTp_liveHead' },
              h(
                'div',
                null,
                h('div', { className: 'dshTp_eyebrow' }, liveEyebrow),
                h('h3', { className: 'dshTp_liveTitle' }, liveTitle),
                celebrate
                  ? h(
                      'div',
                      { className: 'dshTp_doneBadge' },
                      h(Icon, { kind: 'check' }),
                      t('live.done'),
                    )
                  : null,
              ),
              h('div', { className: 'dshTp_livePct', 'aria-hidden': true }, `${liveProgress}%`),
            ),
            h(
              'div',
              {
                className: 'dshTp_liveTrack',
                role: 'progressbar',
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-valuenow': liveProgress,
                'aria-valuetext': t('live.progressAria', { percent: liveProgress }),
              },
              h('div', {
                className: 'dshTp_liveFill',
                'data-tone': liveTone,
                style: { width: `${liveProgress}%` },
              }),
            ),
            h(
              'div',
              { className: 'dshTp_liveDetails' },
              liveChips.map((chip, index) =>
                h(
                  'span',
                  {
                    key: `${index}:${chip}`,
                    className: 'dshTp_chip',
                    'data-tone': (pending && index === liveChips.length - 1) ? 'attention' : 'strong',
                  },
                  chip,
                ),
              ),
            ),
          ),

          h(
            'div',
            { className: 'dshTp_costs' },
            h(
              'div',
              { className: 'dshTp_cost' },
              h(
                'div',
                { className: 'dshTp_costHead' },
                h('span', { className: 'dshTp_costLabel' }, t('cost.live')),
                h('span', { className: 'dshTp_costTag' }, t('cost.liveTag')),
              ),
              h(
                'div',
                { className: 'dshTp_costValue', 'aria-live': 'polite' },
                turnTokens > 0 ? formatMoney(turnCost.value) : '—',
              ),
              h('div', { className: 'dshTp_costSub' }, costSub(turnUsage, turnCost, t)),
            ),
            h(
              'div',
              { className: 'dshTp_cost' },
              h(
                'div',
                { className: 'dshTp_costHead' },
                h('span', { className: 'dshTp_costLabel' }, t('cost.total')),
                h('span', { className: 'dshTp_costTag' }, t('cost.totalTag')),
              ),
              h(
                'div',
                { className: 'dshTp_costValue', 'data-tone': 'total', 'aria-live': 'polite' },
                sessionTokens > 0 ? formatMoney(sessionCost.value) : '—',
              ),
              h('div', { className: 'dshTp_costSub' }, costSub(sessionUsage, sessionCost, t)),
            ),
          ),
          h('p', { className: 'dshTp_costNote' }, t('cost.note')),

          h(
            'div',
            { className: 'dshTp_infoGrid' },
            h(InfoCard, {
              label: t('info.lastActivity'),
              value: lastActivityLabel,
              sub: lastActivitySub,
            }),
            h(InfoCard, {
              label: t('info.queue'),
              value: t('info.queue.value', { count: queued }),
              sub: steering > 0 ? t('info.queue.steering', { count: steering }) : '',
            }),
            h(InfoCard, {
              label: t('info.history'),
              value: historyLabel,
              sub: '',
            }),
            h(InfoCard, {
              label: t('info.source'),
              value: sourceLabel,
              sub: sourceSub,
            }),
          ),

          h(
            'div',
            { className: 'dshTp_panels' },
            h(
              'section',
              { className: 'dshTp_panel', 'data-span': '2' },
              h(
                'div',
                { className: 'dshTp_panelHead' },
                h('h3', { className: 'dshTp_panelTitle' }, t('workdir.title')),
                h(CopyButton, {
                  value: cwd === undefined ? '' : cwd,
                  label: t('workdir.copy'),
                  copiedLabel: t('action.copied'),
                  failedLabel: t('action.copyFailed'),
                }),
              ),
              cwd
                ? h('pre', { className: 'dshTp_path' }, cwd)
                : h('p', { className: 'dshTp_muted' }, t('workdir.empty')),
            ),

            h(
              'section',
              { className: 'dshTp_panel' },
              h(
                'div',
                { className: 'dshTp_panelHead' },
                h('h3', { className: 'dshTp_panelTitle' }, t('runtime.title')),
                h('span', { className: 'dshTp_panelCount' }, listSync),
              ),
              h(
                'div',
                { className: 'dshTp_rows' },
                h(Row, {
                  label: t('runtime.connection'),
                  value: connectionLabel,
                  tone: connectionTone,
                }),
                h(Row, {
                  label: t('runtime.currentTurn'),
                  value: currentTurnLabel,
                }),
                h(Row, {
                  label: t('runtime.firstTurn'),
                  value: firstTurnLabel,
                }),
                h(Row, {
                  label: t('runtime.step'),
                  value: stepLabel,
                }),
              ),
            ),

            h(
              'section',
              { className: 'dshTp_panel' },
              h(
                'div',
                { className: 'dshTp_panelHead' },
                h('h3', { className: 'dshTp_panelTitle' }, t('session.title')),
                h(CopyButton, {
                  value: sessionId === undefined ? '' : sessionId,
                  label: t('session.copyId'),
                  copiedLabel: t('action.copied'),
                  failedLabel: t('action.copyFailed'),
                }),
              ),
              h(
                'div',
                { className: 'dshTp_rows' },
                h(Row, {
                  label: t('session.id'),
                  value: h('code', { className: 'dshTp_code' }, sessionId === undefined ? t('common.none') : sessionId),
                }),
                h(Row, {
                  label: t('session.parent'),
                  value: parentSessionId ? h('code', { className: 'dshTp_code' }, parentSessionId) : t('session.none'),
                }),
                h(Row, {
                  label: t('session.format'),
                  value: formatLabel,
                  tone: formatStatus === 'migration-required' ? 'warn' : undefined,
                }),
              ),
            ),

            h(
              'section',
              { className: 'dshTp_panel', 'data-span': '2' },
              h(
                'div',
                { className: 'dshTp_panelHead' },
                h('h3', { className: 'dshTp_panelTitle' }, t('errors.title')),
                h(
                  'span',
                  { className: 'dshTp_panelCount' },
                  errors.length === 0 ? t('errors.none') : `${errors.length}`,
                ),
              ),
              errors.length === 0
                ? h(
                    'div',
                    { className: 'dshTp_okRow' },
                    h(Icon, { kind: 'check' }),
                    t('errors.none'),
                    h('span', { className: 'dshTp_muted' }, t('errors.noneBody')),
                  )
                : h(
                    'div',
                    { className: 'dshTp_errorList' },
                    errors.map((error, index) =>
                      h(ErrorRow, {
                        key: `${index}:${error.title}`,
                        tone: error.tone,
                        title: error.title,
                        message: error.message,
                        code: error.code,
                      }),
                    ),
                  ),
            ),
          ),

          h(
            'section',
            { className: 'dshTp_tasks' },
            h(
              'div',
              { className: 'dshTp_tasksHead' },
              h('h3', { className: 'dshTp_sectionTitle' }, t('tasks.title')),
              h(
                'span',
                { className: 'dshTp_panelCount' },
                taskTotal === 0 ? t('summary.empty') : t('tasks.completed', {
                  completed: taskCounts.completed,
                  total: taskTotal,
                }),
              ),
            ),

            taskTotal > 0
              ? h(
                  'div',
                  { className: 'dshTp_taskCard', 'data-complete': taskComplete ? 'true' : 'false' },
                  h(
                    'div',
                    { className: 'dshTp_cardHead' },
                    h('span', { className: 'dshTp_cardLabel' }, t('tasks.overall')),
                    h(
                      'span',
                      { className: 'dshTp_cardValue' },
                      t('overall.value', { completed: taskCounts.completed, total: taskTotal }),
                    ),
                  ),
                  h(
                    'div',
                    {
                      className: 'dshTp_track dshTp_trackLg',
                      role: 'progressbar',
                      'aria-valuemin': 0,
                      'aria-valuemax': 100,
                      'aria-valuenow': taskOverall,
                      'aria-label': t('tasks.overall'),
                    },
                    h('div', {
                      className: 'dshTp_fill',
                      'data-tone': taskComplete ? 'done' : taskCounts.inProgress > 0 ? 'active' : 'pending',
                      style: { width: `${taskOverall}%` },
                    }),
                  ),
                  h(
                    'div',
                    { className: 'dshTp_legend' },
                    h(
                      'span',
                      { className: 'dshTp_chip' },
                      h('span', { className: 'dshTp_dot', 'data-tone': 'done', 'aria-hidden': true }),
                      t('count.completed', { count: taskCounts.completed }),
                    ),
                    h(
                      'span',
                      { className: 'dshTp_chip' },
                      h('span', { className: 'dshTp_dot', 'data-tone': 'active', 'aria-hidden': true }),
                      t('count.inProgress', { count: taskCounts.inProgress }),
                    ),
                    h(
                      'span',
                      { className: 'dshTp_chip' },
                      h('span', { className: 'dshTp_dot', 'data-tone': 'pending', 'aria-hidden': true }),
                      t('count.pending', { count: taskCounts.pending }),
                    ),
                    taskComplete
                      ? h(
                          'span',
                          { className: 'dshTp_doneBadge' },
                          h(Icon, { kind: 'check' }),
                          t('live.completedBadge'),
                        )
                      : null,
                  ),
                  h(
                    'ol',
                    { className: 'dshTp_list', 'aria-label': t('list.aria') },
                    taskList.map((todo, index) => {
                      const item = todo !== null && typeof todo === 'object' ? todo : { content: '', status: 'pending' };
                      const meta = STATUS[item.status] === undefined ? STATUS.pending : STATUS[item.status];
                      return h(
                        'li',
                        {
                          key: `${index}:${item.content}`,
                          className: 'dshTp_item',
                          'data-tone': meta.tone,
                        },
                        h(
                          'div',
                          { className: 'dshTp_itemHead' },
                          meta.tone === 'done'
                            ? h('span', { className: 'dshTp_itemCheck' }, h(Icon, { kind: 'check' }))
                            : h('span', {
                                className: 'dshTp_dot',
                                'data-tone': meta.tone,
                                'aria-hidden': true,
                              }),
                          h('span', { className: 'dshTp_itemText' }, item.content),
                          h(
                            'span',
                            { className: 'dshTp_status', 'data-tone': meta.tone },
                            t(meta.label),
                          ),
                          h(
                            'span',
                            { className: 'dshTp_percent', 'aria-hidden': true },
                            `${meta.percent}%`,
                          ),
                        ),
                        h(
                          'div',
                          {
                            className: 'dshTp_track',
                            role: 'progressbar',
                            'aria-valuemin': 0,
                            'aria-valuemax': 100,
                            'aria-valuenow': meta.percent,
                            'aria-valuetext': t('task.progressAria', {
                              content: item.content,
                              percent: meta.percent,
                            }),
                          },
                          h('div', {
                            className: 'dshTp_fill',
                            'data-tone': meta.tone,
                            style: { width: `${meta.percent}%` },
                          }),
                        ),
                      );
                    }),
                  ),
                )
              : h(
                  React.Fragment,
                  null,
                  h(
                    'div',
                    { className: 'dshTp_empty' },
                    h(ListGlyph),
                    h(
                      'p',
                      { className: 'dshTp_emptyTitle' },
                      t(taskLoading ? 'empty.loadingTitle' : 'empty.title'),
                    ),
                    h(
                      'p',
                      { className: 'dshTp_emptyBody' },
                      t(taskLoading ? 'empty.loadingBody' : 'tasks.emptyBody'),
                    ),
                  ),
                  recentSteps.length > 0
                    ? h(
                        'div',
                        { className: 'dshTp_recent' },
                        h('div', { className: 'dshTp_recentHead' }, h('span', null, t('steps.title'))),
                        h('p', { className: 'dshTp_recentNote' }, t('steps.note')),
                        h(
                          'ol',
                          { className: 'dshTp_recentList' },
                          recentSteps.map((step) =>
                            h(
                              'li',
                              { key: step.key, className: 'dshTp_recentItem' },
                              h('span', {
                                className: 'dshTp_dot',
                                'data-tone': step.status === 'running' ? 'active' : 'done',
                                'aria-hidden': true,
                              }),
                              h('span', { className: 'dshTp_recentName' }, step.name),
                              h(
                                'span',
                                { className: 'dshTp_recentStatus' },
                                t(step.status === 'running' ? 'steps.running' : 'steps.done'),
                              ),
                            ),
                          ),
                        ),
                      )
                    : null,
                ),
          ),

          h('p', { className: 'dshTp_hint' }, t('tasks.hint')),
        ),
      );
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => {
          const selector = `style[data-plugin-css="${PLUGIN_ID}"]`;
          const previous = document.querySelector(selector);
          if (previous !== null) previous.remove();
          const tag = document.createElement('style');
          tag.dataset.plugin = PLUGIN_ID;
          tag.dataset.pluginCss = PLUGIN_ID;
          tag.textContent = CSS;
          document.head.appendChild(tag);
          return () => {
            tag.remove();
          };
        }, 'task-progress: styles');

        ctx.effect(
          () => ctx.locale.register(NS, { zh, en }),
          'task-progress: dictionaries',
        );

        const t = ctx.locale.bind(NS);
        ctx.slots.inject('conversation.view', () =>
          ctx.slots.register(
            {
              name: 'conversation.view',
              id: VIEW_ID,
              order: 5,
              locale: NS,
              label: () => t('view.tasks'),
            },
            TaskProgressView,
          ),
        );
      },
    };
  },
});
