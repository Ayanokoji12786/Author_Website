import { expect, test, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { book } from '../lib/book-content';
const ids = ['inside', 'pages', 'themes', 'chapters', 'authors', 'voices', 'buy'];
async function open(page: Page) {
  await page.goto('/');
  await page.keyboard.press('Escape');
  await expect(page.locator('#literary-experience')).toHaveAttribute('data-reader-mode', 'reading');
}

test('fresh reading never loads WebGL or hides the synopsis after the hero', async ({ page }) => {
  const sceneRequests: string[] = [];
  page.on('request', r => { if (/renderer-.*\.js/.test(r.url())) sceneRequests.push(r.url()); });
  // An old Book view preference must not force a returning reader into motion.
  await page.addInitScript(() => sessionStorage.setItem('ssh-reader-mode', 'book'));
  await open(page);
  expect(await page.locator('main > section').evaluateAll(nodes => nodes.map(n => n.id))).toEqual(['hero', ...ids]);
  const heroBottom = await page.locator('#hero').evaluate(el => el.getBoundingClientRect().bottom + scrollY);
  for (const offset of [0, 100, 300, 600]) {
    await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), heroBottom + offset);
    await expect(page.locator('[data-reader-stage]')).toBeHidden();
    await expect(page.locator('[data-reader-interface]')).toBeHidden();
    await expect(page.locator('#inside .book-introduction')).toBeVisible();
    expect(await page.locator('#inside').evaluate(el => getComputedStyle(el).backgroundColor)).not.toBe('rgba(0, 0, 0, 0)');
  }
  const proximity = await page.locator('#inside').evaluate(el => {
    const copy = el.querySelector('.synopsis-copy')!.getBoundingClientRect();
    const purchase = el.querySelector('.purchase-links')!.getBoundingClientRect();
    return purchase.top - copy.bottom;
  });
  expect(proximity).toBeLessThan(160);
  for (const button of await page.locator('#inside .purchase-links a').all()) {
    expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  }
  expect(sceneRequests).toEqual([]);
  await expect(page.locator('canvas')).toHaveCount(0);
  const text = await page.locator('main').innerText();
  expect(text).toContain(book.synopsis);
  for (const value of [book.language, '229 pages', book.publisher, book.publication, book.isbn]) expect(text).toContain(value);
  expect(text).not.toMatch(/preserved from|original website|existing guide|Inside the pages/);
  await expect(page.locator('#pages')).toContainText('not extracts from the published book');
  await expect(page.locator('#voices')).toContainText('Family disclosure: the authors’ uncle');
  await expect(page.locator('a[download]')).toHaveCount(0);
});

test('navigation, both retailers, reflections and chapters work without a floating toolbar', async ({ page }) => {
  await open(page);
  const menu = page.locator('.menu-toggle');
  for (const id of ['inside', 'pages', 'authors', 'buy']) {
    if (await menu.isVisible()) await menu.click();
    await page.locator(`#navigation a[href="#${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id} h2`)).toBeInViewport();
    await expect(page.locator('[data-reader-interface]')).toBeHidden();
  }
  for (const id of ids) {
    await page.locator(`#${id}`).evaluate(el => el.scrollIntoView({ block: 'start', behavior: 'instant' }));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const audit = await new AxeBuilder({ page }).include(`#${id}`).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(audit.violations, id).toEqual([]);
  }
  for (const [retailer, url] of [['Amazon India', book.amazon], ['Flipkart', book.flipkart]]) {
    const link = page.locator('#buy').getByRole('link', { name: new RegExp(`^${retailer} \\(opens in a new tab\\)`) });
    await expect(link).toHaveAttribute('href', url);
    await expect(link).toHaveAttribute('target', '_blank');
    const popup = page.waitForEvent('popup');
    await link.click();
    await (await popup).close();
  }
});

