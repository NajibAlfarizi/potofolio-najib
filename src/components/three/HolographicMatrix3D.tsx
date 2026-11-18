"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Activity, Cpu, Database, Network, ShieldCheck, RefreshCw, Eye } from "lucide-react";
import { TextScramble } from "../effects/TextScramble";

export const HolographicMatrix3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedLayer, setSelectedLayer] = useState<number>(0);
  const [hudTelemetry, setHudTelemetry] = useState({
    fps: 60,
    packets: 14820,
    latency: 22,
    clusterHealth: "OPTIMAL",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHudTelemetry((prev) => ({
        ...prev,
        packets: prev.packets + Math.floor(Math.random() * 45),
        latency: Math.floor(19 + Math.random() * 6),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 800;
    const height = currentMount.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 3.5, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Master Group for 3D Orbit
    const matrixGroup = new THREE.Group();
    scene.add(matrixGroup);

    // 2. Base Grid Plane (Ground telemetry)
    const gridHelper = new THREE.GridHelper(12, 24, 0x7C3AED, 0x2563EB);
    (gridHelper.material as THREE.Material).opacity = 0.25;
    (gridHelper.material as THREE.Material).transparent = true;
    gridHelper.position.y = -2;
    matrixGroup.add(gridHelper);

    // 3. Architecture Layer 1: Client Edge (Y = 1.8)
    const clientLayerGroup = new THREE.Group();
    clientLayerGroup.position.y = 1.8;
    matrixGroup.add(clientLayerGroup);

    const clientNodeGeo = new THREE.OctahedronGeometry(0.35);
    const clientNodeMat = new THREE.MeshBasicMaterial({
      color: 0xA78BFA,
      wireframe: true,
    });

    [-2.5, 0, 2.5].forEach((xPos) => {
      const node = new THREE.Mesh(clientNodeGeo, clientNodeMat);
      node.position.x = xPos;
      clientLayerGroup.add(node);
    });

    // 4. Architecture Layer 2: API Gateway & Services (Y = 0)
    const gatewayLayerGroup = new THREE.Group();
    matrixGroup.add(gatewayLayerGroup);

    const gatewayGeo = new THREE.BoxGeometry(1.2, 0.6, 1.2);
    const gatewayMat = new THREE.MeshBasicMaterial({
      color: 0x2563EB,
      wireframe: true,
    });
    const gateway = new THREE.Mesh(gatewayGeo, gatewayMat);
    gatewayLayerGroup.add(gateway);

    // Sub-service satellites
    const subNodeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const subNodeMat = new THREE.MeshBasicMaterial({
      color: 0x06B6D4,
      wireframe: true,
    });

    const subNodes: THREE.Mesh[] = [];
    [-2, 2].forEach((xPos) => {
      [-1, 1].forEach((zPos) => {
        const sub = new THREE.Mesh(subNodeGeo, subNodeMat);
        sub.position.set(xPos, 0, zPos);
        gatewayLayerGroup.add(sub);
        subNodes.push(sub);
      });
    });

    // 5. Architecture Layer 3: Database & Cache Cluster (Y = -1.5)
    const dbLayerGroup = new THREE.Group();
    dbLayerGroup.position.y = -1.4;
    matrixGroup.add(dbLayerGroup);

    const dbCylinderGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.5, 16);
    const dbCylinderMat = new THREE.MeshBasicMaterial({
      color: 0x10B981,
      wireframe: true,
    });

    [-1.8, 1.8].forEach((xPos) => {
      const dbNode = new THREE.Mesh(dbCylinderGeo, dbCylinderMat);
      dbNode.position.x = xPos;
      dbLayerGroup.add(dbNode);
    });

    // 6. Data Stream Beam Particles
    const streamParticleCount = 120;
    const streamGeo = new THREE.BufferGeometry();
    const streamPos = new Float32Array(streamParticleCount * 3);

    for (let i = 0; i < streamParticleCount; i++) {
      streamPos[i * 3] = (Math.random() - 0.5) * 6;
      streamPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      streamPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    streamGeo.setAttribute("position", new THREE.BufferAttribute(streamPos, 3));
    const streamMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x7C3AED,
      transparent: true,
      opacity: 0.7,
    });
    const streamParticles = new THREE.Points(streamGeo, streamMat);
    matrixGroup.add(streamParticles);

    // Mouse Drag Rotation Physics
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotationVelocityX = 0.002;
    let rotationVelocityY = 0.004;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        const rect = currentMount.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        matrixGroup.rotation.y += x * 0.002;
        matrixGroup.rotation.x += y * 0.002;
        return;
      }
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      matrixGroup.rotation.y += deltaX * 0.008;
      matrixGroup.rotation.x += deltaY * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

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

    // Render Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        matrixGroup.rotation.y += rotationVelocityY;
      }

      // Rotate individual elements
      clientLayerGroup.rotation.y -= 0.008;
      gateway.rotation.y += 0.01;
      gateway.rotation.x += 0.005;

      subNodes.forEach((s, idx) => {
        s.rotation.y += (idx % 2 === 0 ? 1 : -1) * 0.015;
      });

      // Stream particles flow
      const posArray = streamGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < streamParticleCount; i++) {
        posArray[i * 3 + 1] -= 0.02;
        if (posArray[i * 3 + 1] < -2) {
          posArray[i * 3 + 1] = 2;
        }
      }
      streamGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (currentMount) {
        currentMount.removeEventListener("mousedown", onMouseDown);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const layers = [
    { name: "CLIENT & GLOBAL EDGE", tech: "Next.js 15 · CDN · Mobile", desc: "Edge routing, global caching, client state synchronization" },
    { name: "API GATEWAY & RBAC", tech: "Express · JWT · Rate Limit", desc: "Multi-tenant routing, schema validations, reverse proxy" },
    { name: "SERVICE MESH & WORKERS", tech: "Node.js · AI Agents · Socket.IO", desc: "Real-time WebSockets, background queue runners, ESC/POS" },
    { name: "DISTRIBUTED DATABASE", tech: "PostgreSQL · Prisma · Docker", desc: "ACID transactions, tenant-isolated schemas, connection pooling" },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#070707] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase mb-1">
              <Network className="w-3.5 h-3.5" />
              <span>02 // THREE.JS 3D SPATIAL ENGINE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              <TextScramble text="HOLOGRAPHIC ARCHITECTURE MATRIX" />
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
              Visualisasi 3D interaktif topologi sistem backend, database distributed, dan edge gateway.
              Drag untuk memutar matriks 360 derajat dalam ruang tiga dimensi.
            </p>
          </div>

          {/* Interactive Hint */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-purple-300">
            <Eye className="w-3.5 h-3.5 animate-pulse" />
            <span>DRAG TO ORBIT 3D MODEL</span>
          </div>
        </div>

        {/* Main 3D Canvas Box with Cyber HUD */}
        <div className="rounded-2xl bg-[#0A0A0A] border border-white/15 overflow-hidden shadow-2xl relative">
          {/* Top HUD Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#0D0D0D]/90 border-b border-white/10 font-mono text-xs z-20 relative">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-bold">CLUSTER: {hudTelemetry.clusterHealth}</span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-zinc-400 hidden sm:inline">
                PACKETS: <span className="text-purple-400">{hudTelemetry.packets.toLocaleString()}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-zinc-400">
              <span>LATENCY: <span className="text-emerald-400">{hudTelemetry.latency} ms</span></span>
              <span>RENDER: <span className="text-blue-400">Three.js WebGL</span></span>
            </div>
          </div>

          {/* 3D Canvas Mount */}
          <div
            ref={mountRef}
            className="w-full h-[450px] sm:h-[550px] relative cursor-grab active:cursor-grabbing bg-radial from-purple-950/20 via-transparent to-transparent"
          />

          {/* Bottom Layer Selector Chips */}
          <div className="p-4 sm:p-6 bg-[#0D0D0D]/90 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs z-20 relative">
            {layers.map((l, idx) => (
              <div
                key={l.name}
                onClick={() => setSelectedLayer(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  selectedLayer === idx
                    ? "bg-purple-600/20 border-purple-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                    : "bg-white/[0.02] border-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-zinc-500 uppercase">LAYER 0{idx + 1}</span>
                  {selectedLayer === idx && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                </div>
                <div className="font-bold text-white text-xs">{l.name}</div>
                <div className="text-[10px] text-purple-300 mt-1">{l.tech}</div>
                <div className="text-[10px] text-zinc-500 mt-1 line-clamp-1">{l.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
