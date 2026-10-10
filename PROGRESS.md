# Still Standing, Still Here — persistent progress

Last updated: 10 October 2026 (UTC).

## Current state

The cinematic redesign is implemented in the existing project. Do not restart
from scratch. The original full requirements are preserved in
`docs/REDESIGN_BRIEF.md`. Shared content and components drive both the Next.js app
and the standalone Netlify page. Remaining limitations are listed below; genuine
manuscript content and unavailable photography have not been fabricated.

## Current increment: reliability and cinematic polish (deployed; final entry/resize corrections in verification)

The user supplied `docs/REFINEMENT_BRIEF.md`; it refines the deployed experience,
not a rebuild. Preserve all existing content, hero, genuine cover, mountain and
retailer URLs. No hourly scheduling API is available in this environment; no
recurring task exists. Resume from this file and the current Git diff.

- Reproduced blank purchase presentation: CSS3D negative camera depth was not
  isolated from the sibling WebGL canvas. The real purchase DOM was present but
  its visible composition was obscured. Explicit renderer stacking contexts and
  removal of the redundant CSS back face fix the presentation. Also reproduced
  direct `#buy` arriving at a different chapter after async scene initialization.
- Loader startup previously ran after first paint. Added a shared head bootstrap
  with early Skip/Escape and a seven-second fail-open deadline; it preserves the
  no-JavaScript reading document. Moved the genuine cover to the right while
  keeping the existing ridge and heartbeat visibly separate. Restored original
  synthesized 58/46 Hz heartbeat and brown wind from commit `ac71f49`, with an
  explicit gesture, mute, fade and context/timer cleanup.
- Scene readiness now awaits original cover decode, GPU texture upload and shader
  warmup. Navigation is queued during initialization. Resize preserves logical
  position. Small scroll increments use time-independent bounded interpolation,
  while final poses remain deterministic and rendering stops when settled.
- Reduced inactive chapter updates, vector/paper allocations, duplicate layout
  reads and unchanged canvas buffer reallocations. Balanced pixel ratio budgets,
  softer cover materials, continuous opposing-stack reveal, endpapers, readable
  previous-page surfaces and correct curved-paper underside are implemented.
- Added actual purchase pixel snapshots: the earlier DOM-only checks missed the
  visible occlusion. Reviewed real desktop/mobile loader, purchase, upright book,
  tilt, flight and curved-page renders. The hero's generated HTML is unchanged.
- Full static regression: 71 passed / 3 intentional platform skips / 2 failures.
  Those failures exposed a genuine race: queued resize preservation could undo
  a newer scroll command. Fixed the ordering; all four affected desktop/mobile
  resize checks subsequently passed without weakening assertions.
- Production build/prerender, standalone generation, typecheck and whitespace
  checks pass. Dependency audit reports zero advisories. The complete production
  browser suite passed **73 checks with 3 intentional platform skips**. Added
  a delayed-cover regression afterwards; its two desktop/mobile checks pass on
  standalone and production (four additional executions). All 75 current
  production checks have passing coverage; deployment verification is next.
- One lost WebGL context now releases resources and restores Reading view; Retry
  book view recreates one context while preserving original controls/content.
  Both static desktop/mobile recovery checks pass.
- Reproducible 100-step cloud SwiftShader comparison: median frame spacing
  593.5 → 337.0 ms; p95 799.0 → 485.3 ms; Chromium task time 62.41 → 37.65 s.
  The lower-cost software tier uses 0.8 drawing resolution and 256 shadow maps;
  text stays at full resolution. GPU raster/commit waits dominate this machine.
  See `docs/3D_BOOK_JOURNEY.md` and `scripts/measure-book.cjs`. These are single-run
  cloud software-GPU measurements, not a physical-device 60 FPS guarantee.
- Original retailer URLs remain unchanged. The browser's actual outbound purchase
  request is verified; Amazon's independent cloud HEAD response was HTTP 503.
  Do not substitute an unrelated store or claim retailer service availability.
- Existing cloud installation/start instructions remain applicable; no environment
  configuration fields changed during this refinement.

