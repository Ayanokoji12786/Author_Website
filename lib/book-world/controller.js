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
    metrics = [];
  try {
    reading = sessionStorage.getItem("ssh-reader-mode") === "reading";
  } catch (_) {}
  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  function measure() {
    if (!enabled || !world) return;
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
        // Leave enough native scroll after the final exit to finish the return
        // and page turn before the footer enters. Otherwise maxScroll cuts the
        // last chapter short by approximately one viewport.
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
    requestUpdate();
  }
  async function ensureWorld() {
    if (world) return world;
    if (loading) return loading;
    root.dataset.worldStatus = "loading";
    loading = Promise.all([
      import("./renderer.js"),
      document.fonts?.ready || Promise.resolve(),
    ])
      .then(([module]) => {
        world = module.createWorld(root, stage, requestUpdate, () => {
          unavailable = true;
          root.dataset.worldStatus = "context-lost";
          reading = true;
          setMode();
          world?.dispose();
          world = null;
        });
        root.dataset.worldStatus = "ready";
        return world;
      })
      .catch(() => {
        unavailable = true;
        root.dataset.worldStatus = "unavailable";
        return null;
      });
    return loading;
  }
  async function setMode() {
    const old = active;
    const wasInBook = !nav.hidden;
    if (!reading && !reduced.matches && !shortScreen.matches && !unavailable)
      await ensureWorld();
    enabled = Boolean(
      world && !reading && !reduced.matches && !shortScreen.matches && !unavailable,
    );
    if (shortScreen.matches) root.dataset.readerAdaptation = "short-screen";
    else delete root.dataset.readerAdaptation;
    if (enabled) {
      root.classList.add("is-immersive");
      world.mount();
      measure();
    } else {
      world?.restore();
      root.classList.remove("is-immersive");
      stage.hidden = true;
      sections.forEach((section) =>
        section.style.removeProperty("--reader-length"),
      );
    }
    mode.textContent = enabled ? "Reading view" : "Book view";
    mode.setAttribute(
      "aria-label",
      enabled
        ? "Switch to reading view without book motion"
        : "Switch to immersive book view",
    );
    mode.disabled = reduced.matches || shortScreen.matches || unavailable;
    if (shortScreen.matches)
      mode.title = "Rotate or resize your screen to resume Book view.";
    else mode.removeAttribute("title");
    sections.forEach((section) =>
      section.classList.remove("is-current", "is-reading"),
    );
    active = -1;
    if (wasInBook && old >= 0) {
      if (enabled) visit(old);
      else
        sections[old].scrollIntoView({ behavior: "instant", block: "start" });
    }
    requestUpdate();
  }
  function visit(index, station = 0, start = false) {
    index = Math.max(0, Math.min(sections.length - 1, index));
    if (enabled) {
      const m = metrics[index];
      const count = world.chapters[index].cards.length;
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
    requestUpdate();
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
    if (!link || !enabled) return;
    const index = sections.findIndex(
      (section) => "#" + section.id === link.getAttribute("href"),
    );
    if (index < 0) return;
    event.preventDefault();
    history.pushState(null, "", link.getAttribute("href"));
    visit(index, 0, link.classList.contains("explore-link"));
  });
  function update() {
    frame = 0;
    const y = scrollY;
    let index = -1;
    sections.forEach((section, i) => {
      const top = enabled
        ? metrics[i].top
        : section.getBoundingClientRect().top + y;
      if (y >= top - (enabled ? 0 : header.offsetHeight + 16)) index = i;
    });
    const last = sections.at(-1);
    const beyond =
      y >= last.getBoundingClientRect().bottom + y - innerHeight * 0.1;
    const inBook = index >= 0 && !beyond;
    nav.hidden = !inBook;
    stage.hidden = !enabled || !inBook;
    if (enabled) {
      root.dataset.readerTone = "dark";
      header.dataset.tone = "dark";
    } else delete root.dataset.readerTone;
    if (!inBook) return;
    const chapter = world?.chapters[index];
    previous.disabled = index === 0;
    next.disabled = index === sections.length - 1;
    counter.textContent =
      "Page " + String(index + 1).padStart(2, "0") + " / 07";
    active = index;
    if (!enabled) {
      instruction.textContent = "Scroll to read";
      sceneCounter.hidden = true;
      backScene.hidden = forwardScene.hidden = true;
      return;
    }
    const m = metrics[index];
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
    instruction.textContent = state.phase;
    const station = Math.round(state.journey * (chapter.cards.length - 1));
    sceneCounter.hidden = false;
    sceneCounter.textContent =
      "Scene " + (station + 1) + " / " + chapter.cards.length;
    backScene.hidden = forwardScene.hidden = chapter.cards.length === 1;
    backScene.disabled = station === 0;
    forwardScene.disabled = station === chapter.cards.length - 1;
    world.render(index, state);
  }
  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", measure, { passive: true });
  addEventListener("popstate", () => {
    const index = sections.findIndex((s) => "#" + s.id === location.hash);
    if (index >= 0 && enabled) visit(index);
  });
  document.fonts?.ready.then(measure);
  root.addEventListener(
    "toggle",
    (event) => {
      if (event.target.tagName === "DETAILS") measure();
    },
    true,
  );
  addEventListener("pagehide", (event) => {
    if (!event.persisted) {
      world?.dispose();
      cancelAnimationFrame(frame);
    }
  });
  setMode();
}
