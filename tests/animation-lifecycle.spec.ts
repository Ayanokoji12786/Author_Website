import { expect, test } from '@playwright/test';

test('hero cover and both actions remain visible and fit the first composition', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Escape');
  const hero = page.locator('#hero');
  await expect(hero.getByRole('link', { name: 'Explore the book', exact: true })).toBeVisible();
  await expect(hero.getByRole('link', { name: 'Get your copy', exact: true })).toHaveAttribute('href', '#buy');
  const cover = hero.locator('.hero-book-front img');
  await expect(cover).toBeVisible();
  expect(await cover.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth === 529)).toBe(true);
  for (const width of [320, 390, 760, 820, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    const boxes = await hero.evaluate((el) => {
      const box = (selector: string) => el.querySelector(selector)!.getBoundingClientRect().toJSON();
      return { title: box('h1'), cover: box('.hero-book-front'), actions: box('.hero-actions'), hero: el.getBoundingClientRect().toJSON(), overflow: document.documentElement.scrollWidth > innerWidth };
    });
    expect(boxes.overflow).toBe(false);
    expect(boxes.cover.left).toBeGreaterThanOrEqual(0);
    expect(boxes.cover.right).toBeLessThanOrEqual(width);
    expect(boxes.cover.bottom).toBeLessThan(boxes.hero.bottom);
    const overlap = boxes.title.left < boxes.cover.right && boxes.title.right > boxes.cover.left && boxes.title.top < boxes.cover.bottom && boxes.title.bottom > boxes.cover.top;
    expect(overlap).toBe(false);
  }
});

test('backgrounding suspends book rendering and resumes at the native scroll position', async ({ page }) => {
  await page.goto('/');
  const root = page.locator('#literary-experience');
  await expect(root).toHaveAttribute('data-world-status', 'ready', { timeout: 15000 });
  await page.keyboard.press('Escape');
  await page.locator('#inside').evaluate((el) => {
    const node = el as HTMLElement;
    scrollTo({ top: el.getBoundingClientRect().top + scrollY + Number(node.dataset.readerEntrance) + 1, behavior: 'instant' });
  });
  await expect(root).toHaveAttribute('data-reader-settled', 'true');
  await page.waitForTimeout(500);
  const frames = await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
    scrollBy({ top: 150, behavior: 'instant' });
    dispatchEvent(new PointerEvent('pointermove', { clientX: 100, clientY: 100 }));
    // Capture atomically with suspension: a frame can complete between two
    // separate Playwright calls, especially on an emulated touch viewport.
    return document.getElementById('literary-experience')!.dataset.worldFrames!;
  });
  await expect(root).toHaveClass(/is-backgrounded/);
  await page.waitForTimeout(300);
  expect(await root.getAttribute('data-world-frames')).toBe(frames);
  await page.evaluate(() => {
    delete (document as unknown as { hidden?: boolean }).hidden;
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(root).not.toHaveClass(/is-backgrounded/);
  await expect.poll(async () => Number(await root.getAttribute('data-world-frames'))).toBeGreaterThan(Number(frames));
  await expect(root).toHaveAttribute('data-reader-settled', 'true');
});
