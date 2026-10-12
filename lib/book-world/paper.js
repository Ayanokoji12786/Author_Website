import * as THREE from "three";

export class TurningPaper {
  constructor(width, height) {
    this.width = width;
    this.progress = -1;
    this.bend = 0;
    this.stripX = new Float32Array(129);
    this.stripZ = new Float32Array(129);
    this.geometry = new THREE.PlaneGeometry(width, height, 64, 12);
    this.original = this.geometry.attributes.position.array.slice();
    this.material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.91,
      side: THREE.FrontSide,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.position.z = 0.34;
    this.mesh.name = "curved-turning-page";
    this.edge = new THREE.Mesh(
      this.geometry.clone(),
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 1,
        side: THREE.BackSide,
      }),
    );
    this.mesh.frustumCulled = this.edge.frustumCulled = false;
    this.mesh.add(this.edge);
  }
  update(progress) {
    this.mesh.visible = progress > 0 && progress < 1;
    if (!this.mesh.visible) {
      this.bend = 0;
      this.progress = -1;
      return;
    }
    if (progress === this.progress) return;
    this.progress = progress;
    const positions = this.geometry.attributes.position;
    const curvature = Math.sin(progress * Math.PI) * 1.25;
    // Integrate a changing tangent along the sheet: a curved surface, not a hinge.
    const strips = 128;
    const xs = this.stripX,
      zs = this.stripZ;
    for (let i = 1; i <= strips; i++) {
      const u = (i - 0.5) / strips;
      const tangent = -progress * Math.PI + curvature * (Math.sin(u * Math.PI) - 2 / Math.PI);
      xs[i] = xs[i - 1] + (Math.cos(tangent) * this.width) / strips;
      zs[i] = zs[i - 1] - (Math.sin(tangent) * this.width) / strips;
    }
    for (let i = 0; i < positions.count; i++) {
      const u = (this.original[i * 3] + this.width / 2) / this.width;
      const slot = Math.min(strips, Math.round(u * strips));
      const corner = Math.sin(progress * Math.PI) * u ** 3 *
        (this.original[i * 3 + 1] / this.width) * 0.14;
      positions.setXYZ(
        i,
        xs[slot],
        this.original[i * 3 + 1],
        zs[slot] + corner + 0.065 * Math.exp(-u * 28),
      );
    }
    positions.needsUpdate = true;
    this.geometry.computeVertexNormals();
    // Extrude the underside along the deformed normal. A fixed world-Z
    // offset reverses thickness as the sheet crosses the spine.
    const underside = this.edge.geometry.attributes.position;
    const normals = this.geometry.attributes.normal;
    for (let i = 0; i < positions.count; i++) {
      underside.setXYZ(i,
        positions.getX(i) - normals.getX(i) * 0.008,
        positions.getY(i) - normals.getY(i) * 0.008,
        positions.getZ(i) - normals.getZ(i) * 0.008);
    }
    underside.needsUpdate = true;
    this.edge.geometry.attributes.normal.array.set(normals.array);
    this.edge.geometry.attributes.normal.needsUpdate = true;
    this.bend = this.measureCurvature();
  }
  curvature() {
    return this.bend;
  }
  measureCurvature() {
    if (!this.mesh.visible) return 0;
    const a = this.geometry.attributes.position;
    const row = 6 * 65;
    const startX = a.getX(row),
      startZ = a.getZ(row);
    const dx = a.getX(row + 64) - startX,
      dz = a.getZ(row + 64) - startZ;
    let deviation = 0;
    for (let i = 1; i < 64; i++) {
      deviation = Math.max(
        deviation,
        Math.hypot(
          a.getX(row + i) - startX - (dx * i) / 64,
          a.getZ(row + i) - startZ - (dz * i) / 64,
        ),
      );
    }
    return deviation;
  }
}
