import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { book } from "../lib/book-content";

async function enter(page: import("@playwright/test").Page) {
  await page.goto("/");
  await expect(page.locator("#literary-experience")).toHaveClass(
    /is-immersive/,
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#cinematic-intro")).toBeHidden();
  await page.evaluate(() => document.fonts.ready);
}
async function travel(
  page: import("@playwright/test").Page,
  id: string,
  phase: "start" | "flat" | "read" | "retreat" | "turn",
  progress = 0.05,
) {
  await page.locator("#" + id).evaluate(
    (el, args) => {
      const node = el as HTMLElement;
      const entrance = Number(node.dataset.readerEntrance);
      const hold = Number(node.dataset.readerHold);
      const exit = Number(node.dataset.readerExit) + innerHeight;
      const distance =
        args.phase === "start"
          ? 0
          : args.phase === "flat"
            ? entrance * 0.45
            : args.phase === "read"
              ? entrance + hold * args.progress
              : entrance + hold + exit * (args.phase === "turn" ? 0.92 : 0.45);
      scrollTo({
        top: scrollY + el.getBoundingClientRect().top + distance,
        behavior: "instant",
      });
    },
    { phase, progress },
  );
  await expect(page.locator("#" + id)).toHaveClass(/is-current/);
}

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

test("book opens, becomes flat, flies into page one and reverses with scrolling", async ({
  page,
}) => {
  await enter(page);
  await travel(page, "inside", "start");
  await expect(page.locator("[data-reader-stage]")).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator("#literary-experience")
        .evaluate((el) =>
          parseFloat(
            (el as HTMLElement).style.getPropertyValue("--reader-hinge"),
          ),
        ),
    )
    .toBe(0);
  expect(
    await page
      .locator("#inside .reader-paper")
      .evaluate((el) => (el as HTMLElement).inert),
  ).toBe(true);
  await travel(page, "inside", "flat");
  await expect
    .poll(() =>
      page
        .locator("#literary-experience")
        .evaluate((el) =>
          parseFloat(
            (el as HTMLElement).style.getPropertyValue("--reader-pitch"),
          ),
        ),
    )
    .toBeGreaterThan(60);
  await expect
    .poll(() =>
      page
        .locator("#literary-experience")
        .evaluate((el) =>
          parseFloat(
            (el as HTMLElement).style.getPropertyValue("--reader-hinge"),
          ),
        ),
    )
    .toBeLessThan(-120);
  await expect
    .poll(() =>
      page
        .locator("#book-heading")
        .evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m43),
    )
    .toBeGreaterThan(60);
  await travel(page, "inside", "read");
  await expect(page.locator("#inside")).toHaveClass(/is-reading/);
  await expect
    .poll(() =>
      page
        .locator("#book-heading")
        .evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m43),
    )
    .toBe(0);
  await expect(page.locator("#inside .book-introduction")).toBeVisible();
  expect(
    await page
      .locator("#inside .reader-paper")
      .evaluate((el) => (el as HTMLElement).inert),
  ).toBe(false);
  await travel(page, "inside", "turn");
  await expect
    .poll(() =>
      page
        .locator("#literary-experience")
        .evaluate((el) =>
          parseFloat(
            (el as HTMLElement).style.getPropertyValue("--reader-turn"),
          ),
        ),
    )
    .toBeLessThan(-130);
  await travel(page, "inside", "start");
  await expect
    .poll(() =>
      page
        .locator("#literary-experience")
        .evaluate((el) =>
          parseFloat(
            (el as HTMLElement).style.getPropertyValue("--reader-hinge"),
          ),
        ),
    )
    .toBe(0);
});

test("all seven sections are book pages, with readable content and accessible controls", async ({
  page,
}) => {
  await enter(page);
  await expect(page.locator(".reader-scene")).toHaveCount(7);
  for (const [i, id] of [
    "inside",
    "themes",
    "pages",
    "chapters",
    "authors",
    "voices",
    "buy",
  ].entries()) {
    await travel(page, id, "read");
    await expect(page.locator("#" + id)).toHaveClass(/is-reading/);
    await expect(page.locator("[data-reader-position]")).toHaveText(
      `Page ${String(i + 1).padStart(2, "0")} / 07`,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const paper = await page.locator("#" + id + " .reader-paper").boundingBox();
    expect(
      Math.abs(paper!.width - (await page.viewportSize())!.width),
    ).toBeLessThan(2);
  }
  await travel(page, "pages", "read", 0.65);
  await page.getByRole("button", { name: "Next reflection" }).click();
  await expect(page.locator("#preview-1")).toBeVisible();
  await travel(page, "chapters", "read", 0.4);
  await page.getByRole("tab").nth(2).click();
  await expect(page.locator("#chapter-tab-2")).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("page navigation and reading view preserve position and the motion preference", async ({
  page,
}) => {
  await enter(page);
  await travel(page, "inside", "read");
  await page.getByRole("button", { name: "Next book page" }).click();
  await expect(page.locator("#themes")).toHaveClass(/is-reading/);
  await page
    .getByRole("button", { name: "Switch to reading view without book motion" })
    .click();
  await expect(page.locator("#literary-experience")).not.toHaveClass(
    /is-immersive/,
  );
  await expect(page.locator("[data-reader-stage]")).toBeHidden();
  expect(
    await page
      .locator("#themes .reader-paper")
      .evaluate((el) => (el as HTMLElement).inert),
  ).toBe(false);
  expect(
    await page.evaluate(() => sessionStorage.getItem("ssh-reader-mode")),
  ).toBe("reading");
  await page
    .getByRole("button", { name: "Switch to immersive book view" })
    .click();
  await expect(page.locator("#themes")).toHaveClass(/is-reading/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("#literary-experience")).not.toHaveClass(
    /is-immersive/,
  );
  await expect(page.locator("[data-reader-stage]")).toBeHidden();
});

test("immersive reading retains automated WCAG AA contrast and semantics", async ({
  page,
}) => {
  await enter(page);
  for (const id of ["inside", "chapters", "buy"]) {
    await travel(page, id, "read", 0.05);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations, id).toEqual([]);
  }
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

test("book flights stay within small-phone, tablet and laptop viewports without runtime errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await enter(page);
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const phase of ["start", "flat", "read", "retreat", "turn"] as const) {
      await travel(page, "inside", phase);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${phase} at ${width}px`,
      ).toBe(true);
    }
    await travel(page, "inside", "start");
    const before = await page
      .locator(".reader-world")
      .evaluate((el) => getComputedStyle(el).transform);
    await travel(page, "inside", "flat");
    await expect
      .poll(() =>
        page
          .locator(".reader-world")
          .evaluate((el) => getComputedStyle(el).transform),
      )
      .not.toBe(before);
  }
  expect(errors).toEqual([]);
});
