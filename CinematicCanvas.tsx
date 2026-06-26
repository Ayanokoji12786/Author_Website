"use client";

import { useEffect, useRef } from "react";

/**
 * CinematicCanvas — React wrapper for the atmospheric overlay.
 *
 * Renders a full-viewport <canvas> with mix-blend-mode: screen.
 * The canvas draws particles, floating fragments, light rays and
 * horizon glow that evolve with scroll progress, creating the
 * emotional arc: despair → resilience → hope → purpose.
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
    const F_COUNT = isMobile ? 8 : 22;

    /* Particle type */
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

    /* Fragment type */
    interface Fragment {
      x: number;
      y: number;
      tx: number;
      ty: number;
      rot: number;
      rv: number;
      sz: number;
      sides: number;
      op: number;
      heal: number;
    }

    /* Wave type */
    interface Wave {
      x: number;
      y: number;
      born: number;
      mr: number;
    }

    const particles: Particle[] = [];
    const fragments: Fragment[] = [];
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

    /* ─── Create particles ─── */
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

    /* ─── Create fragments ─── */
    function createFragments() {
      fragments.length = 0;
      for (let i = 0; i < F_COUNT; i++) {
        const a = (i / F_COUNT) * Math.PI * 2 + Math.random() * 0.4;
        const d = Math.random() * 0.22 + 0.14;
        fragments.push({
          x: 0.5 + Math.cos(a) * d,
          y: 0.5 + Math.sin(a) * d,
          tx: 0.5 + Math.cos(a) * d * 0.35,
          ty: 0.5 + Math.sin(a) * d * 0.35,
          rot: Math.random() * Math.PI * 2,
          rv: (Math.random() - 0.5) * 0.004,
          sz: Math.random() * 45 + 12,
          sides: Math.floor(Math.random() * 3) + 3,
          op: Math.random() * 0.18 + 0.04,
          heal: 0,
        });
      }
    }

    /* ─── Draw fragments ─── */
    function drawFragments(p: number) {
      for (const f of fragments) {
        if (p > 0.25) f.heal = Math.min((p - 0.25) / 0.45, 1);
        const h = f.heal;

        const cx = f.x + (f.tx - f.x) * h;
        const cy = f.y + (f.ty - f.y) * h;
        const px = (smX - 0.5) * 28 * (1 - h * 0.4);
        const py = (smY - 0.5) * 18 * (1 - h * 0.4);
        const sx = cx * W + px;
        const sy = cy * H + py;

        f.rot += f.rv * (1 - h * 0.85);

        ctx!.save();
        ctx!.translate(sx, sy);
        ctx!.rotate(f.rot);

        const sz = f.sz * (0.75 + h * 0.45);
        const al = f.op + h * 0.12;

        ctx!.beginPath();
        for (let j = 0; j < f.sides; j++) {
          const ang = (j / f.sides) * Math.PI * 2;
          const w =
            0.8 + (1 - h) * Math.sin(ang * 3 + time * 0.8) * 0.18 + h * 0.05;
          const ppx = Math.cos(ang) * sz * w;
          const ppy = Math.sin(ang) * sz * w * 0.65;
          j === 0 ? ctx!.moveTo(ppx, ppy) : ctx!.lineTo(ppx, ppy);
        }
        ctx!.closePath();

        ctx!.fillStyle = `rgba(201,168,76,${al * 0.25})`;
        ctx!.fill();
        ctx!.strokeStyle = `rgba(201,168,76,${al})`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();

        if (h < 1) {
          ctx!.strokeStyle = `rgba(201,168,76,${0.25 * (1 - h)})`;
          ctx!.lineWidth = 0.5;
          ctx!.beginPath();
          ctx!.moveTo(-sz * 0.3, -sz * 0.15);
          ctx!.lineTo(sz * 0.05, sz * 0.1);
          ctx!.lineTo(sz * 0.25, sz * 0.25);
          ctx!.stroke();
        }

        if (h > 0.4) {
          const ga = (h - 0.4) * 0.35;
          const g = ctx!.createRadialGradient(0, 0, 0, 0, 0, sz * 1.4);
          g.addColorStop(0, `rgba(201,168,76,${ga})`);
          g.addColorStop(1, "rgba(201,168,76,0)");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(0, 0, sz * 1.4, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.restore();
      }
    }

    /* ─── Draw particles ─── */
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
          sz = pt.size * 0.7;
          al = pt.bright * 0.2;
          glow = 0;
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

        let cr: number, cg: number, cb: number;
        if (p < 0.4) {
          cr = Math.floor(100 + p * 250);
          cg = Math.floor(110 + p * 150);
          cb = Math.floor(160 - p * 200);
        } else {
          cr = 201;
          cg = 168;
          cb = 76;
        }

        ctx!.beginPath();
        ctx!.arc(sx, sy, Math.max(0.3, sz), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${cr},${cg},${cb},${al})`;
        ctx!.fill();

        if (glow > 0) {
          const g = ctx!.createRadialGradient(sx, sy, 0, sx, sy, glow + sz);
          g.addColorStop(0, `rgba(201,168,76,${al * 0.25})`);
          g.addColorStop(1, "rgba(201,168,76,0)");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(sx, sy, glow + sz, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    /* ─── Light rays ─── */
    function drawLightRays(p: number) {
      const al = Math.min((p - 0.25) * 0.6, 0.35);
      const cx = W * 0.5 + (smX - 0.5) * 80;
      const cy = H * 0.25;

      for (let i = 0; i < 5; i++) {
        const a =
          (i / 5) * Math.PI * 0.55 -
          Math.PI * 0.27 +
          Math.sin(time * 0.25 + i) * 0.08;
        const len = H * 0.85;

        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(a);

        const g = ctx!.createLinearGradient(0, 0, 0, len);
        g.addColorStop(0, `rgba(201,168,76,${al * 0.14})`);
        g.addColorStop(0.5, `rgba(201,168,76,${al * 0.04})`);
        g.addColorStop(1, "rgba(201,168,76,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.moveTo(-18, 0);
        ctx!.lineTo(18, 0);
        ctx!.lineTo(55, len);
        ctx!.lineTo(-55, len);
        ctx!.closePath();
        ctx!.fill();
        ctx!.restore();
      }
    }

    /* ─── Horizon glow ─── */
    function drawHorizonGlow(p: number) {
      const ga = (p - 0.65) / 0.35;

      const hg = ctx!.createLinearGradient(0, H, 0, H * 0.45);
      hg.addColorStop(0, `rgba(232,213,158,${ga * 0.22})`);
      hg.addColorStop(0.5, `rgba(201,168,76,${ga * 0.06})`);
      hg.addColorStop(1, "rgba(201,168,76,0)");
      ctx!.fillStyle = hg;
      ctx!.fillRect(0, H * 0.45, W, H * 0.55);

      const sg = ctx!.createRadialGradient(W * 0.5, H * 1.15, 0, W * 0.5, H * 1.15, W * 0.65);
      sg.addColorStop(0, `rgba(232,213,158,${ga * 0.35})`);
      sg.addColorStop(0.4, `rgba(201,168,76,${ga * 0.12})`);
      sg.addColorStop(1, "rgba(201,168,76,0)");
      ctx!.fillStyle = sg;
      ctx!.fillRect(0, 0, W, H);

      for (let i = 0; i < 3; i++) {
        const rAge = (time * 0.15 + i * 0.33) % 1;
        const rAl = (1 - rAge) * ga * 0.12;
        const rR = rAge * W * 0.4;
        ctx!.beginPath();
        ctx!.arc(W * 0.5, H * 0.85, Math.max(1, rR), 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(201,168,76,${rAl})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
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
        ctx!.strokeStyle = `rgba(201,168,76,${al})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        if (prog < 0.6) {
          ctx!.beginPath();
          ctx!.arc(w.x * W, w.y * H, Math.max(1, r * 0.5), 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(232,213,158,${al * 0.5})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }
      waves = kept;
    }

    /* ─── Vignette ─── */
    function drawVignette(p: number) {
      const strength = 0.25 * (1 - p * 0.6);
      if (strength < 0.02) return;

      const g = ctx!.createRadialGradient(W * 0.5, H * 0.5, W * 0.25, W * 0.5, H * 0.5, W * 0.9);
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, `rgba(0,0,0,${strength})`);
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, W, H);
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
      bg.addColorStop(0, `rgba(201,168,76,${bgA})`);
      bg.addColorStop(1, "rgba(201,168,76,0)");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, W, H);

      // Beginning fog
      if (p < 0.4) {
        const fogA = 0.04 * (1 - p / 0.4);
        ctx!.fillStyle = `rgba(28,26,46,${fogA})`;
        ctx!.fillRect(0, 0, W, H);
      }

      drawFragments(p);
      drawParticles(p);
      if (p > 0.25) drawLightRays(p);
      if (p > 0.65) drawHorizonGlow(p);
      drawWaves();
      drawVignette(p);
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
    createFragments();

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