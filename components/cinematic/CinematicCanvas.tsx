"use client";

import { useEffect, useRef } from "react";

/**
 * CinematicCanvas — the fine starfield/dust-particle layer.
 *
 * Renders a full-viewport <canvas> with mix-blend-mode: screen, sitting
 * above `MountainSilhouette` (which owns the sky, sunrise glow, ridgeline
 * and fog). This layer only handles the many small particles — visible as
 * a quiet starfield at the top of the page, warming into drifting dust as
 * the story's sunrise progresses — plus the interactive click ripple.
 *
 * Pointer-events are disabled so the canvas never blocks interaction.
 */
export default function CinematicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ─── State ─── */
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0,
      H = 0;
    let scrollProgress = 0;
    let mouseX = 0.5,
      mouseY = 0.5;
    let smX = 0.5,
      smY = 0.5;
    let time = 0;
    let lastTime = performance.now();
    let rafId = 0;

    const isMobile = window.innerWidth < 768;
    const P_COUNT = isMobile ? 250 : 700;

    /* Particle (star) type */
    interface Particle {
      bx: number;
      by: number;
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      phase: number;
      bright: number;
      dx: number;
      dy: number;
    }

    /* Wave type */
    interface Wave {
      x: number;
      y: number;
      born: number;
      mr: number;
    }

    const particles: Particle[] = [];
    let waves: Wave[] = [];

    /* ─── Resize ─── */
    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /* ─── Create particles (stars) ─── */
    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < P_COUNT; i++) {
        particles.push({
          bx: Math.random(),
          by: Math.random(),
          x: 0,
          y: 0,
          z: Math.random(),
          size: Math.random() * 2.2 + 0.4,
          speed: Math.random() * 0.4 + 0.08,
          phase: Math.random() * Math.PI * 2,
          bright: Math.random() * 0.5 + 0.25,
          dx: (Math.random() - 0.5) * 0.0004,
          dy: (Math.random() - 0.5) * 0.0004,
        });
      }
    }

    /* ─── Draw particles (stars) ─── */
    function drawParticles(p: number) {
      for (const pt of particles) {
        const fx = Math.sin(time * pt.speed + pt.phase) * 0.018;
        const fy = Math.cos(time * pt.speed * 0.7 + pt.phase * 1.3) * 0.018;
        pt.x = pt.bx + fx + pt.dx * time;
        pt.y = pt.by + fy + pt.dy * time;

        if (pt.x < -0.05) pt.x += 1.1;
        if (pt.x > 1.05) pt.x -= 1.1;
        if (pt.y < -0.05) pt.y += 1.1;
        if (pt.y > 1.05) pt.y -= 1.1;

        const depth = pt.z;
        const parX = (smX - 0.5) * 35 * depth;
        const parY = (smY - 0.5) * 25 * depth;
        const sx = pt.x * W + parX;
        const sy = pt.y * H + parY;

        let sz: number, al: number, glow: number;
        if (p < 0.35) {
          // Starfield — clearly visible from the very top of the page
          sz = pt.size * 0.95;
          al = pt.bright * 0.55;
          glow = 1.2;
          const twinkle = Math.sin(time * 1.4 + pt.phase) * 0.25 + 0.75;
          al *= twinkle;
        } else if (p < 0.65) {
          const t = (p - 0.35) / 0.3;
          sz = pt.size * (0.7 + t * 0.5);
          al = pt.bright * (0.2 + t * 0.35);
          glow = t * 3.5;
        } else {
          const t2 = (p - 0.65) / 0.35;
          sz = pt.size * (1.2 + t2 * 0.6);
          al = pt.bright * (0.55 + t2 * 0.35);
          glow = 3.5 + t2 * 7;
          const pulse = Math.sin(time * 1.8 + pt.phase) * 0.28 + 0.72;
          al *= pulse;
        }

        // Cool starlight warms gradually into gold dust as the sunrise progresses.
        const warmT = Math.min(p / 0.85, 1);
        const cr = 255,
          cg = 255 - warmT * 27,
          cb = 255 - warmT * 78;

        ctx!.beginPath();
        ctx!.arc(sx, sy, Math.max(0.3, sz), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${cr},${cg},${cb},${al})`;
        ctx!.fill();

        if (glow > 0) {
          const g = ctx!.createRadialGradient(sx, sy, 0, sx, sy, glow + sz);
          g.addColorStop(0, `rgba(${cr},${cg},${cb},${al * 0.25})`);
          g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(sx, sy, glow + sz, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    /* ─── Click waves ─── */
    function drawWaves() {
      const kept: Wave[] = [];
      for (const w of waves) {
        const age = time - w.born;
        if (age > 2.5) continue;
        kept.push(w);

        const prog = age / 2.5;
        const r = prog * w.mr * W;
        const al = (1 - prog) * 0.18;

        ctx!.beginPath();
        ctx!.arc(w.x * W, w.y * H, Math.max(1, r), 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(255,255,255,${al})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        if (prog < 0.6) {
          ctx!.beginPath();
          ctx!.arc(w.x * W, w.y * H, Math.max(1, r * 0.5), 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(255,255,255,${al * 0.5})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }
      waves = kept;
    }

    /* ─── Main loop ─── */
    function animate(now: number) {
      rafId = requestAnimationFrame(animate);

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      time += dt;

      smX += (mouseX - smX) * 2.5 * dt;
      smY += (mouseY - smY) * 2.5 * dt;

      const p = scrollProgress;

      ctx!.clearRect(0, 0, W, H);

      // Atmospheric gradient
      const bgA = 0.025 + p * 0.04;
      const bg = ctx!.createRadialGradient(W * smX, H * smY, 0, W * smX, H * smY, W * 0.75);
      bg.addColorStop(0, `rgba(255,255,255,${bgA})`);
      bg.addColorStop(1, "rgba(255,255,255,0)");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, W, H);

      drawParticles(p);
      drawWaves();
    }

    /* ─── Event handlers ─── */
    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX / W;
      mouseY = e.clientY / H;
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length) {
        mouseX = e.touches[0].clientX / W;
        mouseY = e.touches[0].clientY / H;
      }
    }
    function onScroll() {
      const t = window.scrollY;
      const m = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = m > 0 ? Math.min(t / m, 1) : 0;
    }
    function onClick(e: MouseEvent) {
      waves.push({ x: e.clientX / W, y: e.clientY / H, born: time, mr: 0.25 });
    }

    /* ─── Mount ─── */
    resize();
    createParticles();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);

    rafId = requestAnimationFrame(animate);

    /* ─── Cleanup ─── */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cinematic-canvas"
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
