import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { book, chapters } from "../lib/book-content";

test.beforeEach(async ({ page }) => {
  // The existing document interactions remain available in Reading view.
  await page.addInitScript(() => {
    try {
      sessionStorage.setItem("ssh-reader-mode", "reading");
    } catch (_) {}
  });
  await page.goto("/");
  await expect(page.locator("#literary-experience")).toHaveClass(/is-enhanced/);
  await page.evaluate(() => document.fonts.ready);
  if (await page.locator("#cinematic-intro").isVisible())
    await page.getByRole("button", { name: "Skip introduction" }).click();
  await expect(page.locator("#cinematic-intro")).toBeHidden();
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
  await page.route("**/media/still-standing-still-here-cover.jpg", (route) =>
    route.abort(),
  );
  await page.reload();
  await expect(page.locator("#literary-experience")).toHaveClass(/is-enhanced/);
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-journey-initialized",
    "true",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#cinematic-intro")).toBeHidden();
  await page.evaluate(() => document.fonts.ready);
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
  // Measure the stable card after its dimensional entrance has settled.
  await expect(preview).toHaveCSS("transform", "none");
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
  await expect(page.locator("#cinematic-intro")).toBeHidden();
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

test("cinematic loader preserves the heartbeat, real progress, focus and immediate Escape", async ({
  page,
}) => {
  await page.evaluate(() => sessionStorage.removeItem("ssh-intro-seen"));
  await page.reload({ waitUntil: "domcontentloaded" });
  const intro = page.getByRole("dialog");
  await expect(intro).toBeVisible();
  await expect(intro.locator(".intro-pulse path")).toHaveCount(1);
  await expect(intro.locator(".intro-ridge path")).toHaveCount(2);
  await expect(
    page.getByRole("button", { name: "Skip introduction" }),
  ).toBeFocused();
  expect(
    await page.locator("main").evaluate((el) => (el as HTMLElement).inert),
  ).toBe(true);
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Skip introduction" }),
  ).toBeFocused();
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(intro).toBeHidden();
  expect(
    await page.locator("main").evaluate((el) => (el as HTMLElement).inert),
  ).toBe(false);
  await expect(page.locator(".brand")).toBeFocused();
});

test("cinematic loader automatically finishes and records session readiness", async ({
  page,
}) => {
  await page.evaluate(() => sessionStorage.removeItem("ssh-intro-seen"));
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#cinematic-intro")).toBeVisible();
  await expect(page.getByRole("progressbar")).toHaveAttribute(
    "aria-valuenow",
    "100",
  );
  await expect(page.locator("#cinematic-intro")).toBeHidden({ timeout: 6500 });
  expect(
    await page.evaluate(() => sessionStorage.getItem("ssh-intro-seen")),
  ).toBe("true");
  await expect(page.locator("html")).not.toHaveClass(/intro-active/);
});

test("loader has a bounded exit when a local image never responds", async ({
  page,
}) => {
  await page.evaluate(() => sessionStorage.removeItem("ssh-intro-seen"));
  const pending: import("@playwright/test").Route[] = [];
  await page.route("**/media/mountain-dawn*.webp", (route) => {
    pending.push(route);
  });
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#cinematic-intro")).toBeVisible();
  await expect(page.getByRole("progressbar")).toHaveAttribute(
    "aria-valuenow",
    "67",
  );
  await expect(page.locator("#cinematic-intro")).toBeHidden({ timeout: 7000 });
  expect(
    await page.locator("main").evaluate((el) => (el as HTMLElement).inert),
  ).toBe(false);
  await Promise.all(pending.map((route) => route.abort()));
});

test("storage restrictions and reduced motion cannot block entry", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error("Storage unavailable");
    };
    Storage.prototype.setItem = () => {
      throw new Error("Storage unavailable");
    };
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#cinematic-intro")).toBeHidden({ timeout: 2000 });
  await expect(page.locator("html")).not.toHaveClass(/intro-active/);
  await expect(page.locator(".hero h1 span").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".landscape-camera").first()).toHaveCSS(
    "transform",
    "none",
  );
});

