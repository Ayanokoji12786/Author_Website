# Still Standing, Still Here — persistent progress

Last updated: 10 October 2026 (Asia/Kolkata).

## Current state

The cinematic redesign is implemented in the existing project. Do not restart
from scratch. The original full requirements are preserved in
`docs/REDESIGN_BRIEF.md`. Shared content and components drive both the Next.js app
and the standalone Netlify page. Remaining limitations are listed below; genuine
manuscript content and unavailable photography have not been fabricated.

## Completed work

- Dark mountain opening, dawn exposure, drifting mist, elegant title reveal,
  perspective mountain camera with layered near/far photography, exploration
  prompt, illuminated final summit.
- Eight connected sections: hero, book, meaning, reading preview, chapter journey,
  authors, reader responses, and final purchase scene.
- CSS perspective hardcover with spine, page edges, studio shadows, desktop
  pointer response, reversible scroll-linked camera/scale/rotation, a continuous
  cover hinge, three independently turning leaves, visible three-phase track,
  and manual keyboard/touch controls that override scrolling. Mobile uses a
  shallower landscape and manually opened, smaller dimensional book spread.
- Three original website themes, three clearly attributed website reflections,
  all six available chapter-guide entries, both original full reader reviews,
  authors, ISBN, and exact Amazon/Flipkart URLs preserved in `lib/book-content.ts`.
- Reading preview with stable height, six keyboard-operated chapter tabs,
  native expandable reviews, responsive menu, Escape/focus handling, light/dark
  navigation, skip link, semantic sections, visible focus and reduced motion.
- Server-rendered/no-JavaScript fallbacks, local fonts with licenses, optimized
  responsive mountain WebP assets, lazy noncritical images, a skippable
  enhanced heartbeat/mountain/book loading sequence with real asset readiness,
  no scroll hijacking and no perpetual JavaScript animation loop.
- Consistent shared implementation in `components/experience/`,
  `public/experience.css`, and `public/experience.js`; `scripts/export-static.cjs`
  reproducibly generates the root `index.html`.
- Canonical, Open Graph, Twitter, and Book structured metadata. Original retailer
  and anchor destinations remain functional in both entry points.
- Next.js upgraded from vulnerable 14.2.35 to 16.4.0; PostCSS 8.5.29 and Tailwind
  4.3.3 clear the discovered dependency advisories. The active design is plain CSS
  with Autoprefixer; old Tailwind/animation files are retained as inactive references.
- Repeatable npm scripts, `.node-version`, README and Playwright/axe test suite.

## 3-D enhancement requested in the latest session

The user explicitly asked for stronger 3-D scroll animation and retention/enhancement
of the loading screen. This increment is implemented in the shared markup/CSS/JS,
so both standalone Netlify and Next.js receive the same experience. The original
heartbeat and mountain motif is active again, with a miniature 3-D book, title
reveal, real local-image/font progress, immediate Skip/Escape, focus containment,
background inertness and restoration, bounded timeout, reduced-motion handling,
and safe operation when browser storage is unavailable. No audio auto-plays.

The mountain camera now uses perspective/preserve-3d with a separately masked
near photograph, a distant photograph and atmospheric depth; duplicate planes
reuse the same cached responsive asset. Desktop scrolling continuously rotates,
lifts and opens the physical book, then turns its three individual leaves.
Backward scrolling reverses it; manual choices persist. Reflections and chapters
have dimensional entrance/page motion. Phone motion is shallower and the book
remains manually controlled. No new runtime library or dependency was introduced.

Validation so far: final Next.js build/prerender and `npm run typecheck` passed;
full standalone and production suites each **33 passed, 3 intentional platform
skips** (desktop skips the mobile menu; mobile skips two desktop scroll behaviors).
A final short-screen loader layout adjustment was then validated with **8 affected
standalone checks passed and 8 affected production checks passed**. The final
production build and typecheck passed again after that scoped adjustment. The
38-case suite now includes the two new platform instances of the landscape test. Loader and content automated WCAG 2.1 AA checks passed,
including focus/inertness, real readiness, automatic exit, blocked image timeout,
storage denial and reduced motion. No JavaScript keeps the loader hidden.

