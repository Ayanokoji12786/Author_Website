"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  List,
  Compass,
  Flame,
  HeartCrack,
  Eye,
  Handshake,
  Sunrise,
  PenTool,
  Feather,
  Zap,
  CloudRain,
  Mountain,
  HandHeart,
  Fingerprint,
  Shield,
  Map,
  Users,
  Sparkles,
  PenLine,
  DoorOpen,
  Star,
  ShoppingBag,
  Headphones,
  Truck,
  Gift,
  BookText,
  BookHeart,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Instagram,
  Twitter,
  Mail,
  MousePointerClick,
} from "lucide-react";
import InkReveal from "@/components/ui/ink-reveal";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import CinematicCanvas from "@/components/cinematic/CinematicCanvas";

/* ─── Counter Hook ─── */
function useCounter(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.floor(eased * target));
            if (t < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Reveal Wrapper Component ─── */
function Reveal({
  children,
  delay = "",
  className = "",
}: {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Stat Counter Component ─── */
function StatCounter({
  target,
  label,
  sublabel,
  isInfinity = false,
}: {
  target: number;
  label: string;
  sublabel: string;
  isInfinity?: boolean;
}) {
  const { value, ref } = useCounter(target);

  return (
    <div className="text-center">
      <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gold">
        {isInfinity ? "∞" : value}
      </div>
      <div className="mt-2 font-body text-xs tracking-[0.2em] uppercase text-white/50">
        {label}
      </div>
      <div className="mt-1 font-literary text-sm text-white/30 italic">{sublabel}</div>
    </div>
  );
}

/* ═════════════════════════════════════════════ */
/* MAIN PAGE                                      */
/* ═════════════════════════════════════════════ */
export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavShadow(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      {/* ═══════════════ CINEMATIC ATMOSPHERE ═══════════════ */}
      <CinematicCanvas />

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-parchment/80 backdrop-blur-md border-b border-gold/10 transition-shadow duration-300 ${
          navShadow ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl font-semibold text-ink tracking-wide"
          >
            Dhruva Nerella & Tattva Nerella
          </button>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-warmgray">
            <button onClick={() => scrollTo("inside")} className="hover:text-gold transition-colors duration-300">
              Inside the Book
            </button>
            <button onClick={() => scrollTo("themes")} className="hover:text-gold transition-colors duration-300">
              Themes
            </button>
            <button onClick={() => scrollTo("chapters")} className="hover:text-gold transition-colors duration-300">
              Chapters
            </button>
            <button onClick={() => scrollTo("voices")} className="hover:text-gold transition-colors duration-300">
              Voices
            </button>
            <a
              href="#"
              className="ml-4 px-5 py-2 bg-ink text-parchment rounded-full text-xs font-medium tracking-wider uppercase hover:bg-gold transition-colors duration-300"
            >
              Get the Book
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-ink">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-parchment border-t border-gold/10 px-6 py-6">
            <div className="flex flex-col gap-4 font-body text-sm text-warmgray">
              <button onClick={() => scrollTo("inside")} className="hover:text-gold transition-colors text-left">
                Inside the Book
              </button>
              <button onClick={() => scrollTo("themes")} className="hover:text-gold transition-colors text-left">
                Themes
              </button>
              <button onClick={() => scrollTo("chapters")} className="hover:text-gold transition-colors text-left">
                Chapters
              </button>
              <button onClick={() => scrollTo("voices")} className="hover:text-gold transition-colors text-left">
                Voices
              </button>
              <a
                href="#"
                className="mt-2 px-5 py-2.5 bg-ink text-parchment rounded-full text-xs font-medium tracking-wider uppercase text-center hover:bg-gold transition-colors"
              >
                Get the Book
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ═══════════════ HERO — SCROLL EXPANSION ═══════════════ */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://blueroseone.com/store/public/uploads/all/I0V9EtdysEBI4tlk8hO7vaEWix1hKaS46HsqSpW2.jpg"
        bgImageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80"
        title="Still Standing Still Here"
        date="co-authored by Dhruva Nerella & Tattva Nerella"
        scrollToExpand="Scroll to Explore"
      />

      {/* ═══════════════ BOOK + INTRODUCTION ═══════════════ */}
      <section id="inside" className="relative py-24 md:py-32 bg-cream grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
                <div className="absolute -inset-8 border border-gold/10 rounded-sm hidden sm:block" />
                <div className="relative w-64 sm:w-72 md:w-80 book-shadow rounded-sm overflow-hidden">
                  <img
                    src="http://static.photos/monochrome/640x360/77"
                    alt="Still Standing, Still Here — Book Cover"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/90 via-deepNavy/40 to-transparent flex flex-col justify-end p-6">
                    <span className="font-body text-[10px] tracking-[0.3em] uppercase text-goldLight/80 mb-1">
                      A Book By
                    </span>
                    <span className="font-display text-lg text-parchment font-semibold">Dhruva Nerella & Tattva Nerella</span>
                    <h3 className="font-display text-2xl md:text-3xl text-white font-bold leading-tight mt-2">
                      Still Standing,
                      <br />
                      Still Here
                    </h3>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-deepNavy to-deepNavy/80" />
                </div>
              </div>
            </Reveal>

            <Reveal delay="reveal-delay-2">
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
                The Experience Awaits
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight mb-8">
                Some books inform.
                <br />
                This one <span className="italic text-amber">transforms</span>.
              </h2>
              <div className="space-y-5 font-literary text-lg text-warmgray leading-relaxed">
                <p>
                  Between these pages lives a reckoning — with pain, with perseverance, with the quiet ferocity of
                  choosing to remain when everything whispering inside you says{" "}
                  <span className="text-ink font-medium">leave</span>.
                </p>
                <p>
                  <span className="text-ink font-semibold">&ldquo;Still Standing, Still Here&rdquo;</span> is a literary
                  companion for anyone who has ever been broken and refused to stay broken. It does not offer platitudes.
                  It offers <span className="text-ink font-medium">truth</span> — raw, unvarnished, and ultimately
                  redemptive.
                </p>
                <p>
                  What follows is a map of what lives inside these pages. Not spoilers — but signposts. So you know,
                  before you turn the first page, that{" "}
                  <span className="text-ink font-medium">you are not walking into the dark alone</span>.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("chapters")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-parchment rounded-full text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300"
                >
                  <List className="w-4 h-4" />
                  Explore Chapters
                </button>
                <button
                  onClick={() => scrollTo("themes")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink/20 text-ink rounded-full text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  <Compass className="w-4 h-4" />
                  Core Themes
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ BY THE NUMBERS — WITH INK REVEAL ═══════════════ */}
      <section className="relative bg-deepNavy overflow-hidden">
        {/* Atmospheric landscape image — hidden under ink mask, revealed on hover/touch */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle dark overlay so revealed image doesn't overpower text */}
        <div className="absolute inset-0 bg-deepNavy/30 z-[2] pointer-events-none" />

        {/* ★ InkReveal canvas — fills with deepNavy mask; cursor/touch carves through it */}
        <InkReveal
          maskColor={[28, 26, 46]}
          brushSize={120}
          lifetime={900}
          rStart={8}
          stampStep={8}
          rVary={0.4}
        />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-20 pointer-events-none" />

        {/* Stats content — always visible on top; pointer-events-none so ink canvas receives events */}
        <div className="relative z-20 pointer-events-none py-20 max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">
              At a Glance
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">The Shape of the Journey</h2>
            <p className="mt-4 flex items-center justify-center gap-2 text-gold/50 text-xs tracking-wider ink-hint">
              <MousePointerClick className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MOVE YOUR CURSOR TO REVEAL THE LANDSCAPE BENEATH</span>
              <span className="sm:hidden">TOUCH &amp; DRAG TO REVEAL THE LANDSCAPE BENEATH</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <StatCounter target={12} label="Chapters" sublabel="of unflinching truth" />
            <StatCounter target={248} label="Pages" sublabel="you won't want to leave" />
            <StatCounter target={6} label="Core Themes" sublabel="woven through every line" />
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gold">∞</div>
              <div className="mt-2 font-body text-xs tracking-[0.2em] uppercase text-white/50">Impact</div>
              <div className="mt-1 font-literary text-sm text-white/30 italic">what you carry forward</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE THEMES ═══════════════ */}
      <section id="themes" className="relative py-24 md:py-32 bg-parchment grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                The Heartbeat
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
                Six Truths This Book Lives By
              </h2>
              <p className="mt-6 font-literary text-lg text-warmgray italic max-w-2xl mx-auto">
                Every page pulses with these interwoven convictions — not as lessons to memorize, but as lived
                experiences to recognize in yourself.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Flame,
                title: "Resilience Is Not Romantic",
                desc: "The book strips away the gloss. Resilience is not a motivational poster — it is blood, sweat, and the stubborn decision to take one more step when the ground gives way beneath you.",
                quote: "Survival is not beautiful. It is necessary.",
                delay: "reveal-delay-1",
              },
              {
                icon: HeartCrack,
                title: "Grief Is a Country",
                desc: 'You don\'t "get over" loss — you learn its geography. The book maps the terrain of mourning with honesty that honors your pain instead of rushing past it.',
                quote: "You do not move on. You move with.",
                delay: "reveal-delay-2",
              },
              {
                icon: Eye,
                title: "Identity Beyond Wounds",
                desc: "You are more than what happened to you. These pages insist on your wholeness — not by erasing the scars, but by reading them as proof that you are still here, still becoming.",
                quote: "Your story is not your sentence.",
                delay: "reveal-delay-3",
              },
              {
                icon: Handshake,
                title: "Community as Lifeline",
                desc: "No one survives alone — even when they believe they must. The book reveals how connection, however fragile, is the thread that holds us when we cannot hold ourselves.",
                quote: "We are each other's evidence that it gets bearable.",
                delay: "reveal-delay-4",
              },
              {
                icon: Sunrise,
                title: "Hope Without Naiveté",
                desc: "This is not the hope of greeting cards. It is the hope of someone who has seen the dark and chooses, with full knowledge of the cost, to believe the morning is worth reaching for.",
                quote: "Hope earned is the only hope that holds.",
                delay: "reveal-delay-5",
              },
              {
                icon: PenTool,
                title: "Story as Salvation",
                desc: "To tell your story is to reclaim it. This book is proof that narrative — owning it, sharing it, living it — is not just art. It is the act of refusing to be erased.",
                quote: "To speak is to survive. To write is to insist.",
                delay: "reveal-delay-6",
              },
            ].map((theme) => (
              <Reveal key={theme.title} delay={theme.delay}>
                <div className="theme-pill group relative bg-white rounded-2xl p-8 border border-gold/10 cursor-default h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                      <theme.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink mb-3">{theme.title}</h3>
                    <p className="font-body text-sm text-warmgray leading-relaxed">{theme.desc}</p>
                    <div className="mt-5 pt-4 border-t border-gold/10">
                      <span className="font-literary text-xs text-gold italic">&ldquo;{theme.quote}&rdquo;</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PULL QUOTE INTERLUDE ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-deepNavy to-slate opacity-80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-12 left-12 w-2 h-2 bg-gold/20 rounded-full" />
        <div className="absolute top-12 right-12 w-2 h-2 bg-gold/20 rounded-full" />
        <div className="absolute bottom-12 left-12 w-2 h-2 bg-gold/20 rounded-full" />
        <div className="absolute bottom-12 right-12 w-2 h-2 bg-gold/20 rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="font-display text-8xl md:text-9xl text-gold/10 leading-none block mb-0">&ldquo;</span>
          </Reveal>
          <Reveal delay="reveal-delay-1">
            <blockquote className="font-literary text-2xl sm:text-3xl md:text-4xl text-white/90 italic leading-relaxed -mt-12 md:-mt-16">
              You do not have to be unbroken to be worthy.
              <br />
              You only have to be <span className="text-gold not-italic font-semibold">still standing</span>,
              <br />
              <span className="text-gold not-italic font-semibold">still here</span>.
            </blockquote>
          </Reveal>
          <Reveal delay="reveal-delay-2">
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gold/40" />
              <span className="font-body text-sm text-gold/70 tracking-wider uppercase">Dhruva Nerella & Tattva Nerella</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ═══════════════ CHAPTER GUIDE ═══════════════ */}
      <section id="chapters" className="relative py-24 md:py-32 bg-cream grain-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                A Chapter-by-Chapter Glimpse
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
                The Terrain You&apos;ll Traverse
              </h2>
              <p className="mt-6 font-literary text-lg text-warmgray italic max-w-xl mx-auto">
                No spoilers. Just the emotional landscape — so you arrive knowing you&apos;re ready for what the book
                holds.
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Before the Breaking",
                tag: "Innocence",
                desc: "The world before it shifts. A portrait of normalcy so tender you already ache for what comes next — the last quiet morning before the storm.",
                icon: Feather,
                delay: "",
              },
              {
                num: "02",
                title: "The Fracture",
                tag: "Loss",
                desc: "When the ground opens. Raw, unfiltered, and unwilling to look away — this chapter meets you in the moment when everything stops making sense.",
                icon: Zap,
                delay: "reveal-delay-1",
              },
              {
                num: "03",
                title: "The Silence After",
                tag: "Grief",
                desc: "The void that follows devastation. Not dramatic — quiet. The kind of silence that settles in your bones and makes you question if you'll ever hear yourself again.",
                icon: CloudRain,
                delay: "reveal-delay-2",
              },
              {
                num: "04",
                title: "Carrying the Weight",
                tag: "Endurance",
                desc: 'The long middle. When the world expects you to be "over it" and you are barely learning to breathe with the weight. A tribute to invisible labor of surviving each ordinary day.',
                icon: Mountain,
                delay: "reveal-delay-3",
              },
              {
                num: "05",
                title: "Hands That Held Me",
                tag: "Connection",
                desc: "The people who appeared when darkness felt permanent. Not saviors — witnesses. The ones who sat beside you in the dark without trying to turn on the light.",
                icon: HandHeart,
                delay: "reveal-delay-4",
              },
              {
                num: "06",
                title: "Reclaiming the Name",
                tag: "Identity",
                desc: "Finding yourself beneath the rubble of what happened. Not the old you — someone deeper, wiser, more fierce. The self you didn't know was waiting on the other side of pain.",
                icon: Fingerprint,
                delay: "reveal-delay-5",
              },
            ].map((ch) => (
              <Reveal key={ch.num} delay={ch.delay}>
                <div className="chapter-card rounded-xl px-6 md:px-8 py-6 bg-white/60 border border-gold/5">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="font-display text-3xl md:text-4xl font-bold text-gold/25 leading-none shrink-0">
                      {ch.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display text-lg md:text-xl font-bold text-ink">{ch.title}</h3>
                        <span className="px-2.5 py-0.5 bg-gold/10 rounded-full text-[10px] font-body text-gold tracking-wider uppercase">
                          {ch.tag}
                        </span>
                      </div>
                      <p className="font-body text-sm text-warmgray leading-relaxed">{ch.desc}</p>
                    </div>
                    <ch.icon className="w-5 h-5 text-gold/30 shrink-0 mt-1 hidden sm:block" />
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay="reveal-delay-6">
              <div className="text-center pt-8">
                <div className="gold-divider max-w-xs mx-auto mb-6">
                  <span className="font-display text-gold text-sm">✦</span>
                </div>
                <p className="font-literary text-lg text-warmgray italic">
                  Six more chapters await — each one a deeper step
                  <br className="hidden sm:block" />
                  into the truth that{" "}
                  <span className="text-ink font-medium">still standing is still extraordinary</span>.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 font-body text-sm text-gold hover:text-amber transition-colors duration-300"
                >
                  <span>Read the full table of contents</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT READERS TAKE AWAY ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-parchment grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                What Stays With You
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
                This Book Will Leave You With…
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Shield,
                title: "Permission to Feel It All",
                desc: "No more performative strength. After this book, you'll stop apologizing for your grief, your anger, your messy healing. You'll understand that feeling everything is not weakness — it's the bravest thing you can do.",
                delay: "",
              },
              {
                icon: Map,
                title: "A Language for What You Couldn't Say",
                desc: "There are experiences that defy vocabulary. Dhruva Nerella & Tattva Nerella finds the words you couldn't — and hands them to you gently, like a key to a room you've been locked out of for years.",
                delay: "reveal-delay-1",
              },
              {
                icon: Users,
                title: "The Knowledge That You're Not Alone",
                desc: "Not as a cliché — as a lived, breathing truth. Every page whispers: someone else has been here. Someone else made it through. And so will you.",
                delay: "reveal-delay-2",
              },
              {
                icon: Sparkles,
                title: "A Redefined Sense of Strength",
                desc: "Strength isn't what you thought it was. It's not unfeeling. It's not unbroken. It's the audacity to remain soft in a world that rewarded your hardness. This book will change what you call strong.",
                delay: "reveal-delay-3",
              },
              {
                icon: PenLine,
                title: "An Urge to Write Your Own Story",
                desc: "By the final chapter, you'll reach for a pen — not because the book tells you to, but because witnessing someone own their narrative makes you realize it's time to claim yours.",
                delay: "reveal-delay-4",
              },
              {
                icon: DoorOpen,
                title: "A Way Forward — Not a Prescription",
                desc: "This book doesn't give you ten steps to healing. It gives you something better: the conviction that your path is valid, your pace is sacred, and your arrival — however it looks — is enough.",
                delay: "reveal-delay-5",
              },
            ].map((item) => (
              <Reveal key={item.title} delay={item.delay}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-warmgray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VOICES / TESTIMONIALS ═══════════════ */}
      <section id="voices" className="relative py-24 md:py-32 bg-deepNavy grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deepNavy via-slate to-mutedPurple/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">
                Early Readers Say
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Voices From the First Edition
              </h2>
              <p className="mt-6 font-literary text-lg text-white/40 italic max-w-xl mx-auto">
                Not reviews — echoes. From people who found themselves inside these pages.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'I\'ve read a hundred books about resilience. This is the only one that didn\'t make me feel like my pain was a problem to solve. Dhruva Nerella & Tattva Nerella doesn\'t fix you —',
                highlight: "they sit beside you",
                name: "Amara K.",
                initials: "A.K.",
                role: "Therapist & Reader",
                delay: "reveal-delay-1",
              },
              {
                quote:
                  "Chapter 3 broke me open in the best way. I had to set the book down, cry, and then pick it back up. Not because it was too much — because for the first time,",
                highlight: "someone got it right",
                name: "Ravi S.",
                initials: "R.S.",
                role: "Writer & Professor",
                delay: "reveal-delay-2",
              },
              {
                quote:
                  "I bought this for a friend. I ended up reading it first — three times. It's the kind of book that becomes a",
                highlight: "compass",
                name: "Lina M.",
                initials: "L.M.",
                role: "Reader & Mother",
                delay: "reveal-delay-3",
              },
            ].map((t) => (
              <Reveal key={t.name} delay={t.delay}>
                <div className="testimonial-glow bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-literary text-base text-white/70 italic leading-relaxed mb-6">
                    &ldquo;{t.quote} <span className="text-goldLight not-italic font-medium">{t.highlight}</span>.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-display text-sm text-gold font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-body text-sm text-white/80 font-medium">{t.name}</div>
                      <div className="font-body text-xs text-white/30">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ═══════════════ WHO THIS BOOK IS FOR ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-cream grain-overlay">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Is This Book for You?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
                If You&apos;ve Ever Whispered…
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            {[
              { text: "Why does no one understand?", delay: "" },
              { text: "Will I always feel this heavy?", delay: "reveal-delay-1" },
              { text: "Am I allowed to still be hurting?", delay: "reveal-delay-2" },
              { text: "Is healing even possible for me?", delay: "reveal-delay-3" },
              { text: "I'm tired of being strong.", delay: "reveal-delay-4" },
              { text: "I just need someone to tell me the truth.", delay: "reveal-delay-5" },
            ].map((item, i) => (
              <Reveal key={i} delay={item.delay}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="font-literary text-lg text-warmgray italic">&ldquo;{item.text}&rdquo;</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-16">
              <div className="gold-divider max-w-xs mx-auto mb-8">
                <span className="font-display text-gold text-sm">✦</span>
              </div>
              <p className="font-display text-2xl md:text-3xl text-ink font-semibold max-w-2xl mx-auto leading-snug">
                Then yes — this book is for you.
                <br />
                <span className="text-warmgray font-normal italic text-xl md:text-2xl">It was written for you.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/50 to-ink" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 rounded-full text-goldLight text-xs font-medium tracking-widest uppercase mb-8">
              <BookHeart className="w-3.5 h-3.5" />
              Begin the Journey
            </span>
          </Reveal>

          <Reveal delay="reveal-delay-1">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              The next chapter
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-goldLight to-gold">
                is yours to write
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay="reveal-delay-2">
            <p className="font-literary text-xl text-white/50 italic mb-10 max-w-xl mx-auto">
              But first, let these pages remind you of something you may have forgotten — you are still standing, still
              here. And that is extraordinary.
            </p>
          </Reveal>

          <Reveal delay="reveal-delay-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold to-amber text-ink rounded-full text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Order Your Copy
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/70 rounded-full text-sm font-medium tracking-wide hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                <Headphones className="w-4 h-4" />
                Audiobook Available
              </a>
            </div>
          </Reveal>

          <Reveal delay="reveal-delay-4">
            <div className="mt-12 flex items-center justify-center gap-6 text-white/25">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span className="font-body text-xs tracking-wider uppercase">Free Shipping</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/15" />
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                <span className="font-body text-xs tracking-wider uppercase">Gift-Ready</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/15" />
              <div className="flex items-center gap-2">
                <BookText className="w-4 h-4" />
                <span className="font-body text-xs tracking-wider uppercase">Signed Edition</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-deepNavy py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-xl font-semibold text-white">Still Standing, Still Here</span>
              <span className="font-body text-xs text-white/30">co-authored by Dhruva Nerella & Tattva Nerella</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/30 hover:text-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/30 hover:text-gold transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="font-body text-xs text-white/20">© 2025 Dhruva Nerella & Tattva Nerella. All rights reserved. Crafted with conviction.</p>
          </div>
        </div>
      </footer>
    </>
  );
}