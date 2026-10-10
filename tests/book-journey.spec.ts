import { expect, test, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { book } from "../lib/book-content";

const ids = [
  "inside",
  "themes",
  "pages",
  "chapters",
  "authors",
  "voices",
  "buy",
];
async function enter(page: Page) {
  await page.goto("/");
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-world-status",
    "ready",
    { timeout: 15000 },
  );
  await expect(page.locator("#literary-experience")).toHaveClass(
    /is-immersive/,
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#cinematic-intro")).toBeHidden();
}
async function travel(
  page: Page,
  id: string,
  phase:
    | "start"
    | "rotate"
    | "flat"
    | "dive"
    | "read"
    | "retract"
    | "retreat"
    | "upright"
    | "turn",
  station = 0,
) {
  const requested = await page.locator("#" + id).evaluate(
    (el, args) => {
      const node = el as HTMLElement;
      const e = +node.dataset.readerEntrance!,
        h = +node.dataset.readerHold!,
        x = +node.dataset.readerExit!,
        count = +node.dataset.readerStations!;
      const entry = { start: 0, rotate: 0.37, flat: 0.58, dive: 0.86 },
        exit = { retract: 0.12, retreat: 0.4, upright: 0.73, turn: 0.88 };
      const d =
        args.phase in entry
          ? e * entry[args.phase as keyof typeof entry]
          : args.phase === "read"
            ? e + h * (count > 1 ? args.station / (count - 1) : 0.2) + 1
            : e + h + x * exit[args.phase as keyof typeof exit];
      const target = el.getBoundingClientRect().top + scrollY + d;
      scrollTo({
        top: target,
        behavior: "instant",
      });
      return { target, nativeY: scrollY };
    },
    { phase, station },
  );
  try {
    await expect(page.locator("#" + id)).toHaveClass(/is-current/);
  } catch (error) {
    const state = await page.evaluate(() => ({
      nativeY: scrollY,
      viewport: [innerWidth, innerHeight],
      root: { ...document.getElementById("literary-experience")!.dataset },
      chapters: [
        ...document.querySelectorAll<HTMLElement>(".reader-scene"),
      ].map((chapter) => ({
        id: chapter.id,
        classes: chapter.className,
        top: chapter.getBoundingClientRect().top + scrollY,
        ...chapter.dataset,
      })),
    }));
    await test.info().attach("scroll-state", {
      body: JSON.stringify({ id, phase, station, requested, state }, null, 2),
      contentType: "application/json",
    });
    throw error;
  }
  // The current chapter may already match. Wait for the scroll-triggered render,
  // rather than inspecting the previous camera pose before its animation frame.
  await page.evaluate(
    () =>
      new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      ),
  );
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-reader-settled",
    "true",
  );
}
async function pose(page: Page) {
  return page.locator("#literary-experience").evaluate((el) => ({
    rotation: +(el as HTMLElement).dataset.bookRotation!,
    flip: +(el as HTMLElement).dataset.pageFlip!,
    curvature: +(el as HTMLElement).dataset.pageCurvature!,
    camera: (el as HTMLElement).dataset.cameraPosition!,
    uuid: (el as HTMLElement).dataset.worldUuid!,
  }));
}
async function station(page: Page, id: string, index: number) {
  await travel(page, id, "read", index);
  const card = page.locator(
    `.journey-card[data-chapter="${id}"][data-station="${index}"]`,
  );
  await expect(card).toHaveClass(/is-readable/);
  await expect(card).toHaveAttribute("data-rise", /^0\.999|^1\.000/);
  return card;
}

