/**
 * Cinematic hero reveal — "Still Standing, Still Here"
 *
 * Sunrise light and a subtle, glowing mountain establish the scene first;
 * only once that's settled does the title/subtext/CTA animate in, then a
 * quiet shooting star starts drifting through. Starts the moment
 * loading-screen.js finishes dissolving (event "ssh:intro-complete"),
 * mirroring how the React version's LoadingScreen onComplete callback
 * drives CinematicHero's `start` prop. Respects prefers-reduced-motion.
 */
(function () {
  "use strict";

  var heroEl = document.getElementById("hero");
  if (!heroEl) return;

  var raysEl = document.getElementById("hero-rays");
  var glowEl = document.getElementById("hero-glow");
  var mtnBackEl = document.getElementById("hero-mtn-back");
  var mtnFrontEl = document.getElementById("hero-mtn-front");
  var fogEl = document.getElementById("hero-fog");
  var starsWrapEl = document.getElementById("hero-stars-wrap");
  var starsSvg = document.getElementById("hero-shooting-stars");
  var title1El = document.getElementById("hero-title-1");
  var title2El = document.getElementById("hero-title-2");
  var subtextEl = document.getElementById("hero-subtext");
  var ctaEl = document.getElementById("hero-cta");

  var EASE_SOFT = "cubic-bezier(.16,.7,.24,1)";
  var EASE_OUT = "cubic-bezier(.22,.61,.36,1)";

  var mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduced = !!(mq && mq.matches);

  /* Reveal timeline, seconds from `begin()`. Environment (light, mountain,
     fog, rays) establishes first; the title only animates in once that's
     settled. Total run lands ~6.3s, inside the requested 5–7s window. */
  var T = {
    glow: { duration: 2.8, delay: 0.1 },
    mountainBack: { duration: 2.6, delay: 0.3 },
    mountainFront: { duration: 2.3, delay: 0.55 },
    rays: { duration: 3, delay: 0.5 },
    fog: { duration: 2.4, delay: 0.75 },
    titleLine1: { duration: 1.15, delay: 3.0 },
    titleLine2: { duration: 1.15, delay: 3.75 },
    subtext: { duration: 1, delay: 4.7 },
    cta: { duration: 0.9, delay: 5.5 },
  };
  var REVEAL_DONE_MS = (T.cta.delay + T.cta.duration + 0.3) * 1000;

  /* ─── Hidden state, set immediately on load — well before the loading
     screen dissolves, so nothing flashes visible early ─── */
  function setHidden(el, rise, blur) {
    if (!el) return;
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = !reduced && rise ? "translateY(" + rise + "px)" : "";
    el.style.filter = !reduced && blur ? "blur(" + blur + "px)" : "";
  }

  /* ─── Fade + gentle rise + un-blur into place. Reduces to a plain
     crossfade under prefers-reduced-motion (no transform/filter set on
     the hidden state above, so only opacity transitions here). ─── */
  function revealLayer(el, opts) {
    if (!el) return;
    el.style.transition =
      "opacity " + opts.duration + "s " + opts.ease + " " + opts.delay + "s, " +
      "transform " + opts.duration + "s " + opts.ease + " " + opts.delay + "s, " +
      "filter " + opts.duration + "s " + opts.ease + " " + opts.delay + "s";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    el.style.filter = opts.settleBlur || "blur(0px)";
  }

  setHidden(raysEl, 0, 0);
  setHidden(glowEl, 0, 0);
  setHidden(mtnBackEl, 10, 6);
  setHidden(mtnFrontEl, 10, 6);
  setHidden(fogEl, 0, 0);
  setHidden(title1El, 26, 16);
  setHidden(title2El, 26, 16);
  setHidden(subtextEl, 16, 8);
  setHidden(ctaEl, 14, 6);

  var started = false;
  function beginOnce() {
    if (started) return;
    started = true;
    begin();
  }

  function begin() {
    revealLayer(raysEl, { duration: T.rays.duration, delay: T.rays.delay, ease: EASE_SOFT });
    revealLayer(glowEl, { duration: T.glow.duration, delay: T.glow.delay, ease: EASE_SOFT });
    // A residual blur stays even once "shown" — the brief calls for a soft
    // ridge, never a sharp illustration.
    revealLayer(mtnBackEl, { duration: T.mountainBack.duration, delay: T.mountainBack.delay, ease: EASE_SOFT, settleBlur: "blur(1px)" });
    revealLayer(mtnFrontEl, { duration: T.mountainFront.duration, delay: T.mountainFront.delay, ease: EASE_SOFT, settleBlur: "blur(.5px)" });
    revealLayer(fogEl, { duration: T.fog.duration, delay: T.fog.delay, ease: EASE_SOFT });
    revealLayer(title1El, { duration: T.titleLine1.duration, delay: T.titleLine1.delay, ease: EASE_OUT });
    revealLayer(title2El, { duration: T.titleLine2.duration, delay: T.titleLine2.delay, ease: EASE_OUT });
    revealLayer(subtextEl, { duration: T.subtext.duration, delay: T.subtext.delay, ease: EASE_OUT });
    revealLayer(ctaEl, { duration: T.cta.duration, delay: T.cta.delay, ease: EASE_OUT });

    if (!reduced) {
      setTimeout(function () {
        if (starsWrapEl) {
          starsWrapEl.style.transition = "opacity 1.6s " + EASE_SOFT;
          starsWrapEl.style.opacity = "1";
        }
        startShootingStars();
      }, REVEAL_DONE_MS);
    }
  }

  document.addEventListener("ssh:intro-complete", beginOnce, { once: true });

  if (!document.getElementById("loading-screen")) {
    // No intro on this page — start right away.
    beginOnce();
  } else {
    // Safety net in case the dissolve event is ever missed.
    setTimeout(beginOnce, 12000);
  }

  /* ─── Shooting stars — one slow diagonal streak at a time, ambient
     rather than a shower. Ported from the "Shooting Stars" component
     (MIT, Aceternity UI / 21st.dev), recoloured to the site's warm
     parchment/gold palette. ─── */
  function startShootingStars() {
    if (!starsSvg) return;
    var minSpeed = 8, maxSpeed = 18, minDelay = 2600, maxDelay = 7000;
    var starColor = "#FFFFFF", trailColor = "#8A8A8A", starWidth = 12;
    var gradientId = "hero-star-gradient";
    var svgNS = "http://www.w3.org/2000/svg";

    var defs = document.createElementNS(svgNS, "defs");
    var gradient = document.createElementNS(svgNS, "linearGradient");
    gradient.setAttribute("id", gradientId);
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "0%");
    var stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", trailColor);
    stop1.setAttribute("stop-opacity", "0");
    var stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", starColor);
    stop2.setAttribute("stop-opacity", "1");
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    starsSvg.appendChild(defs);

    var rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("height", "1");
    rect.setAttribute("fill", "url(#" + gradientId + ")");
    rect.style.display = "none";
    starsSvg.appendChild(rect);

    var star = null;

    function randomStart() {
      var w = window.innerWidth, h = window.innerHeight;
      var side = Math.floor(Math.random() * 4);
      var offset = Math.random() * (side % 2 === 0 ? w : h);
      if (side === 0) return { x: offset, y: 0, angle: 45 };
      if (side === 1) return { x: w, y: offset, angle: 135 };
      if (side === 2) return { x: offset, y: h, angle: 225 };
      return { x: 0, y: offset, angle: 315 };
    }

    function scheduleNext() {
      var delay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(spawn, delay);
    }

    function spawn() {
      var p = randomStart();
      star = {
        x: p.x,
        y: p.y,
        angle: p.angle,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      rect.style.display = "";
      scheduleNext();
    }

    function tick() {
      if (star) {
        var rad = (star.angle * Math.PI) / 180;
        star.x += star.speed * Math.cos(rad);
        star.y += star.speed * Math.sin(rad);
        star.distance += star.speed;
        var w = window.innerWidth, h = window.innerHeight;
        if (star.x < -20 || star.x > w + 20 || star.y < -20 || star.y > h + 20) {
          star = null;
          rect.style.display = "none";
        } else {
          var width = starWidth * (1 + star.distance / 140);
          rect.setAttribute("x", star.x);
          rect.setAttribute("y", star.y);
          rect.setAttribute("width", width);
          rect.setAttribute(
            "transform",
            "rotate(" + star.angle + "," + (star.x + width / 2) + "," + (star.y + 0.5) + ")"
          );
        }
      }
      requestAnimationFrame(tick);
    }

    spawn();
    requestAnimationFrame(tick);
  }
})();
