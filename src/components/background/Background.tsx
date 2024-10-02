"use client";

import { useEffect } from "react";
import * as THREE from "three";

const Background = () => {
  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1"; // Asegura que el fondo esté detrás del contenido
    document.body.appendChild(renderer.domElement);

    // Añadir estrellas
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3000;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);

    camera.position.z = 5;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      starsMesh.rotation.y += 0.001; // Rotación de las estrellas
      renderer.render(scene, camera);
    };
    animate();

    // Manejar redimensionamiento de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // Este componente no renderiza nada en el árbol de React
};

export default Background;
