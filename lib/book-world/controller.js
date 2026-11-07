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
  const chapterSelect = root.querySelector("[data-reader-chapter]");
  const startButtons = [...root.querySelectorAll("[data-journey-start]")];
  const feedback = root.querySelector("[data-journey-feedback]");
  const counter = root.querySelector("[data-reader-position]");
  const instruction = root.querySelector("[data-reader-instruction]");
  const backScene = root.querySelector("[data-reader-scene-prev]");
  const forwardScene = root.querySelector("[data-reader-scene-next]");
  const header = root.querySelector("#site-header");
  let world,
    loading,
    unavailable = false,
    enabled = false,
    reading = true,
    active = -1,
    frame = 0,
    resizeFrame = 0,
    metrics = [],
    version = 0,
    presentedY = scrollY,
    lastTime = 0,
    layoutWidth = innerWidth,
    layoutHeight = innerHeight,
    end = Infinity;
  const hashIndex = () =>
    sections.findIndex((s) => "#" + s.id === location.hash);
  let pending = hashIndex() >= 0 ? { index: hashIndex() } : null;
  root.dataset.worldStatus = "idle";
  startButtons.forEach(button => { button.hidden = false; });
  function requestUpdate() {
    if (!document.hidden && !frame) frame = requestAnimationFrame(update);
  }
  function snap() {
    presentedY = scrollY;
    lastTime = 0;
    requestUpdate();
  }
  function measure(preserve = true) {
    if (!enabled || !world) return;
    // Remember a logical position before native scroll clamping changes it.
    const old = metrics[active];
    let band, fraction;
    // Native scroll anchoring may shift scrollY when the hero changes height.
    // Compare chapter-relative positions, not absolute document coordinates.
    // A resize delivered after newer navigation must not restore the old page.
    const nativeDistance = old ? -old.section.getBoundingClientRect().top : 0;
    if (
      preserve &&
      old &&
      !nav.hidden &&
      Math.abs(nativeDistance - (presentedY - old.top)) < 1
    ) {
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
    const mobile = innerWidth <= 760;
    // Mobile browser toolbars resize the viewport during a gesture. Keep scroll
    // spans stable for height-only changes; still resize the actual renderers.
    if (!mobile || layoutWidth !== innerWidth) layoutHeight = innerHeight;
    layoutWidth = innerWidth;
    const h = layoutHeight;
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
    if (!document.hidden && !resizeFrame) {
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
      .catch((error) => {
        console.warn("Book view unavailable; using Reading view.", error);
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
      wasInBook = enabled;
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
    root.dataset.readerMode = enabled ? "immersive" : "reading";
    root.querySelectorAll("[data-journey-exit]").forEach(button => { button.hidden = !enabled; });
    const retry = root.dataset.worldStatus === "context-lost";
    mode.textContent = "Exit journey";
    mode.setAttribute("aria-label", "Exit immersive journey to reading view");
    startButtons.forEach(button => {
      button.disabled = reduced.matches || shortScreen.matches || (unavailable && !retry);
      button.textContent = "Explore the immersive journey";
      button.setAttribute("aria-pressed", String(enabled));
    });
    feedback.textContent = reduced.matches
      ? "Reading view is active to respect your reduced-motion preference."
      : shortScreen.matches
        ? "The immersive journey is available in a taller window."
        : unavailable ? "The immersive journey is unavailable. You can read everything below." : "";
    sections.forEach((section) =>
      section.classList.remove("is-current", "is-reading"),
    );
    active = -1;
    if (pending) {
      const target = pending;
      pending = null;
      visit(target.index, 0, target.start);
    } else if ((wasInBook || enabled) && old >= 0) visit(old);
    snap();
    if (enabled && !wasInBook) requestAnimationFrame(() => {
      // The demand-rendered update first reveals the toolbar. A hidden select
      // cannot accept focus during the synchronous mode change.
      if (enabled && !nav.hidden && ticket === version) chapterSelect.focus({ preventScroll: true });
    });
    else if (!enabled && wasInBook && old >= 0) {
      const heading = sections[old].querySelector("h2");
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
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
  chapterSelect.addEventListener("change", () => visit(Number(chapterSelect.value)));
  function stationMove(direction) {
    if (!enabled || active < 0) return;
    const m = metrics[active],
      count = world.chapters[active].cards.length;
    const current = Math.round(
      clamp((scrollY - m.top - m.entrance) / m.travel) * (count - 1),
    );
    const next = current + direction;
    if (next < 0 && active > 0) visit(active - 1, world.chapters[active - 1].cards.length - 1);
    else if (next >= count && active < sections.length - 1) visit(active + 1);
    else visit(active, Math.max(0, Math.min(count - 1, next)));
  }
  backScene.addEventListener("click", () => stationMove(-1));
  forwardScene.addEventListener("click", () => stationMove(1));
  mode.addEventListener("click", () => {
    reading = true;
    setMode();
  });
  root.querySelectorAll("[data-journey-exit]").forEach(button => button.addEventListener("click", () => {
    reading = true;
    setMode();
  }));
  root.addEventListener("keydown", event => {
    if (event.key === "Escape" && enabled && !event.defaultPrevented) {
      reading = true;
      setMode();
    }
  });
  startButtons.forEach(button => button.addEventListener("click", () => {
    if (root.dataset.worldStatus === "context-lost") {
      unavailable = false;
      loading = null;
    }
    // Content stays in the document while loading. Repeated clicks can cancel.
    reading = !reading;
    // Native scrolling to the invitation can precede the next scroll frame.
    // Use the clicked section, rather than a stale active-section index.
    const entryIndex = sections.indexOf(button.closest(".reader-scene"));
    pending = reading ? null : { index: Math.max(0, entryIndex) };
    button.textContent = reading ? "Explore the immersive journey" : "Cancel journey loading";
    feedback.textContent = reading ? "" : "Preparing the optional 3D journey. You can keep reading.";
    setMode();
  }));
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
    if (document.hidden) return;
    const target = scrollY;
    const entry = metrics[0]?.top ?? Infinity;
    // Native scrolling already exposes the empty pinned-section spacer. Never
    // smooth from the hero through that blank area before showing the book.
    if (enabled && target >= entry - 0.5 && presentedY < entry - 0.5)
      presentedY = Math.min(entry, target);
    if (enabled && target < entry - 0.5 && presentedY >= entry - 0.5)
      presentedY = target;
    // Filter small wheel/touch steps; every settled pose still comes solely from
    // scroll position. Anchor commands and large jumps snap, never tween through
    // other chapters. There is exactly one animation-frame owner.
    const gap = target - presentedY;
    if (enabled && Math.abs(gap) > 0.1 && Math.abs(gap) < innerHeight * 4) {
      const dt = lastTime ? Math.max(0, now - lastTime) : 16;
      presentedY += gap * (1 - Math.exp(-dt / 80));
      if (Math.abs(target - presentedY) < 0.1) presentedY = target;
    } else presentedY = target;
    const settled = presentedY === target;
    lastTime = settled ? 0 : now;
    root.dataset.readerSettled = String(settled);
    if (!settled) requestUpdate();
    const y = enabled ? presentedY : target;
    let index = -1;
    sections.forEach((section, i) => {
      const top = enabled
        ? metrics[i].top
        : section.getBoundingClientRect().top + y;
      // Layout coordinates can be fractional while native scrolling rounds to
      // a CSS pixel. Treat that same boundary as entered, rather than hiding
      // a fully initialized book until the visitor scrolls one pixel farther.
      if (y >= top - (enabled ? 0.5 : header.offsetHeight + 16)) index = i;
    });
    const beyond = enabled
      ? y >= end - innerHeight * 0.1
      : y >=
        sections.at(-1).getBoundingClientRect().bottom + y - innerHeight * 0.1;
    const inBook = index >= 0 && !beyond;
    nav.hidden = !enabled || !inBook;
    stage.hidden = !enabled || !inBook;
    if (enabled) {
      root.dataset.readerTone = "dark";
      header.dataset.tone = "dark";
    } else delete root.dataset.readerTone;
    if (!inBook) return;
    active = index;
    if (!enabled) return;
    chapterSelect.value = String(index);
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
    const stopLabel = "Stop " + (station + 1) + " of " + chapter.cards.length;
    if (counter.textContent !== stopLabel) counter.textContent = stopLabel;
    backScene.disabled = index === 0 && station === 0;
    forwardScene.disabled = index === sections.length - 1 && station === chapter.cards.length - 1;
    world.render(index, state);
  }
  addEventListener("scroll", requestUpdate, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      frame = resizeFrame = 0;
      lastTime = 0;
    } else {
      // Resume at native position rather than replaying a stale scroll tween.
      scheduleMeasure();
      snap();
    }
  });
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
