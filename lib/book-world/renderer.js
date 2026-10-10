import * as THREE from "three";
import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { createBook } from "./book";
import { makeChapters } from "./content";
import { updateCamera } from "./camera";

export async function createWorld(root, stage, invalidate, onLost) {
  const image = root.querySelector("[data-intro-cover]");
  // Decode once before allocating a context. Failure keeps the full Reading view.
  let assetTimer;
  try {
    await Promise.race([
      image.decode(),
      new Promise((_, reject) => {
        assetTimer = setTimeout(
          () => reject(new Error("Cover decode timeout")),
          4500,
        );
      }),
    ]);
    if (!image.naturalWidth) throw new Error("Original cover unavailable");
  } finally {
    clearTimeout(assetTimer);
  }
  let disposed = false,
    frames = 0,
    lastChapter = -1;
  let width = innerWidth,
    height = innerHeight;
  let pixelRatio = Math.min(devicePixelRatio, innerWidth <= 760 ? 1 : 1.25);
  let slowFrames = 0,
    lastRenderAt = 0;
  root.dataset.renderQuality = "balanced";
  const resources = { chapters: [] };
  let abort = () => releaseResources(resources);
  try {
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    resources.renderer = renderer;
    const gl = renderer.getContext();
    const debug = gl.getExtension("WEBGL_debug_renderer_info");
    const software =
      debug &&
      /swiftshader|llvmpipe|software/i.test(
        gl.getParameter(debug.UNMASKED_RENDERER_WEBGL),
      );
    // Software graphics is a supported, cheaper tier. Semantic content remains
    // full-resolution; only the WebGL drawing buffer and shadow sampling change.
    if (software) {
      pixelRatio = Math.min(pixelRatio, 0.8);
      root.dataset.renderQuality = "software";
    }
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = software
      ? THREE.BasicShadowMap
      : THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.88;
    renderer.domElement.className = "book-webgl";
    renderer.domElement.setAttribute("aria-hidden", "true");
    stage.append(renderer.domElement);
    const css = new CSS3DRenderer();
    resources.css = css;
    css.setSize(innerWidth, innerHeight);
    css.domElement.className = "book-spatial-content";
    stage.append(css.domElement);
    const scene = new THREE.Scene();
    resources.scene = scene;
    const domScene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      innerWidth / innerHeight,
      0.1,
      200,
    );
    const ambient = new THREE.HemisphereLight("#f7eddb", "#343d35", 0.9);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight("#fff0d2", 1.7);
    sun.position.set(-7, 16, 14);
    sun.castShadow = true;
    sun.shadow.mapSize.set(
      software ? 256 : innerWidth <= 760 ? 512 : 1024,
      software ? 256 : innerWidth <= 760 ? 512 : 1024,
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
    resources.reflection = reflection;
    scene.environment = reflection.texture;
    scene.environmentIntensity = 0.4;
    environment.dispose();
    pmrem.dispose();
    const book = createBook(image);
    scene.add(book.group);
    const domBook = new THREE.Group();
    domScene.add(domBook);
    const chapters = makeChapters(
      root,
      book.group,
      domBook,
      invalidate,
      resources.chapters,
    );
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(120, 120),
      new THREE.ShadowMaterial({ opacity: 0.24 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    const pointer = { x: 0, y: 0 };
    function move(event) {
      if (
        event.pointerType === "touch" ||
        stage.hidden ||
        !root.classList.contains("is-immersive") ||
        Number(root.dataset.bookScale) > 1.05
      )
        return;
      pointer.x = (event.clientX / innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / innerHeight - 0.5) * 2;
      invalidate();
    }
    resources.move = move;
    window.addEventListener("pointermove", move, { passive: true });
    renderer.domElement.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      onLost();
    });
    const world = {
      chapters,
      book,
      camera,
      renderer,
      mount() {
        chapters.forEach((chapter) => chapter.mount());
        // CSS3DRenderer appends the original nodes before the initial batched measure.
        css.render(domScene, camera);
        this.resize();
      },
      restore() {
        chapters.forEach((chapter) => chapter.restore());
      },
      resize() {
        // Reallocating an unchanged drawing buffer briefly clears the book and
        // incurs GPU work on every details toggle and font/ResizeObserver event.
        if (width !== innerWidth || height !== innerHeight) {
          width = innerWidth;
          height = innerHeight;
          renderer.setSize(width, height);
          css.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
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
        if (disposed) return;
        const started = performance.now();
        const chapter = chapters[index];
        book.update(state, pointer);
        if (lastChapter !== index) {
          if (lastChapter >= 0) chapters[lastChapter].deactivate();
          book.leftMaterial.map =
            index > 0 ? chapters[index - 1].pageTexture : book.endpaperTexture;
          book.surfaceMaterial.map = chapter.pageTexture;
          book.surfaceMaterial.needsUpdate = true;
          book.page.material.map = chapter.pageTexture;
          book.page.material.needsUpdate = true;
          book.page.edge.material.map =
            chapters[Math.min(chapters.length - 1, index + 1)].pageTexture;
          book.page.edge.material.needsUpdate = true;
          lastChapter = index;
        }
        const under =
          chapters[
            Math.min(chapters.length - 1, index + (state.turn > 0 ? 1 : 0))
          ].pageTexture;
        if (book.surfaceMaterial.map !== under) {
          book.surfaceMaterial.map = under;
          book.surfaceMaterial.needsUpdate = true;
        }
        domBook.position.copy(book.group.position);
        domBook.rotation.copy(book.group.rotation);
        domBook.scale.copy(book.group.scale);
        chapter.update(state);
        floor.position.y = -6.5 + 5.3 * state.flat;
        updateCamera(camera, state, chapter, camera.aspect);
        renderer.render(scene, camera);
        css.render(domScene, camera);
        const duration = performance.now() - started;
        root.dataset.renderCpuMs = duration.toFixed(2);
        const interval = started - lastRenderAt;
        lastRenderAt = started;
        // GPU submission duration alone misses raster/commit stalls. Repeated
        // slow animation frames also lower fill cost; isolated idle gaps do not.
        if (duration > 25 || (interval > 45 && interval < 1500)) slowFrames++;
        else slowFrames = Math.max(0, slowFrames - 1);
        if (slowFrames >= 8 && pixelRatio > 0.85) {
          pixelRatio = 0.85;
          renderer.setPixelRatio(pixelRatio);
          root.dataset.renderQuality = "economy";
          slowFrames = 0;
        }
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
        if (disposed) return;
        disposed = true;
        this.restore();
        releaseResources(resources);
      },
    };
    abort = () => world.dispose();
    book.surfaceMaterial.map = book.page.material.map = chapters[0].pageTexture;
    book.page.edge.material.map = chapters[1].pageTexture;
    // Texture upload and shader compilation occur beneath the loader, so the
    // first scroll does not pay their entire cost while the book is moving.
    renderer.initTexture(book.coverTexture);
    renderer.initTexture(book.endpaperTexture);
    chapters.forEach((chapter) => renderer.initTexture(chapter.pageTexture));
    camera.position.set(0, 1, 25);
    camera.lookAt(0, 0, 0);
    await renderer.compileAsync(scene, camera);
    chapters.forEach((chapter) => chapter.deactivate());
    world.render(0, {
      opening: 0,
      flat: 0,
      dive: 0,
      rise: 0,
      journey: 0,
      out: 0,
      turn: 0,
      readable: false,
    });
    // CPU submission is not GPU completion. Wait for the first queued texture,
    // shadow and material draw work before exposing the scene as ready.
    await waitForGpu(gl);
    return world;
  } catch (error) {
    abort();
    throw error;
  }
}

function waitForGpu(gl) {
  return new Promise((resolve, reject) => {
    const fence = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    if (!fence) {
      reject(new Error("GPU readiness fence unavailable"));
      return;
    }
    gl.flush();
    const started = performance.now();
    function check() {
      const status = gl.clientWaitSync(fence, 0, 0);
      if (status === gl.ALREADY_SIGNALED || status === gl.CONDITION_SATISFIED) {
        gl.deleteSync(fence);
        resolve();
      } else if (
        gl.isContextLost() ||
        status === gl.WAIT_FAILED ||
        performance.now() - started > 5000
      ) {
        gl.deleteSync(fence);
        reject(new Error("GPU readiness failed"));
      } else setTimeout(check, 16);
    }
    check();
  });
}

function releaseResources(resources) {
  const geometries = new Set(),
    materials = new Set(),
    textures = new Set();
  resources.chapters.forEach((chapter) => {
    chapter.restore();
    chapter.observer?.disconnect();
    textures.add(chapter.pageTexture);
  });
  resources.scene?.traverse((object) => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.material)
      (Array.isArray(object.material)
        ? object.material
        : [object.material]
      ).forEach((material) => {
        materials.add(material);
        if (material.map) textures.add(material.map);
      });
  });
  geometries.forEach((geometry) => geometry.dispose());
  textures.forEach((texture) => texture.dispose());
  materials.forEach((material) => material.dispose());
  resources.reflection?.dispose();
  resources.renderer?.dispose();
  resources.renderer?.domElement.remove();
  resources.css?.domElement.remove();
  if (resources.move) window.removeEventListener("pointermove", resources.move);
}
