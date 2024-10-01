'use client'

import { useEffect } from 'react';
import * as THREE from 'three';

const Hero = () => {
  useEffect(() => {
    // Escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Añadir estrellas
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const positionArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;

      positionArray.set([x, y, z], i * 3);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

    const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);

    camera.position.z = 5;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      starsMesh.rotation.y += 0.001; // Rotación de estrellas
      renderer.render(scene, camera);
    };

    animate();

    // Limpieza al desmontar el componente
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero">
      <h1 className="text-4xl text-white">Mi Portafolio</h1>
      <p className="text-xl text-white">Bienvenido a mi espacio</p>
      <style jsx>{`
        .hero {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Hero;