test('optional journey starts with readable content and all controls lead to visible safe stops', async ({ page }) => {
  test.setTimeout(90000);
  await open(page);
  await page.locator('[data-journey-start]').click();
  await expect(page.locator('#inside')).toHaveClass(/is-reading/);
  await expect(page.locator('#book-heading')).toBeInViewport();
  await expect(page.locator('#journey-section')).toBeFocused();
  const bar = page.locator('[data-reader-interface]');
  const previous = page.getByRole('button', { name: 'Previous reading stop', exact: true });
  const next = page.getByRole('button', { name: 'Next reading stop', exact: true });
  await expect(previous).toBeDisabled();
  for (const [index, id] of ids.entries()) {
    await page.locator('[data-reader-chapter]').selectOption(String(index));
    const count = Number(await page.locator(`#${id}`).getAttribute('data-reader-stations'));
    for (let j = 0; j < count; j++) {
      const card = page.locator(`.journey-card[data-chapter="${id}"][data-station="${j}"]`);
      await expect(card).toHaveClass(/is-readable/);
      await expect(page.locator('[data-reader-position]')).toHaveText(`Stop ${j + 1} of ${count}`);
      const box = (await card.boundingBox())!, controls = (await bar.boundingBox())!;
      expect(box.y + box.height, `${id}/${j} toolbar overlap`).toBeLessThan(controls.y - 4);
      expect(box.y, `${id}/${j} header overlap`).toBeGreaterThan(80);
      expect(box.x).toBeGreaterThan(-2);
      expect(box.x + box.width).toBeLessThan(page.viewportSize()!.width + 2);
      if (j < count - 1) await next.click();
    }
  }
  await expect(next).toBeDisabled();
  await previous.click();
  await expect(next).toBeEnabled();
  await page.locator('button[data-reader-mode]').focus();
  await page.keyboard.press('Enter');
  await expect(bar).toBeHidden();
  await expect(page.locator('#buy h2')).toBeFocused();
  await expect(page.locator('#buy h2')).toBeInViewport();
  // Ordinary links and all original content survive restoration.
  await expect(page.locator('#inside #book-heading')).toHaveCount(1);
  await page.locator('[data-journey-start]').click();
  await expect(bar).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(bar).toBeHidden();
});

test('loading or failing the optional scene never replaces the reading document with darkness', async ({ page }) => {
  const pending: import('@playwright/test').Route[] = [];
  await page.route('**/book-world/renderer-*.js', route => { pending.push(route); });
  await open(page);
  await page.locator('[data-journey-start]').click();
  await expect(page.locator('#literary-experience')).toHaveAttribute('data-world-status','loading');
  await expect(page.locator('[data-reader-stage]')).toBeHidden();
  await expect(page.locator('#book-heading')).toBeVisible();
  // Cancelling can happen before the module is available.
  await page.locator('[data-journey-start]').click();
  await expect(page.locator('#literary-experience')).toHaveAttribute('data-reader-mode','reading');
  await Promise.all(pending.map(route => route.abort()));
  await expect(page.locator('#literary-experience')).toHaveAttribute('data-world-status','unavailable');
  await expect(page.locator('[data-reader-stage]')).toBeHidden();
  await expect(page.locator('#inside').getByRole('link',{name:/^Amazon India/})).toBeVisible();
});

test('intro is not replayed on return visits and reduced motion never initializes the scene', async ({ page }) => {
  await open(page);
  await page.goto('/#buy');
  await expect(page.locator('#cinematic-intro')).toBeHidden();
  await expect(page.locator('#buy h2')).toBeInViewport();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#cinematic-intro')).toBeHidden();
  await expect(page.locator('html')).not.toHaveClass(/intro-pending|intro-active/);
  await page.emulateMedia({ reducedMotion:'reduce' });
  await page.reload();
  await expect(page.locator('[data-journey-start]')).toBeDisabled();
  await expect(page.locator('canvas')).toHaveCount(0);
  await expect(page.locator('#cinematic-intro')).toBeHidden();
  await page.locator('.hero-actions a').first().focus();
  expect(await page.locator('.hero-actions a').first().evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe('none');
});

test('footer navigation and footer journey exit preserve ordinary reading', async ({ page }) => {
  await open(page);
  for (const id of ['inside', 'chapters', 'voices', 'hero']) {
    await page.locator('.site-footer').scrollIntoViewIfNeeded();
    await page.locator(`.site-footer nav a[href="#${id}"]`).click();
    await expect(page.locator(`#${id} ${id === 'hero' ? 'h1' : 'h2'}`)).toBeInViewport();
    await expect(page.locator('[data-reader-interface]')).toBeHidden();
  }
  await page.locator('.site-footer').scrollIntoViewIfNeeded();
  await page.locator('.site-footer a[href="/book-facts/"]').click();
  await expect(page.locator('.facts-introduction h1')).toBeVisible();
  await page.locator('.facts-footer a').click();
  await expect(page.locator('#cinematic-intro')).toBeHidden();
  await page.locator('[data-journey-start]').click();
  await expect(page.locator('[data-reader-interface]')).toBeVisible();
  const menu = page.locator('.menu-toggle');
  if (await menu.isVisible()) {
    await menu.click();
    await page.keyboard.press('Escape');
    await expect(page.locator('#literary-experience')).toHaveClass(/is-immersive/);
  }
  await page.locator('.site-footer').scrollIntoViewIfNeeded();
  await page.locator('[data-journey-exit]').click();
  await expect(page.locator('#literary-experience')).not.toHaveClass(/is-immersive/);
  await expect(page.locator('#buy h2')).toBeFocused();
});
