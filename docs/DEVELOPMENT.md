# Development and verification

The literary website for **Dhruva Nerella & Tattva Nerella**, redesigned as a
continuous journey from a dark mountain dawn to an illuminated final summit.

## Run the site

Use Node.js 24 (the validated version is pinned in `.node-version`; Next.js
requires Node 20.9 or newer).

```sh
npm ci
npm run dev
```

The Next.js app and the standalone `index.html` share the same content, React
markup, CSS, and interaction script. The standalone version remains suitable for
the existing Netlify static-site deployment, including deployments that simply
publish the repository root. No server, external fonts, API key, or backend is
needed. Book view uses WebGL 2; unavailable WebGL falls back to Reading view.

```sh
npm run build:static   # Regenerate index.html after changing shared markup/content
npm run build          # Regenerate the static page and build Next.js
npm run start          # Serve the Next.js production build
npm run typecheck
```

Serve the standalone site over HTTP during development:

```sh
python3 -m http.server 4173
```

Do not run development and production builds against the same build directory at
the same time. Stop the development server before building and starting production.

## Where to edit

- `components/experience/LiteraryExperience.tsx`: all eight sections and semantic markup.
- `lib/book-content.ts`: preserved authors, ISBN, retailer links, themes, chapter guide,
  website reflections, and existing reader reviews.
- `public/experience.css`: shared palette, locally hosted typography, responsive
  layouts, perspective hardcover, lighting and reduced-motion behavior.
- `lib/book-world/`: persistent Three.js geometry, curved paper, camera, scroll
  controller and data-driven spatial chapters. See `3D_BOOK_JOURNEY.md`.
- `scripts/build-book-world.cjs`: bundles those browser modules with esbuild.
  `public/book-journey.js` and `public/book-world/` are generated outputs; edit
  their source modules and run `npm run build:static` instead.
- `public/experience.js`: progressive enhancement, loader readiness and controls,
  book hinge/cursor/scroll response,
  preview paging, keyboard chapter tabs, tone-aware navigation, and reveal observers.
- `public/media/`: optimized, generated mountain scene at desktop/mobile resolutions.
- `public/fonts/`: Latin variable WOFF2 fonts and redistribution licenses,
  plus the bundled Three.js Optimer geometry typeface license.
- `scripts/export-static.cjs`: renders the shared React markup into `index.html` using
  the existing TypeScript dependency. Do not edit the generated HTML directly.

The previous components, animation scripts, and Tailwind configurations remain
as historical project references; they are not loaded by the redesigned page.
The active visual system is plain CSS, with Autoprefixer in the Next.js build.
The obsolete `next lint` and old generated-site CSS commands have been removed.

## Interactions and accessibility

The loader reveals the verified original cover after its JPEG has decoded, with a
small tilt and a calm 1.4-second reveal. The heartbeat and mountain ridge stay in
the background. The title fades in together rather than jumping between phases.
Asset progress tracks fonts, the mountain photo and the original cover. Its first
visit minimum is 2.2 seconds; return visits use 1.8 seconds, and the cover reveal
is allowed to finish before the 900 ms dissolve. A hard 4.5-second readiness cap
prevents stalled assets from trapping visitors. Skip/Escape also works during the
dissolve. Reduced motion removes the choreography and minimum wait. Focus remains
inside while background content is inert, then returns to the site. With no JS,
the loader is hidden. A missing cover never gets an invented loading-screen book.

The hero retains its photographic mountain, depth planes, mist and pointer camera.
After the hero, **Book view is the default on desktop and mobile**. The seven
remaining website sections are pages in a continuous book journey: the actual
cover opens, genuine book meshes rotate from XY into XZ, and the independent
camera descends and flies along the same physical paper. Original content rises
into spatial panels with solid backings and shadows; extruded numerals and
chapter-specific sculptures emerge alongside them. At the end, content retracts,
the camera pulls away, the book rotates upright, and a continuously deformed
paper mesh turns before the next journey. Scroll reversal samples the same pure
timeline. Camera framing adapts to the measured text, fonts and expanded reviews.
This presents website sections, not claimed manuscript pages.

