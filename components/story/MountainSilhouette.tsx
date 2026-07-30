"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { dustDensity, fogDensity, mountainDetail, sunriseWarmth } from "@/lib/storyTimeline";

/**
 * The one mountain the whole story happens in front of.
 *
 * Fixed full-viewport backdrop, mounted once behind every chapter. Its sky,
 * sunrise glow, ridgelines and fog all read the same global scroll
 * progress, so the "sun rising" the Prologue promises is the same sun that
 * finishes rising in the Final Chapter — nothing here re-enters or resets
 * between sections. Chapters sit on transparent backgrounds above it.
 *
 * `start` gates a one-time establishing reveal (glow → ridges → rays → fog,
 * staggered) that plays once the loading screen dissolves. Each layer's
 * per-scroll opacity/position (computed below via useTransform) then takes
 * over as the continuous driver for the rest of the story.
 */

const EASE_SOFT = [0.16, 0.7, 0.24, 1] as const;
const T = {
  glow: { duration: 2.8, delay: 0.1 },
  mountainBack: { duration: 2.6, delay: 0.3 },
  mountainFront: { duration: 2.3, delay: 0.55 },
  rays: { duration: 3, delay: 0.5 },
  fog: { duration: 2.4, delay: 0.75 },
};

interface MountainSilhouetteProps {
  /** True once the loading screen has dissolved — the establishing reveal begins here. */
  start: boolean;
}

type RGB = [number, number, number];

function mix(a: RGB, b: RGB, t: number): RGB {
  const k = Math.min(Math.max(t, 0), 1);
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}
function rgb([r, g, b]: RGB, a = 1) {
  return `rgba(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)},${a})`;
}

/* Palette anchors — pulled from the site's existing brand tokens so the
   backdrop never drifts into a saturated, "bright" sunrise. */
const INK: RGB = [15, 12, 10];
const DEEP_NAVY: RGB = [22, 20, 34];
const SLATE: RGB = [30, 28, 42];
const MUTED_PURPLE: RGB = [72, 62, 82];
const AMBER: RGB = [110, 78, 42];
const GOLD: RGB = [150, 118, 58];

function skyGradient(p: number): string {
  const w = sunriseWarmth(p);
  const top = mix(INK, DEEP_NAVY, w * 0.5);
  const mid = mix(SLATE, MUTED_PURPLE, w);
  const horizon = mix(mix(INK, AMBER, w * 0.85), GOLD, Math.max(0, w - 0.6) * 1.6);
  return `linear-gradient(to bottom, ${rgb(top)} 0%, ${rgb(mid)} 52%, ${rgb(horizon)} 100%)`;
}

function glowColor(p: number, alpha: number): string {
  const w = sunriseWarmth(p);
  const c = mix([255, 250, 240], [255, 205, 140], w);
  return rgb(c, alpha);
}

const entrance: Variants = { hidden: { opacity: 0 }, shown: { opacity: 1 } };

