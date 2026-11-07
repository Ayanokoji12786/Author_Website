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
the same time. Stop the actual Next server before rebuilding. In cloud tools,
ending an npm wrapper session can leave its child alive: inspect the listening
port/process, stop only the server you started, and confirm the port is empty.
Start the freshly built server again before production verification.

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

The shared head bootstrap displays the loader before enhancement loads, and
hides the document until the loader takes control. Early Skip/Escape works before
the main script loads; a seven-second fail-open deadline also handles completely
failed enhancement. Without JavaScript the normal document remains available.
The verified original cover sits to the right of the unobstructed mountain ridge,
with a calm 1.4-second reveal after JPEG decode. Asset progress tracks fonts, the
mountain photo, genuine cover and (where enabled) initialized 3D resources. The
first-visit minimum is 2.2 seconds; return visits use 1.8 seconds. A hard 4.5-second
asset cap prevents stalls; the 900 ms dissolve remains skippable. Reduced motion
removes choreography and the minimum wait. Background content is inert, and
Skip/Sound share a keyboard focus loop until focus returns to the site.

**Enable sound** restores the original synthesized heartbeat (58/46 Hz) and
filtered brown wind from project history. It creates/resumes Web Audio only
through a deliberate gesture. Mute/re-enable reuses one context; leaving the
loader fades the ambience, clears the beat interval, stops the wind and closes
the context. The original sound was generated audio, not a missing MP3 asset,
and ended when the introduction finished. The same scope is preserved.

The hero retains its photographic mountain, depth planes, mist, yellow cover and
pointer camera. **Ordinary scrolling and Reading view are the default**, including
return visits. The inline “Explore the immersive journey” button is the only
entry into Book view. It loads Three.js on demand while all reading/purchase
content stays in the document. Entry jumps to the first readable stop instead
of requiring readers to scroll through a near-empty cover/camera transition.

Inside the optional journey, one previous/next pair walks through all stops and
section boundaries. A labelled section select navigates directly, and Exit or
Escape returns to the current reading section with keyboard focus on its heading.
The toolbar is hidden completely in Reading view, beyond the book and at the
footer. A footer exit remains available. Camera fitting reserves header/control
space. Reduced motion and short landscape windows retain the ordinary document.
No wheel or touch gesture is intercepted.

The introduction is skippable immediately. A seen flag in local/session storage
prevents replay, and reduced motion skips it. Storage failure and blocked assets
still fail open. The intro's optional sound remains gesture-controlled and is
cleaned up when it ends.

Semantic content is server-rendered. The reading preview is explicitly **Themes
and reflections**, not a manuscript sample. Verified English, 229-page hardbound
format, publisher/publication and ISBN details appear beside the purchase links.
“Amazon India” and Flipkart destinations remain unchanged and show a new-tab note.
See `READING_FIRST.md` for source evidence and owner content dependencies.

The animation architecture still batches DOM layout reads and pointer updates,
pauses hidden-tab animations, limits WebGL quality on software graphics and
releases resources on page exit. Scene startup/context failures restore the full
reading document. No scene module is downloaded on an ordinary reading visit.

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

No author portraits or approved individual biographies were available; the authors
receive an editorial monogram, individual co-author credits and a link to their
verified shared retailer profile. No portrait substitutes or biographies are invented.
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
curvature, camera descent/travel/retreat, reverse scrolling, all 18 reading stops
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

The refinement suite adds first-paint/delayed-script checks, a fail-open deadline,
actual purchase pixel snapshots, direct hash/reload/history navigation, late scene
initialization, logical resize preservation, fractional entry boundaries and real Web Audio lifecycle checks.
`node scripts/measure-book.cjs` provides repeatable scroll/render diagnostics; see
`3D_BOOK_JOURNEY.md` for measured software-GPU results and limits. Retailer navigation
checks verify the browser opens the original Amazon destination; availability of
an external retailer is controlled by that service (the cloud HEAD probe returned
HTTP 503). No unrelated purchase destination was substituted.

The animation lifecycle suite checks hidden-tab suspension/resumption and hero
cover/action bounds from 320 to 1440 pixels. The November audit and isolated
software-renderer comparison are in `REDESIGN_VALIDATION_2026_11.md`.
Use `MEASURE_WIDTH=390 MEASURE_HEIGHT=844 node scripts/measure-book.cjs` for a
phone-sized viewport; this remains a software-GPU comparison, not a device FPS
claim. The measurement harness closes Chromium even when a check fails.
