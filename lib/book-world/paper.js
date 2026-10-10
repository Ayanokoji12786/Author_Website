import * as THREE from "three";

export class TurningPaper {
  constructor(width, height) {
    this.width = width;
    this.progress = -1;
    this.bend = 0;
    this.stripX = new Float32Array(97);
    this.stripZ = new Float32Array(97);
    this.geometry = new THREE.PlaneGeometry(width, height, 48, 10);
    this.original = this.geometry.attributes.position.array.slice();
    this.material = new THREE.MeshStandardMaterial({
      color: "#f7f2e8",
      roughness: 0.91,
      side: THREE.FrontSide,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.position.z = 0.47;
    this.mesh.name = "curved-turning-page";
    this.edge = new THREE.Mesh(
      this.geometry.clone(),
      new THREE.MeshStandardMaterial({
        color: "#f7f2e8",
        roughness: 1,
        side: THREE.BackSide,
      }),
    );
    this.edge.position.z = -0.018;
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
    const curvature = Math.sin(progress * Math.PI) * 1.6;
    // Integrate a changing tangent along the sheet: a curved surface, not a hinge.
    const strips = 96;
    const xs = this.stripX,
      zs = this.stripZ;
    for (let i = 1; i <= strips; i++) {
      const u = (i - 0.5) / strips;
      const tangent = -progress * Math.PI + curvature * Math.sin(u * Math.PI);
      xs[i] = xs[i - 1] + (Math.cos(tangent) * this.width) / strips;
      zs[i] = zs[i - 1] - (Math.sin(tangent) * this.width) / strips;
    }
    for (let i = 0; i < positions.count; i++) {
      const u = (this.original[i * 3] + this.width / 2) / this.width;
      const slot = Math.min(strips, Math.round(u * strips));
      const corner =
        Math.sin(u * Math.PI) * Math.sin(progress * Math.PI) * 0.16;
      positions.setXYZ(
        i,
        xs[slot],
        this.original[i * 3 + 1] + (corner * this.original[i * 3 + 1]) / 6,
        zs[slot],
      );
    }
    positions.needsUpdate = true;
    this.geometry.computeVertexNormals();
    this.edge.geometry.attributes.position.array.set(positions.array);
    this.edge.geometry.attributes.position.needsUpdate = true;
    this.edge.geometry.computeVertexNormals();
    // The edge mesh shares local shape; its 0.018 offset gives paper thickness.
    this.edge.position.z = -0.018;
    this.bend = this.measureCurvature();
  }
  curvature() {
    return this.bend;
  }
  measureCurvature() {
    if (!this.mesh.visible) return 0;
    const a = this.geometry.attributes.position;
    const row = 5 * 49;
    const startX = a.getX(row),
      startZ = a.getZ(row);
    const dx = a.getX(row + 48) - startX,
      dz = a.getZ(row + 48) - startZ;
    let deviation = 0;
    for (let i = 1; i < 48; i++) {
      deviation = Math.max(
        deviation,
        Math.hypot(
          a.getX(row + i) - startX - (dx * i) / 48,
          a.getZ(row + i) - startZ - (dz * i) / 48,
        ),
      );
    }
    return deviation;
  }
}
