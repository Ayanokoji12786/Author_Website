"use client";

import { motion, type Variants } from "framer-motion";

const VOICES = [
  {
    quote:
      "I've read a hundred books about resilience. This is the only one that didn't make me feel like my pain was a problem to solve. It doesn't fix you — it sits beside you.",
    name: "Amara K.",
    role: "Therapist & Reader",
  },
  {
    quote:
      "Chapter 3 broke me open in the best way. I had to set the book down, cry, and pick it back up. Not because it was too much — because for the first time, someone got it right.",
    name: "Ravi S.",
    role: "Writer & Professor",
  },
  {
    quote:
      "I bought this for a friend. I ended up reading it first — three times. It's the kind of book that becomes a compass.",
    name: "Lina M.",
    role: "Reader & Mother",
  },
];

const container: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.22, delayChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  shown: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 0.7, 0.24, 1] },
  },
};

/**
 * Chapter IV — three quiet testimonials. Reveal is a simple, gentle
 * fade-in-view (not scroll-scrubbed like the earlier chapters) since the
 * cards should hold their own moment rather than move with the camera.
 */
export default function Testimonials() {
  return (
    <section id="chapter-four" className="relative w-full px-6 py-[22vh]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: [0.16, 0.7, 0.24, 1] }}
        className="mx-auto mb-20 max-w-xl text-center md:mb-28"
      >
        <span className="mb-6 block font-body text-xs font-medium uppercase tracking-[0.4em] text-gold/60">
          Chapter IV
        </span>
        <p className="font-literary text-xl italic text-white/50">Not reviews — echoes.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-10"
      >
        {VOICES.map((v) => (
          <motion.div
            key={v.name}
            variants={card}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-9 backdrop-blur-md md:p-10"
          >
            <p className="font-literary text-[17px] italic leading-relaxed text-white/75">&ldquo;{v.quote}&rdquo;</p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-gold/10">
                <span className="font-display text-xs font-semibold text-gold">
                  {v.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="font-body text-sm text-white/80">{v.name}</div>
                <div className="font-body text-xs text-white/35">{v.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
