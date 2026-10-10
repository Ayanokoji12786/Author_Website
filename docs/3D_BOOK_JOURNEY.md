# Continuous 3D book journey

The latest user direction asks for the same physical book to rotate upright to
flat, become a surface the camera travels along, reclaim its content, return
upright, and turn a curved page. The user confirmed this applies to the connected
book website and that its genuine content must be preserved. The unchanged hero
and original-cover loader lead into seven existing website chapters: The book,
Meaning, A glimpse, The journey, The authors, Reader responses, and Your copy.
No portfolio projects, research, awards, manuscript excerpts or biographies were
invented. `lib/book-content.ts` remains the content source.

## Source responsibilities

| Module in `lib/book-world/` | Responsibility |
| --- | --- |
| `controller.js` | Native scroll, section lengths, navigation, modes and lifecycle |
| `timeline.js` | Pure scroll-to-state sampling; no accumulated tweens or clock |
| `book.js` | Persistent rounded covers, spine, page stack, hinge and paper surface |
| `paper.js` | Curved sheet deformation, underside and physical thickness |
| `camera.js` | Independent perspective camera, wide, overhead and surface travel |
| `chapters.js` | Existing section selectors, grouped content stops, motifs and sway |
| `content.js` | Original DOM content anchors, solid backing meshes, extruded text |
| `renderer.js` | WebGL/CSS3D synchronization, lights, shadows, reflection and disposal |

One WebGL scene and one CSS3D companion scene persist throughout Book view.
CSS3D keeps real selectable text, links, chapter controls and native disclosures.
These DOM panels have matching solid Three.js backings; all anchors use the same
book transforms and physical paper coordinates. They are not fullscreen sections
replacing the book. Original nodes move into the scene, retaining their event
listeners, and marker comments restore them to their original document parents.
Inactive and transitional cards are inert. Content is interactive at reading stops.

## Coordinates and choreography

X is horizontal, Y vertical, Z depth. The book starts parallel to XY. Its group
rotates around X by approximately -90 degrees: the top moves away, local page Z
becomes global Y, and the paper lies in XZ. The camera then lowers and advances
along the right-hand page. Covers, page stack, sheet and content remain children
of the original group. Camera movement is independent of that group.

During descent the same entire book smoothly grows to five times its external
view scale. Content anchors compensate for that scale while following the paper
height, preserving readable text sizes. This makes the physical paper large
enough that the camera is actually above its bounds, rather than flying outside
the front edge of a small book. Retreat reverses the same scaling. Tests check
camera coordinates against the expanded paper's real dimensions at every stop.

Each chapter has entrance, travel and exit scroll intervals. Entrance: cover
opening (first chapter only), whole-book rotation, camera descent and content
emergence. Travel: measured content stations, lateral sway, camera dolly, panel
rise and spatial landmarks. Exit: content retracts first; the camera retreats
while the book remains flat; the book rotates upright; only then does paper turn.
The underside and paper beneath reveal the next chapter. All stages derive from
current scroll distance, including reverse scrolling and discontinuous jumps.
The final chapter includes a viewport of trailing scroll room so the browser's
maximum scroll cannot cut its return sequence short before the footer.

The turning sheet has 48 horizontal subdivisions. Integrating a varying tangent
across its width creates a bent surface, with corner twist, normals, a separately
textured underside and a small thickness offset. It is not a rigid rotating card.
The canonical scene exposes diagnostic attributes for the actual group rotation,
sheet curvature, camera coordinates, persistent object UUID and rendering work.

## Content and interaction

The seven chapters contain 17 stops. Existing long blocks are grouped for legible
presentations. Camera distance fits both measured width and height; text expansion
and font changes remeasure through ResizeObserver. Six original chapter tabs,
three attributed website reflections, two full original reviews, both authors,
ISBN and original retailer links remain functional. Scene and page navigation
allow direct access without requiring long scroll sequences.

Chapter motifs differ: structural pillars, paper leaves, ascending steps, cover
objects, rings, sculptural quotation marks, and a concluding summit. Chapter and
station numerals use extruded Optimer geometry. The genuine yellow cover JPEG is
unchanged; provenance remains in `public/media/README.md`.

## Build, performance and fallback

`npm run build:world` produces the browser entry and split chunks with esbuild.
`npm run build:static` bundles the world then generates the standalone HTML.
`npm run build` also builds Next.js. Commit generated assets for the existing
Netlify repository-root deployment. Do not manually edit their minified outputs.
Run browser checks after generation; do not regenerate chunks during a suite.

The renderer runs on invalidation, rather than a perpetual frame loop. Desktop
pixel ratio is capped at 1.75, mobile at 1.25; shadow maps are 1024/512. Textures
are local and bounded; only one chapter's scene geometry is visible. Disposal
releases geometries, materials, textures, reflections, listeners and observers.
Smooth 60 FPS is a target on capable hardware, not a measured guarantee across
devices. Automated checks bound geometry and draw work and verify idle frames stop.

Mobile retains the actual XY-to-XZ transformation, with shorter travel, adapted
camera framing and smaller textures. Landscape screens 480 px tall or less
automatically use Reading view: fitting tall content beside fixed controls would
make text too small. Restoring screen height resumes the same book and chapter.
Reading view, reduced motion, no JavaScript,
failed dynamic imports and unavailable/lost WebGL preserve the full interactive
document. No wheel or touch handlers hijack ordinary scrolling.

`tests/book-journey.spec.ts` checks actual geometry and camera states, all content
stops, forward/reverse transitions, controls, accessibility, responsive bounds,
context loss and the real-cover loader. `tests/experience.spec.ts` validates the
ordinary document, hero, content, metadata and original interactions. Run both
against standalone HTTP and Next.js production. `PROGRESS.md` records results and
any remaining work; do not call tests or deployments verified before they pass.
