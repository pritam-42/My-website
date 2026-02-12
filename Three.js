// Three.js Background Animation
(function() {
    'use strict';
    
    const container = document.getElementById('three-container');
    if (!container) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 5;
    
    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3)
    );
    
    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.015,
        color: 0x6366f1,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
    );
    scene.add(particlesMesh);
    
    // Add gradient spheres for depth
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const spheres = [];
    
    for (let i = 0; i < 5; i++) {
        const material = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x6366f1 : 0xec4899,
            transparent: true,
            opacity: 0.1,
            wireframe: true
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, material);
        sphere.position.set(
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
        );
        sphere.scale.set(
            Math.random() + 0.5,
            Math.random() + 0.5,
            Math.random() + 0.5
        );
        
        spheres.push(sphere);
        scene.add(sphere);
    }
    
    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Clock for animation
    const clock = new THREE.Clock();
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        // Rotate particles
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.03;
        
        // Animate spheres
        spheres.forEach((sphere, index) => {
            sphere.rotation.y = elapsedTime * (0.1 + index * 0.02);
            sphere.rotation.x = elapsedTime * (0.05 + index * 0.01);
            sphere.position.y = Math.sin(elapsedTime + index) * 0.5;
        });
        
        // Mouse parallax effect
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Update theme colors
    function updateThemeColors() {
        const isDark = document.body.classList.contains('dark-theme');
        const color = isDark ? 0x818cf8 : 0x6366f1;
        particlesMaterial.color.setHex(color);
    }
    
    // Listen for theme changes
    const themeObserver = new MutationObserver(updateThemeColors);
    themeObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
})();