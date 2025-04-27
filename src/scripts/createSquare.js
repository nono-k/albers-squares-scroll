import * as THREE from 'three';

export const createSquare = () => {
  const square = new THREE.Group();
  const numSquares = 7;
  const depthStep = 1;
  // const sizeStep = 0.85;
  const sizeStep = 0.9;

  const colors = [
    0xf5bd42, 0x6d615a, 0x2e130a, 0xb07229, 0x18154b, 0x150408, 0xdd3a05,
  ];

  for (let i = 0; i < numSquares; i++) {
    const outerSize = 4 * Math.pow(sizeStep, i);

    const innerSize = i > 2 ? 1 - outerSize : outerSize * 0.85;
    // const innerSize = outerSize * 0.85;
    // const innerSize = 1 - outerSize;

    const shape = new THREE.Shape();
    shape.moveTo(-outerSize / 2, -outerSize / 2);
    shape.lineTo(outerSize / 2, -outerSize / 2);
    shape.lineTo(outerSize / 2, outerSize / 2);
    shape.lineTo(-outerSize / 2, outerSize / 2);
    shape.lineTo(-outerSize / 2, -outerSize / 2);

    if (i !== numSquares - 1) {
      const hole = new THREE.Path();
      hole.moveTo(-innerSize / 2, -innerSize / 2);
      hole.lineTo(innerSize / 2, -innerSize / 2);
      hole.lineTo(innerSize / 2, innerSize / 2);
      hole.lineTo(-innerSize / 2, innerSize / 2);
      hole.lineTo(-innerSize / 2, -innerSize / 2);
      shape.holes.push(hole);
    }

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.5,
      bevelEnabled: false,
    });
    const material = new THREE.MeshPhongMaterial({
      color: colors[i],
      side: THREE.DoubleSide,
      shininess: 0,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -i * depthStep;

    square.add(mesh);
  }

  return square;
};
