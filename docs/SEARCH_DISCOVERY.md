# Search and generative-search discovery

Research checked 12 October 2026 (Asia/Kolkata). Implementation applies to both
the Next.js application and the repository-root Netlify deployment.

## What the official guidance says

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
  says supporting links in AI Overviews/AI Mode must be indexed and eligible for
  ordinary search snippets. Normal SEO fundamentals apply. No special AI schema
  or new AI text file is required. Eligibility does not guarantee indexing or display.
- [Google: structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
  explains JSON-LD and requires markup to describe visible page content.
- [Google: site names](https://developers.google.com/search/docs/appearance/site-names)
  recommends homepage `WebSite` structured data with consistent site identity.
- [Google: robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
  describes crawler access. Allowing crawling is different from being indexed.
- [OpenAI: crawlers](https://developers.openai.com/api/docs/bots)
  identifies `OAI-SearchBot` as the search crawler. Search and `GPTBot` training
  controls are independent; `ChatGPT-User` is not the search-indexing crawler.
  Hosting/network controls must also allow legitimate crawler requests.
- [Schema.org: Book](https://schema.org/Book) defines book identity, authors and ISBN.

Concise question/answer blocks improve clarity and extraction; they are not a
special engine protocol or a guarantee of an AI recommendation. Search-capable
AI systems may discover and cite an indexed page. Models answering without live
search cannot be made to update simply by changing this website.

## Implemented

`lib/site-seo.ts` is the shared source of canonical URLs, page metadata, JSON-LD,
answer text, crawler rules and sitemap entries. It feeds Next routes and
`scripts/export-static.cjs`; do not hand-edit generated files.

- Homepage title/description explicitly identify the official website, with
  visible official-site text and a crawlable footer link to `/book-facts/`.
- Each page contains one JSON-LD graph connecting `WebSite`, `WebPage`, `Book`
  and the existing two `Person` author identities through stable absolute IDs.
  Both pages identify the same book by ISBN `9789378253126`. Canonicals, social
  URLs and sitemap entries consistently use the official Netlify origin.
- Author names and credits are preserved exactly as requested. No pen name,
  new biography, publisher-author reconciliation or invented profile was added.
- `/book-facts/` provides six visible answer capsules, book identity and source
  links in the initial HTML. It needs neither JavaScript nor WebGL, retains the
  existing visual palette/fonts, and links back to the actual purchase journey.
- The [BlueRoseONE catalogue entry](https://blueroseone.com/store/product/still-standing-still-here)
  returned HTTP 200 and was checked for the exact title and ISBN. It is referenced
  only for that identification, including the book's `sameAs` and the facts page's
  `citation`. No unconfirmed catalogue author claim was imported. Existing Amazon
  and Flipkart destinations are unchanged; live retailer availability is external.
- Both builds serve `/robots.txt` and `/sitemap.xml`. Wildcard crawler access is
  preserved and search access for `OAI-SearchBot` is explicit. Training-bot access
  was not changed. The sitemap contains the homepage and facts page; it does not
  pretend fragment anchors are independent pages or manufacture freshness dates.
- The loader bootstrap runs only on the homepage. Facts are immediately readable
  without a loader or scroll lock. The hero and book animation modules are unchanged.

No ratings, invented reviews, unsupported prices, fake backlinks, AI-directed
instructions or hidden SEO text were added. The answer page does not claim a FAQ
rich result. Book schema is not a claim that Google offers a specific book result.

## Verification and maintenance

`tests/search-discovery.spec.ts` checks crawler-facing original HTML, unique and
connected entity IDs, preserved authors, matching book identity across pages,
JavaScript-disabled readability, catalogue/retailer links, canonical metadata,
valid sitemap XML and allowed crawler rules, mobile overflow, WCAG AA semantics
and contrast, keyboard navigation and the return to the working purchase scene.
Existing metadata checks now resolve the author entities in the richer graph.
The committed suite verifies consistency; it is not a Google indexing test or a
substitute for an independent rich-result/schema validation service.

Changing the official domain must update this shared configuration and the real
hosting redirects together. Generate assets and test before publishing. Keep
facts aligned with visible content and confirmed identity; do not fabricate
social profiles or publication metadata to make the graph appear richer.

## Account and external actions still needed

Website changes cannot themselves verify ownership or compel indexing. No
Search Console property verification, authenticated sitemap submission, inbound
link placement or actual search ranking/citation was performed in this task.
The presence of a general cloud credential variable does not establish that
the user has connected the site's Search Console property.

1. In [Google Search Console](https://search.google.com/search-console), use the
   URL-prefix property `https://still-standing-still-here.netlify.app/` and verify
   it using a method offered to the owning account. No verification token is
   guessed or published. Submit `https://still-standing-still-here.netlify.app/sitemap.xml`.
2. Inspect `/` and `/book-facts/` with URL Inspection, request indexing when
   available, and monitor coverage, selected canonical and search performance.
3. In the owning [Bing Webmaster Tools](https://www.bing.com/webmasters/)
   account, add/import the site and submit the same sitemap. No unverified IndexNow
   submission or third-party account write is attempted.
4. Where the user controls an existing author/publisher/social profile, add the
   exact official URL to its website field. These real inbound references help
   corroborate identity; an outbound catalogue link is not an endorsement or backlink.
   No outreach or messages have been sent to third parties.
5. Review hosting logs for real Googlebot, Bingbot and OAI-SearchBot access.
   A successful public/user-agent probe is not proof that those crawlers indexed
   the site. After indexing, check the actual official-website query in search
   and live-search AI systems, recording results instead of promising a rank.

Indexing, ranking and AI citations are chosen by the respective services and
may take time. Crawlability, honest identity and useful content are the parts
the repository implementation can establish and test.