Visual inspection identified and fixed a tablet spread extending past the left
edge and cramped attribution on smaller book pages. Explicit browser assertions
now verify all five physical book planes and the reflection attribution stay in
bounds at 320, 390, 768 and 1024 pixels. The introduction also now fits sideways
phones at 844×390 and 568×320, with explicit progress/Skip bounds and click tests. Preview measurements wait for the entrance
transition to finish before checking stable height. All six affected checks passed.

Fetched and fast-forwarded the user's latest remote commit `89715d7` (README access
link). Preserved that concise README and its exact site link; moved the detailed
updated development/animation/testing guide to `docs/DEVELOPMENT.md`, linked from
README. No source implementation changed during integration.

Implementation and validation for the 3-D increment are complete. Static export
was regenerated with the same SHA-256 before and after the final checks, confirming
repeatability. No runtime/hydration exceptions or missing local assets were found.
The verified changes are ready for the authorized ordinary push to `main`; the
Git handoff below will be updated after remote verification.

## Validation evidence (original redesign baseline)

- Frozen `npm ci --cache /workspace/.npm --no-audit --no-fund`: passed after all
  dependency changes (57 packages installed).
- Next.js 16.4.0 production compilation, type validation and actual homepage
  static prerendering: passed. Homepage returned HTTP 200 with title and ISBN.
- `npm run typecheck`: passed.
- `npm audit` across the full dependency tree: **zero advisories**.
- Full standalone browser suite: **20 passed, 2 expected platform skips**
  (desktop skips mobile menu; mobile skips desktop pointer/scroll perspective).
- Final visual polish: 6 affected standalone book/preview/accessibility checks passed.
- Next.js production suite: **20 passed, 2 expected platform skips** in the final run.
- Automated WCAG 2.1 AA checks pass on desktop and mobile with reduced motion.
  This is automated coverage, not a claim of exhaustive accessibility certification.
- Responsive coverage: 320, 390, 768, 1024 and 1440 px; no horizontal document overflow.
  Open mobile book also checked at 320 and 390 px.
- No JavaScript exceptions or failed local assets observed. The deliberately
  failed external cover request produces the expected browser resource error and
  tested typographic fallback. No hydration exceptions observed in production.
- Reading preview paging keeps its measured height. Every chapter tab and full
  reader-response control was exercised; mobile menu tested with touch, Escape,
  and navigation. Desktop perspective was checked with scroll and pointer input.
- Static export compared byte-for-byte after regeneration: repeatable.
- Visual inspection of desktop/mobile hero, book, meaning, preview, chapters,
  authors, reviews and ending; additional hinged-book inspection after polish.
- Local mobile performance experiment: 4x CPU slowdown, 1.6 Mbps download,
  150 ms latency, remote cover deliberately aborted: LCP 1.8 s, CLS 0.000234.
  These are local lab observations, not deployed/field Core Web Vitals; the cover
  transfer was excluded. Initial mobile mountain image is approximately 60 KB.

## Bugs found and resolved

- Decorative book shadow intercepted the open control: moved and made noninteractive.
- Preview pages moved controls as copy length changed: measure maximum height
  after font loading and resizing.
- Contrast failures on small terracotta labels, chapter numbers and author caption:
  corrected actual colors, with audit passing afterward.
- Chapter keyboard navigation could move the document: only scroll the tab strip.
- A stale development server could overwrite production build manifests: stopped
  the actual child processes, rebuilt, and verified real production rendering.
- Initial production metadata test expected a literal trailing slash; corrected
  it to normalize the URL and still assert the exact canonical destination.

## Outstanding content, asset, and deployment limitations