Scene controls navigate the reading stops within a page; page controls navigate
the seven chapters. Reading view switches back to
the ordinary document at the current section and remembers that preference for
the session; Book view resumes at the same section. Reduced motion automatically
uses the ordinary layout. Short landscape screens (480 px tall or less) use
Reading view to keep content and controls readable; rotating or resizing back
automatically resumes the same book and current chapter. No preference is lost.
No-JavaScript markup uses display-contents wrappers to preserve that layout too.
In Reading view, the original desktop perspective book
and manual touch/keyboard opening are retained. No wheel or touch gestures are
intercepted; the camera follows ordinary browser scroll events.

Reading controls retain a consistent height. Chapter tabs support Left/Right,
Home/End, focus management, and a scrollable mobile strip. The mobile navigation
supports Escape and closes on link selection. Semantic sections, skip navigation,
visible focus, native expandable reviews, reduced motion, and readable no-JavaScript
fallbacks are included. Ordinary document scrolling is never intercepted.

Scroll updates are passive and coalesced into animation frames only when needed.
Offscreen mist pauses. All content is server-rendered; the loader is immediately
skippable and there is no indefinitely running JavaScript canvas loop. Fonts and
mountain assets are local. The hero still reuses its cached responsive images.
Three.js is lazy-loaded for Book view, and esbuild is only a build dependency.
Pixel ratio and shadow resolution are capped on mobile. WebGL loss restores the
original interactive document, and page exit releases geometries and textures.

## Content and remaining assets

The chapter guide and reviews were preserved from the original repository's
public website HTML. Reviews have their original author names and dates; no new
ratings, testimonials, biographies, shipping promises, or achievements were added.

No manuscript or approved book sample is present. The reading preview and book
opening therefore **explicitly present existing website reflections**, rather
than pretending they are genuine manuscript pages. Approved excerpts can replace
these entries in `lib/book-content.ts` when available. Only the six chapter titles
actually present in the original guide are displayed.

The original cover is now bundled locally, unchanged, at
`public/media/still-standing-still-here-cover.jpg` (529×800, about 75 KB). Publisher
access succeeded in the latest session and the actual yellow cover was visually
verified. The source URL is preserved in `book.cover`; `book.coverAsset` points at
the same-origin copy displayed by the loader, cinematic book and ordinary book.
`public/media/README.md` records provenance and the exact SHA-256. Failed artwork
is hidden in the loader, and the ordinary book retains its typographic fallback.

No author portraits or approved biographies were available; the authors receive
an editorial monogram treatment with the existing factual book introduction.
The mountain scenery is generated atmospheric artwork, not a claimed reproduction
of the cover or a photograph of a documented place. The old screenshot's Git LFS
object is missing from its server and is not used.

## Tests

```sh
npx playwright install chromium
npm run test:e2e
```

For environments with a system Chromium, avoid downloading another browser:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

The suite serves the standalone page using Python 3 and checks desktop/mobile
content, retailer and anchor URLs, metadata, book controls, preview height and
paging, all six chapter tabs, keyboard navigation, full reviews, responsive
widths, reduced motion, no JavaScript, failed cover handling, local assets,
runtime exceptions, loader readiness/timeout/focus/storage failure, reversible
cover and leaf choreography, full spread/attribution bounds on phones and tablets,
and automated WCAG 2.1 AA checks on the introduction and content. The local-cover failure tests deliberately abort its request; other checks load
the real bundled image and verify its dimensions and source. The immersive suite
checks genuine canvas initialization, actual geometry rotation and paper
curvature, camera descent/travel/retreat, reverse scrolling, all 17 reading stops
and their controls, view switching, idle rendering, bounds, context loss and
accessibility. Retailer service availability
is not verified by these local checks.

Run the same suite against a running Next.js production server:

```sh
E2E_BASE_URL=http://127.0.0.1:3000 \
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium \
npm run test:e2e
```

Browser traces and reports are ignored by Git. `PROGRESS.md` records actual
validation results, project state, asset limitations, and precise continuation steps.
There is no configured recurring Codex task: this session did not provide an
officially supported scheduler. Local timers cannot guarantee continuation in a
closed cloud session or after a credit reset.
