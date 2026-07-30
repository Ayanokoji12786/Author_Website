"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_SOFT = [0.16, 0.7, 0.24, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  shown: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/**
 * Final Chapter — the mountain has finished rising (MountainSilhouette
 * reaches full warmth right as this section arrives). Title reprises the
 * Prologue, then a deliberate pause before the single CTA settles in —
 * the only button in the entire experience.
 */
export default function FinalChapter() {
  return (
    <section id="final" className="relative flex min-h-[150vh] w-full items-center justify-center px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5, delayChildren: 0.1 }}
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.h2
          variants={item}
          transition={{ duration: 1.3, ease: EASE_SOFT }}
          className="font-display text-[clamp(38px,7.5vw,84px)] font-semibold leading-[1.08] text-white"
        >
          Still Standing.
          <br />
          Still Here.
        </motion.h2>

        <motion.p
          variants={item}
          transition={{ duration: 1.2, ease: EASE_SOFT }}
          className="mt-8 max-w-lg font-literary text-xl italic text-white/55 sm:text-2xl"
        >
          Every ending is the beginning of another climb.
        </motion.p>

        {/* A deliberate pause lives in this element's own delay, longer than the stagger above. */}
        <motion.div
          variants={item}
          transition={{ duration: 1.2, delay: 1.6, ease: EASE_SOFT }}
        >
          <a
            href="#"
            className="group relative mt-16 inline-flex items-center gap-3 overflow-hidden rounded-full border border-gold/50 bg-gold/[0.04] px-10 py-4 font-body text-xs font-medium uppercase tracking-[0.28em] text-goldLight backdrop-blur-sm transition-colors duration-500 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            style={{ boxShadow: "0 0 40px rgba(201,168,76,.14)" }}
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-gold to-goldLight transition-transform duration-500 ease-out group-hover:scale-x-100" />
            Begin the Journey
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
