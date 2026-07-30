/**
 * Loading Screen — cinematic intro for "Still Standing, Still Here"
 *
 * Heartbeat pulse → tagline → title reveal → dissolve into the site.
 * Plays once per browser session (sessionStorage), skippable, respects
 * prefers-reduced-motion, and keeps the rest of the page inert/hidden
 * from assistive tech while it covers the viewport.
 */
(function () {
  "use strict";

  var screenEl = document.getElementById("loading-screen");
  if (!screenEl) return;

  var siteContent = document.getElementById("site-content");
  var srEl = document.getElementById("loading-sr");
  var particlesContainer = document.getElementById("loading-particles");
  var grainCanvas = document.getElementById("loading-grain");
  var mtn1 = document.getElementById("loading-mtn-1");
  var mtn2 = document.getElementById("loading-mtn-2");
  var mtn3 = document.getElementById("loading-mtn-3");
  var fogEl = document.getElementById("loading-fog");
  var ecgPathEl = document.getElementById("loading-ecg");
  var ringEl = document.getElementById("loading-ring");
  var dotEl = document.getElementById("loading-dot");
  var textEl = document.getElementById("loading-text");
  var titleEl = document.getElementById("loading-title");
  var skipEl = document.getElementById("loading-skip");
  var muteEl = document.getElementById("loading-mute");
  var muteWave1 = document.getElementById("loading-mute-wave-1");
  var muteWave2 = document.getElementById("loading-mute-wave-2");
  var muteX = document.getElementById("loading-mute-x");
  var gateEl = document.getElementById("loading-gate");
  var gateHintEl = document.getElementById("loading-gate-hint");

  var SESSION_KEY = "ssh-intro-seen";
  var PARTICLE_COUNT = 16;
  var DISSOLVE_MS = 1150;
  var beatIntervalMs = 1400;
  var showEcg = true;

  var state = {
    showText: false,
    showTitle: false,
    // True from the moment the tagline first appears through to dissolve.
    // Distinct from showText/showTitle, which each toggle off before the
    // next one toggles on — deriving the heartbeat/mountain visibility
    // from those directly caused both to flicker back on during that gap.
    sequenceStarted: false,
    showHome: false,
    skipVisible: false,
    reducedMotion: false,
    muted: false,
    started: false,
  };

  var timers = [];
  var grainTimer = null;
  var audioCtx = null;
  var noiseSrc = null;
  var audioInterval = null;

  /* ─── Dust particles ─── */
  function buildParticles(count) {
    var anims = ["driftA", "driftB", "driftC"];
    var arr = [];
    for (var i = 0; i < count; i++) {
      var seed = (i * 137.5) % 360;
      arr.push({
        left: (Math.sin(seed) * 0.5 + 0.5) * 92 + 2,
        top: (Math.cos(seed * 1.7) * 0.5 + 0.5) * 88 + 3,
        size: 1.2 + (i % 4) * 0.4,
        dur: 10 + (i % 5) * 3,
        delay: (i % 6) * 1.3,
        anim: anims[i % 3],
      });
    }
    return arr;
  }

  function renderParticles() {
    if (!particlesContainer) return;
    buildParticles(PARTICLE_COUNT).forEach(function (p) {
      var div = document.createElement("div");
      div.setAttribute("aria-hidden", "true");
      div.className = "pointer-events-none absolute rounded-full";
      div.style.left = p.left + "%";
      div.style.top = p.top + "%";
      div.style.width = p.size + "px";
      div.style.height = p.size + "px";
      div.style.background =
        "radial-gradient(circle, rgba(255,255,255,.5), rgba(255,255,255,0) 70%)";
      div.style.opacity = "0.06";
      div.style.animation = state.reducedMotion
        ? "none"
        : p.anim + " " + p.dur + "s ease-in-out " + p.delay + "s infinite alternate";
      particlesContainer.appendChild(div);
    });
  }

  /* ─── Film grain ─── */
  function startGrainLoop() {
    if (!grainCanvas) return;
    var ctx = grainCanvas.getContext("2d");
    if (!ctx) return;
    var w = grainCanvas.width;
    var h = grainCanvas.height;
    function draw() {
      var imgData = ctx.createImageData(w, h);
      for (var i = 0; i < imgData.data.length; i += 4) {
        var v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
    }
    draw();
    grainTimer = setInterval(draw, 90);
  }

  /* ─── Mountain layer reveal ─── */
  function setMountainLayer(el, visible, delay, blurPx, risePx) {
    if (!el) return;
    var ease = "cubic-bezier(.16,.7,.24,1)";
    if (state.reducedMotion) {
      el.style.opacity = visible ? "1" : "0";
      el.style.transition = "opacity 1.4s ease " + delay + "s";
    } else {
      el.style.opacity = visible ? "1" : "0";
      el.style.filter = "blur(" + (visible ? 0 : blurPx) + "px)";
      el.style.transform =
        "translateY(" + (visible ? 0 : risePx) + "px) scale(" + (visible ? 1 : 1.02) + ")";
      el.style.transition =
        "opacity 2.8s " + ease + " " + delay + "s, " +
        "filter 2.8s " + ease + " " + delay + "s, " +
        "transform 2.8s " + ease + " " + delay + "s";
    }
  }

  /* ─── Re-render derived styles from state ─── */
  function render() {
    var heartbeatActive = !state.reducedMotion && !state.sequenceStarted && !state.showHome;
    var mountainOn = state.sequenceStarted && !state.showHome;
    var titleVisible = state.showTitle && !state.showHome;
    var easeOut = "cubic-bezier(.22,.61,.36,1)";

    if (dotEl) {
      if (heartbeatActive) {
        dotEl.style.transition = "";
        dotEl.style.animation = "beatPulse " + beatIntervalMs + "ms ease-in-out infinite";
      } else {
        dotEl.style.animation = "none";
        dotEl.style.transform = "translate(-50%,-50%) scale(1)";
        dotEl.style.opacity = "0.82";
        dotEl.style.transition = "opacity 1s ease, transform 1s ease";
      }
    }

    if (ringEl) {
      if (heartbeatActive) {
        ringEl.style.transition = "";
        ringEl.style.animation = "beatRing " + beatIntervalMs + "ms ease-in-out infinite";
      } else {
        ringEl.style.animation = "none";
        ringEl.style.opacity = "0";
        ringEl.style.transition = "opacity .8s ease";
      }
    }

    if (ecgPathEl) {
      if (heartbeatActive && showEcg) {
        ecgPathEl.style.transition = "";
        ecgPathEl.style.opacity = "0";
        ecgPathEl.style.animation = "ecgFlash " + beatIntervalMs + "ms ease-in-out infinite";
      } else {
        ecgPathEl.style.animation = "none";
        ecgPathEl.style.opacity = "0";
        ecgPathEl.style.transition = "opacity .8s ease";
      }
    }

    setMountainLayer(mtn1, mountainOn, 0, 16, 10);
    setMountainLayer(mtn2, mountainOn, 0.35, 13, 8);
    setMountainLayer(mtn3, mountainOn, 0.7, 10, 6);
    if (fogEl) {
      fogEl.style.opacity = mountainOn ? "0.6" : "0";
      fogEl.style.transition = "opacity 2.4s cubic-bezier(.16,.7,.24,1) .2s";
    }

    if (textEl) {
      textEl.style.opacity = state.showText ? "1" : "0";
      textEl.style.transform =
        "translate(-50%, calc(-50% + 92px + " + (state.showText ? 0 : 10) + "px))";
      textEl.style.transition = "opacity .9s " + easeOut + ", transform .9s " + easeOut;
    }

    if (titleEl) {
      titleEl.style.opacity = titleVisible ? "1" : "0";
      var scale = state.showHome ? 0.94 : state.showTitle ? 1 : 0.98;
      titleEl.style.transform = "translate(-50%,-50%) scale(" + scale + ")";
      titleEl.style.transition = "opacity 1s ease, transform 1s " + easeOut;
    }

    if (skipEl) {
      var skipShow = state.skipVisible && !state.showHome;
      skipEl.style.opacity = skipShow ? "1" : "0";
      skipEl.style.pointerEvents = skipShow ? "auto" : "none";
    }

    if (muteEl) {
      muteEl.style.opacity = state.showHome ? "0" : "1";
      muteEl.style.pointerEvents = state.showHome ? "none" : "auto";
    }

    screenEl.style.opacity = state.showHome ? "0" : "1";
    screenEl.style.pointerEvents = state.showHome ? "none" : "auto";

    if (srEl) srEl.textContent = state.showHome ? "" : "Loading Still Standing, Still Here";
  }

  /* ─── Ambient heartbeat audio ───
   * Browsers refuse to let Web Audio make sound until the page has
   * received a real user gesture — there's no muted-autoplay exemption
   * for it like there is for <video>. We still create/resume the
   * context eagerly on load (some browsers allow it), and arm a
   * one-time listener for the first click/key/tap to unlock it the
   * instant that's possible, so playback starts as early as it can.
   */
  var gestureUnlockArmed = false;

  function beginBeatLoop() {
    if (audioInterval) return;
    function thump() {
      var t = audioCtx.currentTime;
      [0, 0.16].forEach(function (offset, idx) {
        var osc = audioCtx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = idx === 0 ? 58 : 46;
        var g = audioCtx.createGain();
        g.gain.setValueAtTime(0, t + offset);
        g.gain.linearRampToValueAtTime(idx === 0 ? 0.09 : 0.05, t + offset + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + offset + 0.22);
        osc.connect(g);
        g.connect(audioCtx.destination);
        osc.start(t + offset);
        osc.stop(t + offset + 0.25);
      });
    }
    thump();
    audioInterval = setInterval(thump, beatIntervalMs);
  }

  function ensureNoiseBed() {
    if (noiseSrc) return;
    var bufferSize = audioCtx.sampleRate * 2;
    var buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    var data = buffer.getChannelData(0);
    var last = 0;
    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    var src = audioCtx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    var filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 300;
    var gain = audioCtx.createGain();
    gain.gain.value = 0.008;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    src.start();
    noiseSrc = src;
  }

  function armGestureUnlock() {
    if (gestureUnlockArmed) return;
    gestureUnlockArmed = true;
    var events = ["pointerdown", "keydown", "touchstart"];
    function unlock() {
      events.forEach(function (evt) {
        document.removeEventListener(evt, unlock);
      });
      gestureUnlockArmed = false;
      if (!audioCtx || state.muted || state.showHome) return;
      audioCtx
        .resume()
        .then(function () {
          if (!state.muted && !state.showHome) beginBeatLoop();
        })
        .catch(function () {});
    }
    events.forEach(function (evt) {
      document.addEventListener(evt, unlock, { once: true, passive: true });
    });
  }

  function startAudio() {
    if (state.showHome) return;
    try {
      var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextCtor) return;
      if (!audioCtx) audioCtx = new AudioContextCtor();
      ensureNoiseBed();

      if (audioCtx.state === "running") {
        beginBeatLoop();
      } else {
        audioCtx
          .resume()
          .then(function () {
            if (!state.muted && !state.showHome) beginBeatLoop();
          })
          .catch(function () {});
        armGestureUnlock();
      }
    } catch (e) {
      /* Web Audio unavailable — ambience is a non-critical enhancement */
    }
  }

  function stopAudio() {
    if (audioInterval) {
      clearInterval(audioInterval);
      audioInterval = null;
    }
    if (noiseSrc) {
      try {
        noiseSrc.stop();
      } catch (e) {
        /* already stopped */
      }
      noiseSrc = null;
    }
  }

  function updateMuteUI() {
    if (muteEl) muteEl.setAttribute("aria-label", state.muted ? "Unmute ambience" : "Mute ambience");
    if (muteWave1) muteWave1.style.opacity = state.muted ? "0" : "1";
    if (muteWave2) muteWave2.style.opacity = state.muted ? "0" : "1";
    if (muteX) muteX.style.opacity = state.muted ? "1" : "0";
  }

  function toggleMute() {
    state.muted = !state.muted;
    updateMuteUI();
    if (!state.muted) startAudio();
    else stopAudio();
  }

  /* ─── Dissolve into the site ─── */
  function goHome() {
    state.showHome = true;
    render();
    stopAudio();
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch (e) {
      /* storage unavailable (private mode, etc.) — safe to skip */
    }
    var t = setTimeout(function () {
      screenEl.style.display = "none";
      document.body.style.overflow = "";
      if (siteContent) siteContent.removeAttribute("inert");
      if (grainTimer) {
        clearInterval(grainTimer);
        grainTimer = null;
      }
      document.dispatchEvent(new CustomEvent("ssh:intro-complete"));
    }, DISSOLVE_MS);
    timers.push(t);
  }

  function handleSkip() {
    timers.forEach(clearTimeout);
    timers = [];
    state.showText = false;
    state.showTitle = false;
    render();
    var t = setTimeout(goHome, 30);
    timers.push(t);
  }

  /* ─── Reveal timeline — only scheduled once the audio gate clears ─── */
  function beginSequence() {
    var TEXT_IN = beatIntervalMs * 2 + 300;
    var TEXT_HOLD = 2000;
    var TEXT_OUT = 600;
    var TITLE_IN = TEXT_IN + TEXT_HOLD + TEXT_OUT;
    var TITLE_HOLD = 1500;
    var TITLE_FADE = 800;
    var DISSOLVE_AT = TITLE_IN + TITLE_FADE + TITLE_HOLD;

    timers.push(
      setTimeout(function () {
        state.skipVisible = true;
        render();
        if (skipEl) skipEl.focus();
      }, 1000)
    );
    timers.push(
      setTimeout(function () {
        state.showText = true;
        state.sequenceStarted = true;
        render();
      }, TEXT_IN)
    );
    timers.push(
      setTimeout(function () {
        state.showText = false;
        render();
      }, TEXT_IN + TEXT_HOLD)
    );
    timers.push(
      setTimeout(function () {
        state.showTitle = true;
        render();
      }, TITLE_IN)
    );
    timers.push(setTimeout(goHome, DISSOLVE_AT));
  }

  /* ─── Audio gate ───
   * The reveal timeline (and its ambience) only starts once we have a
   * genuine user gesture, so the heartbeat's thump is guaranteed to be
   * audible rather than silently blocked by autoplay policy. Visitors
   * who never interact still see the story after a short wait — they
   * just won't hear it, which matches what the browser allows anyway.
   */
  function dismissGate() {
    if (state.started) return;
    state.started = true;
    if (gateEl) {
      gateEl.removeEventListener("click", onGateActivate);
      gateEl.removeEventListener("keydown", onGateKey);
      gateEl.style.opacity = "0";
      gateEl.style.pointerEvents = "none";
      setTimeout(function () {
        gateEl.style.display = "none";
      }, 500);
    }
    // Audio is already started by armGestureUnlock's document-level
    // listener, which fires from the same tap/key bubbling up — calling
    // startAudio() again here would re-arm that listener, leaving it to
    // fire again on a later, unrelated click elsewhere on the page.
    beginSequence();
  }

  function onGateActivate() {
    dismissGate();
  }

  function onGateKey(e) {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      dismissGate();
    }
  }

  /* ─── Init ─── */
  var mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  state.reducedMotion = !!(mq && mq.matches);

  document.body.style.overflow = "hidden";
  if (siteContent) siteContent.setAttribute("inert", "");

  renderParticles();
  startGrainLoop();
  render();
  updateMuteUI();
  startAudio();

  if (skipEl) skipEl.addEventListener("click", handleSkip);
  if (muteEl) muteEl.addEventListener("click", toggleMute);

  var alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
  } catch (e) {
    alreadySeen = false;
  }

  if (alreadySeen) {
    if (gateEl) gateEl.style.display = "none";
    timers.push(setTimeout(goHome, 250));
  } else if (gateEl) {
    timers.push(
      setTimeout(function () {
        if (gateHintEl) gateHintEl.style.opacity = "1";
      }, 600)
    );
    gateEl.addEventListener("click", onGateActivate);
    gateEl.addEventListener("keydown", onGateKey);
    gateEl.focus();
    // Safety net: never trap a visitor who doesn't interact — proceed
    // silently after a short wait, same as the browser would allow anyway.
    timers.push(setTimeout(dismissGate, 4500));
  } else {
    beginSequence();
  }
})();