test("one real WebGL book rotates XY to XZ, camera descends and stops with the scroll", async ({
  page,
}) => {
  await enter(page);
  await travel(page, "inside", "start");
  await expect(page.locator("canvas.book-webgl")).toBeVisible();
  const initial = await pose(page);
  expect(initial.rotation).toBe(0);
  expect(
    await page
      .locator("canvas.book-webgl")
      .evaluate((canvas: HTMLCanvasElement) =>
        Boolean(canvas.getContext("webgl2")),
      ),
  ).toBe(true);
  await travel(page, "inside", "rotate");
  await expect
    .poll(async () => (await pose(page)).rotation)
    .toBeGreaterThan(44);
  expect((await pose(page)).rotation).toBeLessThan(46);
  await travel(page, "inside", "flat");
  await expect.poll(async () => (await pose(page)).rotation).toBe(90);
  const high = (await pose(page)).camera.split(",").map(Number);
  await station(page, "inside", 0);
  const low = (await pose(page)).camera.split(",").map(Number);
  expect(low[1]).toBeLessThan(high[1] - 4);
  expect(low[2]).toBeLessThan(high[2]);
  await station(page, "inside", 2);
  const end = await pose(page);
  expect(+end.camera.split(",")[2]).toBeLessThan(low[2] - 3);
  expect(end.uuid).toBe(initial.uuid);
  expect(end.rotation).toBe(90);
  await page.waitForTimeout(400);
  const frames = await page
    .locator("#literary-experience")
    .getAttribute("data-world-frames");
  await page.waitForTimeout(250);
  expect(
    await page
      .locator("#literary-experience")
      .getAttribute("data-world-frames"),
  ).toBe(frames);
});

test("content retracts, camera retreats while flat, book stands upright, then curved paper turns", async ({
  page,
}) => {
  await enter(page);
  await station(page, "inside", 2);
  const camera = await pose(page);
  await travel(page, "inside", "retract");
  await expect
    .poll(() =>
      page
        .locator('.journey-card[data-chapter="inside"][data-station="2"]')
        .getAttribute("data-rise"),
    )
    .not.toBe("1.00000");
  expect((await pose(page)).rotation).toBe(90);
  await travel(page, "inside", "retreat");
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-reader-phase",
    "Pulling back above the book",
  );
  expect((await pose(page)).rotation).toBe(90);
  expect(+(await pose(page)).camera.split(",")[1]).toBeGreaterThan(
    +camera.camera.split(",")[1] + 5,
  );
  await travel(page, "inside", "upright");
  await expect.poll(async () => (await pose(page)).rotation).toBe(0);
  expect((await pose(page)).flip).toBe(0);
  await travel(page, "inside", "turn");
  await expect
    .poll(async () => (await pose(page)).curvature)
    .toBeGreaterThan(0.2);
  const turn = await pose(page);
  expect(turn.rotation).toBe(0);
  expect(turn.flip).toBeGreaterThan(0.49);
  expect(turn.flip).toBeLessThan(0.51);
  await travel(page, "themes", "start");
  expect((await pose(page)).uuid).toBe(turn.uuid);
  await travel(page, "inside", "turn");
  expect(await pose(page)).toEqual(turn);
  await travel(page, "inside", "flat");
  expect((await pose(page)).rotation).toBe(90);
  await travel(page, "inside", "start");
  expect((await pose(page)).rotation).toBe(0);
});

test("every chapter and content stop is legible, anchored and uses the same book", async ({
  page,
}) => {
  test.setTimeout(60000);
  await enter(page);
  let uuid = "";
  for (const [i, id] of ids.entries()) {
    const count = +(await page
      .locator("#" + id)
      .getAttribute("data-reader-stations"))!;
    for (let j = 0; j < count; j++) {
      const card = await station(page, id, j),
        p = await pose(page);
      if (!uuid) uuid = p.uuid;
      expect(p.uuid).toBe(uuid);
      expect(p.rotation).toBe(90);
      const scale = +(await page
        .locator("#literary-experience")
        .getAttribute("data-book-scale"))!;
      const camera = p.camera.split(",").map(Number);
      expect(camera[0]).toBeGreaterThan(0);
      expect(camera[0]).toBeLessThan(8 * scale);
      expect(Math.abs(camera[2])).toBeLessThan(((8 * 800) / 529 / 2) * scale);
      expect(camera[1]).toBeGreaterThan(0.33 * scale);
      const box = await card.boundingBox(),
        v = page.viewportSize()!;
      expect(box!.x, `${id}/${j} left`).toBeGreaterThan(-3);
      expect(box!.x + box!.width, `${id}/${j} right`).toBeLessThan(v.width + 3);
      expect(box!.y, `${id}/${j} top`).toBeGreaterThan(75);
      expect(box!.y + box!.height, `${id}/${j} bottom`).toBeLessThan(
        v.height - 80,
      );
      expect(await card.evaluate((el) => (el as HTMLElement).inert)).toBe(
        false,
      );
    }
    await expect(page.locator("[data-reader-position]")).toHaveText(
      `Page ${String(i + 1).padStart(2, "0")} / 07`,
    );
    await travel(page, id, "turn");
    expect((await pose(page)).rotation).toBe(0);
  }
});

