import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { TurningPaper } from "./paper";

export const PAGE_WIDTH = 8;
export const PAGE_HEIGHT = (PAGE_WIDTH * 800) / 529;
export function createBook(coverImage) {
  const group = new THREE.Group();
  group.name = "persistent-book";
  const paperMat = new THREE.MeshStandardMaterial({
    color: "#f7f2e8",
    roughness: 0.92,
  });
  const leather = new THREE.MeshStandardMaterial({
    color: "#635038",
    roughness: 0.68,
    metalness: 0.08,
  });
  const gold = new THREE.MeshStandardMaterial({
    color: "#b99e67",
    roughness: 0.48,
    metalness: 0.45,
  });
  function slab(width, height, depth, material, x, z, radius = 0.06) {
    const mesh = new THREE.Mesh(
      new RoundedBoxGeometry(width, height, depth, 2, radius),
      material,
    );
    mesh.position.set(x, 0, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }
  slab(
    PAGE_WIDTH + 0.18,
    PAGE_HEIGHT + 0.2,
    0.22,
    leather,
    PAGE_WIDTH / 2,
    -0.45,
  );
  slab(
    PAGE_WIDTH - 0.08,
    PAGE_HEIGHT - 0.06,
    0.72,
    paperMat,
    PAGE_WIDTH / 2,
    -0.04,
  );
  const leftBack = slab(
    PAGE_WIDTH + 0.18,
    PAGE_HEIGHT + 0.2,
    0.22,
    leather,
    -PAGE_WIDTH / 2,
    -0.45,
  );
  const leftPaper = slab(
    PAGE_WIDTH - 0.08,
    PAGE_HEIGHT - 0.06,
    0.38,
    paperMat,
    -PAGE_WIDTH / 2,
    0.11,
  );
  const spine = slab(0.38, PAGE_HEIGHT + 0.15, 0.9, leather, 0, -0.06, 0.08);
  spine.name = "rounded-cloth-spine";
  // Actual page edges, shared geometry/material: modest draw count, real thickness.
  const edges = new THREE.InstancedMesh(
    new THREE.BoxGeometry(PAGE_WIDTH - 0.1, 0.012, 0.009),
    new THREE.MeshStandardMaterial({ color: "#bcb19c", roughness: 1 }),
    48,
  );
  const matrix = new THREE.Matrix4();
  for (let i = 0; i < 48; i++) {
    matrix.makeTranslation(
      PAGE_WIDTH / 2,
      -PAGE_HEIGHT / 2 + 0.028,
      -0.37 + i * 0.015,
    );
    edges.setMatrixAt(i, matrix);
  }
  group.add(edges);
  const hinge = new THREE.Group();
  hinge.name = "front-cover-hinge";
  hinge.position.z = 0.44;
  group.add(hinge);
  const cover = new THREE.Mesh(
    new RoundedBoxGeometry(
      PAGE_WIDTH + 0.16,
      PAGE_HEIGHT + 0.16,
      0.16,
      4,
      0.065,
    ),
    leather,
  );
  cover.position.x = PAGE_WIDTH / 2;
  cover.castShadow = true;
  cover.receiveShadow = true;
  hinge.add(cover);
  const faceMat = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.52,
    metalness: 0.03,
  });
  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(PAGE_WIDTH, PAGE_HEIGHT),
    faceMat,
  );
  face.position.set(PAGE_WIDTH / 2, 0, 0.085);
  hinge.add(face);
  // Reuse the already decoded, genuine loader artwork. No second asynchronous
  // texture request can leave a "ready" book with a blank front cover.
  const texture = new THREE.Texture(coverImage);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  faceMat.map = texture;
  const endpaper = document.createElement("canvas");
  endpaper.width = 512;
  endpaper.height = 774;
  const ink = endpaper.getContext("2d");
  ink.fillStyle = "#f7f2e8";
  ink.fillRect(0, 0, 512, 774);
  ink.strokeStyle = "#ded4bd";
  ink.strokeRect(42, 45, 428, 684);
  ink.textAlign = "center";
  ink.fillStyle = "#776547";
  ink.font = 'italic 30px "Cormorant Garamond"';
  ink.fillText("Still Standing,", 256, 345);
  ink.fillText("Still Here.", 256, 380);
  ink.font = "11px Inter";
  ink.fillText("DHRUVA NERELLA & TATTVA NERELLA", 256, 430);
  const endpaperTexture = new THREE.CanvasTexture(endpaper);
  endpaperTexture.colorSpace = THREE.SRGBColorSpace;
  const leftMaterial = new THREE.MeshStandardMaterial({
    map: endpaperTexture,
    roughness: 0.94,
  });
  function pageSurface() {
    const geometry = new THREE.PlaneGeometry(
      PAGE_WIDTH - 0.08,
      PAGE_HEIGHT - 0.06,
      32,
      2,
    );
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const distance = positions.getX(i) + (PAGE_WIDTH - 0.08) / 2;
      positions.setZ(i, 0.065 * Math.exp(-distance * 3.5));
    }
    geometry.computeVertexNormals();
    return geometry;
  }
  const leftSurface = new THREE.Mesh(pageSurface(), leftMaterial);
  const leftPositions = leftSurface.geometry.attributes.position;
  for (let i = 0; i < leftPositions.count; i++)
    leftPositions.setZ(
      i,
      0.065 *
        Math.exp(-((PAGE_WIDTH - 0.08) / 2 - leftPositions.getX(i)) * 3.5),
    );
  leftSurface.geometry.computeVertexNormals();
  leftSurface.position.set(-PAGE_WIDTH / 2, 0, 0.34);
  leftSurface.receiveShadow = true;
  group.add(leftSurface);
  const gutter = slab(0.045, PAGE_HEIGHT - 0.1, 0.015, gold, 0, 0.37, 0.005);
  gutter.name = "gilded-gutter";
  const page = new TurningPaper(PAGE_WIDTH, PAGE_HEIGHT);
  group.add(page.mesh);
  const surfaceMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.92,
  });
  const surface = new THREE.Mesh(pageSurface(), surfaceMaterial);
  surface.position.set(PAGE_WIDTH / 2, 0, 0.33);
  surface.receiveShadow = true;
  group.add(surface);
  const imprint = new THREE.Group();
  group.add(imprint);
  return {
    group,
    hinge,
    page,
    paperMat,
    imprint,
    surfaceMaterial,
    leftMaterial,
    endpaperTexture,
    coverTexture: texture,
    update(state, pointer) {
      group.rotation.set(
        (-Math.PI / 2) * state.flat,
        pointer.x * 0.012 * (1 - state.dive),
        pointer.y * 0.009 * (1 - state.dive),
      );
      group.position.x = (-PAGE_WIDTH / 2) * (1 - state.opening);
      group.position.y = 0;
      // The same physical object grows continuously into the page landscape.
      // The camera can now travel above the paper, rather than remaining beyond
      // a small book's front edge while looking toward its content.
      group.scale.setScalar(1 + 4 * state.dive);
      hinge.rotation.y = -state.opening * Math.PI;
      hinge.position.z = 0.44 - 0.3 * state.opening;
      leftBack.visible =
        leftPaper.visible =
        leftSurface.visible =
          state.opening > 0;
      // Reveal the opposing page continuously while the cover opens, rather
      // than materializing a complete left stack at an arbitrary threshold.
      [leftBack, leftPaper, leftSurface].forEach((mesh) => {
        mesh.scale.x = Math.max(0.001, state.opening);
        mesh.position.x = (-PAGE_WIDTH / 2) * state.opening;
      });
      page.update(state.turn);
    },
  };
}
