# CDUT Studio 官网

**线上站点：<https://cdut-studio.work/>**

这是 CDUT Studio 官方网站的源码仓库。CDUT Studio 是面向校园学习与日常场景的开源桌面 AI 软件；官网是它的展示与下载入口，只做三件事：**介绍产品、提供下载、提供文档**。本站是纯静态站点，无需构建即可本地运行。

## 快速开始

```bash
python3 -m http.server 8000
```

浏览器打开 <http://localhost:8000/index.html>。

> 首页五个演示框依赖同目录下的 `demos/` 离线资源，请通过 HTTP 访问（不要用 `file://`），并保留完整目录结构。

## 页面结构

| 页面 | 职责 |
| --- | --- |
| 首页 `#/` | 极简首屏、滚动式产品演示（五框）、开发团队、开源信息 |
| 下载 `#/download` | 最新与历史版本、系统/架构、GitHub Releases 直链与校验信息 |
| 文档 `#/docs` | 使用指南、功能说明、常见问题；搜索仅在文档内提供 |

首页五框演示依次为：**01 Agent 工作台、02 AI 速课堂、03 材料审核、04 智联万站、05 技能/知识与自动化**。所有演示均为离线组件 + 模拟数据，不接入真实模型、校园认证或业务提交，不收集任何真实账户或个人资料。

## 仓库结构

```text
.
├── index-modular.html   # 站点源稿（模块版，手写维护）
├── index.html           # 发布用单文件版（由 tools/build-standalone.py 生成，勿手改）
├── css/                 # style.css 站点样式；showcase-clients.css 五框容器样式
├── js/                  # app.js 站点逻辑；showcase-clients.js 五框挂载与主题桥接
├── assets/logo/         # 品牌 SVG（导航、首屏徽标与 favicon 共用）
├── content/             # 内容源稿（用户手册合并版，供内置文档生成）
├── demos/               # 五框微缩客户端离线资源（vendored，严格 CSP、断网运行）
├── tools/               # 构建与辅助脚本
├── tests/               # 浏览器验收与安全检查脚本
└── docs/                # 架构与开发文档
```

## 开发

改动 `index-modular.html`、`css/`、`js/` 后，重新生成单文件版并校验一致性：

```bash
python3 tools/build-standalone.py          # 生成 index.html
python3 tools/build-standalone.py --check  # 校验两者一致
```

- 模块划分与设计约束见 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- 本地开发、构建、测试与内容编辑指南见 [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)

## 设计原则

- **无边框优先、大留白、图文对齐建立层次**；移动端重排而非缩小 PC 页面。
- **真实界面组件驱动展示**：五框是真实客户端组件的微缩渲染，不是截图或概念图。
- 默认跟随系统主题，可手动切换浅色/深色并记住偏好。
- 遵循 `prefers-reduced-motion`，动效可降级。
- 下载地址、版本与构建支持从可核实的发行数据维护，不使用未验证的镜像直链。

## 相关项目

- [CDUT Studio 主项目](https://github.com/Nya-Angle/CDUT-Studio)：产品源码与发行版（AGPL-3.0）
- [ProferAI](https://github.com/Yuan-lai-ru-ci/ProferAI)：客户端基础架构支持

## 许可

本仓库的站点源码采用 **[WTFPL](LICENSE)**（Do What The Fuck You Want To Public License）：想怎么用就怎么用。

主项目 [CDUT Studio](https://github.com/Nya-Angle/CDUT-Studio) 本身采用 [AGPL-3.0](https://github.com/Nya-Angle/CDUT-Studio/blob/main/LICENSE)，与本站点源码相互独立。
