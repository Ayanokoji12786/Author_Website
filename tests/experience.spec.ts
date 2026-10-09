import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { book, chapters } from "../lib/book-content";

test.beforeEach(async ({ page }) => {
  // Deterministic external-asset failure path; the actual cover URL is preserved.
  await page.route("https://blueroseone.com/**", (route) => route.abort());
  await page.goto("/");
  await expect(page.locator("#literary-experience")).toHaveClass(/is-enhanced/);
  await page.evaluate(() => document.fonts.ready);
});

test("renders all eight sections, local assets, real links and metadata", async ({
  page,
}) => {
  await expect(page.locator("main > section")).toHaveCount(8);
  await expect(page.locator("h1")).toHaveText("Still Standing,Still Here.");
  await expect(
    page.locator("#inside a").filter({ hasText: "Buy on Amazon" }),
  ).toHaveAttribute("href", book.amazon);
  await expect(
    page.locator("#buy a").filter({ hasText: "Buy on Flipkart" }),
  ).toHaveAttribute("href", book.flipkart);
  const anchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((elements) => elements.map((el) => el.getAttribute("href")!));
  for (const anchor of anchors)
    await expect(page.locator(anchor)).toHaveCount(1);
  const canonical = await page
    .locator("link[rel=canonical]")
    .getAttribute("href");
  expect(new URL(canonical!).href).toBe(
    "https://still-standing-still-here.netlify.app/",
  );
  const schema = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ||
      "{}",
  );
  expect(schema.isbn).toBe(book.isbn);
  expect(schema.author.map((author: { name: string }) => author.name)).toEqual(
    book.authors,
  );
  expect(
    await page
      .locator(".mountain-photo")
      .first()
      .evaluate(
        (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
      ),
  ).toBe(true);
});

test("book can open and close with mouse/touch and keyboard after image failure", async ({
  page,
}) => {
  const button = page.locator(".book-open-control");
  await button.scrollIntoViewIfNeeded();
  // Desktop scrolling can already open the book; the manual control must
  // reliably toggle whichever state the visitor reaches.
  await page.waitForTimeout(300);
  const wasOpen = (await button.getAttribute("aria-pressed")) === "true";
  await button.click();
  await expect(button).toHaveAttribute("aria-pressed", String(!wasOpen));
  if (!wasOpen)
    await expect(page.locator("#book-model")).toHaveClass(/is-open/);
  else await expect(page.locator("#book-model")).not.toHaveClass(/is-open/);
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-pressed", String(wasOpen));
  await expect(page.locator(".cover-art")).toHaveClass(/is-missing/);
});

test("reading preview exposes real website reflections without changing height", async ({
  page,
}) => {
  await page.locator("[data-preview-next]").scrollIntoViewIfNeeded();
  const preview = page.locator(".reading-preview");
  const original = (await preview.boundingBox())!.height;
  const next = page.getByRole("button", { name: "Next reflection" });
  await next.click();
  await expect(page.locator("#preview-1")).toBeVisible();
  await expect(page.locator("#preview-0")).toBeHidden();
  await next.click();
  await expect(page.locator("#preview-2")).toBeVisible();
  await expect(next).toBeDisabled();
  expect(
    Math.abs((await preview.boundingBox())!.height - original),
  ).toBeLessThan(2);
  await page.getByRole("button", { name: "Previous reflection" }).click();
  await expect(page.locator("#preview-1")).toBeVisible();
  await expect(page.locator(".preview-count")).toHaveText(/02.*03/);
});

test("chapter tabs switch all six actual chapters and support arrow/home/end keys", async ({
  page,
}) => {
  for (let i = 0; i < chapters.length; i++) {
    const tab = page.locator(`#chapter-tab-${i}`);
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toHaveCount(1);
    await expect(page.locator(`#chapter-title-${i}`)).toHaveText(
      chapters[i].title,
    );
  }
  await page.keyboard.press("Home");
  await expect(page.locator("#chapter-tab-0")).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#chapter-tab-1")).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page.keyboard.press("End");
  await expect(page.locator("#chapter-tab-5")).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#chapter-tab-0")).toBeFocused();
});

