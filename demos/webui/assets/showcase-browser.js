// 只替代 Electron 的标签状态接口。页面始终使用客户端原有 React 组件。
// URL 是内存中的展示数据，不交给浏览器、fetch 或原生网页视图。
export function createOfflineBrowser() {
  const home = 'https://bsdt.cdut.edu.cn/EIP/onewebsitehande/toPersonalCenterPage.htm';
  const listeners = new Set();
  let sequence = 0;
  const makeTab = () => ({id: `offline-tab-${++sequence}`, history: [home], position: 0, reloads: 0});
  let tabs = [makeTab()];
  let activeTabId = tabs[0].id;
  const active = () => tabs.find(tab => tab.id === activeTabId);
  const snapshot = () => ({activeTabId, tabs: tabs.map(tab => {
    const url = tab.history[tab.position];
    return {
      id: tab.id, url, title: tab.history.length === 1 ? '校园书签 · 离线' : `${new URL(url).hostname} · 离线`,
      loading: false, canGoBack: tab.position > 0, canGoForward: tab.position < tab.history.length - 1,
      error: {errorCode: 0, failedUrl: url,
        errorDescription: `离线演示：仅模拟标签、地址栏与书签；未连接网页服务。${tab.reloads ? `已在本地刷新 ${tab.reloads} 次。` : ''}`},
    };
  })});
  const publish = () => {
    const state = snapshot();
    for (const listener of listeners) listener(state);
    return state;
  };
  const denied = async () => ({ok: false, error: '离线演示不提供原生窗口或外部访问'});
  return {
    initOrRestore: async () => snapshot(), showView: async () => snapshot(), hideView: async () => snapshot(),
    onTabsChanged: callback => {listeners.add(callback); return () => listeners.delete(callback)},
    onLoadingChanged: () => () => {}, onUrlChanged: () => () => {},
    createTab: async () => {const tab = makeTab(); tabs.push(tab); activeTabId = tab.id; return publish()},
    activateTab: async ({tabId}) => {if (tabs.some(tab => tab.id === tabId)) activeTabId = tabId; return publish()},
    closeTab: async ({tabId}) => {
      tabs = tabs.filter(tab => tab.id !== tabId);
      if (!tabs.length) tabs = [makeTab()];
      if (!tabs.some(tab => tab.id === activeTabId)) activeTabId = tabs[tabs.length - 1].id;
      return publish();
    },
    reorderTabs: async ({orderedTabIds}) => {
      if (orderedTabIds.length === tabs.length && new Set(orderedTabIds).size === tabs.length
        && orderedTabIds.every(id => tabs.some(tab => tab.id === id))) {
        tabs = orderedTabIds.map(id => tabs.find(tab => tab.id === id));
      }
      return publish();
    },
    navigate: async ({url}) => {
      let target;
      try {target = new URL(/^[a-z][a-z\d+.-]*:/i.test(url) ? url : `https://${url}`)} catch {return snapshot()}
      if (!['https:', 'http:'].includes(target.protocol)) return snapshot();
      const tab = active();
      tab.history = [...tab.history.slice(0, tab.position + 1), target.href];
      tab.position++; tab.reloads = 0;
      return publish();
    },
    goBack: async () => {const tab = active(); tab.position = Math.max(0, tab.position - 1); return publish()},
    goForward: async () => {const tab = active(); tab.position = Math.min(tab.history.length - 1, tab.position + 1); return publish()},
    reload: async () => {active().reloads++; return publish()},
    retryWithClean: denied, openExternal: denied, openDiagnosticConsole: denied, showTabMenu: denied,
    syncTheme: async () => ({ok: true}), updateBounds: async () => ({ok: true}), petSyncViewport: async () => ({ok: true}),
  };
}
