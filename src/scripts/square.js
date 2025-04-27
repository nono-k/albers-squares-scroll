import { createSquare } from './createSquare';
import { initScene } from './initThreeScene';
import { setupInteractions } from './interaction';
import { addLights } from './lighting';

const canvas = document.getElementById('square-canvas');
const { scene, camera, renderer } = initScene(canvas);
const square = createSquare();
scene.add(square);
addLights(scene);

const { updateMouse, updateScroll, animateInteraction } = setupInteractions(
  camera,
  square,
);

document.addEventListener('mousemove', updateMouse);
document.addEventListener('wheel', updateScroll, { passive: false });
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const animate = () => {
  requestAnimationFrame(animate);
  animateInteraction();
  renderer.render(scene, camera);
};

animate();
