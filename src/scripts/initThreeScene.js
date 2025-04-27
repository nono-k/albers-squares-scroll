import * as THREE from 'three';

export const initScene = canvas => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffecbd);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  return { scene, camera, renderer };
};
