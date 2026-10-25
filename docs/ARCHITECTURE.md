# 站点架构

CDUT Studio 官网是一个纯静态单页站点：hash 路由、无框架依赖、无必需构建步骤。`index-modular.html` 是手写源稿，`index.html` 是由构建脚本生成的单文件发布版。

## 视图与路由

站点有四个视图容器，由 `js/app.js` 做 hash 路由切换：

| 路由 | 视图容器 | 内容 |
| --- | --- | --- |
| `#/` | `view-home` | 首屏、五框产品演示、团队、开源信息 |
| `#/download` | `view-download` | 版本清单、直链与校验信息 |
| `#/docs` | `view-docs` | 使用指南、功能说明、常见问题 |
| 其余 | `view-404` | 未命中路由的兜底页 |

`app.js` 同时负责：

- 切页时记忆各路由的滚动位置，配合 token 控制重入与浏览器历史；
- 切页后把焦点移到新页标题，内部按钮失焦时重新聚焦；
- 移动端菜单：遮罩、Escape 退出、焦点循环/恢复、滚动锁定；
- 主题切换（`data-theme` 属性 + localStorage 记忆，默认跟随系统）；
- Toast 提示等通用交互。

## 首页五框 Showcase

首页五个视觉卡片（`data-module="01"…"05"`）挂载真实客户端组件的微缩渲染，不是截图：

| 模块 | 视图 / 分区 | 展示内容 |
| --- | --- | --- |
| 01 | `conversations` | Agent 工作台 |
| 02 | `cdut-zone / ai-class` | AI 速课堂 |
| 03 | `cdut-zone / material-review` | 材料审核 |
| 04 | `cdut-zone / yanhu-express` | 智联万站 |
| 05 | `agent-skills` | 技能、知识与自动化 |

挂载与通信由 `js/showcase-clients.js` 完成：

- 每张卡片内创建 `.r06-client-stage`，以 iframe 加载 `demos/webui/index.html`，URL 参数指定视图/分区；
- 固定 1280×820 桌面画布等比缩放，桌面与手机共用同一渲染；
- **隔离边界**：演示运行在独立 origin（生产为 `cdut-studio.work` ↔ `www.cdut-studio.work` 配对；本地验收用 `127.0.0.1` ↔ `localhost` 配对验证同一边界），`postMessage` 同时校验固定 origin 与 source；
- **主题桥接**：`CDUT_SHOWCASE_THEME` 消息把站点浅/深主题同步进 iframe。

演示内容全部为模拟数据：不接入真实模型、校园认证或业务提交，也不收集真实账户、密钥或个人资料。

## demos/webui（vendored 离线客户端）

`demos/webui/` 是五框微缩客户端的离线资源（React/Vite 构建产物 + `showcase-bootstrap.js`、`showcase-bridge.js`、`showcase-restrictions.css` 适配层）。它自带严格 CSP（`default-src 'self'`、`connect-src 'none'`），完全断网运行。资源完整性由两个检查保障：

- `tests/check-showcase-assets.py`：遍历 `demos/webui` 的全部本地引用（JS import、CSS url、HTML src/href），确保依赖图无缺件；
- `tools/patch-showcase-renderer.py --check`：渲染器关键文件的补丁与哈希校验。

## 单文件构建管线

```text
index-modular.html ──┐
css/style.css ───────┤
css/showcase-clients.css ─┤
js/app.js ───────────┼── tools/build-standalone.py ──> index.html（生成产物）
js/showcase-clients.js ──┤        （内联 <style>/<script>、Logo 转 data URI、
assets/logo/*.svg ─────┘         校验 downloadManifest JSON）
```

规则：

- **单一事实来源**：内容与样式永远改源稿；`index.html` 是产物，永不手改；
- 构建把两份 CSS 内联为一个 `<style>`、两份 JS 内联为一个 `<script>`（各恰好一处），并把 Logo SVG 转为 data URI，使单文件预览不依赖任何外部资源；
- 构建校验内嵌 `downloadManifest`（`schemaVersion: 1` + `releases` 数组），结构不合法直接失败；
- `python3 tools/build-standalone.py --check` 校验产物与源一致，发布前必须通过。

## 下载页数据源

下载清单内嵌在 `index-modular.html` 的 `<script type="application/json" id="downloadManifest">` 中，含版本、系统/架构、GitHub Releases 直链与校验信息。展示策略：优先展示尚未开通的国内渠道占位，GitHub Releases 为可用次选；下载 API 失败时提供手动重试。下载地址与版本必须来自可核实的发行数据，不使用未验证的镜像直链。

## 团队卡

`js/app.js` 中的 `TEAM_MEMBERS` 是唯一编辑入口（五人：`name` / `role` / `bio` / `portrait` / `homepage` / `platform`）。缺头像时显示抽象 SVG 占位（明确不是真人肖像）；`homepage` 留空时不虚构链接。

## 主题与动效

- 默认跟随系统主题，可手动切换浅色/深色并记住偏好；
- Hero 区龙 Canvas 逐帧动态（标签页隐藏时暂停绘制），配鼠标流体字符与点击水花；
- 切页动效为 opacity / translate / 轻微缩放的短时序（125 + 210ms）；
- 全站遵循 `prefers-reduced-motion`：动效降级为静态帧，Canvas 只绘制单帧。

## 设计原则

- 无边框优先、大留白、图文对齐建立层次；移动端重排而非缩小 PC 页面；
- 真实界面组件驱动展示，不用截图或概念图充当功能证据；
- 一级页面只有三个：首页、下载、文档；不做账号、支付或社区系统。
