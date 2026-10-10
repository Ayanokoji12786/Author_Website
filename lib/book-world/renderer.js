import * as THREE from "three";
import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { createBook } from "./book";
import { makeChapters } from "./content";
import { updateCamera } from "./camera";

export function createWorld(root, stage, invalidate, onLost) {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(
    Math.min(devicePixelRatio, innerWidth <= 760 ? 1.25 : 1.75),
  );
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.94;
  renderer.domElement.className = "book-webgl";
  renderer.domElement.setAttribute("aria-hidden", "true");
  stage.append(renderer.domElement);
  const css = new CSS3DRenderer();
  css.setSize(innerWidth, innerHeight);
  css.domElement.className = "book-spatial-content";
  stage.append(css.domElement);
  const scene = new THREE.Scene();
  const domScene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    38,
    innerWidth / innerHeight,
    0.1,
    200,
  );
  const ambient = new THREE.HemisphereLight("#f7eddb", "#343d35", 1.2);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight("#fff0d2", 2.1);
  sun.position.set(-7, 16, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(
    innerWidth <= 760 ? 512 : 1024,
    innerWidth <= 760 ? 512 : 1024,
  );
  Object.assign(sun.shadow.camera, {
    left: -16,
    right: 16,
    top: 17,
    bottom: -17,
    near: 1,
    far: 60,
  });
  sun.shadow.normalBias = 0.03;
  sun.shadow.bias = -0.0003;
  scene.add(sun);
  const rim = new THREE.DirectionalLight("#a7b8bb", 1.2);
  rim.position.set(8, 6, -10);
  scene.add(rim);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = new RoomEnvironment();
  const reflection = pmrem.fromScene(environment, 0.08);
  scene.environment = reflection.texture;
  environment.dispose();
  pmrem.dispose();
  const book = createBook(
    root.querySelector("[data-intro-cover]").src,
    invalidate,
  );
  scene.add(book.group);
  const domBook = new THREE.Group();
  domScene.add(domBook);
  const chapters = makeChapters(root, book.group, domBook, invalidate);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120),
    new THREE.ShadowMaterial({ opacity: 0.24 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  const pointer = { x: 0, y: 0 };
  function move(event) {
    if (event.pointerType === "touch") return;
    pointer.x = (event.clientX / innerWidth - 0.5) * 2;
    pointer.y = (event.clientY / innerHeight - 0.5) * 2;
    invalidate();
  }
  window.addEventListener("pointermove", move, { passive: true });
  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    onLost();
  });
  let frames = 0,
    lastChapter = -1;
  return {
    chapters,
    book,
    camera,
    renderer,
    mount() {
      chapters.forEach((chapter) => chapter.mount());
      css.render(domScene, camera);
      this.resize();
    },
    restore() {
      chapters.forEach((chapter) => chapter.restore());
    },
    resize() {
      renderer.setPixelRatio(
        Math.min(devicePixelRatio, innerWidth <= 760 ? 1.25 : 1.75),
      );
      renderer.setSize(innerWidth, innerHeight);
      css.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      const hidden = stage.hidden,
        visibility = stage.style.visibility;
      stage.hidden = false;
      stage.style.visibility = "hidden";
      chapters.forEach((chapter) => {
        if (chapter.mounted) {
          const displays = chapter.cards.map(
            (card) => card.element.style.display,
          );
          chapter.cards.forEach(
            (card) => (card.element.style.display = "block"),
          );
          chapter.measure();
          chapter.cards.forEach(
            (card, i) => (card.element.style.display = displays[i]),
          );
        }
      });
      stage.hidden = hidden;
      stage.style.visibility = visibility;
    },
    render(index, state) {
      const chapter = chapters[index];
      book.update(state, pointer);
      if (lastChapter !== index) {
        book.surfaceMaterial.map = chapter.pageTexture;
        book.surfaceMaterial.needsUpdate = true;
        book.page.material.map = chapter.pageTexture;
        book.page.material.needsUpdate = true;
        book.page.edge.material.map =
          chapters[Math.min(chapters.length - 1, index + 1)].pageTexture;
        book.page.edge.material.needsUpdate = true;
        lastChapter = index;
      }
      const under = chapters[
        Math.min(chapters.length - 1, index + (state.turn > 0 ? 1 : 0))
      ].pageTexture;
      if (book.surfaceMaterial.map !== under) {
        book.surfaceMaterial.map = under;
        book.surfaceMaterial.needsUpdate = true;
      }
      domBook.position.copy(book.group.position);
      domBook.rotation.copy(book.group.rotation);
      domBook.scale.copy(book.group.scale);
      chapters.forEach((chapter, i) => chapter.update(state, i === index));
      floor.position.y = -6.5 + 5.3 * state.flat;
      updateCamera(camera, state, chapter, camera.aspect);
      renderer.render(scene, camera);
      css.render(domScene, camera);
      frames++;
      // Inspectable numerical diagnostics: the actual geometry/camera, not a CSS proxy.
      root.dataset.bookRotation = (
        (-book.group.rotation.x * 180) /
        Math.PI
      ).toFixed(5);
      root.dataset.pageFlip = state.turn.toFixed(6);
      root.dataset.bookScale = book.group.scale.x.toFixed(6);
      root.dataset.pageCurvature = book.page.curvature().toFixed(6);
      root.dataset.cameraPosition = camera.position
        .toArray()
        .map((n) => n.toFixed(5))
        .join(",");
      root.dataset.worldUuid = book.group.uuid;
      root.dataset.worldFrames = String(frames);
      root.dataset.drawCalls = String(renderer.info.render.calls);
      root.dataset.worldTriangles = String(renderer.info.render.triangles);
    },
    dispose() {
      this.restore();
      chapters.forEach((chapter) => {
        chapter.observer?.disconnect();
        chapter.pageTexture.dispose();
      });
      scene.traverse((object) => {
        object.geometry?.dispose();
        if (object.material) {
          const list = Array.isArray(object.material)
            ? object.material
            : [object.material];
          list.forEach((m) => {
            m.map?.dispose();
            m.dispose();
          });
        }
      });
      reflection.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      css.domElement.remove();
      window.removeEventListener("pointermove", move);
    },
  };
}
