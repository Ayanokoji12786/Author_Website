'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════ */
/* TYPES                                                           */
/* ═══════════════════════════════════════════════════════════════ */

interface ScrollExpansionHeroProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  label?: string;
  subtitle?: ReactNode;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ═══════════════════════════════════════════════════════════════ */
/* COMPONENT                                                       */
/* ═══════════════════════════════════════════════════════════════ */

export default function ScrollExpansionHero({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title = '',
  label,
  subtitle,
  date,
  scrollToExpand,
  textBlend = true,
  children,
}: ScrollExpansionHeroProps) {
  /* ─── State ────────────────────────────────────── */
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [postProgress, setPostProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* ─── Refs for stable event handlers ───────────── */
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const expandedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const rafRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* Sync expanded ref */
  useEffect(() => {
    expandedRef.current = expanded;
  }, [expanded]);

  /* ─── Reset on mount / media change ────────────── */
  useEffect(() => {
    targetRef.current = 0;
    currentRef.current = 0;
    setScrollProgress(0);
    setExpanded(false);
    setShowContent(false);
    setPostProgress(0);
    window.scrollTo(0, 0);
  }, [mediaSrc, mediaType]);

  /* ─── Mobile detection ─────────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ─── Spring interpolation RAF loop ─────────────── */
  useEffect(() => {
    const tick = () => {
      const target = targetRef.current;
      const current = currentRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0003) {
        currentRef.current += diff * 0.1;
        setScrollProgress(currentRef.current);
      } else if (current !== target) {
        currentRef.current = target;
        setScrollProgress(target);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ─── Phase 1: Scroll-locked event handlers ───── */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const exp = expandedRef.current;
      const prog = targetRef.current;

      /* Re-enter locked mode if scrolling up at page top */
      if (exp && e.deltaY < 0 && window.scrollY <= 5) {
        setExpanded(false);
        setShowContent(false);
        setPostProgress(0);
        targetRef.current = currentRef.current;
        e.preventDefault();
        return;
      }

      /* While locked, intercept and drive animation */
      if (!exp) {
        e.preventDefault();
        const delta = e.deltaY * 0.001;
        const next = Math.min(Math.max(prog + delta, 0), 1);
        targetRef.current = next;

        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const tsy = touchStartYRef.current;
      if (!tsy) return;
      const y = e.touches[0].clientY;
      const dy = tsy - y;
      const exp = expandedRef.current;
      const prog = targetRef.current;

      if (exp && dy < -20 && window.scrollY <= 5) {
        setExpanded(false);
        setShowContent(false);
        setPostProgress(0);
        targetRef.current = currentRef.current;
        e.preventDefault();
        return;
      }

      if (!exp) {
        e.preventDefault();
        const factor = dy < 0 ? 0.006 : 0.004;
        const delta = dy * factor;
        const next = Math.min(Math.max(prog + delta, 0), 1);
        targetRef.current = next;
        touchStartYRef.current = y;

        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    const onTouchEnd = () => {
      touchStartYRef.current = 0;
    };

    const onScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', onWheel as unknown as EventListener, { passive: false });
    window.addEventListener('touchstart', onTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove', onTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', onTouchEnd as EventListener);
    window.addEventListener('scroll', onScroll as EventListener);

    return () => {
      window.removeEventListener('wheel', onWheel as unknown as EventListener);
      window.removeEventListener('touchstart', onTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', onTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', onTouchEnd as EventListener);
      window.removeEventListener('scroll', onScroll as EventListener);
    };
  }, []);

  /* ─── Phase 2: Post-expansion scroll tracking ──────
     Once the media fills the viewport and page scroll resumes normally,
     track how far the section has scrolled past the top of the viewport
     (0 → 1 over one section-height) so the overlay content can cross-fade
     into whatever follows instead of cutting away abruptly. ─── */
  useEffect(() => {
    if (!expanded) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height || window.innerHeight;
      const p = Math.min(Math.max(-rect.top / total, 0), 1);
      setPostProgress(p);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [expanded]);

  /* ─── Derived, interpolated values ─────────────── */
  const eased = easeOutCubic(scrollProgress);

  const mediaWidthVw = lerp(isMobile ? 78 : 34, 100, eased);
  const mediaHeightVh = lerp(isMobile ? 44 : 58, 100, eased);
  const mediaRadius = lerp(20, 0, eased);
  const bgDim = lerp(0.6, 0.28, eased);
  const bgBlur = lerp(16, 0, eased);
  const titlePush = lerp(0, isMobile ? 60 : 140, eased);
  const titleOpacity = 1 - Math.min(eased / 0.65, 1);
  const hintOpacity = 1 - Math.min(eased / 0.2, 1);

  const words = title.trim().split(/\s+/).filter(Boolean);
  const mid = Math.max(Math.ceil(words.length / 2), 1);
  const leftTitle = words.slice(0, mid).join(' ');
  const rightTitle = words.slice(mid).join(' ');

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-ink"
      style={{
        position: expanded ? 'relative' : 'fixed',
        inset: expanded ? undefined : 0,
        zIndex: expanded ? 10 : 40,
      }}
    >
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0">
        <img
          src={bgImageSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ filter: `blur(${bgBlur}px)`, transform: 'scale(1.08)' }}
        />
        <div className="absolute inset-0 bg-ink" style={{ opacity: bgDim, transition: 'opacity 0.4s ease' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70" />
      </div>

      {/* Expanding media frame */}
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className="book-shadow relative overflow-hidden"
          style={{
            width: `${mediaWidthVw}vw`,
            height: `${mediaHeightVh}vh`,
            borderRadius: mediaRadius,
          }}
        >
          {mediaType === 'video' ? (
            <video
              className="h-full w-full object-cover"
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img src={mediaSrc} alt={title || 'Featured media'} className="h-full w-full object-cover" />
          )}
          {textBlend && <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />}
        </div>

        {/* Split title — collapses away as the media expands */}
        {!showContent && words.length > 0 && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6" style={{ opacity: titleOpacity }}>
            <h1
              className="pr-4 text-right font-display text-3xl font-bold text-parchment sm:text-4xl md:pr-8 md:text-6xl"
              style={{ transform: `translateX(-${titlePush}px)` }}
            >
              {leftTitle}
            </h1>
            <h1
              className="pl-4 text-left font-display text-3xl font-bold text-gold sm:text-4xl md:pl-8 md:text-6xl"
              style={{ transform: `translateX(${titlePush}px)` }}
            >
              {rightTitle}
            </h1>
          </div>
        )}

        {/* Scroll hint */}
        {!expanded && scrollToExpand && (
          <div
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-parchment/70"
            style={{ opacity: hintOpacity }}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em]">{scrollToExpand}</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        )}
      </div>

      {/* Post-expansion overlay content */}
      {showContent && (
        <div
          ref={contentRef}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: 1 - postProgress,
            transform: `translateY(${postProgress * 30}px)`,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {label && <span className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-gold/80">{label}</span>}
          {title && (
            <h2 className="font-display text-4xl font-bold leading-tight text-parchment sm:text-5xl md:text-7xl">
              {title}
            </h2>
          )}
          {date && <p className="mt-6 font-body text-sm uppercase tracking-[0.25em] text-parchment/60">{date}</p>}
          {subtitle && <div className="mt-4 max-w-xl font-literary text-lg italic text-parchment/70">{subtitle}</div>}
          {children && <div className="pointer-events-auto mt-8">{children}</div>}
        </div>
      )}
    </section>
  );
}
