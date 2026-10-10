import * as THREE from "three";
import { ease } from "./timeline";

export function updateCamera(camera, state, chapter, aspect) {
  const spreadDistance = Math.max(
    25,
    16.6 / (2 * Math.tan(THREE.MathUtils.degToRad(19)) * aspect * 0.86),
  );
  const near = chapter.view(state.journey, aspect);
  const paperHeight = 0.33 * 4 * state.dive;
  near.position.y += paperHeight;
  near.target.y += paperHeight;
  const wide = new THREE.Vector3(0, 1, spreadDistance);
  const overhead = new THREE.Vector3(
    1,
    spreadDistance * 0.77,
    spreadDistance * 0.64,
  );
  // Keep the first half of the tilt visible from the front. Moving overhead too
  // early visually cancels the book's rotation, even though its mesh is turning.
  const position = wide.clone().lerp(overhead, ease((state.flat - 0.45) / 0.55));
  const target = new THREE.Vector3(0, 0, 0);
  position.lerp(near.position, state.dive);
  target.lerp(near.target, state.dive);
  camera.position.copy(position);
  camera.lookAt(target);
  camera.updateMatrixWorld();
}
