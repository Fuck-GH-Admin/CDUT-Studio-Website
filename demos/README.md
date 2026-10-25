# 五框微缩客户端离线资源

`demos/webui/` 是首页五个演示框挂载的微缩客户端：真实客户端组件的离线渲染（React/Vite 构建产物 + `showcase-bootstrap.js` / `showcase-bridge.js` / `showcase-restrictions.css` 适配层）。

- 入口为 `demos/webui/index.html`，由 `js/showcase-clients.js` 以 iframe 挂载，URL 参数指定视图/分区；
- 画布固定 1280×820 等比缩放，桌面与手机共用同一渲染；
- 主题经 `postMessage`（`CDUT_SHOWCASE_THEME`）同步；
- 演示运行在独立 origin：生产按 `cdut-studio.work` ↔ `www.cdut-studio.work` 配对，本地用 `127.0.0.1` ↔ `localhost` 配对验证同一边界，消息同时校验 origin 与 source；
- 自带严格 CSP（`default-src 'self'`、`connect-src 'none'`），完全断网运行；
- 内容全部为模拟数据，不接入真实模型、校园认证或业务提交。

资源改动后请运行：

```bash
python3 tests/check-showcase-assets.py          # 依赖图完整性
python3 tools/patch-showcase-renderer.py --check
```