- Implementation commit `31e014db69ea12fb8ec2c780ef4d85e59f6817dd` was pushed
  to `origin main`; independent `git ls-remote` matches it exactly. Netlify's
  homepage and seven checked implementation assets each return HTTP 200 and
  match the verified local files byte-for-byte (including original JPEG and
  generated renderer/controller chunks). The code is deployed.
- A default sandbox Chromium HTTPS probe failed at certificate trust, while
  Python verified TLS and served files. The supported elevated browser context
  returned HTTP 200 using the existing certificate store; certificate
  verification remains enabled. Live smoke run: 17 passed, one initial-entry
  check failed; its focused rerun passed. Investigating that entry uncovered a
  separate, reproducible fractional-boundary bug: a section at 1000.390625 px
  and a native rounded scroll position of 1000 px hid the initialized book.
  Added a half-pixel boundary tolerance and three fractional-layout regression
  cases. All eight affected static desktop/mobile boundary/rotation/resize
  checks pass. Stopped an orphaned npm/Next server child that survived the first
  shutdown command, rebuilt with port 4175 confirmed empty, and started a fresh
  direct Next process. Its full 80-case run passed 75 / skipped 3 / failed 2
  desktop initial-scroll checks; the fractional regression itself passed. These
  remaining intermittent cold-entry failures are still under investigation.
  CPU render submission was being treated as readiness before queued GPU draws
  completed. Added a bounded WebGL2 completion fence before world readiness;
  readiness now awaits that fence. Presentation smoothing also clamps at the
  hero/book boundary, so it cannot expose an empty spacer before the book appears.
- Repeated targeted standalone run after the readiness fixes: 18 book-entry,
  retraction and rapid-resize checks passed; six purchase-resize checks exposed
  native scroll anchoring being mistaken for new navigation. Refined preservation
  to compare chapter-relative coordinates, which accounts for hero height changes
  while rejecting stale navigation. All six affected desktop/mobile checks now
  pass, including a deterministic late-resize regression. Initial entry,
  retraction and rapid scrolling each passed three times on both platforms.
- The final production rebuild, typecheck and whitespace checks pass. The fresh
  full production run of **82 cases passed 79 checks with 3 intentional platform
  skips and no failures**. Browser failure attachments now include requested
  versus actual native scroll and chapter coordinates for reproducible diagnosis.

Exact next steps: push the verified correction, compare Netlify files and rerun
the complete live smoke subset. Full production evidence is in
`/tmp/refinement-production-final2.log` and `/tmp/refinement-production-final2`.
Preserve the current implementation.
The promised reference screenshot has not been supplied; use real browser renders
until it arrives. Desktop/mobile device hardware FPS is not a measured guarantee.

## Previous increment: genuine Three.js book world (verified and deployed)

The latest user specification supersedes the previous CSS journey. The user
confirmed: use the connected book site and preserve its content. The hero and
actual-cover loader are preserved. Do not restart this implementation.

- Implemented a persistent genuine Three.js book with rounded physical covers,
  spine, page stack, original cover texture and paper surfaces. The main group
  rotates from XY to XZ, while an independent camera descends and travels along
  the same book. Chapter-specific anchors keep content connected to the paper.
- Seven real website chapters contain 17 readable spatial stops. The original
  DOM nodes, links, previews, tabs and reviews retain their events. Solid backing
  meshes, extruded numerals, directional shadows, reflections and distinct page
  motifs accompany content emergence and retraction.
- A pure reversible scroll timeline retracts content, pulls the camera away,
  rotates the book upright, then turns a curved/deformed 48-subdivision sheet.
  The underside and underlying surface reveal the next page. No scene replacement
  or camera teleport is used. Reduced motion, Reading view and failed/lost WebGL
  preserve the original full document.
- New maintainable modules live in `lib/book-world/`; esbuild generates tracked
  static assets for both Netlify and Next.js. Details: `docs/3D_BOOK_JOURNEY.md`.
- Initial browser checks found final-stop interaction was disabled by fractional
  scroll rounding; fixed the timeline margin. Geometry checks also found a test
  sampled before the requested render, and an endpoint rounded just short of
  upright; checks now await animation frames and sample inside the upright hold.
