import * as THREE from 'three';

export const setupInteractions = (camera, square) => {
  const mouse = new THREE.Vector2();
  let targetZ = camera.position.z;
  const minZ = -14;
  const maxZ = 8;
  let currentRotX = 0;
  let currentRotY = 0;

  const rotationEasing = 0.05;
  const moveEasing = 0.1;

  const updateMouse = e => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  const updateScroll = e => {
    e.preventDefault();
    targetZ -= e.deltaY * 0.01;
    targetZ = Math.max(minZ, Math.min(maxZ, targetZ));
  };

  const animateInteraction = () => {
    const targetRotX = (mouse.y * Math.PI) / 8;
    const targetRotY = (mouse.x * Math.PI) / 8;

    currentRotX += (targetRotX - currentRotX) * rotationEasing;
    currentRotY += (targetRotY - currentRotY) * rotationEasing;

    square.rotation.x = -currentRotX;
    square.rotation.y = currentRotY;
    camera.position.z += (targetZ - camera.position.z) * moveEasing;
  };

  return { updateMouse, updateScroll, animateInteraction };
};
