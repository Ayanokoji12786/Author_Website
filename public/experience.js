/* Shared, progressively enhanced interactions for the static and Next.js sites.
 * No scroll hijacking, WebGL, perpetual JS render loop, or third-party runtime.
 */
(function () {
  "use strict";
  var root = document.getElementById("literary-experience");
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = "true";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var narrow = window.matchMedia("(max-width: 760px)");
  var pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  var header = document.getElementById("site-header");
  var nav = document.getElementById("navigation");
  var toggle = root.querySelector(".menu-toggle");
  var scenes = Array.from(root.querySelectorAll(".cinematic-scene"));
  var sections = Array.from(root.querySelectorAll("main > section[data-tone]"));
  var bookSection = document.getElementById("inside");
  var bookModel = document.getElementById("book-model");
  var bookStage = root.querySelector("[data-book-stage]");
  var bookTilt = root.querySelector("[data-book-tilt]");
  var openButton = root.querySelector(".book-open-control");
  var frame = 0;
  var menuOpen = false;
  var manualBookChoice = false;
  var intro = root.querySelector("#cinematic-intro");
  var introFinished = false;
  var activeScenes = new Set(scenes);

  function setMenu(open, restoreFocus) {
    menuOpen = open;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
    nav.inert = narrow.matches && !open;
    if (restoreFocus) toggle.focus();
  }
  toggle.hidden = false;
  toggle.addEventListener("click", function () {
    setMenu(!menuOpen);
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });
  root.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuOpen) setMenu(false, true);
  });
  document.addEventListener("click", function (event) {
    if (menuOpen && !header.contains(event.target)) setMenu(false);
  });
  narrow.addEventListener("change", function () {
    setMenu(false);
    requestUpdate();
  });
  setMenu(false);

  function setBookOpen(open) {
    bookModel.classList.toggle("is-open", open);
    openButton.setAttribute("aria-pressed", String(open));
    openButton.querySelector("span").textContent = open
      ? "Close the reflection"
      : "Open a reflection";
  }
  openButton.hidden = false;
  openButton.addEventListener("click", function () {
    manualBookChoice = true;
    bookModel.classList.add("is-manual");
    setBookOpen(!bookModel.classList.contains("is-open"));
  });
  bookStage.addEventListener("pointermove", function (event) {
    if (reduced.matches || !pointer.matches || narrow.matches) return;
    var bounds = bookStage.getBoundingClientRect();
    bookTilt.style.setProperty(
      "--pointer-x",
      ((0.5 - (event.clientY - bounds.top) / bounds.height) * 6).toFixed(2) +
        "deg",
    );
    bookTilt.style.setProperty(
      "--pointer-y",
      (((event.clientX - bounds.left) / bounds.width - 0.5) * 9).toFixed(2) +
        "deg",
    );
  });
  bookStage.addEventListener("pointerleave", function () {
    bookTilt.style.setProperty("--pointer-x", "0deg");
    bookTilt.style.setProperty("--pointer-y", "0deg");
  });
  root.querySelectorAll("[data-cover-art]").forEach(function (image) {
    function checkCover() {
      image.classList.toggle(
        "is-missing",
        image.complete && image.naturalWidth === 0,
      );
    }
    image.addEventListener("error", checkCover);
    image.addEventListener("load", checkCover);
    if (image.complete) checkCover();
  });

  var previews = Array.from(root.querySelectorAll(".preview-page"));
  var previewControls = root.querySelector(".preview-controls");
  var previous = root.querySelector("[data-preview-prev]");
  var next = root.querySelector("[data-preview-next]");
  var previewCount = root.querySelector(".preview-count");
  var previewPages = root.querySelector(".preview-pages");
  var previewIndex = 0;
  function measurePreview() {
    var maxHeight = 0;
    previewPages.style.minHeight = "0";
    previews.forEach(function (page) {
      var hidden = page.hidden;
      page.hidden = false;
      maxHeight = Math.max(maxHeight, page.offsetHeight);
      page.hidden = hidden;
    });
    previewPages.style.minHeight = maxHeight + "px";
  }
  function showPreview(index) {
    previewIndex = Math.max(0, Math.min(previews.length - 1, index));
    previews.forEach(function (page, i) {
      page.hidden = i !== previewIndex;
      page.classList.toggle("is-active", i === previewIndex);
    });
    previous.disabled = previewIndex === 0;
    next.disabled = previewIndex === previews.length - 1;
    previewCount.innerHTML =
      String(previewIndex + 1).padStart(2, "0") +
      " <span>/ " +
      String(previews.length).padStart(2, "0") +
      "</span>";
    requestUpdate();
  }
  previewControls.hidden = false;
  previous.addEventListener("click", function () {
    showPreview(previewIndex - 1);
  });
  next.addEventListener("click", function () {
    showPreview(previewIndex + 1);
  });
  showPreview(0);
  measurePreview();
  if (document.fonts) document.fonts.ready.then(measurePreview);
  window.addEventListener("resize", measurePreview, { passive: true });

  var tabList = root.querySelector(".chapter-tabs");
  var tabs = Array.from(root.querySelectorAll(".chapter-tab"));
  var panels = Array.from(root.querySelectorAll(".chapter-panel"));
  var chapterIndex = 0;
  function showChapter(index, focus) {
    chapterIndex = (index + tabs.length) % tabs.length;
    tabs.forEach(function (tab, i) {
      tab.setAttribute("aria-selected", String(i === chapterIndex));
      tab.tabIndex = i === chapterIndex ? 0 : -1;
      panels[i].hidden = i !== chapterIndex;
      panels[i].classList.toggle("is-active", i === chapterIndex);
    });
    if (focus) {
      tabs[chapterIndex].focus({ preventScroll: true });
      // Only scroll the tab strip; scrollIntoView would also move the page.
      var selected = tabs[chapterIndex];
      var left =
        selected.getBoundingClientRect().left -
        tabList.getBoundingClientRect().left +
        tabList.scrollLeft;
      if (left < tabList.scrollLeft) tabList.scrollLeft = left;
      else if (
        left + selected.offsetWidth >
        tabList.scrollLeft + tabList.clientWidth
      ) {
        tabList.scrollLeft = left + selected.offsetWidth - tabList.clientWidth;
      }
    }
    requestUpdate();
  }
  tabList.hidden = false;
  tabList.setAttribute("role", "tablist");
  tabs.forEach(function (tab, i) {
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panels[i].id);
    panels[i].setAttribute("role", "tabpanel");
    panels[i].setAttribute("aria-labelledby", tab.id);
    panels[i].tabIndex = 0;
    tab.addEventListener("click", function () {
      showChapter(i, false);
    });
  });
  tabList.addEventListener("keydown", function (event) {
    var targetIndex;
    if (event.key === "ArrowRight") targetIndex = chapterIndex + 1;
    if (event.key === "ArrowLeft") targetIndex = chapterIndex - 1;
    if (event.key === "Home") targetIndex = 0;
    if (event.key === "End") targetIndex = tabs.length - 1;
    if (targetIndex !== undefined) {
      event.preventDefault();
      showChapter(targetIndex, true);
    }
  });
  showChapter(0, false);

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-pending");
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
    );
    root.querySelectorAll("[data-reveal]").forEach(function (element) {
      if (
        !reduced.matches &&
        element.getBoundingClientRect().top > window.innerHeight
      )
        element.classList.add("is-pending");
      revealObserver.observe(element);
    });
    var sceneObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-inview", entry.isIntersecting);
        if (entry.isIntersecting) activeScenes.add(entry.target);
        else activeScenes.delete(entry.target);
      });
      requestUpdate();
    });
    scenes.forEach(function (scene) {
      sceneObserver.observe(scene);
    });
  }

  function update() {
    frame = 0;
    var y = window.scrollY;
    var height = window.innerHeight;
    var maxScroll = document.documentElement.scrollHeight - height;
    header.classList.toggle("is-scrolled", y > 25);
    header.style.setProperty(
      "--reading-progress",
      String(maxScroll > 0 ? Math.min(1, y / maxScroll) : 0),
    );
    var line = header.offsetHeight + 8;
    for (var i = sections.length - 1; i >= 0; i--) {
      var bounds = sections[i].getBoundingClientRect();
      if (bounds.top <= line && bounds.bottom > line) {
        header.dataset.tone = sections[i].dataset.tone;
        break;
      }
    }
    if (!reduced.matches) {
      activeScenes.forEach(function (scene) {
        var bounds = scene.getBoundingClientRect();
        var travel = Math.max(-1, Math.min(1, -bounds.top / height));
        var strength = narrow.matches ? 0.4 : 1;
        scene.style.setProperty(
          "--landscape-y",
          (travel * 65 * strength).toFixed(1) + "px",
        );
        scene.style.setProperty(
          "--camera-y",
          (travel * 45 * strength).toFixed(1) + "px",
        );
        scene.style.setProperty(
          "--camera-z",
          (Math.abs(travel) * 90 * strength).toFixed(1) + "px",
        );
        scene.style.setProperty(
          "--camera-pitch",
          (travel * -3 * strength).toFixed(2) + "deg",
        );
        scene.style.setProperty(
          "--near-y",
          (travel * -45 * strength).toFixed(1) + "px",
        );
        scene.style.setProperty(
          "--hero-lift",
          (travel * -55 * strength).toFixed(1) + "px",
        );
      });
      var bookBounds = bookSection.getBoundingClientRect();
      if (!narrow.matches && bookBounds.top < height && bookBounds.bottom > 0) {
        var progress = Math.max(
          0,
          Math.min(
            1,
            -bookBounds.top / Math.max(1, bookBounds.height - height),
          ),
        );
        var opening = Math.max(0, Math.min(1, (progress - 0.28) / 0.52));
        opening = opening * opening * (3 - 2 * opening);
        bookModel.style.setProperty(
          "--book-rotation",
          (-36 + progress * 30).toFixed(1) + "deg",
        );
        bookModel.style.setProperty(
          "--book-pitch",
          (9 - progress * 7).toFixed(1) + "deg",
        );
        bookModel.style.setProperty(
          "--book-roll",
          (-4 + progress * 4).toFixed(1) + "deg",
        );
        bookModel.style.setProperty(
          "--book-scale",
          (0.9 + Math.sin(progress * Math.PI) * 0.07).toFixed(3),
        );
        bookModel.style.setProperty(
          "--book-lift",
          (-Math.sin(progress * Math.PI) * 18).toFixed(1) + "px",
        );
        bookModel.style.setProperty(
          "--book-shift",
          (opening * 18).toFixed(1) + "%",
        );
        bookModel.style.setProperty(
          "--hinge-angle",
          (-118 * opening).toFixed(1) + "deg",
        );
        ["one", "two", "three"].forEach(function (leaf, i) {
          var turn = Math.max(
            0,
            Math.min(1, (progress - 0.44 - i * 0.055) / 0.3),
          );
          turn = turn * turn * (3 - 2 * turn);
          bookModel.style.setProperty(
            "--leaf-" + leaf,
            (-turn * (104 + i * 5.5)).toFixed(1) + "deg",
          );
        });
        if (!manualBookChoice) setBookOpen(opening > 0.55);
        bookStage.style.setProperty("--book-progress", progress.toFixed(3));
        var phase =
          progress < 0.3 ? "discover" : progress < 0.78 ? "open" : "read";
        root.querySelectorAll("[data-book-phase]").forEach(function (label) {
          label.classList.toggle(
            "is-current",
            label.dataset.bookPhase === phase,
          );
        });
      }
    }
  }
  function requestUpdate() {
    if (!frame) frame = window.requestAnimationFrame(update);
  }
  // A short, skippable introduction. Progress reflects local assets, never a fake timer.
  function setupIntro() {
    var skip = intro.querySelector(".intro-skip");
    var progress = intro.querySelector(".intro-progress");
    var status = intro.querySelector("[data-intro-status]");
    var percent = intro.querySelector("[data-intro-percent]");
    var previousFocus = document.activeElement;
    var blocked = Array.from(root.children).filter(function (el) {
      return el !== intro;
    });
    var priorInert = blocked.map(function (el) {
      return el.inert;
    });
    var returning = false;
    try {
      returning = sessionStorage.getItem("ssh-intro-seen") === "true";
    } catch (_) {}
    var minimum = reduced.matches ? 0 : returning ? 1400 : 2600;
    var started = performance.now();
    var timers = [];
    var completed = 0;
    var tasks = [
      document.fonts ? document.fonts.ready : Promise.resolve(),
      new Promise(function (resolve) {
        var image = root.querySelector(".hero .mountain-photo");
        if (image.complete) resolve();
        else {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        }
      }),
    ];
    function finish(immediate) {
      if (introFinished) return;
      introFinished = true;
      timers.forEach(clearTimeout);
      try {
        sessionStorage.setItem("ssh-intro-seen", "true");
      } catch (_) {}
      function release() {
        intro.hidden = true;
        document.documentElement.classList.remove("intro-active");
        blocked.forEach(function (el, i) {
          el.inert = priorInert[i];
        });
        if (intro.contains(document.activeElement)) {
          var target =
            previousFocus && previousFocus !== document.body
              ? previousFocus
              : root.querySelector(".brand");
          target.focus({ preventScroll: true });
        }
        requestUpdate();
      }
      if (immediate || reduced.matches) release();
      else {
        intro.classList.add("is-leaving");
        timers.push(setTimeout(release, 650));
      }
    }
    intro.hidden = false;
    intro.classList.remove("is-leaving");
    document.documentElement.classList.add("intro-active");
    blocked.forEach(function (el) {
      el.inert = true;
    });
    skip.focus({ preventScroll: true });
    skip.addEventListener("click", function () {
      finish(true);
    });
    intro.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        finish(true);
      }
      if (event.key === "Tab") {
        event.preventDefault();
        skip.focus();
      }
    });
    tasks.forEach(function (task) {
      task.then(
        function () {
          if (introFinished) return;
          completed++;
          var value = Math.round((completed / tasks.length) * 100);
          progress.setAttribute("aria-valuenow", String(value));
          progress.style.setProperty("--intro-progress", String(value / 100));
          percent.textContent = value + "%";
          if (completed === tasks.length) {
            status.textContent = "The journey is ready";
            timers.push(
              setTimeout(
                function () {
                  finish(false);
                },
                Math.max(0, minimum - (performance.now() - started)),
              ),
            );
          }
        },
        function () {
          finish(true);
        },
      );
    });
    // Network failures and blocked fonts can never leave a visitor trapped.
    timers.push(
      setTimeout(
        function () {
          finish(false);
        },
        reduced.matches ? 1200 : 4500,
      ),
    );
    reduced.addEventListener("change", function () {
      if (reduced.matches) finish(true);
    });
  }
  scenes.forEach(function (scene) {
    scene.addEventListener("pointermove", function (event) {
      if (reduced.matches || narrow.matches || !pointer.matches) return;
      var bounds = scene.getBoundingClientRect();
      var x = (event.clientX - bounds.left) / bounds.width - 0.5;
      scene.style.setProperty("--camera-x", (x * -16).toFixed(1) + "px");
      scene.style.setProperty("--camera-yaw", (x * 2.5).toFixed(2) + "deg");
    });
    scene.addEventListener("pointerleave", function () {
      scene.style.setProperty("--camera-x", "0px");
      scene.style.setProperty("--camera-yaw", "0deg");
    });
  });
  root.classList.add("is-enhanced");
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  reduced.addEventListener("change", requestUpdate);
  if ("ResizeObserver" in window)
    new ResizeObserver(requestUpdate).observe(root);
  update();
  setupIntro();
})();
