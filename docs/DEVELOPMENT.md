# 开发指南

## 环境要求

- **Python 3**：本地静态服务与构建脚本；
- **Node.js**：测试脚本（浏览器测试基于 Playwright，可通过 `NODE_PATH` 指向已有安装）；
- 一个 Chromium 系浏览器（Chrome / Chromium）。

## 本地运行

```bash
python3 -m http.server 8000
```

打开 <http://localhost:8000/index.html>（或 `index-modular.html`）。注意：

- 首页五框依赖 `demos/` 离线资源，必须经 HTTP 访问，不要用 `file://`；
- 不要拆散目录结构，`demos/`、`assets/`、`css/`、`js/` 与 HTML 的相对路径是运行前提。

## 日常改动流程

1. 修改源稿：`index-modular.html`、`css/`、`js/`；
2. 重新生成单文件版：`python3 tools/build-standalone.py`；
3. 校验产物一致：`python3 tools/build-standalone.py --check`；
4. 跑相关测试（见下文）。

> `index.html` 是构建产物，手改会被下次构建覆盖。

## 内容编辑入口

| 要改什么 | 在哪里改 | 之后做什么 |
| --- | --- | --- |
| 团队五人卡片 | `js/app.js` 的 `TEAM_MEMBERS` | 重新 `build-standalone.py` |
| 下载清单（版本/直链/校验） | `index-modular.html` 内嵌 `downloadManifest` JSON | 重新 `build-standalone.py`（构建会校验 schema） |
| 内置用户手册 | `content/student-docs-v0.1-combined.md` | `node tools/build-student-docs.cjs`（`--check` 校验） |
| 文案 | `index-modular.html` / `docs/` | 重新 `build-standalone.py` |

## 构建与辅助脚本（tools/）

| 脚本 | 作用 |
| --- | --- |
| `build-standalone.py` | 由模块源生成单文件 `index.html`；`--check` 校验一致 |
| `build-student-docs.cjs` | 把用户手册注入内置文档页；`--check` 校验 |
| `build-release.py` | 组装发布目录（只含站点运行所需文件） |
| `serve-release.py` | 本地预览发布目录 |
| `patch-showcase-renderer.py` | `demos/webui` 渲染器补丁维护与哈希校验；`--check` |

## 测试（tests/）

| 脚本 | 作用 |
| --- | --- |
| `showcase-browser.cjs` | 五框真实浏览器验收：桌面/手机双视口、双主题、逐框交互与状态保留、几何回归、无横向溢出 |
| `showcase-hero.cjs` | Hero 动效专项 |
| `showcase-touch.cjs` | 移动端触摸专项 |
| `security-browser.cjs` | CSP、演示隔离与输入限制检查 |
| `student-docs-security.cjs` | 用户手册内容安全检查 |
| `release-security.cjs` | 发布目录安全复核（配合 `build-release.py` 输出） |
| `check-showcase-assets.py` | `demos/webui` 依赖图完整性（无缺件） |
| `test_r06_browser.py` | Python 浏览器冒烟 |
| `scaled-pointer.cjs` | 共享工具：按真实画布坐标发送鼠标/触摸输入（缩放 iframe 必需，不以 `.click()` 冒充交互） |

环境变量：

| 变量 | 说明 |
| --- | --- |
| `R06_BASE_URL` | 受测站点地址；缺省时测试自动起本地服务 |
| `R06_BROWSER_EXECUTABLE` | 浏览器可执行文件路径 |
| `R06_EVIDENCE_DIR` | 截图/报告输出目录，缺省 `reports/` |
| `R06_BASELINE_SHA` | 可选：基线提交 SHA，启用几何回归对比；缺省跳过对比 |

典型运行方式：

```bash
NODE_PATH=/path/to/node_modules \
R06_BROWSER_EXECUTABLE=/usr/bin/google-chrome \
node tests/showcase-browser.cjs
```

## 发布前检查清单

1. `python3 tools/build-standalone.py --check`、`node tools/build-student-docs.cjs --check`、`python3 tools/patch-showcase-renderer.py --check` 全部通过；
2. `python3 tests/check-showcase-assets.py` 无缺失资源；
3. 浏览器套件通过：桌面/手机、浅/深主题、五框逐框交互、无控制台错误与外部请求；
4. `python3 tools/build-release.py` 产物仅含站点运行文件（不含 `tests/`、`tools/`、`content/` 源稿），并用 `node tests/release-security.cjs` 复核；
5. 下载链接、版本号与可核实的发行数据一致。

## 长期安全约束

- 五框演示 iframe 走独立 origin，`postMessage` 校验固定 origin 与 source；
- `demos/webui` 保持严格 CSP（`connect-src 'none'`），断网可运行；
- 不收集校园账户、模型密钥、真实案卷或个人资料；演示一律模拟数据；
- 发布目录不携带测试脚本、构建工具与源文档。