- Current full dependency audit: zero advisories. Static build, production
  build/prerender and typecheck pass. The full static
  suite passed 56 checks with 3 intentional platform skips; one long resize/reversal
  check exhausted its original 30-second cloud software-rendering test limit. Its
  complete desktop/mobile rerun passed (25.0/34.8 seconds) after increasing only
  that multi-step test budget to 60 seconds. All static features have passing
  coverage. The full final production suite passed **57 checks with 3 intentional platform
  skips**. Implementation commit `c3abc5d778821f4d9fa56ce237825fe15e765f6f` was pushed
  to `origin main`; independent `git ls-remote` matched it exactly. The same
  implementation is verified live at the existing Netlify URL.
- Fixed a real final-chapter bug: max scroll ended before the return/turn.
  A trailing viewport now allows the full final cycle before the footer. Camera
  movement preserves a clear view of the first 45-degree rotation. The same book
  then grows continuously into a platform; content scale compensation keeps text
  readable, and tests verify the camera is above the real paper bounds.
- Final short-screen inspection found chapter/review panels overlap navigation
  at 568×320. Added an automatic Reading view for landscape screens 480 px tall
  or less; portrait/taller screens restore the same book, section and tab state.
  Added a browser check for both 844×390 and 568×320 and return to Book view.
  All 10 affected final static checks pass, including all 17 content stops, modes,
  short-screen restoration and failed/lost WebGL. All **10 matching production
  checks also pass**. This final adaptation has complete affected-feature coverage.
- Visual review confirms physical thickness, curved sheet, readable desktop/mobile
  stops and a visible paper platform. The hero and loader markup are byte-for-byte
  identical to the prior verified implementation.
- A frozen reinstall (`npm ci --cache /workspace/.npm --no-audit --no-fund`)
  succeeded (60 packages). The final production build/prerender and typecheck
  passed again. All six generated artifacts matched the prior recorded SHA-256
  hashes exactly after rebuilding, including HTML and split browser chunks.
- Final generated HTML and browser bundles are byte-for-byte repeatable after
  the short-screen adaptation as well. Current `index.html` SHA-256:
  `e5223ca993623602a597b9c1a94566c86eafcf489ee4270f52b081451d1c7cf4`.
- Netlify verification: homepage, journey entry, controller, shared chunk, renderer
  chunk, CSS, interaction script and genuine cover each returned HTTP 200 and
  matched the verified local files exactly. The first root probe saw the previous
  deployment; the complete followup confirmed all eight current assets.
- **All 14 live desktop/mobile smoke checks passed**: actual WebGL rotation,
  independent camera descent/travel, content retraction, flat retreat, upright
  curved page turn and reverse poses, all 17 content stops, genuine-cover loader,
  working tabs/reflections/reviews/retailer links, metadata and runtime/asset/
  overflow checks. Browser checks used the supported context with platform
  certificate trust; HTTPS verification remained enabled.
- All requested available-content implementation work is complete. No claim is
  made that body text consists of individually extruded WebGL letters: accessible
  CSS3D content sits on solid backing geometry; chapter/station text is extruded
  geometry. Physical-device FPS and an exhaustive manual accessibility audit are
  not measured guarantees. Missing manuscript/portrait materials remain unchanged.
- Cloud setup instructions were updated and saved for this real geometry workflow,
  preserving install script, repositories, network and all unrelated settings.
  The tool confirmed `status: saved` and `requires_publish: true`; future setup
  activation requires Review, Save and Publish in environment settings.
- No official scheduling mechanism is exposed; no hourly/background task exists.
  Progress is preserved here; credit limits must not be bypassed.

## Previous increment: original-cover loader and CSS book journey

The user asked to smooth the loader and show only their actual book. They then
specified a continuous experience after the hero: the book opens, tilts flat,
the camera flies into each website page, returns, turns a leaf, and enters the
next section. Implementation and feature validation are complete; do not restart.

- Publisher and live-site access now succeed. Retrieved and visually verified
  the original 529×800 JPEG (75,435 bytes), showing the yellow cover, climber and
  both authors. Copied it unchanged to `public/media/still-standing-still-here-cover.jpg`.
  SHA-256 `0e51d7eb4160436aef4c185e428c984c45744096cc9346c6faac41848d1e8f96`
  matches the download exactly. `book.cover` retains the publisher source URL;
  `book.coverAsset` supplies the same-origin file for all displayed books.
