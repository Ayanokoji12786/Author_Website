/**
 * Single source of truth for the homepage's scroll narrative.
 *
 * The whole page (Prologue → Final Chapter) is one continuous scroll track.
 * Section heights are expressed in vh so their proportion of the total is
 * stable across viewport sizes; the fractions below mark where each chapter
 * starts within that track, on a 0–1 progress scale. `MountainSilhouette`
 * and `CinematicCanvas` read these to keep the persistent backdrop in sync
 * with whichever chapter is currently on screen.
 */

export const CHAPTER_VH = {
  prologue: 100,
  chapterOne: 180,
  chapterTwo: 180,
  chapterThree: 220,
  chapterFour: 170,
  final: 150,
} as const;

const TOTAL_VH = Object.values(CHAPTER_VH).reduce((a, b) => a + b, 0);

function cumulative(keys: (keyof typeof CHAPTER_VH)[]) {
  let sum = 0;
  for (const k of keys) sum += CHAPTER_VH[k];
  return sum / TOTAL_VH;
}

/** Fraction of total scroll progress at which each chapter begins. */
export const STORY_BREAKPOINTS = {
  prologueStart: 0,
  chapterOneStart: cumulative(["prologue"]),
  chapterTwoStart: cumulative(["prologue", "chapterOne"]),
  chapterThreeStart: cumulative(["prologue", "chapterOne", "chapterTwo"]),
  chapterFourStart: cumulative(["prologue", "chapterOne", "chapterTwo", "chapterThree"]),
  finalStart: cumulative(["prologue", "chapterOne", "chapterTwo", "chapterThree", "chapterFour"]),
  end: 1,
} as const;

/** Clamp + linear interpolation used by the backdrop's custom transformers. */
export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

/** Piecewise-linear interpolation across an arbitrary number of stops. */
export function scaleAcross(p: number, stops: [number, number][]): number {
  if (p <= stops[0][0]) return stops[0][1];
  for (let i = 0; i < stops.length - 1; i++) {
    const [x0, y0] = stops[i];
    const [x1, y1] = stops[i + 1];
    if (p >= x0 && p <= x1) {
      const t = x1 === x0 ? 0 : (p - x0) / (x1 - x0);
      return lerp(y0, y1, t);
    }
  }
  return stops[stops.length - 1][1];
}

const B = STORY_BREAKPOINTS;

/**
 * Overall "warmth" of the sunrise, 0 (cold, near-black night) → 1 (full
 * golden-hour illumination in the Final Chapter). Drives sky gradient,
 * mountain glow tint, and particle color across every persistent layer.
 */
export function sunriseWarmth(p: number): number {
  return scaleAcross(p, [
    [B.prologueStart, 0.16],
    [B.chapterOneStart, 0.22],
    [B.chapterTwoStart, 0.46],
    [B.chapterThreeStart, 0.62],
    [B.chapterFourStart, 0.8],
    [B.finalStart, 0.94],
    [B.end, 1],
  ]);
}

/** How "defined" the mountain ridgeline is — fades in finer detail strokes. */
export function mountainDetail(p: number): number {
  return scaleAcross(p, [
    [B.prologueStart, 0.25],
    [B.chapterOneStart, 0.35],
    [B.chapterTwoStart, 0.85],
    [B.chapterThreeStart, 1],
    [B.end, 1],
  ]);
}

/** Fog thickness — thickest through Chapter I, thins as the light spreads. */
export function fogDensity(p: number): number {
  return scaleAcross(p, [
    [B.prologueStart, 0.3],
    [B.chapterOneStart, 0.7],
    [B.chapterTwoStart, 0.4],
    [B.chapterThreeStart, 0.18],
    [B.finalStart, 0.1],
    [B.end, 0.08],
  ]);
}

/** Dust motes — a quiet constant presence that gathers toward the close. */
export function dustDensity(p: number): number {
  return scaleAcross(p, [
    [B.prologueStart, 0.25],
    [B.chapterThreeStart, 0.4],
    [B.chapterFourStart, 0.55],
    [B.finalStart, 0.85],
    [B.end, 1],
  ]);
}

export { STORY_BREAKPOINTS as B };