1. **Original cover:** the actual cover URL is preserved and used whenever it
   loads. The environment denies direct access to `blueroseone.com`, so its artwork
   could not be visually checked or cached. Supply a local original front cover,
   replace `book.cover` with its supported public path, regenerate the standalone
   HTML and verify both entry points. Do not generate counterfeit cover artwork.
2. **Genuine book preview:** no manuscript or verified sample was supplied. The
   preview explicitly presents original website reflections. Replace only with
   approved genuine excerpts; never invent page text or claim these are book pages.
3. **Authors:** no portraits or approved biographies were supplied. Editorial
   monograms and existing factual introduction are used. Add genuine assets only.
4. **Live verification:** direct access to the Netlify website is also denied by
   the cloud policy. No deployed browser audit, retailer availability check, or
   confirmed Netlify deployment is claimed. The original screenshot's Git LFS
   object returns 404 from its server and is not used.
5. React 18 remains supported by Next.js 16 but emits a deprecation notice for a
   future Next.js 17 migration. It has no reported audit advisory here; React 19
   migration is optional future maintenance, not required for this verified site.

## Environment draft

Saved install/start instructions for the updated workflow, with fonts now local.
Saved custom domains retain `fonts.googleapis.com` and `fonts.gstatic.com` and
add `blueroseone.com` and `still-standing-still-here.netlify.app` for content checks.
Package-manager presets remain unchanged. Draft saving does not apply runtime
network changes or publish the environment; review, save and publish in environment
settings before retrying those blocked destinations. No secrets are required.

## Scheduling / credit limits / overlap

**No recurring task exists.** All available tools were checked for scheduling,
automations, recurring tasks and cron; this session exposes no officially supported
scheduler. Do not claim automatic hourly execution, background work after this
session ends, or automatic resumption after credits refresh. Do not bypass limits.

If an official cloud scheduler becomes available, create an hourly task that reads
this file and the original brief, inspects current Git/remote state, continues the
next incomplete item, verifies it, updates this file, and safely commits/pushes.
Configure scheduler concurrency to one or use a durable shared lock. A local
file lock on a temporary machine cannot prevent collisions across separate cloud
runs. Do not install a local timer and mistake it for persistent Codex execution.
Stop the recurring task once requirements and available-content checks are complete.

## Git handoff

The user explicitly authorized committing and pushing verified changes to the
existing GitHub repository. Original HEAD and remote main at inspection:
`bd0357b7010447227c1c1f93afb3f65215c9b360`.

Implementation commit `f102109ede36e5937f9a764243deb74c52ebb355` was successfully
pushed to `origin` as `HEAD:main`. A subsequent read-only `git ls-remote` confirmed
that remote main exactly matched the implementation commit. This documentation
update records the verified outcome. Use `git log -1` for the latest handoff commit.

Future updates must use ordinary pushes, never force-push. If remote main advances,
inspect and integrate its changes without discarding user work. No manual Netlify
deployment or live-site verification was performed; a configured Git deployment
may run as a normal consequence of the authorized push.

## Exact next steps for resumption

1. Read this file and `docs/REDESIGN_BRIEF.md`; inspect `git status` and `git log -1`.
2. The latest 3-D implementation and validation are complete. If its Git handoff
   still says the push is pending, compare HEAD with remote main, inspect any
   divergence and push verified changes with `git push origin HEAD:main`. Otherwise
   continue only a new user request or the genuinely blocked content items below;
   do not redo or replace verified features. Commands are in `docs/DEVELOPMENT.md`.
3. Retry live website/cover access only after a meaningful network configuration
   change, or use genuinely supplied local source assets and manuscript text.
4. Complete the content replacements above when real materials become available;
   run `npm run build:static`, `npm run build`, `npm run typecheck`, then affected
   Playwright checks against static and production entry points.
5. If no new content/access or supported scheduler is available, report these exact
   blockers. Do not invent work, fictional quotations, or an hourly task.
