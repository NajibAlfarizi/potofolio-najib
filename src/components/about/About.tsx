"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Code2, Briefcase, Award, ArrowRight, User, CheckCircle2, MapPin } from "lucide-react";

export const About: React.FC = () => {
  const timeline = [
    {
      year: "2024",
      phase: "Fondasi Rekayasa Perangkat Lunak & Algoritma",
      description:
        "Eksplorasi mendalam di bidang Rekayasa Perangkat Lunak (Software Engineering), algoritma struktur data, desain database relasional, dan arsitektur type-safe berbasis TypeScript.",
      tags: ["TypeScript", "Data Structures", "Database Modeling", "Web Core"],
    },
    {
      year: "2025",
      phase: "Sistem Fullstack & Integrasi Hardware Kasir",
      description:
        "Membangun REST API berkecepatan tinggi dengan Express.js dan Next.js, manajemen database PostgreSQL dengan Prisma, integrasi WebSockets realtime, serta riset implementasi thermal printing ESC/POS.",
      tags: ["Next.js", "Express.js", "PostgreSQL", "Socket.IO", "ESC/POS 58mm"],
    },
    {
      year: "2026",
      phase: "Platform Produksi: IbiiOS & Konter System",
      description:
        "Merancang, membangun, dan merilis dua platform produksi enterprise: IbiiOS (sistem kasir modern 3-in-1 berkeandalan offline-first) dan Konter System (multi-tenant store OS untuk reparasi & konter HP).",
      tags: ["IbiiOS (ibiios.app)", "Konter System", "Multi-Tenant SaaS", "Offline-First", "Production"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-14 pb-6 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 tracking-wider uppercase mb-2">
            <User className="w-3.5 h-3.5" />
            <span>03 // TENTANG NAJIB ALFARIZI</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            PROFIL & FILOSOFI REKAYASA
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2 leading-relaxed">
            Mahasiswa Teknik Informatika yang berdedikasi membangun produk perangkat lunak tangguh,
            arsitektur backend yang skalabel, dan solusi bisnis operasional siap pakai.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Bio Card with Photo */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
            
            {/* Photo & Header */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-blue-600/30 shadow-md shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Najib Alfarizi"
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Najib Alfarizi
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-700 font-semibold mt-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>INFORMATICS ENGINEERING STUDENT</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>Indonesia • Open for Work & Projects</span>
                </div>
              </div>
            </div>

            {/* Bio Prose */}
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <p>
                Bagi saya, software engineering bukan sekadar menulis sintaks agar kode berjalan; 
                melainkan merancang <strong>solusi komprehensif</strong> yang benar-benar dipakai di lapangan.
              </p>
              <p>
                Mulai dari mencegah hilangnya catatan transaksi saat koneksi toko terputus (Offline-First di <strong>IbiiOS</strong>), 
                mengisolasi data pelanggan multi-cabang (Multi-Tenant di <strong>Konter System</strong>), 
                hingga mengendalikan cetakan nota kasir secara langsung via Bluetooth ESC/POS tanpa kendala.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-5 border-t border-slate-200 space-y-3 font-mono text-xs">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                PRINSIP KERJA & NILAI UTAMA:
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Production-First & Business Value Mindset</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clean, Modular & Type-Safe Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Komunikasi Transparan & Pengiriman Tepat Waktu</span>
              </div>
            </div>

          </div>

          {/* Right Timeline */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="font-mono text-xs text-slate-500 uppercase tracking-wider pb-4 mb-6 border-b border-slate-200 flex items-center justify-between font-semibold">
              <span>PERJALANAN & REKAM JEJAK TEKNIS</span>
              <span className="text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                2024 - SEKARANG
              </span>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-200">
              {timeline.map((item) => (
                <div key={item.year} className="relative group">
                  {/* Marker */}
                  <div className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-100 group-hover:scale-125 transition-transform" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200">
                        {item.year}
                      </span>
                      <h4 className="font-heading font-bold text-slate-900 text-base">
                        {item.phase}
                      </h4>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-medium shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
