/**
 * Cinematic World — Atmospheric overlay for "Still Standing, Still Here"
 *
 * Renders an evolving particle/fragment system behind the page content.
 * Uses mix-blend-mode: screen so bright elements add light to the
 * existing design without obscuring it.
 *
 * Emotional arc (driven by scroll progress):
 *   0–30 %  Darkness · broken floating fragments · cool blue dust
 *   30–65 % Fragments reassemble · light rays appear · organized particles
 *   65–100 % Complete structure · warm golden glow · stars/fireflies · sunrise
 */
(function () {
  "use strict";

  var canvas = document.getElementById("cinematic-canvas");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0,
    H = 0;
  var scrollProgress = 0;
  var mouseX = 0.5,
    mouseY = 0.5;
  var smX = 0.5,
    smY = 0.5; // smoothed mouse
  var time = 0;
  var lastTime = performance.now();
  var particles = [];
  var fragments = [];
  var waves = [];

  // Adaptive quality
  var isMobile = window.innerWidth < 768;
  var P_COUNT = isMobile ? 250 : 700;
  var F_COUNT = isMobile ? 8 : 22;

  /* ─── Resize ─── */
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  /* ─── Create particles ─── */
  function createParticles() {
    particles = [];
    for (var i = 0; i < P_COUNT; i++) {
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
    fragments = [];
    for (var i = 0; i < F_COUNT; i++) {
      var a = (i / F_COUNT) * Math.PI * 2 + Math.random() * 0.4;
      var d = Math.random() * 0.22 + 0.14;
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

  /* ─── Bind events ─── */
  function bindEvents() {
    window.addEventListener("resize", resize);
    window.addEventListener(
      "mousemove",
      function (e) {
        mouseX = e.clientX / W;
        mouseY = e.clientY / H;
      },
      { passive: true }
    );
    window.addEventListener(
      "touchmove",
      function (e) {
        if (e.touches.length) {
          mouseX = e.touches[0].clientX / W;
          mouseY = e.touches[0].clientY / H;
        }
      },
      { passive: true }
    );
    window.addEventListener(
      "scroll",
      function () {
        var t = window.scrollY;
        var m = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = m > 0 ? Math.min(t / m, 1) : 0;
      },
      { passive: true }
    );
    window.addEventListener("click", function (e) {
      waves.push({ x: e.clientX / W, y: e.clientY / H, born: time, mr: 0.25 });
    });
  }

  /* ─── Draw fragments ─── */
  function drawFragments(p) {
    for (var i = 0; i < fragments.length; i++) {
      var f = fragments[i];

      // Heal progress
      if (p > 0.25) f.heal = Math.min((p - 0.25) / 0.45, 1);
      var h = f.heal;

      // Interpolate position
      var cx = f.x + (f.tx - f.x) * h;
      var cy = f.y + (f.ty - f.y) * h;

      // Parallax
      var px = (smX - 0.5) * 28 * (1 - h * 0.4);
      var py = (smY - 0.5) * 18 * (1 - h * 0.4);

      var sx = cx * W + px;
      var sy = cy * H + py;

      f.rot += f.rv * (1 - h * 0.85);

      ctx.save();
      ctx.translate(sx, sy);
      ctx.rotate(f.rot);

      var sz = f.sz * (0.75 + h * 0.45);
      var al = f.op + h * 0.12;

      // Draw shape
      ctx.beginPath();
      for (var j = 0; j < f.sides; j++) {
        var a = (j / f.sides) * Math.PI * 2;
        var w =
          0.8 +
          (1 - h) * Math.sin(a * 3 + time * 0.8) * 0.18 +
          h * 0.05;
        var ppx = Math.cos(a) * sz * w;
        var ppy = Math.sin(a) * sz * w * 0.65;
        j === 0 ? ctx.moveTo(ppx, ppy) : ctx.lineTo(ppx, ppy);
      }
      ctx.closePath();

      ctx.fillStyle = "rgba(201,168,76," + al * 0.25 + ")";
      ctx.fill();
      ctx.strokeStyle = "rgba(201,168,76," + al + ")";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Cracks (fade when healed)
      if (h < 1) {
        ctx.strokeStyle = "rgba(201,168,76," + 0.25 * (1 - h) + ")";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(-sz * 0.3, -sz * 0.15);
        ctx.lineTo(sz * 0.05, sz * 0.1);
        ctx.lineTo(sz * 0.25, sz * 0.25);
        ctx.stroke();
      }

      // Healed glow
      if (h > 0.4) {
        var ga = (h - 0.4) * 0.35;
        var g = ctx.createRadialGradient(0, 0, 0, 0, 0, sz * 1.4);
        g.addColorStop(0, "rgba(201,168,76," + ga + ")");
        g.addColorStop(1, "rgba(201,168,76,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, sz * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  /* ─── Draw particles ─── */
  function drawParticles(p) {
    for (var i = 0; i < particles.length; i++) {
      var pt = particles[i];

      // Float
      var fx = Math.sin(time * pt.speed + pt.phase) * 0.018;
      var fy = Math.cos(time * pt.speed * 0.7 + pt.phase * 1.3) * 0.018;
      pt.x = pt.bx + fx + pt.dx * time;
      pt.y = pt.by + fy + pt.dy * time;

      // Wrap
      if (pt.x < -0.05) pt.x += 1.1;
      if (pt.x > 1.05) pt.x -= 1.1;
      if (pt.y < -0.05) pt.y += 1.1;
      if (pt.y > 1.05) pt.y -= 1.1;

      // Parallax
      var depth = pt.z;
      var parX = (smX - 0.5) * 35 * depth;
      var parY = (smY - 0.5) * 25 * depth;

      var sx = pt.x * W + parX;
      var sy = pt.y * H + parY;

      // Evolution based on scroll
      var sz, al, glow;
      if (p < 0.35) {
        // Dust phase — cool, small
        sz = pt.size * 0.7;
        al = pt.bright * 0.2;
        glow = 0;
      } else if (p < 0.65) {
        // Organising — slightly bigger, warmer
        var t = (p - 0.35) / 0.3;
        sz = pt.size * (0.7 + t * 0.5);
        al = pt.bright * (0.2 + t * 0.35);
        glow = t * 3.5;
      } else {
        // Stars / fireflies — bright, pulsing
        var t2 = (p - 0.65) / 0.35;
        sz = pt.size * (1.2 + t2 * 0.6);
        al = pt.bright * (0.55 + t2 * 0.35);
        glow = 3.5 + t2 * 7;
        // Pulse
        var pulse = Math.sin(time * 1.8 + pt.phase) * 0.28 + 0.72;
        al *= pulse;
      }

      // Color shifts: cool blue → warm gold
      var cr, cg, cb;
      if (p < 0.4) {
        cr = Math.floor(100 + p * 250);
        cg = Math.floor(110 + p * 150);
        cb = Math.floor(160 - p * 200);
      } else {
        cr = 201;
        cg = 168;
        cb = 76;
      }

      // Draw dot
      ctx.beginPath();
      ctx.arc(sx, sy, Math.max(0.3, sz), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + cr + "," + cg + "," + cb + "," + al + ")";
      ctx.fill();

      // Glow
      if (glow > 0) {
        var g = ctx.createRadialGradient(sx, sy, 0, sx, sy, glow + sz);
        g.addColorStop(0, "rgba(201,168,76," + al * 0.25 + ")");
        g.addColorStop(1, "rgba(201,168,76,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(sx, sy, glow + sz, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  /* ─── Light rays (mid-scroll) ─── */
  function drawLightRays(p) {
    var al = Math.min((p - 0.25) * 0.6, 0.35);
    var cx = W * 0.5 + (smX - 0.5) * 80;
    var cy = H * 0.25;

    for (var i = 0; i < 5; i++) {
      var a =
        (i / 5) * Math.PI * 0.55 -
        Math.PI * 0.27 +
        Math.sin(time * 0.25 + i) * 0.08;
      var len = H * 0.85;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(a);

      var g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, "rgba(201,168,76," + al * 0.14 + ")");
      g.addColorStop(0.5, "rgba(201,168,76," + al * 0.04 + ")");
      g.addColorStop(1, "rgba(201,168,76,0)");

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(-18, 0);
      ctx.lineTo(18, 0);
      ctx.lineTo(55, len);
      ctx.lineTo(-55, len);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  /* ─── Horizon glow (end) ─── */
  function drawHorizonGlow(p) {
    var ga = (p - 0.65) / 0.35;

    // Bottom warm glow
    var hg = ctx.createLinearGradient(0, H, 0, H * 0.45);
    hg.addColorStop(0, "rgba(232,213,158," + ga * 0.22 + ")");
    hg.addColorStop(0.5, "rgba(201,168,76," + ga * 0.06 + ")");
    hg.addColorStop(1, "rgba(201,168,76,0)");
    ctx.fillStyle = hg;
    ctx.fillRect(0, H * 0.45, W, H * 0.55);

    // Sunrise radial
    var sg = ctx.createRadialGradient(W * 0.5, H * 1.15, 0, W * 0.5, H * 1.15, W * 0.65);
    sg.addColorStop(0, "rgba(232,213,158," + ga * 0.35 + ")");
    sg.addColorStop(0.4, "rgba(201,168,76," + ga * 0.12 + ")");
    sg.addColorStop(1, "rgba(201,168,76,0)");
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, W, H);

    // Expanding rings (growth symbol)
    var rings = 3;
    for (var i = 0; i < rings; i++) {
      var rAge = ((time * 0.15 + i * 0.33) % 1);
      var rAl = (1 - rAge) * ga * 0.12;
      var rR = rAge * W * 0.4;
      ctx.beginPath();
      ctx.arc(W * 0.5, H * 0.85, Math.max(1, rR), 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(201,168,76," + rAl + ")";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  /* ─── Click energy waves ─── */
  function drawWaves() {
    var kept = [];
    for (var i = 0; i < waves.length; i++) {
      var w = waves[i];
      var age = time - w.born;
      if (age > 2.5) continue;
      kept.push(w);

      var prog = age / 2.5;
      var r = prog * w.mr * W;
      var al = (1 - prog) * 0.18;

      ctx.beginPath();
      ctx.arc(w.x * W, w.y * H, Math.max(1, r), 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(201,168,76," + al + ")";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner ripple
      if (prog < 0.6) {
        ctx.beginPath();
        ctx.arc(w.x * W, w.y * H, Math.max(1, r * 0.5), 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(232,213,158," + al * 0.5 + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    waves = kept;
  }

  /* ─── Atmospheric vignette ─── */
  function drawVignette(p) {
    // Subtle darkening at edges — stronger at beginning, fades at end
    var strength = 0.25 * (1 - p * 0.6);
    if (strength < 0.02) return;

    var g = ctx.createRadialGradient(W * 0.5, H * 0.5, W * 0.25, W * 0.5, H * 0.5, W * 0.9);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(0,0,0," + strength + ")");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  /* ─── Main loop ─── */
  function animate(now) {
    requestAnimationFrame(animate);

    var dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    time += dt;

    // Smooth mouse
    smX += (mouseX - smX) * 2.5 * dt;
    smY += (mouseY - smY) * 2.5 * dt;

    var p = scrollProgress;

    // Clear (transparent for screen blend mode)
    ctx.clearRect(0, 0, W, H);

    // Subtle atmospheric gradient following cursor
    var bgA = 0.025 + p * 0.04;
    var bg = ctx.createRadialGradient(W * smX, H * smY, 0, W * smX, H * smY, W * 0.75);
    bg.addColorStop(0, "rgba(201,168,76," + bgA + ")");
    bg.addColorStop(1, "rgba(201,168,76,0)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Fog at beginning
    if (p < 0.4) {
      var fogA = 0.04 * (1 - p / 0.4);
      ctx.fillStyle = "rgba(28,26,46," + fogA + ")";
      ctx.fillRect(0, 0, W, H);
    }

    drawFragments(p);
    drawParticles(p);

    if (p > 0.25) drawLightRays(p);
    if (p > 0.65) drawHorizonGlow(p);

    drawWaves();
    drawVignette(p);
  }

  /* ─── Init ─── */
  resize();
  createParticles();
  createFragments();
  bindEvents();
  requestAnimationFrame(animate);
})();