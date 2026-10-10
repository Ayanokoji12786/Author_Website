import * as THREE from "three";
import { ease } from "./timeline";

const wide = new THREE.Vector3();
const overhead = new THREE.Vector3();
const position = new THREE.Vector3();
const target = new THREE.Vector3();

export function updateCamera(camera, state, chapter, aspect) {
  const spreadDistance = Math.max(
    25,
    (8.3 + 8.3 * state.opening) /
      (2 * Math.tan(THREE.MathUtils.degToRad(19)) * aspect * 0.86),
  );
  const near = chapter.view(state.journey, aspect);
  const paperHeight = 0.33 * 4 * state.dive;
  near.position.y += paperHeight;
  near.target.y += paperHeight;
  wide.set(0, 1, spreadDistance);
  overhead.set(1, spreadDistance * 0.77, spreadDistance * 0.64);
  // Keep the first half of the tilt visible from the front. Moving overhead too
  // early visually cancels the book's rotation, even though its mesh is turning.
  position.copy(wide).lerp(overhead, ease((state.flat - 0.45) / 0.55));
  target.set(0, 0, 0);
  position.lerp(near.position, state.dive);
  target.lerp(near.target, state.dive);
  camera.position.copy(position);
  camera.lookAt(target);
  camera.updateMatrixWorld();
}