test("reflection, chapter tabs, reviews and retailer links work inside their 3D anchors", async ({
  page,
}) => {
  await enter(page);
  await station(page, "pages", 1);
  await page.getByRole("button", { name: "Next reflection" }).click();
  await expect(page.locator("#preview-1")).toBeVisible();
  await station(page, "chapters", 1);
  await page.getByRole("tab").nth(2).click();
  await expect(page.locator("#chapter-tab-2")).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page.keyboard.press("Home");
  await expect(page.locator("#chapter-tab-0")).toBeFocused();
  await station(page, "voices", 1);
  await page
    .locator('.journey-card[data-chapter="voices"][data-station="1"] summary')
    .click();
  await expect(
    page.locator(
      '.journey-card[data-chapter="voices"][data-station="1"] details',
    ),
  ).toHaveAttribute("open", "");
  await station(page, "buy", 0);
  await expect(
    page.getByRole("link", { name: "Buy on Amazon", exact: false }),
  ).toHaveAttribute("href", book.amazon);
});

test("scene and page navigation, Reading view and reduced motion preserve position and content", async ({
  page,
}) => {
  await enter(page);
  await station(page, "inside", 0);
  await page.getByRole("button", { name: "Next scene", exact: true }).click();
  await expect(page.locator("[data-reader-station]")).toHaveText("Scene 2 / 3");
  await page.getByRole("button", { name: "Next book page" }).click();
  await expect(page.locator("#themes")).toHaveClass(/is-reading/);
  const uuid = (await pose(page)).uuid;
  await page
    .getByRole("button", { name: "Switch to reading view without book motion" })
    .click();
  await expect(page.locator("#literary-experience")).not.toHaveClass(
    /is-immersive/,
  );
  await expect(page.locator("[data-reader-stage]")).toBeHidden();
  await expect(page.locator("#themes #meaning-heading")).toBeVisible();
  await expect(page.locator("#inside #book-heading")).toHaveCount(1);
  expect(
    await page.evaluate(() => sessionStorage.getItem("ssh-reader-mode")),
  ).toBe("reading");
  await page
    .getByRole("button", { name: "Switch to immersive book view" })
    .click();
  await expect(page.locator("#themes")).toHaveClass(/is-reading/);
  expect((await pose(page)).uuid).toBe(uuid);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("#literary-experience")).not.toHaveClass(
    /is-immersive/,
  );
  await expect(page.locator("#themes #meaning-heading")).toBeVisible();
});

test("short landscape screens retain readable controls and resume the same book in portrait", async ({
  page,
}) => {
  await enter(page);
  await station(page, "chapters", 1);
  const initial = await pose(page);
  const viewport = page.viewportSize()!;
  for (const [width, height] of [
    [844, 390],
    [568, 320],
  ]) {
    await page.setViewportSize({ width, height });
    await expect(page.locator("#literary-experience")).not.toHaveClass(
      /is-immersive/,
    );
    await expect(page.locator("#literary-experience")).toHaveAttribute(
      "data-reader-adaptation",
      "short-screen",
    );
    await expect(page.locator("[data-reader-mode]")).toBeDisabled();
    await page.locator("#chapters").scrollIntoViewIfNeeded();
    await page.getByRole("tab").nth(3).click();
    await expect(page.locator("#chapter-tab-3")).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize(viewport);
  await expect(page.locator("#literary-experience")).toHaveClass(
    /is-immersive/,
  );
  await station(page, "chapters", 1);
  expect((await pose(page)).uuid).toBe(initial.uuid);
  await expect(page.locator("#chapter-tab-3")).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("active 3D content retains automated WCAG AA contrast and semantics", async ({
  page,
}) => {
  await enter(page);
  for (const [id, index] of [
    ["inside", 0],
    ["chapters", 1],
    ["buy", 0],
  ] as const) {
    await station(page, id, index);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations, id).toEqual([]);
  }
});

test("WebGL initialization failure preserves the complete reading document", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      this: HTMLCanvasElement,
      type: string,
      ...args: unknown[]
    ) {
      if (type === "webgl" || type === "webgl2") return null;
      return original.apply(this, [type, ...args] as Parameters<
        typeof original
      >);
    } as typeof original;
  });
  await page.goto("/");
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-world-status",
    "unavailable",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#literary-experience")).not.toHaveClass(
    /is-immersive/,
  );
  await expect(page.locator("#inside #book-heading")).toBeVisible();
  await expect(page.locator("#authors #authors-heading")).toHaveCount(1);
});

