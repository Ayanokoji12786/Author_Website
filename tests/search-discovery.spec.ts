import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { book } from "../lib/book-content";

const official = "https://still-standing-still-here.netlify.app/";
const catalogue =
  "https://blueroseone.com/store/product/still-standing-still-here";
function schema(html: string) {
  const scripts = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ];
  expect(scripts).toHaveLength(1);
  return JSON.parse(scripts[0][1]);
}

test("search crawlers receive the official identity and connected book schema in the original HTML", async ({
  request,
}) => {
  const response = await request.get("/", {
    headers: {
      "User-Agent": "OAI-SearchBot/1.4; +https://openai.com/searchbot",
    },
  });
  expect(response.status()).toBe(200);
  expect(response.headers()["x-robots-tag"] || "").not.toMatch(
    /noindex|nosnippet/i,
  );
  const html = await response.text();
  expect(html).toContain("Official Website</title>");
  expect(html).toMatch(
    /rel="canonical"[^>]*href="https:\/\/still-standing-still-here.netlify.app\/"/,
  );
  expect(html).toContain("The official website for");
  expect(html).toContain('href="/book-facts/"');
  const graph = schema(html)["@graph"];
  const ids = graph.map((node: any) => node["@id"]);
  expect(new Set(ids).size).toBe(ids.length);
  const website = graph.find((node: any) => node["@type"] === "WebSite");
  const page = graph.find((node: any) => node["@type"] === "WebPage");
  const entity = graph.find((node: any) => node["@type"] === "Book");
  expect(website.url).toBe(official);
  expect(page.url).toBe(official);
  expect(page.isPartOf["@id"]).toBe(website["@id"]);
  expect(page.mainEntity["@id"]).toBe(entity["@id"]);
  expect(entity.isbn).toBe(book.isbn);
  expect(entity.sameAs).toEqual([catalogue]);
  expect(
    entity.author.map(
      (author: any) =>
        graph.find((node: any) => node["@id"] === author["@id"]).name,
    ),
  ).toEqual(book.authors);
  expect(
    graph.some(
      (node: any) => node.alternateName || node.aggregateRating || node.price,
    ),
  ).toBe(false);
});

test("answer capsules and citations are readable without JavaScript or a 3D renderer", async ({
  browser,
  page,
}) => {
  const context = await browser.newContext({
    baseURL: process.env.E2E_BASE_URL || "http://127.0.0.1:4173",
    viewport: page.viewportSize()!,
    javaScriptEnabled: false,
  });
  const plain = await context.newPage();
  try {
    const response = await plain.goto("/book-facts/");
    expect(response!.status()).toBe(200);
    await expect(plain.getByRole("heading", { level: 1 })).toContainText(
      "Official book facts",
    );
    await expect(plain.locator("#official-website p")).toContainText(official);
    await expect(plain.locator("#isbn p")).toContainText(book.isbn);
    await expect(plain.locator("#authors p")).toContainText(
      book.authors.join(" and "),
    );
    await expect(plain.locator(".answer-capsule")).toHaveCount(6);
    await expect(plain.locator(".facts-source a")).toHaveAttribute(
      "href",
      catalogue,
    );
    await expect(
      plain.locator("#purchase a").filter({ hasText: "Amazon India" }),
    ).toHaveAttribute("href", book.amazon);
    await expect(plain.locator("canvas, #cinematic-intro")).toHaveCount(0);
    await expect(plain.locator("html")).not.toHaveClass(
      /intro-pending|intro-active/,
    );
    await expect(plain.locator("link[rel=canonical]")).toHaveAttribute(
      "href",
      official + "book-facts/",
    );
    const rootGraph = schema(await (await context.request.get("/")).text())[
      "@graph"
    ];
    const factsGraph = schema(await response!.text())["@graph"];
    expect(factsGraph.find((node: any) => node["@type"] === "Book")).toEqual(
      rootGraph.find((node: any) => node["@type"] === "Book"),
    );
    const factsPage = factsGraph.find(
      (node: any) => node["@type"] === "WebPage",
    );
    expect(factsPage.url).toBe(official + "book-facts/");
    expect(factsPage.citation.url).toBe(catalogue);
    expect(
      await plain.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  } finally {
    await context.close();
  }
});

test("robots and sitemap expose both canonical pages to search crawlers", async ({
  request,
  page,
}) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  const rules = await robots.text();
  expect(rules).toMatch(/User-[Aa]gent: \*[\s\S]*Allow: \//);
  expect(rules).toMatch(/User-[Aa]gent: OAI-SearchBot[\s\S]*Allow: \//);
  expect(rules).not.toMatch(/Disallow:\s*\/(?:\s|$)/);
  expect(rules).toContain("Sitemap: " + official + "sitemap.xml");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const entries = await page.evaluate(
    (xml) => {
      const doc = new DOMParser().parseFromString(xml, "application/xml");
      if (doc.querySelector("parsererror"))
        throw new Error("Invalid sitemap XML");
      return [...doc.querySelectorAll("loc")].map((loc) => loc.textContent);
    },
    await sitemap.text(),
  );
  expect(entries).toEqual([official, official + "book-facts/"]);
  for (const url of entries) {
    const response = await request.get(new URL(url!).pathname);
    expect(response.status()).toBe(200);
  }
});

test("book facts have readable mobile layout, accessible semantics and immediate navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/book-facts/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("html")).not.toHaveClass(
    /intro-pending|intro-active/,
  );
  await expect(page.locator(".facts-introduction img")).toBeVisible();
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    official + "book-facts/",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    official + "public/media/still-standing-still-here-cover.jpg",
  );
  await expect(
    page.locator(".facts-header").getByRole("link", { name: "Get the book" }),
  ).toHaveAttribute("href", "/#buy");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to book facts" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  expect(page.url()).toContain("#book-facts-content");
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: test.info().outputPath("book-facts.png"),
    fullPage: true,
  });
  expect(errors).toEqual([]);
});

test("purchase navigation from book facts returns to the working cinematic purchase page", async ({
  page,
}) => {
  await page.goto("/book-facts/");
  await page
    .locator(".facts-header")
    .getByRole("link", { name: "Get the book" })
    .click();
  await expect(page).toHaveURL(/\/#buy$/);
  await expect(page.locator("#literary-experience")).toHaveAttribute(
    "data-world-status",
    "ready",
    { timeout: 15000 },
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#cinematic-intro")).toBeHidden();
  await expect(page.locator("#buy")).toHaveClass(/is-reading/);
  await expect(page.getByRole("link", { name: "Buy on Amazon" })).toBeVisible();
});
