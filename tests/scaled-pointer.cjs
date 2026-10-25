/* Map client coordinates to the scaled cross-origin iframe. Playwright's OOPIF
 * locator auto-scroll assumes an unscaled viewport and can scroll the parent.
 * Send real mouse/touch input at the actual visible target instead. */
const assert = require('node:assert/strict');
async function box(frame, locator) {
  await locator.waitFor({state:'visible'});
  const local = await locator.evaluate(element => {
    const r = element.getBoundingClientRect();
    return {x:r.x,y:r.y,width:r.width,height:r.height,canvasWidth:innerWidth,canvasHeight:innerHeight};
  });
  const outer = await (await frame.frameElement()).boundingBox();
  return {
    x:outer.x + local.x * outer.width / local.canvasWidth,
    y:outer.y + local.y * outer.height / local.canvasHeight,
    width:local.width * outer.width / local.canvasWidth,
    height:local.height * outer.height / local.canvasHeight,
    scaleX:outer.width/local.canvasWidth, scaleY:outer.height/local.canvasHeight,
  };
}
async function click(frame, locator, position) {
  const page = frame.page();
  let r = await box(frame,locator);
  const point = rect => ({x:rect.x+(position ? position.x*rect.scaleX : rect.width/2), y:rect.y+(position ? position.y*rect.scaleY : rect.height/2)});
  await page.mouse.move(point(r).x, point(r).y);
  await page.waitForTimeout(320); // retain the existing card hover animation
  r = await box(frame,locator);
  const p = point(r);
  assert(p.y >= 0 && p.y <= page.viewportSize().height, 'target must be visible in the homepage');
  await page.mouse.click(p.x,p.y);
}
async function tap(frame, locator) {
  const r = await box(frame,locator);
  await frame.page().touchscreen.tap(r.x+r.width/2,r.y+r.height/2);
}
module.exports = {box,click,tap};
