"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, MessageSquare, Terminal, ExternalLink, Code2 } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { SplitText } from "./SplitText";
import { Magnetic } from "../effects/Magnetic";
import { NumberCounter } from "../effects/NumberCounter";
import { playHover, playTick } from "@/lib/sound";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
      {/* Interactive Light Background Canvas */}
      <HeroBackground />

      {/* Ambient soft glow shapes */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Professional Status Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-mono text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-blue-700">NAJIB ALFARIZI</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600 font-medium">FULLSTACK & SYSTEMS ENGINEER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <SplitText
                text="MEMBANGUN SISTEM DIGITAL PRODUKSI."
                className="font-heading font-black tracking-tight text-4xl sm:text-6xl xl:text-7xl text-slate-900 leading-[1.08]"
              />
            </div>

            {/* Subtitle / Bio */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Software Engineer berfokus pada rekayasa sistem perangkat lunak yang tangguh, cepat, dan siap bisnis. 
              Pencipta platform produksi <strong className="text-blue-700 font-semibold">IbiiOS</strong> (Modern 3-in-1 Point of Sales) dan <strong className="text-blue-700 font-semibold">Konter System</strong> (Multi-Tenant Store OS).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  data-cursor="view"
                  onMouseEnter={playHover}
                  onClick={playTick}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>Lihat 2 Proyek Utama</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  onClick={playTick}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              <a
                href="#about"
                onMouseEnter={playHover}
                onClick={playTick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
              >
                <span>Tentang Najib</span>
              </a>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 w-full max-w-xl">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 flex items-center">
                  <NumberCounter to={2} suffix="" />
                  <span className="text-blue-600 ml-1">Flagship</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                  Production Platforms
                </div>
              </div>

              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-blue-600">
                  <NumberCounter to={100} suffix="%" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                  Offline-First & Reliable
                </div>
              </div>

              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-600">
                  <NumberCounter to={58} suffix="mm" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                  ESC/POS Thermal Ready
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Craft Executive Profile Card with Najib's Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-20 transition duration-1000 group-hover:opacity-40" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xl">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-md ring-1 ring-slate-900/5 mb-6 group">
                  <Image
                    src="/images/profile.jpg"
                    alt="Najib Alfarizi - Software Engineer"
                    fill
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />

                  {/* Gradient bottom overlay for badge legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white tracking-wide">
                        <span>Najib Alfarizi</span>
                        <CheckCircle2 className="w-4 h-4 text-blue-400 fill-blue-400 text-white inline" />
                      </div>
                      <div className="text-[11px] text-slate-200 font-mono mt-0.5">
                        Informatics Engineering Student & Engineer
                      </div>
                    </div>
                  </div>

                  {/* Floating Live Badge on photo */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 text-[10px] font-mono text-slate-800 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>INDONESIA (WIB)</span>
                  </div>
                </div>

                {/* Profile Details & Flagship Links */}
                <div className="space-y-4">
                  
                  {/* Two Featured Projects Pills */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Flagship Production Systems:
                    </div>

                    <a
                      href="https://ibiios.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200/70 transition-colors group/item"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                          01
                        </span>
                        <div>
                          <div className="font-heading font-bold text-xs text-slate-900 group-hover/item:text-blue-700 transition-colors">
                            IbiiOS (ibiios.app)
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            Modern 3-in-1 POS • Offline-First
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-600 group-hover/item:translate-x-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://konter-system.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200/70 transition-colors group/item"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                          02
                        </span>
                        <div>
                          <div className="font-heading font-bold text-xs text-slate-900 group-hover/item:text-sky-700 transition-colors">
                            Konter System (JuraganKonter)
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            Multi-Tenant POS & Repair Kanban
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-sky-600 group-hover/item:translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Core Tech Stack Tags */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {["Next.js 15", "TypeScript", "PostgreSQL", "Express.js", "Prisma", "ESC/POS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