- Loading uses this artwork after decoding; removed the invented miniature.
  Small pose changes, one gentle cover reveal, a 900 ms dissolve, and a minimum
  display period that lets the reveal finish. Skip/Escape can interrupt the dissolve.
  Cover failure hides the loader book, never substitutes fictional cover art.
- Seven `JourneyPage` sections follow the unchanged hero. Shared `book-journey.js`
  drives a persistent 3-D book, hinged actual cover, paper planes, flat camera
  flight, page entry, content elevation, return and a 175-degree page turn.
  Normal scroll controls the timeline in both directions; touch works too.
- Reading view preserves document content and controls; reduced motion and no JS
  retain the ordinary layout. Height-aware page scrolling accommodates long
  sections, changing fonts, chapter content and expanded reader responses.
- Added browser checks for original artwork, camera phases/reversal, all seven
  pages, interactive contents, mode/position preservation and accessibility.
  Original interaction checks exercise Reading view.
- Fixed two issues found in the first browser run: the final section's inherited
  flex layout collapsed its paper width, and Reading view's header scroll padding
  caused the current page to be lost when switching back to Book view.
- Fixed a contrast issue found in the full run: interpolating the fixed header's
  text and background through opposite tones briefly made navigation unreadable.
  Book view now changes both colors together; its shadow can still transition.
  Both affected desktop/mobile accessibility checks pass after the correction.
- Headings, monograms and chapter/theme numerals rise off the paper during flight
  and settle at zero depth for reading. Browser checks measure the heading's
  actual 3-D transform at both phases.
- Final production build/prerender and TypeScript validation passed. Full
  standalone suite: **49 passed, 3 intentional platform skips**. After the final
  depth adjustment, all **14 affected immersive checks passed** on standalone.
  Full production suite: **48 passed, 3 platform skips, 1 test timing failure**.
  The failure sent Escape before Next.js initialized the loader after reload,
  then sampled the book state while the overlay was still up. Added explicit
  initialization, loader exit and font readiness waits without weakening the
  toggle assertions; **6 production checks passed** (3 repeats per platform) and
  both affected standalone checks passed.
  All implemented features now have passing static and production coverage.
- Visually inspected the original-cover loader, flat-flight/near-page stages and
  readable sections on desktop and mobile; no runtime or horizontal-overflow
  errors in the responsive flight checks at 320, 768 and 1024 pixels. Reading
  view also retains the earlier document layout coverage. Automated WCAG AA
  checks pass on selected immersed pages and the reduced-motion document.

Static regeneration is byte-for-byte repeatable (SHA-256
`3de4a643dda1aadd08ae6d4c68d0b8883230b915e0dc7b08bb881445a457cb70`).
Implementation commit `99dadb63d9bc220c287679b1ad6cca6742a01045` was pushed to
`origin main`; an independent `git ls-remote` matched it exactly. The checkout was
clean afterward. The first post-push probe returned the old deployment; a subsequent
probe confirmed the new deployment. Live homepage, journey JS, interaction JS,
CSS and original JPEG each returned HTTP 200 and matched the verified local files
byte-for-byte. The new experience is live at the existing Netlify URL.
The live Chromium smoke check initially could not navigate in the default
sandbox (`net::ERR_CERT_AUTHORITY_INVALID`), while system Python/curl validated
TLS. Checked the platform's existing CA and certificate store, then ran the tests
in the supported elevated context with its matching trust configuration. **All
10 live desktop/mobile checks passed**: genuine-cover loader, flat flight/heading
depth/reversal, all seven readable pages and controls, metadata/links, local assets,
runtime exceptions and overflow. Certificate verification stayed enabled. The
initial failures stopped at navigation and were an environment trust mismatch.
Previous verified redesign work below remains intact. No recurring scheduler exists.

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

## Previous 3-D enhancement (verified baseline)

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
Implementation commit `254e1d93dc13106fc5f9efc954aff4d4a00144d3` was pushed
to `origin main` with an ordinary push, and a separate `git ls-remote` confirmed
remote main exactly matched that commit. The following documentation commit
records that completed handoff; use `git log -1` for the latest commit.

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

1. **Original cover: resolved in the latest increment.** Publisher access now
   succeeds; the genuine image is verified and bundled unchanged. Preserve its
   provenance and the publisher source URL; do not replace it with generated art.
