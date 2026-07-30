"use client";

import { motion, useTransform } from "framer-motion";
import { useChapterReveal } from "@/lib/useChapterReveal";

/**
 * Chapter III — the book is discovered, not shown. It starts as a pure
 * silhouette (a black mask sitting over the fully-rendered cover beneath
 * it), then that mask lifts as scroll continues while the cover itself
 * scales up and sharpens — the two motions read as sunlight finding it,
 * rather than an element simply fading in.
 */
export default function BookReveal() {
  const { ref, scrollYProgress, opacity, y } = useChapterReveal({
    fadeInEnd: 0.16,
    fadeOutStart: 0.86,
    rise: 26,
    blur: 0,
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.85], [0.86, 1]);
  const blurPx = useTransform(scrollYProgress, [0.1, 0.6], [16, 0]);
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);
  const silhouette = useTransform(scrollYProgress, [0.14, 0.78], [1, 0]);
  const sweepOpacity = useTransform(scrollYProgress, [0.3, 0.58, 0.85], [0, 0.5, 0.15]);
  const captionOpacity = useTransform(scrollYProgress, [0.68, 0.88], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.68, 0.88], [14, 0]);

  return (
    <section id="chapter-three" ref={ref} className="relative h-[220vh] w-full">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-6">
        <motion.div style={{ opacity, y }} className="flex flex-col items-center">
          <span className="mb-10 block font-body text-xs font-medium uppercase tracking-[0.4em] text-gold/60">
            Chapter III
          </span>

          <motion.div
            style={{ scale, filter }}
            className="book-shadow relative aspect-[2/3] w-[min(62vw,320px)] overflow-hidden rounded-[2px]"
          >
            {/* Lit cover — always rendered; the silhouette mask above controls what's visible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(155deg, #1C1A2E 0%, #2D2B3F 42%, #4B3B2C 78%, #6E4F2A 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-9 text-center">
              <svg width={44} height={30} viewBox="0 0 88 60" fill="none" aria-hidden="true">
                <path
                  d="M2,58 L20,30 L34,44 L50,16 L64,38 L78,20 L86,58 Z"
                  fill="none"
                  stroke="#E8D59E"
                  strokeWidth={1.6}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity={0.85}
                />
              </svg>
              <div>
                <h3 className="font-display text-[clamp(15px,2.6vw,22px)] font-semibold uppercase leading-snug tracking-[0.08em] text-parchment">
                  Still Standing,
                  <br />
                  Still Here
                </h3>
                <p className="mt-3 font-body text-[10px] uppercase tracking-[0.28em] text-goldLight/70">
                  Dhruva &amp; Tattva Nerella
                </p>
              </div>
              <div className="h-6" />
            </div>
            <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/70 to-transparent" />

            {/* Raking sunlight sweep */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                opacity: sweepOpacity,
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(255,225,170,.55) 48%, transparent 66%)",
                mixBlendMode: "overlay",
              }}
            />

            {/* Silhouette mask — lifts to reveal the cover beneath */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-black"
              style={{ opacity: silhouette }}
            />
          </motion.div>

          <motion.p
            style={{ opacity: captionOpacity, y: captionY }}
            className="mt-9 max-w-sm text-center font-literary text-base italic text-white/50"
          >
            Some things aren&apos;t given to you. You find them, when the light is ready.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
