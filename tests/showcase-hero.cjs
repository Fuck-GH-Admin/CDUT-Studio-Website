/* Supplemental real-motion capture. Security fixes leave the hero code unchanged. */
const {chromium}=require('playwright');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const out=process.env.R06_EVIDENCE_DIR||path.resolve(__dirname,'../reports');
fs.mkdirSync(out,{recursive:true});
const report={scenarios:[],errors:[]};
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.R06_BROWSER_EXECUTABLE,headless:true,args:['--no-sandbox']});
 try{
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
   const name=viewport.width===1440?'desktop':'mobile';
   const context=await browser.newContext({viewport,reducedMotion:'no-preference',colorScheme:'light'});
   const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));
   await page.goto((process.env.R06_BASE_URL||'http://127.0.0.1:8173')+'/index.html');
   await page.waitForTimeout(6000);
   assert.equal(await page.evaluate(()=>scrollY),0,'client preload must not scroll the hero');
   const canvas=page.locator('#hero-ascii-canvas');
   const before=await canvas.evaluate(e=>e.toDataURL());
   await page.mouse.move(viewport.width*.75,viewport.height*.7);await page.waitForTimeout(450);
   const after=await canvas.evaluate(e=>e.toDataURL());assert.notEqual(before,after,'live ASCII canvas must continue drawing');
   await page.mouse.click(viewport.width*.72,viewport.height*.6);await page.waitForTimeout(200);
   await page.screenshot({path:path.join(out,`${name}-hero-motion.png`)});
   for(const id of ['01','02','03','04','05']){
    await page.locator(`[data-module="${id}"] .rounded-visual-card`).scrollIntoViewIfNeeded();
    await page.locator(`[data-module="${id}"] .r06-client-ready`).waitFor({timeout:30000});
   }
   for(const theme of ['light','dark']){
    if(await page.locator('html').getAttribute('data-theme')!==theme)await page.locator('#themeToggle').click();
    await page.evaluate(()=>scrollTo(0,0));await page.mouse.move(5,80);await page.waitForTimeout(800);
    await page.screenshot({path:path.join(out,`${name}-full-motion-${theme}.png`),fullPage:true});
   }
   report.scenarios.push({viewport,motion:'no-preference',canvasChanged:true,canvasBeforeSha256:crypto.createHash('sha256').update(before).digest('hex'),canvasAfterSha256:crypto.createHash('sha256').update(after).digest('hex'),fiveRealFrames:await page.locator('.r06-client-ready iframe').count()});
   await context.close();
  }
  assert.deepEqual(report.errors,[]);report.status='passed';console.log(JSON.stringify(report,null,2));
 }catch(error){report.status='failed';report.failure=error.stack;throw error}
 finally{fs.writeFileSync(path.join(out,'hero-report.json'),JSON.stringify(report,null,2));await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
