/* The book is the camera: ordinary scrolling opens, flattens, enters and turns
 * its website pages. Reading view and reduced motion retain the document layout.
 */
(function () {
  "use strict";
  var root = document.getElementById("literary-experience");
  if (!root || root.dataset.journeyInitialized) return;
  root.dataset.journeyInitialized = "true";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)");
  var scenes = Array.from(root.querySelectorAll(".reader-scene"));
  var stage = root.querySelector("[data-reader-stage]");
  var navigation = root.querySelector("[data-reader-interface]");
  var modeButton = root.querySelector("[data-reader-mode]");
  var previous = root.querySelector("[data-reader-prev]");
  var next = root.querySelector("[data-reader-next]");
  var counter = root.querySelector("[data-reader-position]");
  var instruction = root.querySelector("[data-reader-instruction]");
  var mark = root.querySelector("[data-reader-page-mark]");
  var header = root.querySelector("#site-header");
  var metrics = [];
  var frame = 0;
  var activeIndex = -1;
  var enabled = false;
  var chosenReading = false;
  try {
    chosenReading = sessionStorage.getItem("ssh-reader-mode") === "reading";
  } catch (_) {}
  var clamp = function (value) {
    return Math.max(0, Math.min(1, value));
  };
  var smooth = function (value) {
    value = clamp(value);
    return value * value * (3 - 2 * value);
  };
  function setVariable(element, name, value) {
    element.style.setProperty(name, value);
  }
  function measure() {
    if (!enabled) return;
    var height = innerHeight;
    // Content keeps its real height, including expanded reviews and font changes.
    scenes.forEach(function (scene) {
      var paper = scene.querySelector(".reader-paper");
      var content = paper.querySelector(".reader-content").scrollHeight;
      var overflow = Math.max(0, content - height);
      var entrance = height * 1.45;
      var hold = height * 0.9 + overflow;
      var exit = height * 1.2;
      scene.style.setProperty(
        "--reader-length",
        height + entrance + hold + exit + "px",
      );
      scene.dataset.readerOverflow = String(overflow);
      scene.dataset.readerEntrance = String(entrance);
      scene.dataset.readerHold = String(hold);
      scene.dataset.readerExit = String(exit);
    });
    metrics = scenes.map(function (scene) {
      return {
        scene: scene,
        paper: scene.querySelector(".reader-paper"),
        top: scene.getBoundingClientRect().top + scrollY,
        entrance: Number(scene.dataset.readerEntrance),
        hold: Number(scene.dataset.readerHold),
        exit: Number(scene.dataset.readerExit) + height,
        overflow: Number(scene.dataset.readerOverflow),
      };
    });
    requestUpdate();
  }
  function setMode() {
    var current = scenes[Math.max(0, activeIndex)];
    var anchor = current && current.id;
    var wasInBook = !navigation.hidden;
    enabled = !reduced.matches && !chosenReading;
    root.classList.toggle("is-immersive", enabled);
    modeButton.textContent = enabled ? "Reading view" : "Book view";
    modeButton.setAttribute(
      "aria-label",
      enabled
        ? "Switch to reading view without book motion"
        : "Switch to immersive book view",
    );
    modeButton.disabled = reduced.matches;
    scenes.forEach(function (scene) {
      scene.querySelector(".reader-paper").inert = enabled;
      scene.classList.remove("is-current", "is-reading");
      if (!enabled) scene.style.removeProperty("--reader-length");
    });
    stage.hidden = !enabled;
    activeIndex = -1;
    measure();
    requestUpdate();
    if (anchor && wasInBook) {
      if (enabled) visit(scenes.indexOf(current));
      else current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }
  function visit(index) {
    index = Math.max(0, Math.min(scenes.length - 1, index));
    if (enabled && metrics[index]) {
      scrollTo({
        top: metrics[index].top + metrics[index].entrance + 1,
        behavior: "instant",
      });
    } else
      scenes[index].scrollIntoView({ block: "start", behavior: "instant" });
    requestUpdate();
  }
  previous.addEventListener("click", function () {
    visit(activeIndex - 1);
  });
  next.addEventListener("click", function () {
    visit(activeIndex < 0 ? 0 : activeIndex + 1);
  });
  modeButton.addEventListener("click", function () {
    chosenReading = !chosenReading;
    try {
      sessionStorage.setItem(
        "ssh-reader-mode",
        chosenReading ? "reading" : "book",
      );
    } catch (_) {}
    setMode();
  });
  reduced.addEventListener("change", setMode);
  function update() {
    frame = 0;
    var y = scrollY;
    var height = innerHeight;
    var index = -1;
    scenes.forEach(function (scene, i) {
      var top = enabled
        ? metrics[i].top
        : scene.getBoundingClientRect().top + y;
      if (
        y >=
        top -
          (enabled ? (i === 0 ? height * 0.15 : 0) : header.offsetHeight + 16)
      )
        index = i;
    });
    var last = scenes[scenes.length - 1];
    var beyond = y >= last.getBoundingClientRect().bottom + y - height * 0.2;
    var inBook = index >= 0 && !beyond;
    navigation.hidden = !inBook;
    if (!enabled) {
      stage.hidden = true;
      if (inBook) {
        activeIndex = index;
        counter.textContent =
          "Page " +
          String(index + 1).padStart(2, "0") +
          " / " +
          String(scenes.length).padStart(2, "0");
        instruction.textContent = "Scroll to read";
        previous.disabled = index === 0;
        next.disabled = index === scenes.length - 1;
      }
      return;
    }
    stage.hidden = !inBook;
    if (!inBook) {
      root.dataset.readerTone = "dark";
      return;
    }
    var metric = metrics[index];
    var distance = Math.max(0, y - metric.top);
    var entrance = clamp(distance / metric.entrance);
    var reading = clamp((distance - metric.entrance) / metric.hold);
    var retreat = clamp(
      (distance - metric.entrance - metric.hold) / metric.exit,
    );
    var dive = smooth((entrance - 0.24) / 0.76);
    var pull = smooth(retreat / 0.78);
    var approach = dive * (1 - pull);
    var pitch =
      Math.sin(entrance * Math.PI) * 68 * (1 - pull) +
      Math.sin(retreat * Math.PI) * 52;
    var width = Math.min(
      innerWidth <= 760 ? 230 : 350,
      innerWidth * 0.44,
      height * 0.46,
    );
    var paperRatio = width / innerWidth;
    var scale = paperRatio + (1 - paperRatio) * approach;
    var bookZoom = scale / paperRatio;
    var opening = index === 0 ? smooth(entrance / 0.26) : 1;
    var shift = (1 - approach) * opening * width * 0.36;
    var turn = smooth((retreat - 0.7) / 0.3);
    var contentVisible =
      smooth((entrance - 0.22) / 0.23) * (1 - smooth((retreat - 0.32) / 0.2));
    var readable = approach > 0.94 && retreat < 0.12;
    var phase =
      entrance < 0.25
        ? index === 0
          ? "Opening the book"
          : "A new page"
        : entrance < 0.95
          ? "Fly into the page"
          : retreat < 0.02
            ? "Scroll to explore"
            : retreat < 0.72
              ? "Fly back to the book"
              : "Turning the page";
    setVariable(root, "--reader-width", width.toFixed(1) + "px");
    setVariable(root, "--reader-zoom", bookZoom.toFixed(4));
    setVariable(root, "--reader-pitch", pitch.toFixed(2) + "deg");
    setVariable(
      root,
      "--reader-yaw",
      ((1 - approach) * -12).toFixed(2) + "deg",
    );
    setVariable(root, "--reader-shift", shift.toFixed(1) + "px");
    setVariable(root, "--reader-open", opening.toFixed(3));
    setVariable(root, "--reader-hinge", (-125 * opening).toFixed(2) + "deg");
    setVariable(root, "--reader-turn", (-175 * turn).toFixed(2) + "deg");
    setVariable(root, "--reader-turn-opacity", retreat > 0.65 ? 1 : 0);
    setVariable(
      root,
      "--reader-frame-opacity",
      (1 - smooth((approach - 0.68) / 0.25)).toFixed(3),
    );
    if (activeIndex !== index) {
      activeIndex = index;
      counter.textContent =
        "Page " +
        String(index + 1).padStart(2, "0") +
        " / " +
        String(scenes.length).padStart(2, "0");
      mark.textContent = String(index + 1).padStart(2, "0");
      scenes.forEach(function (scene, i) {
        scene.classList.toggle("is-current", i === index);
        if (i !== index) {
          scene.querySelector(".reader-paper").inert = true;
          scene.classList.remove("is-reading");
        }
      });
    }
    metric.scene.classList.toggle("is-reading", readable);
    metric.paper.inert = !readable;
    setVariable(
      metric.scene,
      "--page-height",
      (((innerWidth * 800) / 529) * (1 - approach) + height * approach).toFixed(
        1,
      ) + "px",
    );
    setVariable(metric.scene, "--page-scale", scale.toFixed(4));
    setVariable(metric.scene, "--page-pitch", pitch.toFixed(2) + "deg");
    setVariable(
      metric.scene,
      "--page-yaw",
      ((1 - approach) * -12).toFixed(2) + "deg",
    );
    setVariable(metric.scene, "--page-shift", shift.toFixed(1) + "px");
    setVariable(metric.scene, "--page-opacity", contentVisible.toFixed(3));
    setVariable(
      metric.scene,
      "--page-scroll",
      (-reading * metric.overflow).toFixed(1) + "px",
    );
    setVariable(
      metric.scene,
      "--page-rise",
      ((1 - approach) * 70).toFixed(1) + "px",
    );
    setVariable(
      metric.scene,
      "--page-elevation",
      ((1 - approach) * 110).toFixed(1) + "px",
    );
    root.dataset.readerPhase = phase;
    instruction.textContent = phase;
    previous.disabled = index === 0;
    next.disabled = index === scenes.length - 1;
    var tone = approach > 0.78 ? metric.scene.dataset.tone : "dark";
    root.dataset.readerTone = tone;
    header.dataset.tone = tone;
  }
  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", measure, { passive: true });
  if (document.fonts) document.fonts.ready.then(measure);
  if ("ResizeObserver" in window) {
    var observer = new ResizeObserver(measure);
    scenes.forEach(function (scene) {
      observer.observe(scene.querySelector(".reader-content"));
    });
  }
  root.addEventListener(
    "toggle",
    function (event) {
      if (event.target.tagName === "DETAILS") measure();
    },
    true,
  );
  setMode();
})();
