# Reading-first redesign — 7 November 2026

## Reader experience

The normal document is the default on every load, including when an earlier
session stored Book view. Scroll and anchors work without a canvas or scene
module. An inline invitation explicitly opts into the 3D journey. Scene loading
leaves all reading and purchase content visible and can be cancelled. Startup
failure returns the same document, rather than covering it with a dark stage.

The previous default hid the document's section wrappers and substituted long
scroll spacers while the cover opened, rotated and the camera descended. A phone
reproduction at 180 pixels after hero exit showed an almost empty spread against
a dark background. The issue was an interaction/visibility choice, not missing
book text. New readers now see the synopsis immediately; optional journey entry
starts at its first readable stop. Reverse scrolling still supports physical book
choreography for readers who deliberately choose that experience.

The page order is hero, synopsis/purchase, website reflections, themes, chapter
guide, authors, reviews and purchase details. The optional toolbar appears only
inside the immersive chapters. A single previous/next pair moves through stops
and across chapter boundaries, a labelled select jumps sections, and Exit/Escape
restores the document and focuses its current heading. The footer also offers
an exit. Camera fitting reserves space for the header and compact controls.

The introduction can be skipped with its button or Escape. A locally stored
seen flag prevents replay across visits; reduced motion skips it entirely.
Storage failure retains the skippable bounded introduction and readable fallback.

## Evidence and editorial decisions

Sources fetched on 7 November 2026 for ISBN 9789378253126:

- BlueRoseONE catalogue, https://blueroseone.com/store/product/still-standing-still-here:
  English, 229 pages, HARDBOUND, 5×8 inches, ISBN, dated 30-May-2026;
  describes poetic reflections and thoughtful passages, and the audience as
  readers navigating growth, change and emotional complexity. The first request
  returned 403; a subsequent browser User-Agent request returned the full page.
- The existing Flipkart destination identifies the same ISBN, English, hardcover,
  Blue Rose Publishers, May 2026, and Self-Help. Its shared author profile names
  Dhruva Nerella and Tattva Nerella and describes reflective writing about emotions,
  relationships and personal transformation. The site links this genuine profile.
- Genre is attributed explicitly to Flipkart because the publisher's genre field
  says OTHERS. No more specific literary genre is invented.
- Flipkart's title says Edition2nd but its details say First. No edition number is
  published. May 2026 is consistent with both listings; no exact day is assumed
  beyond the publisher's listing date. Existing cover and author credits stay intact.

The synopsis is a concise paraphrase of the catalogue description. The three
website reflections retain their words but are explicitly labelled as website
writing, not published extracts. The six existing chapter titles and descriptions
remain a chapter guide, without migration-history language. Repeated promotional
lines and the duplicate author quotation have been removed. Reviews retain their
names, dates and full responses, with an explicit uncle/family disclosure. No
external source permalink was verified for either review, so none is invented.
No portraits, manuscript extracts or approved sample downloads exist in the
project. Individual name/credit cards are shown without fabricated biographies.

## Owner content still needed

1. Approved individual biographies for Dhruva Nerella and Tattva Nerella, plus a
   factual account of why they wrote this book together.
2. An authorized extract with its chapter/page source and permission to publish;
   supply an approved PDF only if a downloadable sample is wanted.
3. Original review source URLs for the two existing responses, if available.
4. Approved authentic portraits, if portraits are wanted.

These are editorial dependencies, not public placeholders. No missing-content
notices, fake biographies, stock/generated portraits or download promises are
published.

## Verification

Desktop and touch/mobile checks cover normal scroll beyond the hero, direct
hashes, site/footer navigation, every immersive section and stop, stop boundaries,
entry/cancel/failure/exit/re-entry, context loss, resize/orientation, previous/next
reflections, all six chapter tabs, retailer popup destinations, no-JavaScript,
reduced motion, intro storage, visible keyboard focus, automated WCAG AA checks,
viewport bounds and toolbar/content overlap. Final results are recorded below.

Final results:

- Static coverage: the 114-case run exercised all prior and new behavior. Its
  92 passes and three device-specific skips were followed by fixes to outdated
  selectors/counts and two real navigation bugs (entry focus before toolbar
  reveal, and a stale scroll index on mobile re-entry). The author heading was
  also moved ahead of its monogram on phones after the anchor test exposed it
  below the viewport.
- All corrected cases were rerun successfully: 32 reading-first/refinement cases,
  four affected book-journey cases (three passed in the first rerun; the mobile
  re-entry case passed after the scroll-index fix). The additional desktop/mobile
  footer test brings cumulative coverage to 113 applicable cases and three
  expected skips. No unresolved failures remain.
- All 14 Next.js production smoke cases passed, including every readable stop,
  real retailer popups, section and footer anchors, mode entry/cancel/exit, no
  default scene requests, content/control bounds and runtime/asset errors.
- TypeScript, JavaScript syntax, whitespace checks and production build pass.
  Updated purchase pixel baselines were visually reviewed on desktop/mobile.
- Normal-reading screenshots were captured at 320 and 1440 pixels, in addition
  to touch/mobile browser checks. The original mountain images, cover, local
  fonts, cream/charcoal/copper colors and reflective hero remain intact.
- Final visual review moved the synopsis retailer buttons before the complete
  facts table, with a compact hardbound/language/length/ISBN line beside them.
  The final production rerun passed all 14 checks again, including CTA proximity
  and at least 44-pixel ordinary-reading purchase touch targets. Synopsis CTA
  heights measured 73 pixels on the narrow phone and 77 pixels on desktop.
