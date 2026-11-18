"use client";

import React, { useState } from "react";
import { techStackNodes } from "@/data/stack";
import { TechNodeItem } from "@/types";
import { Layers, CheckCircle, Cpu, Network, Sparkles } from "lucide-react";

export const TechUniverse: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechNodeItem>(techStackNodes[0]);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  const activeId = hoveredTechId || selectedTech.id;
  const activeItem = techStackNodes.find((n) => n.id === activeId) || selectedTech;

  return (
    <section id="tech-universe" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 tracking-wider uppercase mb-2">
            <Network className="w-3.5 h-3.5" />
            <span>05 // TEKNOLOGI & ARSITEKTUR KODE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            EKOSISTEM TECH STACK
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2 leading-relaxed">
            Bukan sekadar deretan icon statis, melainkan ekosistem teknologi yang saling terintegrasi 
            dalam alur produksi backend, database, dan frontend.
          </p>
        </div>

        {/* Constellation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Grid */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-xs">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200 font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-bold text-slate-900 tracking-wide">NAJIB // PRODUCTION STACK</span>
              </div>
              <span className="text-slate-500 text-[11px] hidden sm:inline">PILIH TEKNOLOGI UNTUK INSPEKSI RELASI</span>
            </div>

            {/* Nodes Interactive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {techStackNodes.map((tech) => {
                const isSelected = tech.id === activeId;
                const isConnected = activeItem.connections.includes(tech.id);

                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech)}
                    onMouseEnter={() => setHoveredTechId(tech.id)}
                    onMouseLeave={() => setHoveredTechId(null)}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 border font-mono text-xs relative shadow-2xs ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white shadow-md scale-102 z-10"
                        : isConnected
                        ? "bg-blue-50 border-blue-200 text-blue-900 font-semibold"
                        : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[9px] uppercase font-bold tracking-wider ${
                          isSelected ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {tech.category}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                      {isConnected && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <div
                      className={`font-heading font-bold text-sm ${
                        isSelected ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {tech.name}
                    </div>
                    <div
                      className={`text-[10px] mt-1 truncate ${
                        isSelected ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {tech.role}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Tech Inspector Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs font-mono text-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-slate-500 uppercase tracking-wider text-[11px] font-semibold">
                PROFIL TEKNOLOGI
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200 text-[10px] font-bold">
                {activeItem.level}
              </span>
            </div>

            <div>
              <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
                {activeItem.category}
              </div>
              <h3 className="font-heading font-black text-2xl text-slate-900 tracking-tight mt-0.5">
                {activeItem.name}
              </h3>
              <p className="text-slate-600 font-normal text-xs font-sans mt-2.5 leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            {/* Role in Stack */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                PERAN PADA SISTEM PRODUKSI
              </div>
              <div className="font-bold text-blue-700 text-xs">{activeItem.role}</div>
            </div>

            {/* Connected Nodes */}
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                KONEKSI ARSITEKTUR LANGSUNG
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeItem.connections.map((connId) => {
                  const connItem = techStackNodes.find((n) => n.id === connId);
                  return (
                    <span
                      key={connId}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] shadow-2xs font-medium"
                    >
                      → {connItem?.name || connId}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