2. **Genuine book preview:** no manuscript or verified sample was supplied. The
   preview explicitly presents original website reflections. Replace only with
   approved genuine excerpts; never invent page text or claim these are book pages.
3. **Authors:** no portraits or approved biographies were supplied. Editorial
   monograms and existing factual introduction are used. Add genuine assets only.
4. **Live verification: resolved for the latest real 3D world.** All eight key
   served implementation assets match local files exactly; all 14 live
   desktop/mobile smoke checks pass. No retailer service availability check,
   exhaustive deployed audit or physical-device FPS guarantee is claimed.
   The original screenshot's Git LFS object remains unavailable and is unused.
5. React 18 remains supported by Next.js 16 but emits a deprecation notice for a
   future Next.js 17 migration. It has no reported audit advisory here; React 19
   migration is optional future maintenance, not required for this verified site.

## Environment draft

Saved install/start instructions for the updated workflow, with fonts now local.
Saved custom domains retain `fonts.googleapis.com` and `fonts.gstatic.com` and
add `blueroseone.com` and `still-standing-still-here.netlify.app` for content checks.
Package-manager presets remain unchanged. Draft saving does not itself apply runtime
network changes or publish the environment. No secrets are required. The current
runtime can now retrieve the publisher cover and the live website; the original
access blocker has been resolved.

For the current book-journey increment, read the existing draft and saved an updated
`start_skill` with the current local-cover implementation, continuation docs, test
scope and trusted live-browser context. Preserved installation instructions,
repositories, unrestricted network policy and all other settings. The tool
confirmed `status: saved` and `requires_publish: true`. Review and save the draft
in environment settings, then publish the environment to activate these instructions
for future tasks. Draft persistence is confirmed; a new environment restoration is
not claimed. Current-instance development and deployed-site validation are complete.

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

Latest 3-D increment: integrated the user's remote README commit `89715d7` before
committing. Verified implementation commit
`254e1d93dc13106fc5f9efc954aff4d4a00144d3` was pushed successfully to `origin main`;
read-only remote verification matched it exactly. No force push was used. The
current documentation followup preserves these results for future sessions.

Latest book-journey increment: verified implementation commit
`99dadb63d9bc220c287679b1ad6cca6742a01045` was pushed to `origin main` and checked
independently with `git ls-remote`. The user's README link and all earlier work
were preserved. No force push or manual Netlify deployment was used.

Latest genuine Three.js increment: verified implementation commit
`c3abc5d778821f4d9fa56ce237825fe15e765f6f` was pushed to `origin main` and checked
independently with `git ls-remote`. Netlify serves the matching homepage and seven
key assets, and all 14 live desktop/mobile smoke checks pass. A documentation
followup records this handoff; use `git log -1` for the latest commit.

Future updates must use ordinary pushes, never force-push. If remote main advances,
inspect and integrate its changes without discarding user work. A configured Git
deployment may run as a normal consequence of the authorized push; always verify
the actual served version before claiming a change is live.

## Exact next steps for resumption

1. Read this file, `docs/3D_BOOK_JOURNEY.md`, `docs/DEVELOPMENT.md` and the original
   brief. Inspect `git status`, `git log -1` and remote main before new edits.
2. The genuine Three.js implementation is complete, tested, pushed and verified
   live. Preserve the existing hero, actual-cover loader and real content. Do not
   restart or replace verified work. Continue only new user requests, identified
   bugs or authentic content additions when supplied.
3. Keep book geometry, camera, curved sheet, content anchors and scroll sampler
   separate. Both entry points use generated browser modules; edit source and
   regenerate with `npm run build:static`. Do not regenerate during browser runs.
4. For future changes, run the relevant checks described in development docs.
   Use an ordinary push and verify actual served assets; never assume deployment
   from a successful push. No currently failing checks remain.
5. Setup draft persistence is confirmed, but activation for future environments
   requires Review, Save and Publish in environment settings. No fresh-environment
   restoration or hourly execution is claimed.
6. No recurring task exists. Resume manually from this state until an official
   scheduler is available. Configure concurrency one/a durable shared lock if
   scheduling becomes supported; never bypass credits or create misleading timers.
