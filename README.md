# 会话任务进度 · dsh-task-progress

给 DeepSeek Harness 的会话加一个「任务进度」视图：把当前会话的任务、运行状态、花费和工作目录集中在一页里。

## 安装

```bash
dsh plugin --profile desktop add @ggxx/dsh-task-progress
```

装完重启 DeepSeek Harness 生效。

## 能看到什么

- 任务进度条与实时运行进度
- 当前会话花费与会话总花费
- 运行状态胶囊（进行中 / 完成 / 失败）
- 会话与单次运行的详情
- 当前工作目录
- 错误提示，以及一键返回 Chat

## 使用

打开任意会话，在会话视图里切换到「任务进度」。视图只展示当前会话的数据，不会读取其他会话。

## 兼容性

- 面向 Web profile（`dsh --profile web` 或桌面版）
- 纯前端渲染 + 宿主侧只读数据，不额外发起网络请求

## 许可证

MIT
