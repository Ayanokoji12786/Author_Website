'use client';

import { useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  /* ─── Phase 2: Post-expansion scroll tracking ──── */
  useEffect(() => {
    if (!expanded) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();