/* R06: only the contents of the five existing visual cards are mounted here. */
(() => {
  const views = {
    '01': ['conversations', '', 'Agent 工作台'],
    '02': ['cdut-zone', 'ai-class', 'AI 速课堂'],
    '03': ['cdut-zone', 'material-review', '材料审核'],
    '04': ['cdut-zone', 'yanhu-express', '智联万站'],
    '05': ['agent-skills', '', '技能、知识与自动化']
  };
  const active = new Map();
  // Production renderer has a separate origin and a static-only virtual host.
  // The loopback pair exercises the same boundary in local Chromium checks.
  const demoBase = new URL('demos/webui/index.html', location.href);
  if (location.hostname === 'cdut-studio.work') demoBase.hostname = 'www.cdut-studio.work';
  else if (location.hostname === '127.0.0.1') demoBase.hostname = 'localhost';
  else if (location.hostname === 'localhost') demoBase.hostname = '127.0.0.1';
  const theme = () => document.documentElement.dataset.theme || 'light';
  function sync(frame) {
    frame.contentWindow?.postMessage({type: 'CDUT_SHOWCASE_THEME', theme: theme()}, demoBase.origin);
  }
  function mount(card, module) {
    if (active.has(card)) return;
    const [view, zone, title] = views[module];
    const stage = document.createElement('div');
    stage.className = 'r06-client-stage';
    const frame = document.createElement('iframe');
    frame.title = `${title} · 离线交互演示`;
    frame.className = 'r06-client-frame';
    // allow-same-origin preserves ES modules within the renderer's own origin;
    // the deployed renderer cannot access the homepage DOM or storage.
    // 地址栏沿用真实 React 表单；仅 04 允许派发表单事件。
    // 子文档 CSP form-action 'none' 与 submit.preventDefault 阻止真实表单提交。
    frame.setAttribute('sandbox', `allow-scripts allow-same-origin${module === '04' ? ' allow-forms' : ''}`);
    frame.setAttribute('allow', "camera 'none'; microphone 'none'; geolocation 'none'; clipboard-write 'none'");
    frame.referrerPolicy = 'no-referrer';
    const source = new URL(demoBase);
    source.search = new URLSearchParams({miniature: '1', view, zone, theme: theme()});
    frame.src = source.href;
    const resize = () => {
      const s = Math.min(stage.clientWidth / 1280, stage.clientHeight / 820);
      frame.style.transform = `translate(-50%, -50%) scale(${s})`;
    };
    stage.append(frame); card.append(stage);
    const observer = new ResizeObserver(resize); observer.observe(stage);
    frame.addEventListener('load', () => { resize(); sync(frame); });
    active.set(card, {frame, observer, view, zone}); resize();
  }
  window.addEventListener('message', event => {
    if (event.origin !== demoBase.origin || event.data?.type !== 'CDUT_OFFLINE_DEMO_READY') return;
    for (const [card, {frame, view, zone}] of active) {
      if (event.source !== frame.contentWindow) continue;
      if (event.data.view !== view || (event.data.zone || '') !== zone) continue;
      card.classList.add('r06-client-ready'); sync(frame);
    }
  });
  new MutationObserver(() => active.forEach(({frame}) => sync(frame)))
    .observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
  const observer = new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) {
      if (isIntersecting) mount(target, target.closest('[data-module]').dataset.module);
    }
  }, {rootMargin: '300px'});
  // 首框已完成 HTTP 浏览器检查；按临近可视区域的顺序加载五个真实模块。
  document.querySelectorAll('.showcase-row[data-module] .rounded-visual-card').forEach(card => observer.observe(card));
})();
