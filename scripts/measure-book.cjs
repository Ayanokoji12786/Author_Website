// Run against a generated static site or a running production server.
// Cloud software-GPU timings are comparisons, not physical-device FPS claims.
const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  await page.goto(process.env.E2E_BASE_URL || "http://127.0.0.1:4173");
  await page.waitForFunction(
    () =>
      document.querySelector("#literary-experience").dataset.worldStatus ===
      "ready",
  );
  await page.keyboard.press("Escape");
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Performance.enable");
  const before = await cdp.send("Performance.getMetrics");
  const result = await page.evaluate(async () => {
    const root = document.querySelector("#literary-experience"),
      section = document.querySelector("#inside");
    const top = section.getBoundingClientRect().top + scrollY,
      e = +section.dataset.readerEntrance,
      h = +section.dataset.readerHold;
    scrollTo({ top: top + e * 0.2, behavior: "instant" });
    await new Promise((r) => setTimeout(r, 600));
    let intervals = [],
      last = performance.now(),
      first = +root.dataset.worldFrames,
      maxCalls = 0,
      maxTriangles = 0;
    for (let i = 0; i < 100; i++) {
      await new Promise(requestAnimationFrame);
      let now = performance.now();
      intervals.push(now - last);
      last = now;
      scrollTo({
        top: top + e * 0.2 + ((e * 0.8 + h) * i) / 99,
        behavior: "instant",
      });
      maxCalls = Math.max(maxCalls, +root.dataset.drawCalls);
      maxTriangles = Math.max(maxTriangles, +root.dataset.worldTriangles);
    }
    await new Promise((r) => setTimeout(r, 600));
    intervals.sort((a, b) => a - b);
    return {
      medianMs: intervals[50],
      p95Ms: intervals[95],
      frames: +root.dataset.worldFrames - first,
      maxCalls,
      maxTriangles,
      pixelRatio:
        document.querySelector("canvas.book-webgl").width / innerWidth,
    };
  });
  const after = await cdp.send("Performance.getMetrics");
  function metric(m, n) {
    return m.metrics.find((x) => x.name === n).value;
  }
  result.taskSeconds =
    metric(after, "TaskDuration") - metric(before, "TaskDuration");
  result.heapBytes = metric(after, "JSHeapUsedSize");
  console.log(JSON.stringify(result));
  await browser.close();
})();
