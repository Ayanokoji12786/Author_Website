"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

interface CinematicHeroProps {
  /** True once the loading screen has fully dissolved — the reveal sequence begins here. */
  start: boolean;
}

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;
const EASE_SOFT = [0.16, 0.7, 0.24, 1] as const;

/**
 * Reveal timeline, seconds from `start`. The environment (mountain, sunrise,
 * fog — owned by MountainSilhouette) establishes first; the title only
 * animates in once that's settled.
 */
const T = {
  titleLine1: { duration: 1.15, delay: 3.0 },
  titleLine2: { duration: 1.15, delay: 3.75 },
  subtext: { duration: 1, delay: 4.7 },
  hint: { duration: 1.2, delay: 5.4 },
};

const REVEAL_DONE_MS = (T.hint.delay + T.hint.duration + 0.3) * 1000;

function revealVariants(reduced: boolean, riseDistance = 22, blurAmount = 14): Variants {
  return {
    hidden: reduced
      ? { opacity: 0 }
      : { opacity: 0, y: riseDistance, filter: `blur(${blurAmount}px)` },
    shown: reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" },
  };
}

export default function CinematicHero({ start }: CinematicHeroProps) {
  const reducedMotionQuery = useReducedMotion();
  const reduced = !!reducedMotionQuery;
  const [revealDone, setRevealDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    const t = setTimeout(() => setRevealDone(true), REVEAL_DONE_MS);
    return () => clearTimeout(t);
  }, [start]);

  const titleVariants = revealVariants(reduced, 26, 16);
  const subtextVariants = revealVariants(reduced, 16, 8);
  const hintVariants = revealVariants(reduced, 10, 4);

  return (
    <section
      id="prologue"
      aria-label="Still Standing, Still Here"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Shooting stars — a quiet ambient touch, only once the reveal has settled */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealDone ? 1 : 0 }}
          transition={{ duration: 1.6, ease: EASE_SOFT }}
        >
          <ShootingStars starColor="#FFFFFF" trailColor="#8A8A8A" minSpeed={8} maxSpeed={18} minDelay={2600} maxDelay={7000} />
        </motion.div>
      )}

      {/* Title + copy */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="font-display leading-[1.15] tracking-[0.01em]">
          <motion.span
            className="block text-[clamp(34px,7vw,76px)] font-light text-white"
            variants={titleVariants}
            initial="hidden"
            animate={start ? "shown" : "hidden"}
            transition={{ duration: T.titleLine1.duration, delay: T.titleLine1.delay, ease: EASE_OUT }}
          >
            Still Standing,
          </motion.span>
          <motion.span
            className="mt-1 block text-[clamp(34px,7vw,76px)] font-semibold text-white"
            variants={titleVariants}
            initial="hidden"
            animate={start ? "shown" : "hidden"}
            transition={{ duration: T.titleLine2.duration, delay: T.titleLine2.delay, ease: EASE_OUT }}
          >
            Still Here.
          </motion.span>
        </h1>

        <motion.p
          className="mt-7 max-w-md font-body text-[clamp(14px,1.6vw,17px)] font-light tracking-[0.02em] text-white/65"
          variants={subtextVariants}
          initial="hidden"
          animate={start ? "shown" : "hidden"}
          transition={{ duration: T.subtext.duration, delay: T.subtext.delay, ease: EASE_OUT }}
        >
          Not every battle leaves scars you can see.
        </motion.p>

        <motion.div
          aria-hidden="true"
          className="mt-16 flex flex-col items-center gap-2 text-white/40"
          variants={hintVariants}
          initial="hidden"
          animate={start ? "shown" : "hidden"}
          transition={{ duration: T.hint.duration, delay: T.hint.delay, ease: EASE_OUT }}
        >
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.34em]">Scroll</span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
