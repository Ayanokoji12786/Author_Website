"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Session flag so the ~8s cinematic intro only plays once per browser
 * session — return visits (e.g. navigating back to "/") dissolve quickly
 * instead of replaying the full reveal.
 */
const SESSION_KEY = "ssh-intro-seen";
const PARTICLE_COUNT = 16;
const DISSOLVE_MS = 1150;

interface LoadingScreenProps {
  /** Duration of one heartbeat cycle, in ms — drives the pulse, ring, ECG and ambient thump. */
  beatIntervalMs?: number;
  /** Whether the ECG flash line renders alongside the heartbeat. */
  showEcg?: boolean;
  /** Called once the intro has fully dissolved and unmounted. */
  onComplete?: () => void;
}

interface Particle {
  left: number;
  top: number;
  size: number;
  dur: number;
  delay: number;
  anim: "driftA" | "driftB" | "driftC";
}

function buildParticles(count: number): Particle[] {
  const anims = ["driftA", "driftB", "driftC"] as const;
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 137.5) % 360;
    return {
      left: (Math.sin(seed) * 0.5 + 0.5) * 92 + 2,
      top: (Math.cos(seed * 1.7) * 0.5 + 0.5) * 88 + 3,
      size: 1.2 + (i % 4) * 0.4,
      dur: 10 + (i % 5) * 3,
      delay: (i % 6) * 1.3,
      anim: anims[i % 3],
    };
  });
}

function mountainLayerStyle(
  visible: boolean,
  reducedMotion: boolean,
  delay: number,
  blurPx: number,
  risePx: number
): React.CSSProperties {
  const ease = "cubic-bezier(.16,.7,.24,1)";
  if (reducedMotion) {
    return {
      opacity: visible ? 1 : 0,
      transition: `opacity 1.4s ease ${delay}s`,
    };
  }
  return {
    opacity: visible ? 1 : 0,
    filter: `blur(${visible ? 0 : blurPx}px)`,
    transform: `translateY(${visible ? 0 : risePx}px) scale(${visible ? 1 : 1.02})`,
    transition: `opacity 2.8s ${ease} ${delay}s, filter 2.8s ${ease} ${delay}s, transform 2.8s ${ease} ${delay}s`,
  };
}

