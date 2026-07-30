"use client";

import { useEffect, useState } from "react";
import { Instagram, Mail, Twitter } from "lucide-react";
import LoadingScreen from "@/components/loading/LoadingScreen";
import CinematicCanvas from "@/components/cinematic/CinematicCanvas";
import MountainSilhouette from "@/components/story/MountainSilhouette";
import CinematicHero from "@/components/hero/CinematicHero";
import ChapterOne from "@/components/story/ChapterOne";
import ChapterTwo from "@/components/story/ChapterTwo";
import BookReveal from "@/components/story/BookReveal";
import Testimonials from "@/components/story/Testimonials";
import FinalChapter from "@/components/story/FinalChapter";

/**
 * The homepage is one continuous scroll — a film, not a set of sections.
 * `MountainSilhouette` and `CinematicCanvas` are fixed backdrops mounted
 * once and read by every chapter below; nothing re-enters or resets as the
 * story progresses from Prologue to the Final Chapter's single CTA.
 */
export default function HomePage() {
  const [introActive, setIntroActive] = useState(true);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setIntroActive(false)} />

      {/* Persistent backdrops — behind every chapter, driven by page scroll */}
      <MountainSilhouette start={!introActive} />
      <CinematicCanvas />

      <div {...(introActive ? { inert: true } : {})}>
        {/* Minimal wayfinding — quiet, appears only once the story is underway */}
        <nav
          className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-5 transition-opacity duration-700 sm:px-10"
          style={{ opacity: navVisible ? 1 : 0, pointerEvents: navVisible ? "auto" : "none" }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-sm font-medium tracking-[0.08em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            Still Standing, Still Here
          </button>
          <a
            href="#final"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("final")?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="rounded-full border border-white/20 px-5 py-2 font-body text-[11px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50 hover:text-gold"
          >
            The Book
          </a>
        </nav>

        {/* ═══ THE STORY ═══ */}
        <div className="relative z-10">
          <CinematicHero start={!introActive} />
          <ChapterOne />
          <ChapterTwo />
          <BookReveal />
          <Testimonials />
          <FinalChapter />
        </div>

        {/* A quiet close — solid ground beneath the story, not another chapter */}
        <footer className="relative z-10 bg-ink py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <span className="font-body text-xs text-white/30">
              © 2026 Dhruva Nerella &amp; Tattva Nerella. All rights reserved.
            </span>
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/30 transition-colors duration-300 hover:text-gold" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-white/30 transition-colors duration-300 hover:text-gold" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-white/30 transition-colors duration-300 hover:text-gold" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
