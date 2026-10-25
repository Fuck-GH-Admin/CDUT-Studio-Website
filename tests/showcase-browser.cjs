/* Real HTTP/Chromium acceptance. NODE_PATH may point to an external Playwright installation. */
const {chromium} = require('playwright');
const {click: clientClick, box: clientBox} = require('./scaled-pointer.cjs');
const {spawn, execFileSync} = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const output = process.env.R06_EVIDENCE_DIR || path.join(root, 'reports');
const baseline = process.env.R06_BASELINE_SHA || '';
const modules = ['01','02','03','04','05'];
const views = ['conversations','cdut-zone','cdut-zone','cdut-zone','agent-skills'];
const zones = [null,'ai-class','material-review','yanhu-express',null];
fs.mkdirSync(output, {recursive:true});
const report = {baseline, startedAt:new Date().toISOString(), browser:'', scenarios:[], errors:[], resourceErrors:[], demoExternalRequests:[], popups:[], memory:[]};
const servers = [];
async function serve(directory, port='0') {
  const server = spawn('python3', ['-u','-m','http.server',port,'--bind','127.0.0.1','--directory',directory], {stdio:['ignore','pipe','pipe']});
  servers.push(server);
  return new Promise((resolve,reject) => {
    const timer = setTimeout(()=>reject(new Error('HTTP server did not start')),10000);
    server.stdout.on('data', chunk => {const match=chunk.toString().match(/port (\d+)/);if(match){clearTimeout(timer);resolve(`http://127.0.0.1:${match[1]}`)}});
    server.on('exit', code => {if(code){clearTimeout(timer);reject(new Error(`HTTP server exit ${code}`))}});
  });
}
const sleep = ms => new Promise(resolve=>setTimeout(resolve,ms));
async function theme(page, target) {
  if (await page.locator('html').getAttribute('data-theme') !== target) {await page.locator('#themeToggle').click();await sleep(350)}
  assert.equal(await page.locator('html').getAttribute('data-theme'),target);
}
async function mounted(page,id) {
  const card=page.locator(`[data-module="${id}"] .rounded-visual-card`);
  await card.scrollIntoViewIfNeeded();
  await card.locator('.r06-client-stage').waitFor();
  await page.locator(`[data-module="${id}"] .r06-client-ready`).waitFor({timeout:30000});
  const frame=await (await card.locator('iframe').elementHandle()).contentFrame();
  await frame.waitForFunction(()=>typeof window.__CDUT_SHOWCASE__?.state==='function');
  return {card,frame};
}
async function geometry(card) {
  return card.evaluate(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return {left:r.left,top:r.top+scrollY,width:r.width,height:r.height,radius:s.borderRadius,shadow:s.boxShadow,padding:s.padding,aspect:s.aspectRatio}});
}
async function checkFrame(frame, index, targetTheme) {
  const state=await frame.evaluate(()=>window.__CDUT_SHOWCASE__.state());
  assert.equal(state.view,views[index]);assert.equal(state.zone,zones[index]);assert.equal(state.settingsOpen,false);
  assert.deepEqual(await frame.evaluate(()=>({width:innerWidth,height:innerHeight})),{width:1280,height:820});
  assert.equal(await frame.locator('html').evaluate(e=>e.classList.contains('dark')),targetTheme==='dark');
  assert.equal(await frame.locator('#webui-preview-controls').count(),0);
  assert.equal(await frame.locator('a[href]').count(),0);
  assert.equal(await frame.locator('iframe').count(),0);
}
async function interaction(page,frame,index) {
  if(index===0){
    await clientClick(frame,frame.getByText('主题与页面预览',{exact:true}).first());
    await frame.getByText('我想用这个 WebUI 做页面演示，主题和页面怎么切换？',{exact:true}).waitFor();
    await clientClick(frame,frame.getByText('认识会话工作区',{exact:true}).first());
    await frame.getByText('我刚打开 CDUT Studio 的会话页。这里能调整哪些选项？',{exact:true}).waitFor();
    assert.equal(await frame.getByRole('button',{name:'发送消息（Enter）',exact:true}).isDisabled(),true);
    return 'scaled mouse switches two seeded sessions and renders their different messages';
  }
  if(index===1){
    await frame.getByRole('heading',{name:'AI 速课堂',exact:true}).waitFor();
    assert.equal((await frame.evaluate(()=>window.__CDUT_SHOWCASE__.state())).activeTab,'webui-ai-class-session');
    await clientClick(frame,frame.getByRole('button',{name:'收起课程资料与大纲向导',exact:true}));
    await frame.getByRole('button',{name:'展开课程资料与大纲向导',exact:true}).waitFor();await sleep(350);
    await clientClick(frame,frame.getByRole('button',{name:'展开课程资料与大纲向导',exact:true}));
    await frame.getByRole('button',{name:'收起课程资料与大纲向导',exact:true}).waitFor();
    return 'dedicated classroom session; native course panel collapses and expands';
  }
  if(index===2){
    await frame.getByRole('heading',{name:'材料审核',exact:true}).waitFor();
    await frame.getByText('张三（模拟） · 2025-2026',{exact:true}).waitFor();
    const summary=frame.locator('summary').filter({hasText:'查看原文（21 段）'}).first();
    await clientClick(frame,summary);
    assert.equal(await summary.evaluate(e=>e.parentElement.open),true);
    await clientClick(frame,summary);
    assert.equal(await summary.evaluate(e=>e.parentElement.open),false);
    const scroller=frame.locator('[data-profer-navigation-region="content-review"] .overflow-y-auto').first();
    await scroller.evaluate(e=>e.scrollTop=0);
    const box=await clientBox(frame,scroller);const parentY=await page.evaluate(()=>scrollY);
    await page.mouse.move(box.x+box.width*.5,box.y+box.height*.7);await page.mouse.wheel(0,250);await sleep(180);
    assert((await scroller.evaluate(e=>e.scrollTop))>0,'review column must scroll internally');
    assert(Math.abs(await page.evaluate(()=>scrollY)-parentY)<2,'wheel must remain inside client');
    await scroller.evaluate(e=>e.scrollTop=0);
    return 'seeded case in three columns; rule source expands; actual wheel scrolls inside client';
  }
  if(index===3){
    await frame.getByText('离线网页演示',{exact:true}).waitFor();
    const tabs=frame.getByRole('button',{name:'关闭标签',exact:true});
    const count=await tabs.count();
    await clientClick(frame,frame.getByRole('button',{name:'新建标签',exact:true}));assert.equal(await tabs.count(),count+1);
    await clientClick(frame,frame.getByRole('button',{name:'教务系统',exact:true}));
    const address=frame.getByPlaceholder('输入网址或域名（支持站外访问）');
    await frame.waitForFunction(()=>document.querySelector('input[type="text"]')?.value.includes('jw.cdut.edu.cn'));
    assert((await address.inputValue()).includes('jw.cdut.edu.cn'));
    await clientClick(frame,frame.getByRole('button',{name:'后退',exact:true}));await frame.waitForFunction(()=>document.querySelector('input[type="text"]')?.value.includes('bsdt.cdut.edu.cn'));assert((await address.inputValue()).includes('bsdt.cdut.edu.cn'));
    await clientClick(frame,frame.getByRole('button',{name:'前进',exact:true}));await frame.waitForFunction(()=>document.querySelector('input[type="text"]')?.value.includes('jw.cdut.edu.cn'));assert((await address.inputValue()).includes('jw.cdut.edu.cn'));
    await clientClick(frame,frame.getByRole('button',{name:'刷新',exact:true}));
    await frame.getByText(/已在本地刷新 1 次/).waitFor();
    await clientClick(frame,frame.getByRole('button',{name:'新建标签',exact:true}));await clientClick(frame,tabs.last());assert.equal(await tabs.count(),count+1);
    await address.fill('https://example.invalid/offline-preview');await address.press('Enter');await address.blur();
    await frame.getByText('https://example.invalid/offline-preview',{exact:true}).waitFor();
    await clientClick(frame,frame.getByRole('button',{name:'后退',exact:true}));
    await frame.waitForFunction(()=>document.querySelector('input[type="text"]')?.value.includes('jw.cdut.edu.cn'));
    return 'native browser shell: new/close tabs, bookmark, typed address, local history and reload; no web content request';
  }
  await clientClick(frame,frame.getByPlaceholder('搜索 Skills...'));
  await frame.getByPlaceholder('搜索 Skills...').fill('课程');
  await frame.getByText('课程知识图谱',{exact:true}).waitFor();
  assert.equal(await frame.getByText('文档证据核验',{exact:true}).count(),0);
  await frame.getByPlaceholder('搜索 Skills...').fill('');
  await frame.getByText('文档证据核验',{exact:true}).waitFor();
  const skill=frame.getByRole('switch').first();
  const initial=await skill.getAttribute('aria-checked');await clientClick(frame,skill);
  await frame.waitForFunction(value=>document.querySelector('[role="switch"]')?.getAttribute('aria-checked')!==value,initial);
  await sleep(250);assert.notEqual(await skill.getAttribute('aria-checked'),initial);
  await clientClick(frame,skill);await frame.waitForFunction(value=>document.querySelector('[role="switch"]')?.getAttribute('aria-checked')===value,initial);
  return 'real Skills search filters three seeded skills; enable switch persists through reload and restores';
}
async function restrictions(frame,index) {
  await frame.evaluate(async()=>{
    const entry=await import('./assets/index-Dmr8w2zr.js');
    const main=await import('./assets/main-Dqivs-S6.js');
    entry.v().set(entry.x,'planning');
    entry.v().set(main.aT,true); // settingsOpenAtom, mapped by verified original source
  });
  assert.equal((await frame.evaluate(()=>window.__CDUT_SHOWCASE__.state())).view,views[index]);
  assert.equal((await frame.evaluate(()=>window.__CDUT_SHOWCASE__.state())).settingsOpen,false);
  await clientClick(frame,frame.locator('body'),{x:1260,y:800});
  for(const shortcut of ['Control+,','Control+k','Alt+ArrowLeft','Control+1']) await frame.page().keyboard.press(shortcut);
  if(zones[index]) {
    // Attempt the native close handler after removing the DOM disabled flag;
    // the Jotai lock must still preserve the assigned submodule.
    await frame.getByRole('button',{name:'关闭返回专区首页',exact:true}).evaluate(e=>{e.disabled=false;e.removeAttribute('data-showcase-limited');e.click();e.disabled=true;e.dataset.showcaseLimited='true'});
    assert.equal((await frame.evaluate(()=>window.__CDUT_SHOWCASE__.state())).zone,zones[index]);
  }
  const result=await frame.evaluate(async()=>({
    send:await window.electronAPI.sendAgentMessage({userMessage:'must not send'}),
    upload:await window.electronAPI.study.ingestDocuments({filePaths:['/not-a-real-file']}),
    external:await window.electronAPI.openExternal('https://example.invalid/'),
    popup:window.open('https://example.invalid/'),
  }));
  assert.equal(result.send.ok,false);assert.equal(result.upload.ok,false);assert.equal(result.external.ok,false);assert.equal(result.popup,null);
  const isolation=await frame.evaluate(()=>{
    localStorage.setItem('r06-isolation-probe',document.documentElement.dataset.showcaseView);
    try { return {access: 'allowed', value: parent.localStorage.getItem('r06-isolation-probe')}; }
    catch(error) { return {access: error.name}; }
  });
  assert.deepEqual(isolation,{access:'SecurityError'});
  assert.equal(await frame.page().evaluate(()=>localStorage.getItem('r06-isolation-probe')),null);
}
async function memory(browser,page,label) {
  const targets=[],seen=new Set();let total=0;
  for(const frame of page.frames()) {
    let cdp;
    try { cdp=await page.context().newCDPSession(frame===page.mainFrame()?page:frame); }
    catch(error) {
      // Same-process frames are already included in their containing isolate.
      if(frame!==page.mainFrame() && /separate CDP session|same process/.test(error.message))continue;
      throw error;
    }
    const isolate=await cdp.send('Runtime.getIsolateId');
    if(seen.has(isolate.id)){await cdp.detach();continue}
    seen.add(isolate.id);
    await cdp.send('HeapProfiler.collectGarbage');
    const heap=await cdp.send('Runtime.getHeapUsage');const dom=await cdp.send('Memory.getDOMCounters');
    total+=heap.usedSize;
    targets.push({isolate:isolate.id,origin:new URL(frame.url()).origin,jsHeapMiB:Math.round(heap.usedSize/1048576*10)/10,dom});
    await cdp.detach();
  }
  report.memory.push({label,frames:page.frames().length-1,jsHeapMiB:Math.round(total/1048576*10)/10,
    scope:'distinct V8 isolates, deduplicated across CDP iframe targets; not process RSS or GPU memory',targets});
}
async function regression(page,baseUrl,entry,mobile) {
  await page.goto(baseUrl+'/'+entry+'#/download');
  await page.locator('#view-download.active').waitFor();
  const direct='https://github.com/Nya-Angle/CDUT-Studio/releases/download/Dev.26.1/Windows.CDUT-Studio-Setup-Dev.26.1.exe';
  await page.locator(`#view-download a[href="${direct}"]`).first().waitFor();
  await page.goto(baseUrl+'/'+entry+'#/docs');await page.locator('#view-docs.active').waitFor();
  assert.equal(await page.locator('.docs-article').count(),14);
  assert.equal(await page.locator('.docs-chapter-intro').count(),6);
  await page.locator('#docsSearchInput').fill('材料审核');
  await page.locator('#docsSearchResults a[href="#/docs/03-features/review"]').first().click();
  assert(page.url().includes('#/docs/03-features/review'));
  await page.goto(baseUrl+'/'+entry+'#/home');
  await page.locator('#view-home.active').waitFor();
  assert.equal(await page.locator('#teamMemberGrid .team-member').count(),5);
  assert.equal(await page.locator('#teamMemberGrid a.member-surface').count(),3);
  if(mobile){
    await page.locator('#mobileMenuBtn').click();await page.keyboard.press('Escape');
    assert.equal(await page.locator('#mobileMenuBtn').getAttribute('aria-expanded'),'false');
  }
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
}
(async()=>{
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'r06-baseline-'));
  if(baseline){
    const archive=execFileSync('git',['archive',baseline],{cwd:root,maxBuffer:10*1024*1024});
    execFileSync('tar',['-x','-C',tmp],{input:archive});
  }
  let browser;
  try {
    const baseUrl=process.env.R06_BASE_URL || await serve(root,'8173');
    const baselineUrl=baseline?await serve(tmp):null;
    browser=await chromium.launch({headless:true,executablePath:process.env.R06_BROWSER_EXECUTABLE || undefined,args:['--no-sandbox']});
    report.browser=browser.version();
    for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
      const mobile=viewport.width===390;const name=mobile?'mobile':'desktop';
      const frozen=[];
      if(baselineUrl){
      const baselineContext=await browser.newContext({viewport,reducedMotion:'reduce'});
      const baselinePage=await baselineContext.newPage();await baselinePage.goto(baselineUrl+'/index-modular.html');
      for(const id of modules){const card=baselinePage.locator(`[data-module="${id}"] .rounded-visual-card`);await card.scrollIntoViewIfNeeded();frozen.push(await geometry(card))}
      await baselineContext.close();
      }
      for(const entry of ['index.html','index-modular.html']){
        const context=await browser.newContext({viewport,reducedMotion:'reduce',colorScheme:'light'});
        const page=await context.newPage();
        const scenario={viewport,entry,checks:[],modules:[]};report.scenarios.push(scenario);
        page.on('pageerror',e=>report.errors.push({entry,viewport,message:e.stack}));
        page.on('console',m=>{if(m.type()==='error')report.errors.push({entry,viewport,message:m.text()})});
        page.on('popup',p=>report.popups.push(p.url()));
        page.on('response',r=>{if(r.status()>=400 && (new URL(r.url()).hostname===new URL(baseUrl).hostname || r.url().includes('/demos/webui/'))) report.resourceErrors.push({url:r.url(),status:r.status()})});
        page.on('request',r=>{if(r.frame().url().includes('/demos/webui/') && new URL(r.url()).origin!==new URL(r.frame().url()).origin && !r.url().startsWith('data:') && !r.url().startsWith('blob:'))report.demoExternalRequests.push(r.url())});
        await page.goto(baseUrl+'/'+entry);await sleep(1200);assert.equal(await page.evaluate(()=>scrollY),0,'prefetched client must not scroll the homepage');await theme(page,'light');
        for(let i=0;i<modules.length;i++){
          const {card,frame}=await mounted(page,modules[i]);await checkFrame(frame,i,'light');
          await page.mouse.move(0,0);await sleep(260);
          const actual=await geometry(card);for(const key of Object.keys(frozen[i]||{})){
            if(typeof actual[key]==='number')assert(Math.abs(actual[key]-frozen[i][key])<1,`${name} ${modules[i]} geometry ${key}: ${actual[key]} vs ${frozen[i][key]}`);
            else assert.equal(actual[key],frozen[i][key]);
          }
          const hitBox=await card.boundingBox();await page.mouse.move(hitBox.x+hitBox.width*.5,hitBox.y+hitBox.height*.5);await sleep(350);
          const action=await interaction(page,frame,i);await restrictions(frame,i);
          await checkFrame(frame,i,'light');await card.scrollIntoViewIfNeeded();
          if(entry==='index.html')await page.screenshot({path:path.join(output,`${name}-${modules[i]}-light.png`)});
          if(i===1)await clientClick(frame,frame.getByRole('button',{name:'收起课程资料与大纲向导',exact:true}));
          scenario.modules.push({id:modules[i],action,state:await frame.evaluate(()=>window.__CDUT_SHOWCASE__.state()),geometry:actual});
          if(i===0 && !mobile && entry==='index.html')await memory(browser,page,'first card visible');
        }
        // Return to the classroom after it has been far offscreen: real state must survive.
        const classroom=await mounted(page,'02');await classroom.frame.getByRole('button',{name:'展开课程资料与大纲向导',exact:true}).waitFor();await sleep(350);await clientClick(classroom.frame,classroom.frame.getByRole('button',{name:'展开课程资料与大纲向导',exact:true}));assert.equal((await classroom.frame.evaluate(()=>window.__CDUT_SHOWCASE__.state())).activeTab,'webui-ai-class-session');
        if(!mobile && entry==='index.html')await memory(browser,page,'all five loaded, retained state');
        if(entry==='index.html'){
          await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:path.join(output,`${name}-full-light.png`),fullPage:true});
        }
        await theme(page,'dark');
        for(let i=0;i<modules.length;i++){
          const {card,frame}=await mounted(page,modules[i]);await checkFrame(frame,i,'dark');
          if(entry==='index.html')await page.screenshot({path:path.join(output,`${name}-${modules[i]}-dark.png`)});
        }
        if(entry==='index.html'){
          await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:path.join(output,`${name}-full-dark.png`),fullPage:true});
        }
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
        scenario.checks.push('initial homepage scroll remains zero; all five correct modules, per-frame interaction and retained state; fixed desktop canvas; baseline outer geometry unchanged; both themes; no horizontal overflow; atom/API/input restrictions');
        await regression(page,baseUrl,entry,mobile);scenario.checks.push('download direct URL, 21-source-document manual (welcome, six chapter intros, fourteen articles), five team cards/three links, home navigation'+(mobile?', mobile menu Escape':''));
        await context.close();
      }
    }
    assert.deepEqual(report.errors,[]);assert.deepEqual(report.resourceErrors,[]);assert.deepEqual(report.demoExternalRequests,[]);assert.deepEqual(report.popups,[]);
    report.status='passed';console.log(JSON.stringify({status:report.status,scenarios:report.scenarios.length,memory:report.memory,errors:report.errors},null,2));
  }catch(error){report.status='failed';report.failure=error.stack;throw error}
  finally{report.finishedAt=new Date().toISOString();fs.writeFileSync(path.join(output,'browser-report.json'),JSON.stringify(report,null,2));if(browser)await browser.close();for(const server of servers)server.kill();fs.rmSync(tmp,{recursive:true,force:true})}
})().catch(e=>{console.error(e);process.exitCode=1});
