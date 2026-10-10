import * as THREE from "three";
import { CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import typeface from "three/examples/fonts/optimer_regular.typeface.json";
import { CHAPTERS } from "./chapters";
import { clamp, ease, mix } from "./timeline";

const font = new FontLoader().parse(typeface);
const gold = new THREE.MeshStandardMaterial({
  color: "#c8a362",
  roughness: 0.4,
  metalness: 0.5,
});
const stone = new THREE.MeshStandardMaterial({
  color: "#c9b99b",
  roughness: 0.7,
});

export function makeChapters(root, webBook, domBook, invalidate) {
  return CHAPTERS.map((definition, index) => {
    const section = root.querySelector("#" + definition.id);
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = innerWidth <= 760 ? 512 : 768;
    pageCanvas.height = Math.round((pageCanvas.width * 800) / 529);
    const ink = pageCanvas.getContext("2d");
    const w = pageCanvas.width,
      h = pageCanvas.height;
    ink.fillStyle = "#f7f2e8";
    ink.fillRect(0, 0, w, h);
    ink.strokeStyle = "#cbb998";
    ink.lineWidth = 1;
    ink.strokeRect(w * 0.09, h * 0.065, w * 0.82, h * 0.87);
    ink.fillStyle = "#6b5b3f";
    ink.font = `${w * 0.025}px Inter`;
    ink.textAlign = "center";
    ink.fillText(
      String(index + 1).padStart(2, "0") +
        " / " +
        definition.name.toUpperCase(),
      w / 2,
      h * 0.13,
    );
    ink.fillStyle = "#242c29";
    ink.font = `${w * 0.064}px "Cormorant Garamond"`;
    const heading = section.querySelector("h2").cloneNode(true);
    heading.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
    const words = heading.textContent.trim().split(/\s+/);
    let line = "",
      lines = [];
    words.forEach((word) => {
      if (ink.measureText(line + " " + word).width > w * 0.7) {
        lines.push(line);
        line = word;
      } else line += (line ? " " : "") + word;
    });
    lines.push(line);
    lines.forEach((line, i) =>
      ink.fillText(line, w / 2, h * 0.3 + i * w * 0.078),
    );
    ink.font = `italic ${w * 0.034}px "Cormorant Garamond"`;
    ink.fillStyle = "#847044";
    ink.fillText("Still Standing, Still Here", w / 2, h * 0.76);
    ink.font = `${w * 0.02}px Inter`;
    ink.fillText("DHRUVA NERELLA & TATTVA NERELLA", w / 2, h * 0.83);
    const pageTexture = new THREE.CanvasTexture(pageCanvas);
    pageTexture.colorSpace = THREE.SRGBColorSpace;
    const webGroup = new THREE.Group();
    webBook.add(webGroup);
    const domGroup = new THREE.Group();
    domBook.add(domGroup);
    const pieces = [];
    definition.selectors.forEach((selector, selectorIndex) => {
      section.querySelectorAll(selector).forEach((node) => {
        const marker = document.createComment("3D content home");
        node.before(marker);
        pieces.push({ node, marker, selectorIndex });
      });
    });
    const blocks = [];
    const combinations = definition.combine
      ? Array.isArray(definition.combine[0])
        ? definition.combine
        : [definition.combine]
      : [];
    pieces.forEach((piece) => {
      if (definition.attachLast?.includes(piece.selectorIndex)) {
        blocks.at(-1).pieces.push(piece);
        return;
      }
      const combination = combinations.findIndex((group) =>
        group.includes(piece.selectorIndex),
      );
      if (combination >= 0) {
        let block = blocks.find((b) => b.combined === combination);
        if (!block) {
          block = { pieces: [], combined: combination };
          blocks.push(block);
        }
        block.pieces.push(piece);
      } else blocks.push({ pieces: [piece] });
    });
    const cards = blocks.map((block, i) => {
      const element = document.createElement("div");
      element.className =
        "journey-card " + section.className.replace("reader-scene", "");
      element.dataset.chapter = definition.id;
      element.dataset.station = String(i);
      element.setAttribute("role", "group");
      element.setAttribute(
        "aria-label",
        definition.name + " · " + (i + 1) + " of " + blocks.length,
      );
      const holder = document.createElement("div");
      holder.className = "journey-card-copy";
      element.append(holder);
      const object = new CSS3DObject(element);
      domGroup.add(object);
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(6.7, 2),
        new THREE.MeshBasicMaterial({
          color: "#40351f",
          transparent: true,
          opacity: 0.12,
          depthWrite: false,
        }),
      );
      shadow.position.z = 0.397;
      webGroup.add(shadow);
      const support = new THREE.Mesh(
        new THREE.BoxGeometry(6.7, 0.04, 0.04),
        gold,
      );
      support.castShadow = true;
      webGroup.add(support);
      const backing = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 0.065),
        new THREE.MeshStandardMaterial({
          color: section.dataset.tone === "dark" ? "#171d1c" : "#f7f2e8",
          roughness: 0.8,
        }),
      );
      backing.castShadow = true;
      backing.receiveShadow = true;
      webGroup.add(backing);
      const number = new THREE.Mesh(
        new TextGeometry(String(i + 1).padStart(2, "0"), {
          font,
          size: 0.34,
          depth: 0.035,
          curveSegments: 3,
          bevelEnabled: true,
          bevelThickness: 0.006,
          bevelSize: 0.004,
          bevelSegments: 1,
        }),
        gold,
      );
      number.castShadow = true;
      webGroup.add(number);
      const groundY =
        blocks.length === 1 ? -1 : mix(-3.8, 4.0, i / (blocks.length - 1));
      const lateral = 4 + Math.sin(i * 1.7) * definition.sway;
      return {
        block,
        holder,
        element,
        object,
        shadow,
        support,
        backing,
        number,
        y: groundY,
        x: lateral,
        height: 3,
        width: 6.7,
        scale: 0.009,
      };
    });
    const landmarks = new THREE.Group();
    webGroup.add(landmarks);
    for (let i = 0; i < 3; i++) {
      let geometry;
      if (definition.motif === "pillars")
        geometry = new THREE.BoxGeometry(0.15, 0.18, 0.8 + i * 0.25);
      else if (definition.motif === "leaves")
        geometry = new THREE.BoxGeometry(1, 0.75, 0.035);
      else if (definition.motif === "steps")
        geometry = new THREE.BoxGeometry(0.65, 0.8, 0.2 + i * 0.12);
      else if (definition.motif === "voices")
        geometry = new THREE.TorusGeometry(0.55, 0.035, 6, 32);
      else if (definition.motif === "quotes")
        geometry = new THREE.TorusGeometry(0.25, 0.09, 8, 18, Math.PI * 1.5);
      else if (definition.motif === "summit")
        geometry = new THREE.ConeGeometry(0.6, 1.3, 4);
      else geometry = new THREE.BoxGeometry(0.8, 1.2, 0.12);
      const mesh = new THREE.Mesh(geometry, i % 2 ? stone : gold);
      mesh.position.set(-4.5 + Math.sin(i) * 0.7, -3 + i * 3, 0.46);
      if (definition.motif === "summit") mesh.rotation.x = Math.PI / 2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      landmarks.add(mesh);
    }
    const chapterNumeral = new THREE.Mesh(
      new TextGeometry(String(index + 1).padStart(2, "0"), {
        font,
        size: 1.15,
        depth: 0.14,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.012,
        bevelSize: 0.012,
        bevelSegments: 2,
      }),
      gold,
    );
    chapterNumeral.position.set(-5.6, 0, 0.44);
    chapterNumeral.castShadow = true;
    landmarks.add(chapterNumeral);
    const chapterTitle = new THREE.Mesh(
      new TextGeometry(definition.name.toUpperCase(), {
        font,
        size: 0.27,
        depth: 0.05,
        curveSegments: 3,
      }),
      gold,
    );
    chapterTitle.position.set(-7.3, -4.8, 0.44);
    chapterTitle.castShadow = true;
    landmarks.add(chapterTitle);
    const chapter = {
      ...definition,
      section,
      cards,
      webGroup,
      domGroup,
      pageTexture,
      mounted: false,
      mount() {
        if (this.mounted) return;
        cards.forEach((card) =>
          card.block.pieces.forEach((piece) => card.holder.append(piece.node)),
        );
        this.mounted = true;
      },
      restore() {
        if (!this.mounted) return;
        pieces.forEach((piece) => piece.marker.after(piece.node));
        this.mounted = false;
      },
      measure() {
        const mobile = innerWidth <= 760;
        cards.forEach((card) => {
          card.element.style.width =
            (mobile ? Math.max(280, innerWidth - 44) : 760) + "px";
          if (!card.element.offsetWidth) return;
          card.width = mobile ? 3.6 : 6.7;
          card.scale = card.width / card.element.offsetWidth;
          card.height = card.element.offsetHeight * card.scale;
          card.object.scale.setScalar(card.scale);
        });
      },
      view(progress, aspect) {
        const cursor = clamp(progress) * (cards.length - 1);
        const a = cards[Math.floor(cursor)],
          b = cards[Math.ceil(cursor)];
        const t = ease(cursor % 1);
        const y = mix(a.y, b.y, t),
          x = mix(a.x, b.x, t);
        const height = mix(a.height, b.height, t);
        const width = mix(a.width, b.width, t);
        const fraction =
          innerWidth <= 760 ? 0.84 : Math.min(0.64, 860 / innerWidth);
        const horizontalDistance =
          width /
          (2 * Math.tan(THREE.MathUtils.degToRad(19)) * aspect * fraction);
        const verticalDistance =
          height / (2 * Math.tan(THREE.MathUtils.degToRad(19)) * 0.67);
        const distance =
          Math.max(horizontalDistance, verticalDistance, 7.8) +
          (cards.length === 1 ? (1 - progress) * 1.8 : 0);
        const orbit = Math.sin(progress * Math.PI * 2) * this.sway * 0.32;
        const center = 0.47 + height / 2;
        return {
          position: new THREE.Vector3(x + orbit, center + 1.35, -y + distance),
          target: new THREE.Vector3(x, center, -y),
        };
      },
      update(state, active) {
        webGroup.visible = domGroup.visible = active;
        const scale = 1 + 4 * state.dive;
        // Keep typography readable as the real paper grows beneath it. Both
        // renderers retain identical local anchors and surface height.
        webGroup.scale.setScalar(1 / scale);
        domGroup.scale.copy(webGroup.scale);
        webGroup.position.z = domGroup.position.z = 0.33 * (1 - 1 / scale);
        const cursor = state.journey * (cards.length - 1);
        cards.forEach((card, i) => {
          const proximity = clamp(1 - Math.abs(cursor - i) * 0.85);
          const rise = state.rise * ease(proximity);
          card.object.position.set(
            card.x,
            card.y,
            0.42 + (card.height / 2) * rise,
          );
          card.object.rotation.x = (rise * Math.PI) / 2;
          const normal = new THREE.Vector3(0, 0, 1).applyEuler(card.object.rotation);
          card.backing.position
            .copy(card.object.position)
            .addScaledVector(normal, -0.033);
          card.backing.rotation.copy(card.object.rotation);
          card.backing.scale.set(card.width, card.height, 1);
          card.element.style.visibility =
            active && state.flat > 0.05 && state.out < 0.5
              ? "visible"
              : "hidden";
          card.element.inert = !active || !state.readable || proximity < 0.7;
          card.element.classList.toggle(
            "is-readable",
            active && state.readable && proximity > 0.7,
          );
          card.element.style.setProperty("--content-lift", String(rise));
          card.element.style.setProperty(
            "--glyph-depth",
            ((1 - rise) * 18).toFixed(2) + "px",
          );
          card.element.dataset.rise = rise.toFixed(5);
          card.shadow.position.set(card.x, card.y, 0.399);
          card.shadow.scale.set(
            card.width / 6.7,
            Math.max(1, card.height / 2),
            1,
          );
          card.shadow.material.opacity = 0.16 * rise;
          card.support.position.set(card.x, card.y, 0.42 + 0.1 * rise);
          card.support.scale.x = card.width / 6.7;
          card.number.position.set(
            card.x - card.width / 2,
            card.y - card.height / 2 - 0.4,
            0.42 + 0.55 * rise,
          );
          card.number.rotation.x = (rise * Math.PI) / 2;
        });
        landmarks.visible = active && state.flat > 0.8 && state.rise > 0.01;
        landmarks.children.forEach((mesh, i) => {
          mesh.position.z = 0.46 + state.rise * (0.35 + i * 0.15);
          mesh.rotation.y = state.journey * 0.25 * (i % 2 ? 1 : -1);
        });
        chapterNumeral.rotation.x = chapterTitle.rotation.x =
          (state.rise * Math.PI) / 2;
      },
    };
    // Measure DOM changes without treating camera transforms as content resize.
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver((entries) => {
        if (
          chapter.mounted &&
          entries.some((entry) => entry.contentRect.width > 0)
        ) {
          chapter.measure();
          invalidate();
        }
      });
      cards.forEach((card) => observer.observe(card.element));
      chapter.observer = observer;
    }
    return chapter;
  });
}
