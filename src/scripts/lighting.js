import * as THREE from 'three';

export const addLights = scene => {
  const ambient = new THREE.AmbientLight(0xffffff, 0.9);
  const front = new THREE.DirectionalLight(0xffffff, 0.7);
  front.position.set(0, 0, 5);

  const side = new THREE.DirectionalLight(0xffffff, 0.3);
  side.position.set(5, 5, 0);

  scene.add(ambient, front, side);
};
