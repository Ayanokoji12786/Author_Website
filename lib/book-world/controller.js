import { sample, clamp } from "./timeline";

const root = document.getElementById("literary-experience");
if (root && !root.dataset.journeyInitialized) initialize();
function initialize() {
  root.dataset.journeyInitialized = "true";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const shortScreen = matchMedia(
    "(max-height: 480px) and (min-aspect-ratio: 1/1)",
  );
  const sections = [...root.querySelectorAll(".reader-scene")];
  const stage = root.querySelector("[data-reader-stage]");
  const nav = root.querySelector("[data-reader-interface]");
  const mode = root.querySelector("[data-reader-mode]");
  const previous = root.querySelector("[data-reader-prev]");
  const next = root.querySelector("[data-reader-next]");
  const counter = root.querySelector("[data-reader-position]");
  const instruction = root.querySelector("[data-reader-instruction]");
  const sceneCounter = root.querySelector("[data-reader-station]");
  const backScene = root.querySelector("[data-reader-scene-prev]");
  const forwardScene = root.querySelector("[data-reader-scene-next]");
  const header = root.querySelector("#site-header");
  let world,
    loading,
    unavailable = false,
    enabled = false,
    reading = false,
    active = -1,
    frame = 0,
    resizeFrame = 0,
    metrics = [],
    version = 0,
    presentedY = scrollY,
    lastTime = 0,
    settlingSince = 0,
    end = Infinity;
  const hashIndex = () =>
    sections.findIndex((s) => "#" + s.id === location.hash);
  let pending = hashIndex() >= 0 ? { index: hashIndex() } : null;
  try {
    reading = sessionStorage.getItem("ssh-reader-mode") === "reading";
  } catch (_) {}
  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  function snap() {
    presentedY = scrollY;
    settlingSince = 0;
    lastTime = 0;
    requestUpdate();
  }
  function measure(preserve = true) {
    if (!enabled || !world) return;
    // Remember a logical position before native scroll clamping changes it.
    const old = metrics[active];
    let band, fraction;
    if (preserve && old && !nav.hidden) {
      const d = Math.max(0, presentedY - old.top);
      band =
        d < old.entrance
          ? "entrance"
          : d < old.entrance + old.travel
            ? "travel"
            : "exit";
      fraction = clamp(
        (d -
          (band === "exit"
            ? old.entrance + old.travel
            : band === "travel"
              ? old.entrance
              : 0)) /
          old[band],
      );
    }
    world.resize();
    const h = innerHeight,
      mobile = innerWidth <= 760;
    metrics = sections.map((section, i) => {
      const count = world.chapters[i].cards.length;
      const entrance = h * (mobile ? 0.95 : 1.35);
      const travel =
        h * Math.max(0.75, (count - 1) * (mobile ? 0.85 : 1.05) + 0.75);
      const exit = h * (mobile ? 1.25 : 1.65);
      section.style.setProperty(
        "--reader-length",
        entrance + travel + exit + (i === sections.length - 1 ? h : 0) + "px",
      );
      Object.assign(section.dataset, {
        readerEntrance: String(entrance),
        readerHold: String(travel),
        readerExit: String(exit),
        readerStations: String(count),
      });
      return { section, entrance, travel, exit, top: 0 };
    });
    metrics.forEach(
      (m) => (m.top = m.section.getBoundingClientRect().top + scrollY),
    );
    end = sections.at(-1).getBoundingClientRect().bottom + scrollY;
    if (band) {
      const m = metrics[active];
      scrollTo({
        top:
          m.top +
          (band === "exit"
            ? m.entrance + m.travel
            : band === "travel"
              ? m.entrance
              : 0) +
          m[band] * fraction,
        behavior: "instant",
      });
    }
    snap();
  }
  function scheduleMeasure() {
    if (!resizeFrame) {
      const scheduledY = scrollY;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        // A new scroll/navigation command outranks preserving the earlier
        // camera position. A queued resize must never undo that command.
        measure(Math.abs(scrollY - scheduledY) < 1);
      });
    }
  }
  function announce() {
    document.dispatchEvent(new Event("ssh-world-ready"));
  }
  async function ensureWorld() {
    if (world) return world;
    if (loading) return loading;
    root.dataset.worldStatus = "loading";
    // Module and asset timeouts never prevent the normal document from working.
    let expired = false,
      timer;
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => {
        expired = true;
        reject(new Error("Scene readiness timeout"));
      }, 8000);
    });
    loading = Promise.race([
      Promise.all([
        import("./renderer.js"),
        Promise.race([
          document.fonts?.ready || Promise.resolve(),
          new Promise((resolve) => setTimeout(resolve, 2500)),
        ]),
      ]).then(async ([module]) => {
        if (expired) return null;
        const candidate = await module.createWorld(
          root,
          stage,
          requestUpdate,
          () => {
            unavailable = true;
            reading = true;
            root.dataset.worldStatus = "context-lost";
            setMode();
            world?.dispose();
            world = null;
            loading = null;
            announce();
          },
        );
        if (expired || unavailable) {
          candidate.dispose();
          return null;
        }
        world = candidate;
        root.dataset.worldStatus = "ready";
        announce();
        return world;
      }),
      timeout,
    ])
      .catch(() => {
        unavailable = true;
        root.dataset.worldStatus = "unavailable";
        announce();
        return null;
      })
      .finally(() => clearTimeout(timer));
    return loading;
  }
  async function setMode() {
    const ticket = ++version;
    const old = active,
      wasInBook = !nav.hidden;
    if (!reading && !reduced.matches && !shortScreen.matches && !unavailable)
      await ensureWorld();
    if (ticket !== version) return;
    enabled = Boolean(
      world &&
        !reading &&
        !reduced.matches &&
        !shortScreen.matches &&
        !unavailable,
    );
    if (shortScreen.matches) root.dataset.readerAdaptation = "short-screen";
    else delete root.dataset.readerAdaptation;
    if (enabled) {
      root.classList.add("is-immersive");
      world.mount();
      measure(false);
    } else {
      world?.restore();
      root.classList.remove("is-immersive");
      stage.hidden = true;
      sections.forEach((section) =>
        section.style.removeProperty("--reader-length"),
      );
      if (!world && root.dataset.worldStatus !== "loading") announce();
    }
    const retry = root.dataset.worldStatus === "context-lost";
    mode.textContent = enabled
      ? "Reading view"
      : retry
        ? "Retry book view"
        : "Book view";
    mode.setAttribute(
      "aria-label",
      enabled
        ? "Switch to reading view without book motion"
        : retry
          ? "Retry immersive book view"
          : "Switch to immersive book view",
    );
    mode.disabled =
      reduced.matches || shortScreen.matches || (unavailable && !retry);
    if (shortScreen.matches)
      mode.title = "Rotate or resize your screen to resume Book view.";
    else mode.removeAttribute("title");
    sections.forEach((section) =>
      section.classList.remove("is-current", "is-reading"),
    );
    active = -1;
    if (pending) {
      const target = pending;
      pending = null;
      visit(target.index, 0, target.start);
    } else if (wasInBook && old >= 0) visit(old);
    snap();
  }
  function visit(index, station = 0, start = false) {
    index = Math.max(0, Math.min(sections.length - 1, index));
    if (enabled && resizeFrame) {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = 0;
      measure(false);
    }
    if (enabled) {
      const m = metrics[index],
        count = world.chapters[index].cards.length;
      scrollTo({
        top:
          m.top +
          (start
            ? 0
            : m.entrance +
              m.travel * (count > 1 ? station / (count - 1) : 0.2) +
              1),
        behavior: "instant",
      });
    } else
      sections[index].scrollIntoView({ behavior: "instant", block: "start" });
    snap();
  }
  previous.addEventListener("click", () => visit(active - 1));
  next.addEventListener("click", () => visit(active + 1));
  function stationMove(direction) {
    if (!enabled || active < 0) return;
    const m = metrics[active],
      count = world.chapters[active].cards.length;
    const current = Math.round(
      clamp((scrollY - m.top - m.entrance) / m.travel) * (count - 1),
    );
    visit(active, Math.max(0, Math.min(count - 1, current + direction)));
  }
  backScene.addEventListener("click", () => stationMove(-1));
  forwardScene.addEventListener("click", () => stationMove(1));
  mode.addEventListener("click", () => {
    if (root.dataset.worldStatus === "context-lost") {
      unavailable = false;
      loading = null;
    }
    reading = !reading;
    try {
      sessionStorage.setItem("ssh-reader-mode", reading ? "reading" : "book");
    } catch (_) {}
    setMode();
  });
  reduced.addEventListener("change", setMode);
  shortScreen.addEventListener("change", setMode);
  root.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (
      !link ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const index = sections.findIndex(
      (section) => "#" + section.id === link.getAttribute("href"),
    );
    if (index < 0) return;
    const start = link.classList.contains("explore-link");
    if (!enabled && root.dataset.worldStatus !== "loading") return;
    event.preventDefault();
    history.pushState(null, "", link.getAttribute("href"));
    if (!enabled) pending = { index, start };
    visit(index, 0, start);
  });
  function update(now) {
    frame = 0;
    const target = scrollY;
    // Filter small wheel/touch steps; every settled pose still comes solely from
    // scroll position. Anchor commands and large jumps snap, never tween through
    // other chapters. There is exactly one animation-frame owner.
    const gap = target - presentedY;
    if (enabled && Math.abs(gap) > 0.2 && Math.abs(gap) < innerHeight * 1.2) {
      if (!settlingSince) settlingSince = now;
      const dt = lastTime ? Math.min(64, now - lastTime) : 16;
      presentedY += gap * (1 - Math.exp(-dt / 65));
      if (now - settlingSince > 450 || Math.abs(target - presentedY) < 0.2)
        presentedY = target;
    } else presentedY = target;
    lastTime = now;
    const settled = presentedY === target;
    root.dataset.readerSettled = String(settled);
    if (settled) settlingSince = 0;
    else requestUpdate();
    const y = enabled ? presentedY : target;
    let index = -1;
    sections.forEach((section, i) => {
      const top = enabled
        ? metrics[i].top
        : section.getBoundingClientRect().top + y;
      if (y >= top - (enabled ? 0 : header.offsetHeight + 16)) index = i;
    });
    const beyond = enabled
      ? y >= end - innerHeight * 0.1
      : y >=
        sections.at(-1).getBoundingClientRect().bottom + y - innerHeight * 0.1;
    const inBook = index >= 0 && !beyond;
    nav.hidden = !inBook;
    stage.hidden = !enabled || !inBook;
    if (enabled) {
      root.dataset.readerTone = "dark";
      header.dataset.tone = "dark";
    } else delete root.dataset.readerTone;
    if (!inBook) return;
    previous.disabled = index === 0;
    next.disabled = index === sections.length - 1;
    const pageLabel = "Page " + String(index + 1).padStart(2, "0") + " / 07";
    if (counter.textContent !== pageLabel) counter.textContent = pageLabel;
    active = index;
    if (!enabled) {
      instruction.textContent = "Scroll to read";
      sceneCounter.hidden = true;
      backScene.hidden = forwardScene.hidden = true;
      return;
    }
    const chapter = world.chapters[index],
      m = metrics[index];
    const state = sample(
      Math.max(0, y - m.top),
      m.entrance,
      m.travel,
      m.exit,
      index === 0,
    );
    sections.forEach((section, i) => {
      section.classList.toggle("is-current", i === index);
      section.classList.toggle("is-reading", i === index && state.readable);
    });
    root.dataset.readerPhase = state.phase;
    root.dataset.readerProgress = state.journey.toFixed(6);
    if (instruction.textContent !== state.phase)
      instruction.textContent = state.phase;
    const station = Math.round(state.journey * (chapter.cards.length - 1));
    sceneCounter.hidden = false;
    const sceneLabel = "Scene " + (station + 1) + " / " + chapter.cards.length;
    if (sceneCounter.textContent !== sceneLabel)
      sceneCounter.textContent = sceneLabel;
    backScene.hidden = forwardScene.hidden = chapter.cards.length === 1;
    backScene.disabled = station === 0;
    forwardScene.disabled = station === chapter.cards.length - 1;
    world.render(index, state);
  }
  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", scheduleMeasure, { passive: true });
  function navigateHash() {
    const index = hashIndex();
    if (index < 0) return;
    if (enabled) visit(index);
    else if (root.dataset.worldStatus === "loading") pending = { index };
  }
  addEventListener("popstate", navigateHash);
  addEventListener("hashchange", navigateHash);
  addEventListener("pageshow", (event) => {
    if (event.persisted) {
      measure();
      snap();
    }
  });
  document.fonts?.ready.then(scheduleMeasure);
  root.addEventListener(
    "toggle",
    (event) => {
      if (event.target.tagName === "DETAILS") scheduleMeasure();
    },
    true,
  );
  addEventListener("pagehide", (event) => {
    cancelAnimationFrame(frame);
    cancelAnimationFrame(resizeFrame);
    frame = resizeFrame = 0;
    if (!event.persisted) world?.dispose();
  });
  setMode();
}