test("mountain camera and foreground respond at distinct depths to scrolling", async ({
  page,
}) => {
  const camera = page.locator(".hero .landscape-camera");
  const near = page.locator(".hero .mountain-foreground");
  const before = await camera.evaluate((el) => getComputedStyle(el).transform);
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: "instant" }));
  await expect
    .poll(() => camera.evaluate((el) => getComputedStyle(el).transform))
    .not.toBe(before);
  expect(
    await camera.evaluate((el) => getComputedStyle(el).transformStyle),
  ).toBe("preserve-3d");
  const depth = await near.evaluate(
    (el) => new DOMMatrix(getComputedStyle(el).transform).m43,
  );
  expect(depth).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(camera).toHaveCSS("transform", "none");
});

test("scroll scrubs the cover and three leaves reversibly while manual choice persists", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "Touch devices retain the manual hinged book.");
  const model = page.locator("#book-model");
  const scrollToProgress = async (value: number) => {
    await page.locator("#inside").evaluate((el, p) => {
      const bounds = el.getBoundingClientRect();
      window.scrollTo({
        top:
          window.scrollY +
          bounds.top +
          (bounds.height - window.innerHeight) * p,
        behavior: "instant",
      });
    }, value);
  };
  await scrollToProgress(0.05);
  await expect
    .poll(() =>
      model.evaluate((el) =>
        (el as HTMLElement).style.getPropertyValue("--hinge-angle"),
      ),
    )
    .toBe("0.0deg");
  await scrollToProgress(0.92);
  await expect(model).toHaveClass(/is-open/);
  await expect
    .poll(() =>
      model.evaluate((el) =>
        parseFloat((el as HTMLElement).style.getPropertyValue("--leaf-three")),
      ),
    )
    .toBeLessThan(-100);
  await expect(page.locator('[data-book-phase="read"]')).toHaveClass(
    /is-current/,
  );
  await scrollToProgress(0.05);
  await expect(model).not.toHaveClass(/is-open/);
  await page.locator(".book-open-control").click();
  await expect(model).toHaveClass(/is-manual.*is-open/);
  await scrollToProgress(0.92);
  await scrollToProgress(0.05);
  await expect(page.locator(".book-open-control")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});

test("the full open spread and reflection attribution fit small phones and tablets", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page
      .locator("[data-book-stage]")
      .evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "instant" }),
      );
    const control = page.locator(".book-open-control");
    if ((await control.getAttribute("aria-pressed")) === "false")
      await control.click();
    await page.locator("#book-model").evaluate(async (el) => {
      const elements = [el, ...Array.from(el.querySelectorAll("*"))];
      await Promise.all(
        elements
          .flatMap((node) => node.getAnimations())
          .map((animation) => animation.finished.catch(() => {})),
      );
    });
    for (const selector of [
      ".book-cover",
      ".book-leaf-one",
      ".book-leaf-two",
      ".book-leaf-three",
      ".book-inner-page",
    ]) {
      const bounds = (await page.locator(selector).boundingBox())!;
      expect(bounds.x, `${selector} left at ${width}px`).toBeGreaterThanOrEqual(
        0,
      );
      expect(
        bounds.x + bounds.width,
        `${selector} right at ${width}px`,
      ).toBeLessThanOrEqual(width);
    }
    const paper = (await page.locator(".book-inner-page").boundingBox())!;
    const attribution = (await page.locator(".mini-source").boundingBox())!;
    expect(
      attribution.y,
      `attribution top at ${width}px`,
    ).toBeGreaterThanOrEqual(paper.y);
    expect(
      attribution.y + attribution.height,
      `attribution bottom at ${width}px`,
    ).toBeLessThanOrEqual(paper.y + paper.height);
  }
});

test("loader progress and Skip remain separate and usable in phone landscape", async ({
  page,
}) => {
  for (const [width, height] of [
    [844, 390],
    [568, 320],
  ]) {
    await page.setViewportSize({ width, height });
    await page.evaluate(() => sessionStorage.removeItem("ssh-intro-seen"));
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.getByRole("dialog")).toBeVisible();
    const readiness = (await page.locator(".intro-readiness").boundingBox())!;
    const skip = (await page.locator(".intro-skip").boundingBox())!;
    expect(readiness.y + readiness.height).toBeLessThan(skip.y - 8);
    expect(skip.y + skip.height).toBeLessThanOrEqual(height);
    await page.getByRole("button", { name: "Skip introduction" }).click();
    await expect(page.locator("#cinematic-intro")).toBeHidden();
    expect(
      await page.locator("main").evaluate((el) => (el as HTMLElement).inert),
    ).toBe(false);
  }
});
