// ===== THREE.JS BACKGROUND (bg.js) =====

const canvas = document.getElementById("bgCanvas");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 70;

// Resize function
function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();

// Create particles
const particlesCount = 1000;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 180;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 0.6,
  color: 0x8b5cf6,
  transparent: true,
  opacity: 0.75,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Mouse movement
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  particles.rotation.y += 0.0008;
  particles.rotation.x += 0.0004;

  // Smooth parallax effect
  camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
  camera.position.y += (-mouseY * 6 - camera.position.y) * 0.03;

  renderer.render(scene, camera);
}

animate();