export default function MountainSilhouette({ start }: MountainSilhouetteProps) {
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll();

  const sky = useTransform(scrollYProgress, skyGradient);
  const glowOpacity = useTransform(scrollYProgress, (p) => 0.22 + sunriseWarmth(p) * 0.5);
  const glowScale = useTransform(scrollYProgress, (p) => 1 + sunriseWarmth(p) * 0.55);
  const glowInner = useTransform(scrollYProgress, (p) => glowColor(p, 0.85));
  const glowMid = useTransform(scrollYProgress, (p) => glowColor(p, 0.3));

  const rayOpacity = useTransform(scrollYProgress, (p) => Math.min(sunriseWarmth(p) * 0.4, 0.32));

  const backY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -18]);
  const midY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40]);
  const frontY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -68]);
  const frontScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.05]);

  const detailOpacity = useTransform(scrollYProgress, mountainDetail);
  const ridgeGlow = useTransform(scrollYProgress, (p) => 0.18 + sunriseWarmth(p) * 0.4);

  const fogOpacity = useTransform(scrollYProgress, fogDensity);
  const dustOpacity = useTransform(scrollYProgress, (p) => 0.15 + dustDensity(p) * 0.4);

  const glowBackground = useTransform([glowInner, glowMid], ([inner, mid]) =>
    `radial-gradient(circle, ${inner} 0%, ${mid} 32%, rgba(0,0,0,0) 70%)`
  );
  const vignetteBackground = useTransform(
    scrollYProgress,
    (p) => `radial-gradient(ellipse 82% 68% at 50% 46%, transparent 38%, rgba(0,0,0,${(0.5 - sunriseWarmth(p) * 0.16).toFixed(3)}) 100%)`
  );

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Sky */}
      <motion.div className="absolute inset-0" style={{ background: sky }} />

      {/* Sunrise glow, low behind the ridge */}
      <motion.div
        variants={entrance}
        initial="hidden"
        animate={start ? "shown" : "hidden"}
        transition={{ duration: T.glow.duration, delay: T.glow.delay, ease: EASE_SOFT }}
      >
        <motion.div
          className="absolute left-1/2 top-[62%] h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            scale: glowScale,
            opacity: glowOpacity,
            background: glowBackground,
          }}
        />
      </motion.div>

      {/* Volumetric light rays */}
      <motion.div
        variants={entrance}
        initial="hidden"
        animate={start ? "shown" : "hidden"}
        transition={{ duration: T.rays.duration, delay: T.rays.delay, ease: EASE_SOFT }}
      >
        <motion.div className="absolute inset-0" style={{ opacity: rayOpacity }}>
          {[-16, -6, 4, 14].map((angle, i) => (
            <div
              key={angle}
              className={reduced ? "" : "animate-ray-breathe"}
              style={
                {
                  position: "absolute",
                  left: "50%",
                  top: "-8%",
                  width: "40vw",
                  height: "118vh",
                  transformOrigin: "top center",
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  background:
                    "linear-gradient(to bottom, rgba(255,236,204,.18) 0%, rgba(255,236,204,.06) 42%, rgba(255,236,204,0) 78%)",
                  clipPath: "polygon(46% 0%, 54% 0%, 74% 100%, 26% 100%)",
                  "--ray-base": 0.6 - i * 0.08,
                } as React.CSSProperties
              }
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Mountain ridgeline — three depths of parallax */}
      <div className="absolute inset-x-0 bottom-0 h-[50vh]">
        <motion.div
          variants={entrance}
          initial="hidden"
          animate={start ? "shown" : "hidden"}
          transition={{ duration: T.mountainBack.duration, delay: T.mountainBack.delay, ease: EASE_SOFT }}
        >
          <motion.svg
            viewBox="0 0 1440 420"
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 h-full w-full"
            style={{ y: backY }}
          >
            <path d="M0,420 L140,250 L280,315 L440,205 L580,285 L740,165 L920,275 L1100,215 L1260,295 L1440,235 L1440,420 Z" fill="rgba(0,0,0,.5)" />
            <motion.path
              d="M0,420 L140,250 L280,315 L440,205 L580,285 L740,165 L920,275 L1100,215 L1260,295 L1440,235"
              fill="none"
              stroke="#F3E6CC"
              strokeWidth={1}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ opacity: ridgeGlow }}
            />
          </motion.svg>

          <motion.svg
            viewBox="0 0 1440 420"
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 h-full w-full"
            style={{ y: midY }}
          >
            <path d="M0,420 L90,290 L230,345 L390,255 L530,320 L700,225 L870,310 L1040,250 L1220,330 L1440,270 L1440,420 Z" fill="rgba(0,0,0,.68)" />
            <motion.path
              d="M0,420 L90,290 L230,345 L390,255 L530,320 L700,225 L870,310 L1040,250 L1220,330 L1440,270"
              fill="none"
              stroke="#F3E6CC"
              strokeWidth={1.1}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ opacity: ridgeGlow }}
            />
          </motion.svg>
        </motion.div>

        <motion.div
          variants={entrance}
          initial="hidden"
          animate={start ? "shown" : "hidden"}
          transition={{ duration: T.mountainFront.duration, delay: T.mountainFront.delay, ease: EASE_SOFT }}
        >
          <motion.svg
            viewBox="0 0 1440 420"
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 h-full w-full"
            style={{ y: frontY, scale: frontScale }}
          >
            <path d="M0,420 L170,300 L340,360 L520,270 L660,335 L840,250 L1020,330 L1180,280 L1340,345 L1440,320 L1440,420 Z" fill="rgba(0,0,0,.85)" />
            <motion.path
              d="M0,420 L170,300 L340,360 L520,270 L660,335 L840,250 L1020,330 L1180,280 L1340,345 L1440,320"
              fill="none"
              stroke="#F6EDD8"
              strokeWidth={1.2}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ opacity: ridgeGlow }}
            />
            {/* Finer sub-peaks — fades in as the mountain "gains definition" */}
            <motion.path
              d="M170,300 L200,282 L226,304 L262,270 L296,308 L340,360 M520,270 L548,250 L578,268 L610,242 L660,335 M840,250 L866,232 L896,254 L930,224 L1020,330"
              fill="none"
              stroke="#F6EDD8"
              strokeWidth={0.7}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ opacity: detailOpacity }}
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Fog drifting across the mountain */}
      <motion.div
        variants={entrance}
        initial="hidden"
        animate={start ? "shown" : "hidden"}
        transition={{ duration: T.fog.duration, delay: T.fog.delay, ease: EASE_SOFT }}
      >
        <motion.div className="absolute inset-x-0 bottom-0 h-[44vh] overflow-hidden" style={{ opacity: fogOpacity }}>
          <div
            className={`absolute -inset-x-1/4 bottom-[6%] h-2/3 ${reduced ? "" : "animate-fog-a"}`}
            style={{ background: "radial-gradient(ellipse 60% 100% at 30% 60%, rgba(243,230,204,.14), transparent 70%)" }}
          />
          <div
            className={`absolute -inset-x-1/4 bottom-0 h-3/4 ${reduced ? "" : "animate-fog-b"}`}
            style={{ background: "radial-gradient(ellipse 55% 100% at 70% 70%, rgba(243,230,204,.12), transparent 72%)" }}
          />
        </motion.div>
      </motion.div>

      {/* Dust motes — a quiet constant, thickening toward the close */}
      <motion.div className="absolute inset-0" style={{ opacity: dustOpacity }}>
        {DUST_MOTES.map((d, i) => (
          <span
            key={i}
            className={reduced ? "absolute rounded-full" : "absolute rounded-full animate-breathe"}
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              background: "radial-gradient(circle, rgba(246,237,216,.9), rgba(246,237,216,0) 70%)",
              animationDuration: `${d.dur}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Vignette */}
      <motion.div className="absolute inset-0" style={{ background: vignetteBackground }} />
    </div>
  );
}

const DUST_MOTES = Array.from({ length: 22 }, (_, i) => {
  const seed = (i * 137.5) % 360;
  return {
    left: (Math.sin(seed) * 0.5 + 0.5) * 96 + 2,
    top: (Math.cos(seed * 1.7) * 0.5 + 0.5) * 92 + 4,
    size: 1.4 + (i % 4) * 0.6,
    dur: 9 + (i % 5) * 2.5,
    delay: (i % 6) * 1.1,
  };
});
