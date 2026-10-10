export const clamp = (value) => Math.max(0, Math.min(1, value));
export const ease = (value) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};
export const mix = (a, b, t) => a + (b - a) * t;

// Every state is a pure function of scroll distance. No clock or accumulated tween.
export function sample(distance, entrance, travel, exit, first) {
  const e = clamp(distance / entrance);
  const journey = clamp((distance - entrance) / travel);
  const out = clamp((distance - entrance - travel) / exit);
  const opening = first ? ease(e / 0.18) : 1;
  const lay = ease((e - 0.18) / 0.38);
  const upright = ease((out - 0.5) / 0.22);
  const dive = ease((e - 0.6) / 0.4) * (1 - ease((out - 0.18) / 0.32));
  const retract = ease(out / 0.18);
  const turn = ease((out - 0.76) / 0.24);
  const flat = lay * (1 - upright);
  const rise = ease((e - 0.76) / 0.24) * (1 - retract);
  const phase =
    e < 0.18
      ? first
        ? "Opening the book"
        : "The next page"
      : e < 0.56
        ? "Rotating the book flat"
        : e < 1
          ? "Descending to the paper"
          : out < 0.012
            ? "Traveling across the page"
            : out < 0.18
              ? "Returning the content to paper"
              : out < 0.5
                ? "Pulling back above the book"
                : out < 0.72
                  ? "Rotating the book upright"
                  : "Turning the curved page";
  return {
    opening,
    flat,
    dive,
    rise,
    journey,
    out,
    turn,
    phase,
    // A tiny scroll rounding margin keeps the final station interactive. Once
    // retraction moves the content appreciably, its controls become inert.
    readable: rise > 0.98 && out < 0.012,
  };
}
