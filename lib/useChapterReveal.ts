"use client";

import { useRef } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

interface ChapterRevealOptions {
  /** Fraction of the section's scroll range where content reaches full visibility. */
  fadeInEnd?: number;
  /** Fraction of the section's scroll range where content begins fading out. */
  fadeOutStart?: number;
  rise?: number;
  blur?: number;
}

interface ChapterReveal {
  ref: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  filter: MotionValue<string>;
}

/**
 * Drives the "hold in the center of the stage, fade at both edges" reveal
 * shared by the scrubbed chapters. Pair the returned `ref` with a tall
 * (150–220vh) section and a `position: sticky; height: 100vh` inner wrapper
 * so content stays centered in the viewport while these values animate
 * across the section's full scroll distance — nothing snaps in or out.
 */
export function useChapterReveal(opts: ChapterRevealOptions = {}): ChapterReveal {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const fadeInEnd = opts.fadeInEnd ?? 0.35;
  const fadeOutStart = opts.fadeOutStart ?? 0.7;
  const rise = opts.rise ?? 30;
  const blur = opts.blur ?? 10;

  const opacity = useTransform(scrollYProgress, [0, fadeInEnd, fadeOutStart, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, fadeInEnd, fadeOutStart, 1], [rise, 0, 0, -rise]);
  const filter = useTransform(
    scrollYProgress,
    [0, fadeInEnd, fadeOutStart, 1],
    [`blur(${blur}px)`, "blur(0px)", "blur(0px)", `blur(${blur}px)`]
  );

  return { ref, scrollYProgress, opacity, y, filter };
}
