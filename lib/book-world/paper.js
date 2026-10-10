import * as THREE from "three";

export class TurningPaper {
  constructor(width, height) {
    this.width = width;
    this.geometry = new THREE.PlaneGeometry(width, height, 48, 10);
    this.original = this.geometry.attributes.position.array.slice();
    this.material = new THREE.MeshStandardMaterial({
      color: "#f7f2e8",
      roughness: 0.91,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.position.z = 0.47;
    this.mesh.name = "curved-turning-page";
    this.edge = new THREE.Mesh(
      this.geometry.clone(),
      new THREE.MeshStandardMaterial({
        color: "#c9b99a",
        roughness: 1,
        side: THREE.BackSide,
      }),
    );
    this.edge.position.z = 0.452;
    this.mesh.add(this.edge);
  }
  update(progress) {
    this.mesh.visible = progress > 0 && progress < 1;
    if (!this.mesh.visible) return;
    const positions = this.geometry.attributes.position;
    const curvature = Math.sin(progress * Math.PI) * 1.6;
    // Integrate a changing tangent along the sheet: a curved surface, not a hinge.
    const strips = 96;
    const points = [{ x: 0, z: 0 }];
    for (let i = 1; i <= strips; i++) {
      const u = (i - 0.5) / strips;
      const tangent = -progress * Math.PI + curvature * Math.sin(u * Math.PI);
      points.push({
        x: points[i - 1].x + (Math.cos(tangent) * this.width) / strips,
        z: points[i - 1].z - (Math.sin(tangent) * this.width) / strips,
      });
    }
    for (let i = 0; i < positions.count; i++) {
      const u = (this.original[i * 3] + this.width / 2) / this.width;
      const slot = Math.min(strips, Math.round(u * strips));
      const corner =
        Math.sin(u * Math.PI) * Math.sin(progress * Math.PI) * 0.16;
      positions.setXYZ(
        i,
        points[slot].x,
        this.original[i * 3 + 1] + (corner * this.original[i * 3 + 1]) / 6,
        points[slot].z,
      );
    }
    positions.needsUpdate = true;
    this.geometry.computeVertexNormals();
    this.edge.geometry.attributes.position.array.set(positions.array);
    this.edge.geometry.attributes.position.needsUpdate = true;
    this.edge.geometry.computeVertexNormals();
    // The edge mesh shares local shape; its 0.018 offset gives paper thickness.
    this.edge.position.z = -0.018;
  }
  curvature() {
    if (!this.mesh.visible) return 0;
    const a = this.geometry.attributes.position;
    const row = 5 * 49;
    const start = new THREE.Vector3().fromBufferAttribute(a, row);
    const end = new THREE.Vector3().fromBufferAttribute(a, row + 48);
    let deviation = 0;
    for (let i = 1; i < 48; i++) {
      const point = new THREE.Vector3().fromBufferAttribute(a, row + i);
      deviation = Math.max(
        deviation,
        point.distanceTo(start.clone().lerp(end, i / 48)),
      );
    }
    return deviation;
  }
}
