"use client";

import { motion, useTransform } from "framer-motion";
import { useChapterReveal } from "@/lib/useChapterReveal";

/**
 * Chapter II — the camera drifts forward. A slow, near-imperceptible scale
 * on the text (paired with the mountain's own parallax in
 * MountainSilhouette) reads as movement toward the ridge, not a zoom.
 */
export default function ChapterTwo() {
  const { ref, scrollYProgress, opacity, y, filter } = useChapterReveal({ rise: 34, blur: 12 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 1.05]);

  return (
    <section id="chapter-two" ref={ref} className="relative h-[180vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6">
        <motion.div style={{ opacity, y, filter, scale }} className="max-w-3xl text-center">
          <span className="mb-8 block font-body text-xs font-medium uppercase tracking-[0.4em] text-gold/60">
            Chapter II
          </span>
          <p className="font-literary text-[clamp(24px,4.4vw,48px)] italic leading-[1.35] text-white/90">
            &ldquo;The strongest people are rarely the loudest.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