export default function LoadingScreen({
  beatIntervalMs = 1400,
  showEcg = true,
  onComplete,
}: LoadingScreenProps) {
  const [mounted, setMounted] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  // True from the moment the tagline first appears through to dissolve.
  // Distinct from showText/showTitle, which each toggle off before the
  // next one toggles on — deriving heartbeat/mountain visibility from
  // those directly caused both to flicker back on during that gap.
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [skipVisible, setSkipVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const [gateHintVisible, setGateHintVisible] = useState(false);

  const particles = useMemo(() => buildParticles(PARTICLE_COUNT), []);

  const grainRef = useRef<HTMLCanvasElement>(null);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const gateButtonRef = useRef<HTMLButtonElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const grainTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseSrcRef = useRef<AudioBufferSourceNode | null>(null);
  const audioIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const showHomeRef = useRef(false);
  const startedRef = useRef(false);
  const mutedRef = useRef(muted);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  const stopAudio = useCallback(() => {
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
      audioIntervalRef.current = null;
    }
    if (noiseSrcRef.current) {
      try {
        noiseSrcRef.current.stop();
      } catch {
        /* already stopped */
      }
      noiseSrcRef.current = null;
    }
  }, []);

  const goHome = useCallback(() => {
    setShowHome(true);
    showHomeRef.current = true;
    stopAudio();
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable (private mode, etc.) — safe to skip */
    }
    const t = setTimeout(() => {
      setMounted(false);
      onComplete?.();
    }, DISSOLVE_MS);
    timers.current.push(t);
  }, [onComplete, stopAudio]);

  const handleSkip = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShowText(false);
    setShowTitle(false);
    const t = setTimeout(goHome, 30);
    timers.current.push(t);
  }, [goHome]);

  const gestureUnlockArmedRef = useRef(false);

  const beginBeatLoop = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx || audioIntervalRef.current) return;
    const thump = () => {
      const t = ctx.currentTime;
      [0, 0.16].forEach((offset, idx) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = idx === 0 ? 58 : 46;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, t + offset);
        g.gain.linearRampToValueAtTime(idx === 0 ? 0.09 : 0.05, t + offset + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + offset + 0.22);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(t + offset);
        osc.stop(t + offset + 0.25);
      });
    };
    thump();
    audioIntervalRef.current = setInterval(thump, beatIntervalMs);
  }, [beatIntervalMs]);

  const ensureNoiseBed = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx || noiseSrcRef.current) return;
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 300;
    const gain = ctx.createGain();
    gain.gain.value = 0.008;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
    noiseSrcRef.current = src;
  }, []);

  /* Browsers refuse to let Web Audio make sound until the page has
     received a real user gesture — there's no muted-autoplay exemption
     for it like there is for <video>. We still create/resume the
     context eagerly (some browsers allow it), and arm a one-time
     listener for the first click/key/tap to unlock it the instant
     that's possible, so ambience starts as early as it can. */
  const armGestureUnlock = useCallback(() => {
    if (gestureUnlockArmedRef.current) return;
    gestureUnlockArmedRef.current = true;
    const events: (keyof DocumentEventMap)[] = ["pointerdown", "keydown", "touchstart"];
    const unlock = () => {
      events.forEach((evt) => document.removeEventListener(evt, unlock));
      gestureUnlockArmedRef.current = false;
      const ctx = audioCtxRef.current;
      if (!ctx || mutedRef.current || showHomeRef.current) return;
      ctx.resume().then(() => {
        if (!mutedRef.current && !showHomeRef.current) beginBeatLoop();
      }).catch(() => {});
    };
    events.forEach((evt) => document.addEventListener(evt, unlock, { once: true, passive: true }));
  }, [beginBeatLoop]);

  const startAudio = useCallback(() => {
    if (showHomeRef.current) return;
    try {
      const AudioContextCtor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextCtor) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioContextCtor();
      const ctx = audioCtxRef.current;
      ensureNoiseBed();

      if (ctx.state === "running") {
        beginBeatLoop();
      } else {
        ctx.resume().then(() => {
          if (!mutedRef.current && !showHomeRef.current) beginBeatLoop();
        }).catch(() => {});
        armGestureUnlock();
      }
    } catch {
      /* Web Audio unavailable — ambience is a non-critical enhancement */
    }
  }, [armGestureUnlock, beginBeatLoop, ensureNoiseBed]);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (!next) startAudio();
      else stopAudio();
      return next;
    });
  }, [startAudio, stopAudio]);

  /* ─── Reveal timeline — only scheduled once the audio gate clears ─── */
  const beginSequence = useCallback(() => {
    const TEXT_IN = beatIntervalMs * 2 + 300;
    const TEXT_HOLD = 2000;
    const TEXT_OUT = 600;
    const TITLE_IN = TEXT_IN + TEXT_HOLD + TEXT_OUT;
    const TITLE_HOLD = 1500;
    const TITLE_FADE = 800;
    const DISSOLVE_AT = TITLE_IN + TITLE_FADE + TITLE_HOLD;

    timers.current.push(setTimeout(() => setSkipVisible(true), 1000));
    timers.current.push(
      setTimeout(() => {
        setShowText(true);
        setSequenceStarted(true);
      }, TEXT_IN)
    );
    timers.current.push(setTimeout(() => setShowText(false), TEXT_IN + TEXT_HOLD));
    timers.current.push(setTimeout(() => setShowTitle(true), TITLE_IN));
    timers.current.push(setTimeout(goHome, DISSOLVE_AT));
  }, [beatIntervalMs, goHome]);

  /* Browsers won't allow sound until this first tap/click/key unlocks it,
     so the reveal (and its ambience) waits for that gesture — a visitor
     who never interacts still sees the story after a short wait, just
     without sound, which is all the browser would allow anyway. */
  const dismissGate = useCallback(
    () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setStarted(true);
      // Audio is already started by armGestureUnlock's document-level
      // listener, which fires from the same tap/key bubbling up — calling
      // startAudio() again here would re-arm that listener, leaving it to
      // fire again on a later, unrelated click elsewhere on the page.
      beginSequence();
    },
    [beginSequence]
  );

  /* ─── Reveal sequence ─── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    document.body.style.overflow = "hidden";
    startAudio();

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      startedRef.current = true;
      setStarted(true);
      const t = setTimeout(goHome, 250);
      timers.current.push(t);
    } else {
      const hintTimer = setTimeout(() => setGateHintVisible(true), 600);
      timers.current.push(hintTimer);
      gateButtonRef.current?.focus();
      // Safety net: never trap a visitor who doesn't interact — proceed
      // silently after a short wait, same as the browser would allow anyway.
      const fallback = setTimeout(() => dismissGate(), 4500);
      timers.current.push(fallback);
    }

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Send focus to the skip control the moment it's reachable, so keyboard
     and screen-reader users aren't forced to sit through the animation. */
  useEffect(() => {
    if (skipVisible) skipButtonRef.current?.focus();
  }, [skipVisible]);

  /* Film grain — small offscreen buffer redrawn as noise, upscaled via CSS. */
  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;

    const draw = () => {
      const imgData = ctx.createImageData(w, h);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
    };
    draw();
    grainTimer.current = setInterval(draw, 90);
    return () => {
      if (grainTimer.current) clearInterval(grainTimer.current);
    };
  }, []);

  /* Stop audio + guarantee scroll is restored if the component unmounts early. */
  useEffect(() => {
    return () => {
      stopAudio();
      document.body.style.overflow = "";
    };
  }, [stopAudio]);

  if (!mounted) return null;

  const heartbeatActive = !reducedMotion && !sequenceStarted && !showHome;
  const mountainOn = sequenceStarted && !showHome;
  const titleVisible = showTitle && !showHome;
  const easeOut = "cubic-bezier(.22,.61,.36,1)";

  const dotStyle: React.CSSProperties = heartbeatActive
    ? { animation: `beatPulse ${beatIntervalMs}ms ease-in-out infinite` }
    : {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 0.82,
        transition: "opacity 1s ease, transform 1s ease",
      };

  const ringStyle: React.CSSProperties = heartbeatActive
    ? { animation: `beatRing ${beatIntervalMs}ms ease-in-out infinite` }
    : { opacity: 0, transition: "opacity .8s ease" };

  const ecgStyle: React.CSSProperties =
    heartbeatActive && showEcg
      ? { animation: `ecgFlash ${beatIntervalMs}ms ease-in-out infinite`, opacity: 0 }
      : { opacity: 0, transition: "opacity .8s ease" };

  const textStyle: React.CSSProperties = {
    opacity: showText ? 1 : 0,
    transform: `translate(-50%, calc(-50% + 92px + ${showText ? 0 : 10}px))`,
    transition: `opacity .9s ${easeOut}, transform .9s ${easeOut}`,
  };

  const titleStyle: React.CSSProperties = {
    opacity: titleVisible ? 1 : 0,
    transform: `translate(-50%,-50%) scale(${showHome ? 0.94 : titleVisible ? 1 : 0.98})`,
    transition: `opacity 1s ease, transform 1s ${easeOut}`,
  };

  const skipStyle: React.CSSProperties = {
    opacity: skipVisible && !showHome ? 1 : 0,
    pointerEvents: skipVisible && !showHome ? "auto" : "none",
    transition: "opacity .6s ease",
  };

  const gateStyle: React.CSSProperties = {
    opacity: started ? 0 : 1,
    pointerEvents: started ? "none" : "auto",
    transition: "opacity .5s ease",
  };

  const gateHintStyle: React.CSSProperties = {
    opacity: gateHintVisible && !started ? 1 : 0,
    transition: "opacity 1s ease .5s",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Loading Still Standing, Still Here"
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
      style={{
        opacity: showHome ? 0 : 1,
        pointerEvents: showHome ? "none" : "auto",
        transition: "opacity 1.1s ease",
      }}
    >
      <span className="sr-only" aria-live="polite">
        {showHome ? "" : "Loading Still Standing, Still Here"}
      </span>

      {/* Film grain */}
      <canvas
        ref={grainRef}
        width={220}
        height={140}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.045] mix-blend-overlay [image-rendering:pixelated] ${
          reducedMotion ? "" : "animate-grain-flicker"
        }`}
      />

      {/* Drifting dust motes */}
      {particles.map((p, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, rgba(255,255,255,.5), rgba(255,255,255,0) 70%)",
            opacity: 0.06,
            animation: reducedMotion
              ? "none"
              : `${p.anim} ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Breathing ambient glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
          reducedMotion ? "" : "animate-breathe"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.10) 0%, rgba(255,255,255,.045) 32%, rgba(0,0,0,0) 68%)",
        }}
      />

      {/* Mountain silhouettes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[calc(50%-4px)] h-[220px] w-[640px] -translate-x-1/2 overflow-visible"
      >
        <svg
          viewBox="0 0 640 200"
          width={640}
          height={200}
          className="absolute left-0 top-[6px] overflow-visible"
          style={mountainLayerStyle(mountainOn, reducedMotion, 0, 16, 10)}
        >
          <path
            d="M0,200 L70,96 L150,150 L230,72 L300,130 L380,58 L470,140 L560,86 L640,200 Z"
            fill="rgba(255,255,255,.007)"
          />
          <path
            d="M0,200 L70,96 L150,150 L230,72 L300,130 L380,58 L470,140 L560,86 L640,200"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={0.75}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={0.14}
            style={{ filter: "blur(2.5px) drop-shadow(0 0 9px rgba(255,255,255,.25))" }}
          />
        </svg>

        <svg
          viewBox="0 0 640 200"
          width={600}
          height={196}
          className="absolute left-[20px] top-[16px] overflow-visible"
          style={mountainLayerStyle(mountainOn, reducedMotion, 0.35, 13, 8)}
        >
          <path
            d="M0,200 L90,120 L170,158 L250,88 L320,140 L410,74 L500,146 L600,200 Z"
            fill="rgba(255,255,255,.012)"
          />
          <path
            d="M0,200 L90,120 L170,158 L250,88 L320,140 L410,74 L500,146 L600,200"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={0.9}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={0.22}
            style={{ filter: "blur(1.6px) drop-shadow(0 0 7px rgba(255,255,255,.3))" }}
          />
        </svg>

        <svg
          viewBox="0 0 640 200"
          width={520}
          height={192}
          className="absolute left-[60px] top-[30px] overflow-visible"
          style={mountainLayerStyle(mountainOn, reducedMotion, 0.7, 10, 6)}
        >
          <path
            d="M0,200 L60,150 L130,178 L210,104 L270,150 L340,86 L420,158 L520,200 Z"
            fill="rgba(0,0,0,.4)"
          />
          <path
            d="M0,200 L60,150 L130,178 L210,104 L270,150 L340,86 L420,158 L520,200"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={1}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={0.4}
            style={{ filter: "blur(.8px) drop-shadow(0 0 6px rgba(255,255,255,.45))" }}
          />
        </svg>

        <div
          className="absolute inset-x-0 bottom-0 h-[120px]"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,.9), rgba(255,255,255,.03) 55%, transparent)",
            opacity: mountainOn ? 0.6 : 0,
            transition: `opacity 2.4s cubic-bezier(.16,.7,.24,1) .2s`,
          }}
        />
      </div>

      {/* Heartbeat: ECG flash, ring, dot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-[200px] -translate-x-1/2 -translate-y-1/2"
      >
        {showEcg && (
          <svg
            viewBox="0 0 200 40"
            width={200}
            height={40}
            className="absolute left-0 top-[-20px] overflow-visible"
          >
            <path
              d="M0,20 L58,20 L70,4 L82,34 L94,20 L200,20"
              fill="none"
              stroke="#F6F3EE"
              strokeWidth={1}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={ecgStyle}
            />
          </svg>
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,.5)]"
        style={ringStyle}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          boxShadow:
            "0 0 8px 2px rgba(255,255,255,.9), 0 0 28px 10px rgba(255,255,255,.35), 0 0 60px 24px rgba(255,255,255,.10)",
          ...dotStyle,
        }}
      />

      {/* Tagline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(560px,84vw)] -translate-x-1/2 text-center"
        style={textStyle}
      >
        <p className="font-literary text-[clamp(17px,2vw,22px)] italic leading-relaxed tracking-[0.06em] text-white">
          Every story begins with surviving.
        </p>
      </div>

      {/* Title */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        style={titleStyle}
      >
        <div className="font-display text-[clamp(28px,5vw,52px)] font-light leading-tight tracking-[0.14em] text-white">
          STILL STANDING
        </div>
        <div className="mt-[0.15em] font-display text-[clamp(28px,5vw,52px)] font-semibold leading-tight tracking-[0.14em] text-white">
          STILL HERE
        </div>
      </div>

      {/* Skip */}
      <button
        ref={skipButtonRef}
        type="button"
        onClick={handleSkip}
        style={skipStyle}
        className="absolute right-8 top-7 rounded-sm border border-[rgba(255,255,255,.25)] px-4 py-2 font-body text-xs tracking-[0.14em] text-[rgba(255,255,255,.55)] transition-colors duration-300 hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        SKIP
      </button>

      {/* Mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute ambience" : "Mute ambience"}
        className="absolute bottom-7 right-8 z-[1] flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.02)] text-[rgba(255,255,255,.55)] transition-colors duration-300 hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ opacity: showHome ? 0 : 1, pointerEvents: showHome ? "none" : "auto", transition: "opacity .6s ease" }}
      >
        <svg width={15} height={15} viewBox="0 0 256 256" fill="none" className="text-[rgba(255,255,255,.75)]">
          <path
            d="M40 96h40l56-40v144l-56-40H40a8 8 0 01-8-8v-48a8 8 0 018-8z"
            fill="currentColor"
            opacity={0.55}
          />
          <path
            d="M40 96h40l56-40v144l-56-40H40a8 8 0 01-8-8v-48a8 8 0 018-8z"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinejoin="round"
          />
          <path
            d="M180 100c10 8 10 48 0 56"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
            style={{ opacity: muted ? 0 : 1, transition: "opacity .2s ease" }}
          />
          <path
            d="M198 84c18 14 18 74 0 88"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
            style={{ opacity: muted ? 0 : 1, transition: "opacity .2s ease" }}
          />
          <path
            d="M176 96l40 64M216 96l-40 64"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
            style={{ opacity: muted ? 1 : 0, transition: "opacity .2s ease" }}
          />
        </svg>
      </button>

      {/* Audio gate — browsers won't allow sound until this first tap/click/key unlocks it */}
      <button
        ref={gateButtonRef}
        type="button"
        onClick={() => dismissGate()}
        aria-label="Begin — tap or press enter to start with sound"
        className="absolute inset-0 z-20 flex items-center justify-center bg-transparent"
        style={gateStyle}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-[17%] -translate-x-1/2 whitespace-nowrap font-body text-[11px] uppercase tracking-[0.32em] text-[rgba(255,255,255,.6)]"
          style={gateHintStyle}
        >
          Tap to begin
        </span>
      </button>
    </div>
  );
}
