import { expect, test, Page } from "@playwright/test";
import { book } from "../lib/book-content";

const root = (page: Page) => page.locator("#literary-experience");
async function purchase(page: Page) {
  if (await page.locator(".menu-toggle").isVisible())
    await page.locator(".menu-toggle").click();
  await page.locator(".nav-purchase").click();
}
async function ready(page: Page) {
  await expect(root(page)).toHaveAttribute("data-world-status", "ready", {
    timeout: 15000,
  });
  await expect(root(page)).toHaveClass(/is-immersive/);
  await page.keyboard.press("Escape");
}
async function buyVisible(page: Page) {
  await expect(page.locator("#buy")).toHaveClass(/is-reading/);
  const card = page.locator('.journey-card[data-chapter="buy"]');
  await expect(card).toHaveClass(/is-readable/);
  await expect(page.getByRole("link", { name: "Buy on Amazon" })).toBeVisible();
  return card;
}

test("the loader is the first rendered view before delayed enhancement, and early Skip works", async ({
  page,
}) => {
  const pending: import("@playwright/test").Route[] = [];
  await page.route("**/experience.js", (route) => {
    pending.push(route);
  });
  await page.route("**/book-journey.js", (route) => {
    pending.push(route);
  });
  await page.goto("/", { waitUntil: "commit" });
  await expect(page.locator("#cinematic-intro")).toBeVisible();
  await expect(page.locator(".hero")).toHaveCSS("visibility", "hidden");
  await page.locator(".intro-skip").click();
  await expect(page.locator(".hero")).toHaveCSS("visibility", "visible");
  await Promise.all(pending.map((route) => route.continue()));
  await expect(root(page)).toHaveAttribute("data-initialized", "true");
  await expect(page.locator("#cinematic-intro")).toBeHidden();
});

test("failed enhancement never traps the visitor behind the initial loader", async ({
  page,
}) => {
  await page.route("**/experience.js", (route) => route.abort());
  await page.route("**/book-journey.js", (route) => route.abort());
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#cinematic-intro")).toBeVisible();
  await expect(page.locator("#cinematic-intro")).toBeHidden({ timeout: 8500 });
  await expect(page.locator(".hero")).toHaveCSS("visibility", "visible");
  await expect(
    page.locator("#buy").getByRole("link", { name: "Buy on Amazon" }),
  ).toHaveAttribute("href", book.amazon);
});

test("Get the book shows real purchase pixels and opens the preserved retailer destination", async ({
  page,
}) => {
  await page.goto("/");
  await ready(page);
  await purchase(page);
  const card = await buyVisible(page);
  // A DOM visibility assertion alone missed the sibling canvas painting over
  // this panel. Pixel snapshots guard the actual browser composition.
  await expect(card).toHaveScreenshot("purchase-panel.png", {
    maxDiffPixelRatio: 0.02,
    animations: "disabled",
  });
  const link = page.getByRole("link", { name: "Buy on Amazon" });
  await expect(link).toHaveAttribute("href", book.amazon);
  const popup = page.waitForEvent("popup");
  const outbound = page.context().waitForEvent("request", {
    predicate: (request) =>
      request.isNavigationRequest() && request.url() === book.amazon,
  });
  await link.click();
  const retailer = await popup;
  expect((await outbound).url()).toBe(book.amazon);
  await retailer.close();
});

test("direct purchase links, reload and history retain a readable final chapter", async ({
  page,
}) => {
  await page.goto("/#buy");
  await ready(page);
  await buyVisible(page);
  await page.reload();
  await ready(page);
  await buyVisible(page);
  if (await page.locator(".menu-toggle").isVisible())
    await page.locator(".menu-toggle").click();
  await page.locator('#navigation a[href="#inside"]').click();
  await expect(page.locator("#inside")).toHaveClass(/is-reading/);
  await purchase(page);
  await buyVisible(page);
  await page.goBack();
  await expect(page.locator("#inside")).toHaveClass(/is-reading/);
  await page.goForward();
  await buyVisible(page);
});