test("mobile navigation opens, closes on escape/link, and follows section tone", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Compact navigation is a mobile-specific behavior.");
  const button = page.locator(".menu-toggle");
  await button.click();
  await expect(button).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(button).toBeFocused();
  await button.click();
  await page.locator('#navigation a[href="#pages"]').click();
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#site-header")).toHaveAttribute(
    "data-tone",
    "light",
  );
});

test("reviews retain original authors, dates and expandable full responses", async ({
  page,
}) => {
  await expect(page.locator(".reader-review")).toHaveCount(2);
  await expect(page.locator(".reader-review").last()).toContainText(
    "Raamki Bommisetty",
  );
  await page.locator(".reader-review").last().locator("summary").click();
  await expect(
    page.locator(".reader-review").last().locator("details"),
  ).toHaveAttribute("open", "");
  await expect(
    page.locator(".reader-review").last().locator("details p"),
  ).toContainText("age is no barrier");
});

test("no runtime exceptions, missing local assets, or horizontal overflow", async ({
  page,
}) => {
  const errors: string[] = [];
  const failedLocal: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1") &&
      response.status() >= 400
    )
      failedLocal.push(response.url());
  });
  await page.reload();
  for (const id of [
    "hero",
    "inside",
    "themes",
    "pages",
    "chapters",
    "authors",
    "voices",
    "buy",
  ]) {
    await page
      .locator("#" + id)
      .evaluate((el) =>
        el.scrollIntoView({ behavior: "instant", block: "start" }),
      );
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(overflow, id).toBe(false);
  }
  expect(errors).toEqual([]);
  expect(failedLocal).toEqual([]);
});

test("reduced motion remains usable and passes WCAG 2.1 AA automated checks", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("#literary-experience")).toHaveClass(/is-enhanced/);
  const animations = await page
    .locator(".hero h1 span")
    .first()
    .evaluate((el) => getComputedStyle(el).animationName);
  expect(animations).toBe("none");
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
});

test("no JavaScript preserves content, reviews, chapters, and purchase navigation", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: "reduce",
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.route("https://blueroseone.com/**", (route) => route.abort());
  await page.goto(baseURL!);
  await expect(page.locator("main > section")).toHaveCount(8);
  await expect(page.locator(".chapter-panel:visible")).toHaveCount(6);
  await expect(page.locator(".preview-page:visible")).toHaveCount(3);
  await expect(page.locator("#buy a").first()).toHaveAttribute(
    "href",
    book.amazon,
  );
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    ),
  ).toBe(false);
  await context.close();
});

test("responsive layouts stay within the viewport at narrow and tablet widths", async ({
  page,
}) => {
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const id of [
      "hero",
      "inside",
      "themes",
      "pages",
      "chapters",
      "authors",
      "voices",
      "buy",
    ]) {
      await page
        .locator("#" + id)
        .evaluate((el) =>
          el.scrollIntoView({ behavior: "instant", block: "start" }),
        );
      expect(
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth,
        ),
        `${id} at ${width}px`,
      ).toBe(true);
    }
  }
});

test("desktop book perspective responds to scroll and pointer, and respects reduced motion", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "Mobile intentionally uses simpler book motion.");
  const stage = page.locator("[data-book-stage]");
  await stage.scrollIntoViewIfNeeded();
  const firstRotation = await page
    .locator("#book-model")
    .evaluate((el) =>
      (el as HTMLElement).style.getPropertyValue("--book-rotation"),
    );
  await page.mouse.wheel(0, 160);
  await expect
    .poll(() =>
      page
        .locator("#book-model")
        .evaluate((el) =>
          (el as HTMLElement).style.getPropertyValue("--book-rotation"),
        ),
    )
    .not.toBe(firstRotation);
  const bounds = (await stage.boundingBox())!;
  await page.mouse.move(
    bounds.x + bounds.width * 0.75,
    Math.max(100, bounds.y + bounds.height * 0.4),
  );
  await expect
    .poll(() =>
      page
        .locator("[data-book-tilt]")
        .evaluate((el) =>
          (el as HTMLElement).style.getPropertyValue("--pointer-y"),
        ),
    )
    .not.toBe("0deg");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect
    .poll(() =>
      page
        .locator("[data-book-tilt]")
        .evaluate((el) => getComputedStyle(el).transform),
    )
    .toBe("none");
});
