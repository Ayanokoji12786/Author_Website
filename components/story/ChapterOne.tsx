"use client";

import { motion } from "framer-motion";
import { useChapterReveal } from "@/lib/useChapterReveal";

/**
 * Chapter I — a single sentence, held in stillness. Background stays mostly
 * dark; the mountain and fog beneath (MountainSilhouette) do the rest of
 * the work. Nothing here moves quickly.
 */
export default function ChapterOne() {
  const { ref, opacity, y, filter } = useChapterReveal({ rise: 34, blur: 12 });

  return (
    <section id="chapter-one" ref={ref} className="relative h-[180vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6">
        <motion.div style={{ opacity, y, filter }} className="max-w-3xl text-center">
          <span className="mb-8 block font-body text-xs font-medium uppercase tracking-[0.4em] text-gold/60">
            Chapter I
          </span>
          <p className="font-literary text-[clamp(24px,4.4vw,48px)] italic leading-[1.35] text-white/90">
            &ldquo;Sometimes surviving is the greatest victory.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
