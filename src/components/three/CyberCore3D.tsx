"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const CyberCore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 400;
    const height = currentMount.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for mouse interaction rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Outer Icosahedron Wireframe
    const icosahedronGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const icosahedronMat = new THREE.MeshBasicMaterial({
      color: 0x7C3AED,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosahedron = new THREE.Mesh(icosahedronGeo, icosahedronMat);
    coreGroup.add(icosahedron);

    // 2. Inner Torus Knot
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.1, 0.22, 100, 16);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0x2563EB,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    coreGroup.add(torusKnot);

    // 3. Glowing Center Core Sphere
    const centerSphereGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const centerSphereMat = new THREE.MeshBasicMaterial({
      color: 0xA78BFA,
      wireframe: false,
    });
    const centerSphere = new THREE.Mesh(centerSphereGeo, centerSphereMat);
    coreGroup.add(centerSphere);

    // 4. Orbital Ring of Data Satellites
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x7C3AED);
    const color2 = new THREE.Color(0x06B6D4);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.6;

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Mouse Tracking for Interactive Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetRotationY = ((e.clientX - windowHalfX) / windowHalfX) * 0.7;
      targetRotationX = ((e.clientY - windowHalfY) / windowHalfY) * 0.7;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Autonomous rotations
      icosahedron.rotation.x += 0.003;
      icosahedron.rotation.y += 0.005;

      torusKnot.rotation.x -= 0.008;
      torusKnot.rotation.y += 0.01;

      particles.rotation.y += 0.004;
      particles.rotation.z += 0.002;

      // Smooth mouse interpolation
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      // Dispose geometries & materials
      icosahedronGeo.dispose();
      icosahedronMat.dispose();
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[380px] sm:h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
      title="Interactive 3D Holographic Cyber Core (Move mouse to rotate)"
    />
  );
};
