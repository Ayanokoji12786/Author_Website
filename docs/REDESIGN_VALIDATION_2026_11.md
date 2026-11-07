# Redesign and performance validation — 7 November 2026

## Scope and audit

Work continues the existing project rather than replacing it. The starting tree
already contains a Next.js 16 / React 18 app, a generated standalone Netlify page,
server-rendered editorial sections, a CSS hardcover, and a persistent Three.js
book with CSS3D content. The old hero/Framer Motion components are historical;
they are not the active animation system. Content, official JPEG cover, authors,
chapter text, reviews, retailer destinations and SEO data remain unchanged.

The active scene already renders on demand, lazy-loads Three.js, caps pixel ratio,
supports context loss and reduced motion, and reuses geometry. No evidence was
found of React rerenders driving the scroll scene. A rewrite of that architecture
would discard existing working behavior without addressing the observed costs.

Observed issues addressed:

- The opening hero omitted the physical book and clear paired explore/purchase
  actions. It now shows the genuine 529×800 cover on a CSS hardcover with page
  thickness, spine, cover sheen and an interruptible hover/focus transform.
  This requires no additional canvas, renderer, texture request or animation loop.
- Software rendering used shadow passes and environment-map reflection sampling
  despite rough paper/cloth materials. This tier now uses the existing directional
  lighting and paper contact-shadow textures with a 0.65 pixel-ratio cap.
  Hardware retains room reflections, soft shadows and its existing ratio caps.
- Animation controllers relied on browser throttling rather than explicit
  visibility handling. Hidden tabs now cancel queued frames, pause CSS animation
  and suppress pointer/scroll work; return resumes from native scroll position.
- Reading-view pointer handling read layout and wrote transforms for every event.
  Events now coalesce into one frame and pointerleave cancels stale work.
- Preview measurement alternated display writes and height reads per page. Writes,
  reads and restoration are now batched. Scroll UI geometry is also read before
  header, landscape and book style writes.
- Scene failures were silently swallowed. A console warning now records the
  error while preserving the complete Reading-view fallback.

## Measurement method

The untouched Git HEAD is served separately on port 4174. The changed standalone
site is served on port 4173. `scripts/measure-book.cjs` drives the same 100-step
entry/reading scroll, checks monotonic camera travel, and records browser frame
spacing, submitted frames, geometry, drawing-buffer ratio and CDP task time.
Runs are serial in system Chromium with SwiftShader software graphics. Browser
layout and CPU rasterization are included; these are not physical-device GPU
benchmarks or field Core Web Vitals. Parallel GPU browser runs caused readiness
timeouts, so final verification uses one Playwright worker.

Initial diagnostic: median 511.2 ms, p95 896.9 ms, task time 56.96 s at ratio 0.8.
First lower-cost tier: median 320.0 ms, p95 554.2 ms, task time 35.43 s at ratio
0.65. These exploratory measurements motivated removing reflection sampling from
the software tier; the final isolated comparison is recorded below after testing.

Targets remain 60 FPS on capable hardware and responsive mobile input. This
software-only environment cannot establish either physical-device frame rate or
field CWV. The user-selectable Reading view and reduced-motion fallback remain
available with the same content and the new lightweight hero hardcover.

## Final isolated desktop comparison

| Metric | Untouched HEAD | Changed implementation |
| --- | ---: | ---: |
| Median frame spacing | 502.0 ms | 86.7 ms |
| p95 frame spacing | 818.2 ms | 112.6 ms |
| CDP task duration | 53.05 s | 9.56 s |
| Maximum main-pass draw calls | 25 | 25 |
| Maximum main-pass triangles | 9,408 | 9,408 |
| Drawing-buffer pixel ratio | 0.8 | 0.65 |
| Backward progress/camera samples | 0 / 0 | 0 / 0 |

Median spacing decreased by 82.7%, p95 by 86.2%, and task duration by 82.0% in
this software-rendered test. Sampling and wall-clock durations can vary between
runs. Main-pass draw-call diagnostics exclude shadow passes; unchanged geometry
counts establish that this improvement did not remove the book or content.
Heap snapshots (7.8 versus 8.7 MB) are GC-sensitive and do not establish a memory
improvement or regression. No physical hardware or field-CWV claim is made.

## External links

Original retailer destinations remain unchanged. Direct HTTP HEAD checks returned
Flipkart 200 and Amazon 503. A retailer-side 503 does not establish a broken local
link; browser tests check the original destination is opened, not availability
of a third-party checkout. No destination was substituted.

## Phone-sized viewport comparison

The same harness at 390×844, run serially after the browser suite:

| Metric | Untouched HEAD | Changed implementation |
| --- | ---: | ---: |
| Median frame spacing | 113.1 ms | 18.2 ms |
| p95 frame spacing | 167.2 ms | 48.4 ms |
| CDP task duration | 12.91 s | 3.52 s |
| Drawing-buffer pixel ratio | 0.8 | approximately 0.65 |
| Backward progress/camera samples | 0 / 0 | 0 / 0 |

This is an 83.9% decrease in median spacing and a 72.7% decrease in task time.
Different sampling rates yield 102 versus 128 submitted frames, with observed
main-pass maxima of 25/9,408 versus 24/7,336 calls/triangles. No book geometry was
removed; the harness samples the displayed pose as it advances through the same
scroll positions. The p95 remains above a 16.7 ms frame budget, so this does not
establish sustained 60 FPS, even at this viewport. This is a desktop Chromium
software renderer at phone dimensions, not a physical phone benchmark.

## Verification

- Full static-site run: 100 passed, three expected device-specific skips, one
  failure in the new visibility test. The failure was a test race: frames were
  sampled before a separate browser call hid the document. Moving that sample
  into the suspension call made it atomic. The full lifecycle file then passed
  all four desktop/mobile cases. Cumulative coverage: 101 applicable checks
  verified, three expected skips, no unresolved failures.
- Coverage includes all seven 3D chapters and 17 content stops, reversible page
  geometry/camera movement, touch/keyboard controls, viewport changes, context
  loss, retailer navigation and purchase pixels, previews and chapter tabs,
  reviews, reduced motion, no JavaScript, local assets, SEO metadata, automated
  WCAG AA checks, runtime exceptions, overflow and loader/audio lifecycle.
- Hero screenshots inspected at 1440×1000, 820×1180 and 390×844; automated bounds
  checks cover widths 320, 390, 760, 820 and 1440.
- TypeScript and JavaScript syntax checks pass. Production build passes with
  `NEXT_TELEMETRY_DISABLED=1`; telemetry otherwise attempts to write outside this
  environment's writable roots. Both standalone outputs and Next.js production
  pages regenerate from the shared source.
- Final Next.js production smoke run on port 3000: all 10 desktop/mobile checks
  passed (hero bounds/actions, hidden-tab pause/resume, real book camera/rotation,
  preserved content/metadata/links, runtime errors/local assets/overflow).
- Changes remain local in the existing project; no remote push or deployment was
  performed. The production preview remains running on port 3000 for inspection.
