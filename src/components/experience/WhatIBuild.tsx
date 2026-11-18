"use client";

import React, { useState } from "react";
import { Server, Database, ShoppingBag, Layers, Cloud, ArrowRight, CheckCircle2, Cpu, Printer, Sparkles } from "lucide-react";

interface ModuleData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  icon: React.ReactNode;
  technologies: string[];
  architectureNodes: {
    name: string;
    type: "client" | "gateway" | "service" | "db";
  }[];
  description: string;
}

export const WhatIBuild: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState("pos-systems");

  const modules: ModuleData[] = [
    {
      id: "pos-systems",
      title: "SISTEM POS & RITEL",
      category: "OPERASIONAL RITEL & F&B",
      tagline: "Point of Sale 3-in-1, Barcode IMEI & Arsitektur Offline-First",
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      technologies: ["Next.js", "IndexedDB", "PostgreSQL", "Prisma", "ESC/POS Thermal"],
      description:
        "Sistem kasir digital modern yang menyatukan ritel, restoran (QR self-order + Kitchen Display), dan reparasi. Tetap dapat beroperasi saat koneksi offline dan langsung mencetak nota ke printer thermal Bluetooth.",
      architectureNodes: [
        { name: "POS Client / PWA", type: "client" },
        { name: "IndexedDB Offline Cache", type: "service" },
        { name: "Next.js Edge API", type: "gateway" },
        { name: "PostgreSQL Master DB", type: "db" },
      ],
    },
    {
      id: "saas",
      title: "MULTI-TENANT SAAS",
      category: "PLATFORM CLOUD TERISOLASI",
      tagline: "Tenant Data Isolation, RBAC & Subscription Control",
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      technologies: ["Next.js", "TypeScript", "Express.js", "Prisma Middleware", "Docker"],
      description:
        "Arsitektur SaaS multi-tenant dengan isolasi data ketat antar cabang atau pemilik usaha, otentikasi role-based (RBAC), serta pemisahan kasir, admin, dan superadmin.",
      architectureNodes: [
        { name: "Multi-Tenant Client", type: "client" },
        { name: "Tenant Scope Middleware", type: "gateway" },
        { name: "Business Service Engine", type: "service" },
        { name: "Tenant-Isolated PostgreSQL", type: "db" },
      ],
    },
    {
      id: "hardware",
      title: "HARDWARE & THERMAL",
      category: "INTEGRASI PERIPHERAL",
      tagline: "Driver Cetak Struk ESC/POS Bluetooth & Barcode Scanner",
      icon: <Printer className="w-5 h-5 text-emerald-600" />,
      technologies: ["ESC/POS Standard", "Web Bluetooth API", "RFCOMM", "Capacitor", "Raw Bytes"],
      description:
        "Menghubungkan aplikasi web langsung ke hardware operasional toko: printer kasir thermal 58mm/80mm via Bluetooth/USB tanpa dialog print browser bawaan, dan pemindai barcode kamera.",
      architectureNodes: [
        { name: "Browser / PWA Web App", type: "client" },
        { name: "ESC/POS Byte Formatter", type: "service" },
        { name: "Bluetooth RFCOMM Socket", type: "gateway" },
        { name: "Thermal Printer 58mm/80mm", type: "db" },
      ],
    },
    {
      id: "backend",
      title: "BACKEND & APIS",
      category: "PERFORMA TINGGI & TYPE-SAFE",
      tagline: "RESTful Endpoints, WebSockets & Integritas Transaksi ACID",
      icon: <Server className="w-5 h-5 text-sky-600" />,
      technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Socket.IO"],
      description:
        "Pengembangan backend handal dengan validasi skema runtime, penanganan race conditions pada stok barang, enkripsi JWT, dan siaran data instan lewat WebSockets Socket.IO.",
      architectureNodes: [
        { name: "Client Applications", type: "client" },
        { name: "Express REST / WebSocket", type: "gateway" },
        { name: "Background Worker Queue", type: "service" },
        { name: "PostgreSQL Database", type: "db" },
      ],
    },
    {
      id: "cloud",
      title: "CLOUD & DEVOPS",
      category: "INFRASTRUKTUR & DEPLOYMENT",
      tagline: "Automated CI/CD, Containerization & Linux Production VPS",
      icon: <Cloud className="w-5 h-5 text-violet-600" />,
      technologies: ["Docker", "Linux Ubuntu", "Nginx", "GitHub Actions", "Vercel"],
      description:
        "Deployment aplikasi yang aman dan teruji, orkestrasi container Docker, konfigurasi Nginx reverse proxy dengan sertifikat SSL/TLS otomatis, dan automasi deployment via GitHub Actions.",
      architectureNodes: [
        { name: "GitHub Actions CI/CD", type: "client" },
        { name: "Nginx Reverse Proxy", type: "gateway" },
        { name: "Dockerized Containers", type: "service" },
        { name: "Linux Production VPS", type: "db" },
      ],
    },
  ];

  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <section id="what-i-build" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 tracking-wider uppercase">
            <span>02 // SPESIALISASI & KAPABILITAS TEKNIKAL</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            KEAHLIAN REKAYASA SISTEM
          </h2>
          <p className="text-slate-600 max-w-2xl text-base font-normal leading-relaxed">
            Bukan sekadar membuat tampilan website brosur sederhana, melainkan merancang sistem software 
            interaktif berarsitektur bersih yang siap menangani alur bisnis nyata.
          </p>
        </div>

        {/* Modules Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {modules.map((mod) => {
            const isActive = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`p-4 rounded-2xl text-left transition-all border font-mono text-xs flex flex-col justify-between h-34 shadow-xs ${
                  isActive
                    ? "bg-white border-blue-600 ring-2 ring-blue-600/20 text-slate-900 shadow-md"
                    : "bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-100">{mod.icon}</div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{mod.category}</div>
                  <div className="font-heading font-bold text-slate-900 tracking-tight text-sm mt-0.5">{mod.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architecture Display */}
        <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-10 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold">
                <span>{activeModule.category}</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                {activeModule.tagline}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {activeModule.description}
              </p>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mb-2.5">
                  TEKNOLOGI UTAMA YANG DIGUNAKAN
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModule.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Flow Diagram */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-5 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>ALUR PIPELINE ARSITEKTUR</span>
                </span>
                <span className="text-slate-400">REALTIME DIAGRAM</span>
              </div>

              {/* Flow Nodes Pipeline */}
              <div className="space-y-3">
                {activeModule.architectureNodes.map((node, index) => (
                  <div key={node.name} className="flex flex-col items-center">
                    <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition-colors shadow-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                          0{index + 1}
                        </span>
                        <span className="font-bold text-slate-900 text-xs">
                          {node.name}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {node.type}
                      </span>
                    </div>

                    {index < activeModule.architectureNodes.length - 1 && (
                      <div className="flex flex-col items-center my-1 text-blue-600">
                        <div className="w-[1.5px] h-3 bg-blue-300" />
                        <ArrowRight className="w-3 h-3 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
