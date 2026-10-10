import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { TurningPaper } from "./paper";

export const PAGE_WIDTH = 8;
export const PAGE_HEIGHT = (PAGE_WIDTH * 800) / 529;
export function createBook(coverUrl, invalidate) {
  const group = new THREE.Group();
  group.name = "persistent-book";
  const paperMat = new THREE.MeshStandardMaterial({
    color: "#f7f2e8",
    roughness: 0.92,
  });
  const leather = new THREE.MeshStandardMaterial({
    color: "#735624",
    roughness: 0.56,
    metalness: 0.08,
  });
  const gold = new THREE.MeshStandardMaterial({
    color: "#b99551",
    roughness: 0.36,
    metalness: 0.65,
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
      3,
      0.045,
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
  new THREE.TextureLoader().load(
    coverUrl,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 4;
      faceMat.map = texture;
      faceMat.needsUpdate = true;
      invalidate();
    },
    undefined,
    () => {
      face.visible = false;
      invalidate();
    },
  );
  const gutter = slab(0.045, PAGE_HEIGHT - 0.1, 0.015, gold, 0, 0.37, 0.005);
  gutter.name = "gilded-gutter";
  const page = new TurningPaper(PAGE_WIDTH, PAGE_HEIGHT);
  group.add(page.mesh);
  const surfaceMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.92,
  });
  const surface = new THREE.Mesh(
    new THREE.PlaneGeometry(PAGE_WIDTH - 0.08, PAGE_HEIGHT - 0.06),
    surfaceMaterial,
  );
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
      hinge.position.z = 0.44 - 0.30 * state.opening;
      leftBack.visible = leftPaper.visible = state.opening > 0.02;
      page.update(state.turn);
    },
  };
}
