# Still Standing, Still Here

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
publish the repository root. No server, external fonts, WebGL, API key, or backend
is needed for the static site.

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
- `public/experience.js`: progressive enhancement, book hinge/cursor/scroll response,
  preview paging, keyboard chapter tabs, tone-aware navigation, and reveal observers.
- `public/media/`: optimized, generated mountain scene at desktop/mobile resolutions.
- `public/fonts/`: Latin variable WOFF2 fonts and their redistribution licenses.
- `scripts/export-static.cjs`: renders the shared React markup into `index.html` using
  the existing TypeScript dependency. Do not edit the generated HTML directly.

The previous components, animation scripts, and Tailwind configurations remain
as historical project references; they are not loaded by the redesigned page.
The active visual system is plain CSS, with Autoprefixer in the Next.js build.
The obsolete `next lint` and old generated-site CSS commands have been removed.

## Interactions and accessibility

The desktop book gently changes perspective during its short pinned section and
responds to a fine pointer. It opens to a labeled website reflection near the end
of that section; its button can always open or close it manually. Mobile uses a
simpler model without cursor tracking or automatic opening.

Reading controls retain a consistent height. Chapter tabs support Left/Right,
Home/End, focus management, and a scrollable mobile strip. The mobile navigation
supports Escape and closes on link selection. Semantic sections, skip navigation,
visible focus, native expandable reviews, reduced motion, and readable no-JavaScript
fallbacks are included. Ordinary document scrolling is never intercepted.

Scroll updates are passive and coalesced into animation frames only when needed.
Offscreen mist pauses. All content is server-rendered; there is no mandatory loader
or indefinitely running JavaScript canvas loop. Fonts and mountain assets are local.

## Content and remaining assets

The chapter guide and reviews were preserved from the original repository's
public website HTML. Reviews have their original author names and dates; no new
ratings, testimonials, biographies, shipping promises, or achievements were added.

No manuscript or approved book sample is present. The reading preview and book
opening therefore **explicitly present existing website reflections**, rather
than pretending they are genuine manuscript pages. Approved excerpts can replace
these entries in `lib/book-content.ts` when available. Only the six chapter titles
actually present in the original guide are displayed.

The original front-cover URL is preserved. If it cannot load, a typographic
placeholder appears inside the hardcover. During cloud validation the image host
was blocked by the environment's network policy, so the actual artwork could not
be visually verified or cached locally. A locally supplied original cover image
would remove this external dependency. Do not generate replacement cover artwork.

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
runtime exceptions, and automated WCAG 2.1 AA checks. External cover requests are
intentionally aborted in these deterministic tests; this does not verify the
remote retailer or cover services.

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