test("a lost WebGL context releases the scene and preserves interactive Reading view", async ({
  page,
}) => {
  await enter(page);
  await station(page, "pages", 1);
  await page
    .locator("canvas.book-webgl")
    .evaluate((canvas: HTMLCanvasElement) =>
      canvas
        .getContext("webgl2")!
        .getExtension("WEBGL_lose_context")!
        .loseContext(),
    );
  await expect(page.locator("#literary-experience")).not.toHaveClass(
    /is-immersive/,
  );
  await expect(page.locator("canvas.book-webgl")).toHaveCount(0);
  await expect(page.locator("#pages .reading-preview")).toBeVisible();
  await page.getByRole("button", { name: "Next reflection" }).click();
  await expect(page.locator("#preview-1")).toBeVisible();
  await page.getByRole("button", { name: "Retry immersive book view" }).click();
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-world-status",
    "ready",
    { timeout: 15000 },
  );
  await expect(page.locator("canvas.book-webgl")).toHaveCount(1);
  await station(page, "pages", 1);
  await expect(page.locator("#preview-1")).toBeVisible();
});

test("resize and rapid reverse jumps keep finite camera poses and bounded geometry work", async ({
  page,
}) => {
  test.setTimeout(60000);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await enter(page);
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const [id, phase] of [
      ["inside", "flat"],
      ["voices", "read"],
      ["inside", "turn"],
      ["chapters", "dive"],
      ["inside", "start"],
    ] as const) {
      await travel(page, id, phase);
      expect(
        (await pose(page)).camera.split(",").map(Number).every(Number.isFinite),
      ).toBe(true);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await station(page, "chapters", 1);
    const box = await page
      .locator('.journey-card[data-chapter="chapters"][data-station="1"]')
      .boundingBox();
    expect(box!.x).toBeGreaterThan(-3);
    expect(box!.x + box!.width).toBeLessThan(width + 3);
    expect(
      +(await page
        .locator("#literary-experience")
        .getAttribute("data-draw-calls"))!,
    ).toBeLessThan(100);
    expect(
      +(await page
        .locator("#literary-experience")
        .getAttribute("data-world-triangles"))!,
    ).toBeLessThan(100000);
  }
  expect(errors).toEqual([]);
});
test("the loader displays the genuine local cover after decoding, with a gentle reveal", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const cover = page.locator("[data-intro-cover]");
  await expect(cover).toHaveAttribute(
    "src",
    new RegExp(book.coverAsset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"),
  );
  await expect(page.locator(".intro-book")).toHaveClass(/is-ready/);
  expect(
    await cover.evaluate((img: HTMLImageElement) => [
      img.naturalWidth,
      img.naturalHeight,
    ]),
  ).toEqual([529, 800]);
  await expect(page.locator(".intro-book span")).toHaveCount(0);
  await expect(page.locator("#cinematic-intro")).toHaveCSS(
    "transition-duration",
    "0.9s",
  );
  await expect(page.locator("#cinematic-intro")).toBeHidden({ timeout: 6500 });
});

test("a missing original cover never substitutes an invented loading-screen book", async ({
  page,
}) => {
  await page.route("**/media/still-standing-still-here-cover.jpg", (route) =>
    route.abort(),
  );
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".intro-book")).toHaveClass(/is-missing/);
  await expect(page.locator(".intro-book")).toBeHidden();
  await expect(page.locator("#cinematic-intro")).toBeHidden({ timeout: 6500 });
  await expect(page.locator(".intro-book span")).toHaveCount(0);
});