test("purchase navigation during delayed scene startup resumes at the requested page", async ({
  page,
}) => {
  const pending: import("@playwright/test").Route[] = [];
  await page.route("**/book-world/renderer-*.js", (route) => {
    pending.push(route);
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(root(page)).toHaveAttribute("data-world-status", "loading");
  await page.keyboard.press("Escape");
  await purchase(page);
  await Promise.all(pending.map((route) => route.continue()));
  await ready(page);
  await buyVisible(page);
  await expect(page.locator("[data-reader-position]")).toHaveText(
    "Page 07 / 07",
  );
});

test("resizing preserves the chapter, camera progress and functioning purchase controls", async ({
  page,
}) => {
  await page.goto("/#buy");
  await ready(page);
  await buyVisible(page);
  const uuid = await root(page).getAttribute("data-world-uuid");
  const progress = +(await root(page).getAttribute("data-reader-progress"))!;
  for (const viewport of [
    { width: 800, height: 900 },
    { width: 320, height: 740 },
    { width: 1440, height: 1000 },
  ]) {
    await page.setViewportSize(viewport);
    await buyVisible(page);
    await expect(root(page)).toHaveAttribute("data-world-uuid", uuid!);
    expect(
      +(await root(page).getAttribute("data-reader-progress"))!,
    ).toBeCloseTo(progress, 2);
    const link = page.getByRole("link", { name: "Buy on Amazon" });
    const box = (await link.boundingBox())!;
    expect(box.x).toBeGreaterThan(0);
    expect(box.x + box.width).toBeLessThan(viewport.width);
    expect(box.y).toBeGreaterThan(65);
    expect(box.y + box.height).toBeLessThan(viewport.height - 65);
  }
});

test("original heartbeat and wind start with consent, reuse one context, mute and clean up", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = window.AudioContext;
    const contexts: AudioContext[] = [],
      notes: OscillatorNode[] = [];
    Object.assign(window, { __audioContexts: contexts, __audioNotes: notes });
    window.AudioContext = class extends original {
      constructor() {
        super();
        contexts.push(this);
      }
      createOscillator() {
        const node = super.createOscillator();
        notes.push(node);
        return node;
      }
    };
  });
  const pending: import("@playwright/test").Route[] = [];
  await page.route("**/media/mountain-dawn*.webp", (route) => {
    pending.push(route);
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const intro = page.locator("#cinematic-intro");
  expect(
    await page.evaluate(() => (window as any).__audioContexts.length),
  ).toBe(0);
  await page.locator(".intro-sound").click();
  await expect(intro).toHaveAttribute("data-audio-state", "playing");
  expect(
    await page.evaluate(() =>
      (window as any).__audioNotes
        .slice(0, 2)
        .map((n: OscillatorNode) => n.frequency.value),
    ),
  ).toEqual([58, 46]);
  await page.locator(".intro-sound").click();
  await expect(intro).toHaveAttribute("data-audio-state", "muted");
  await page.locator(".intro-sound").click();
  await expect(intro).toHaveAttribute("data-audio-state", "playing");
  expect(
    await page.evaluate(() => (window as any).__audioContexts.length),
  ).toBe(1);
  await page.keyboard.press("Escape");
  await expect(intro).toHaveAttribute("data-audio-state", "closed");
  expect(
    await page.evaluate(() => (window as any).__audioContexts[0].state),
  ).toBe("closed");
  await Promise.all(pending.map((route) => route.abort()));
});

test("a delayed original cover cannot create a blank ready book or lose purchase navigation", async ({
  page,
}) => {
  const pending: import("@playwright/test").Route[] = [];
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.route("**/media/still-standing-still-here-cover.jpg", (route) => {
    pending.push(route);
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect.poll(() => pending.length).toBeGreaterThan(0);
  // Deliberately hold the critical image while the rest of the scene module
  // loads: readiness must not race its texture decode/upload.
  await page.waitForTimeout(700);
  await expect(root(page)).toHaveAttribute("data-world-status", "loading");
  await expect(page.locator("canvas.book-webgl")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await purchase(page);
  await Promise.all(pending.map((route) => route.continue()));
  await ready(page);
  await buyVisible(page);
  expect(errors).toEqual([]);
});
