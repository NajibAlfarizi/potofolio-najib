"use client";

import React, { useState, useEffect } from "react";
import { Activity, Server, Cpu, Database, ShieldCheck } from "lucide-react";

export const HeroHUD: React.FC = () => {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(20 + Math.random() * 8));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group p-5 rounded-2xl bg-[#0D0D0D]/80 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-purple-500/40 transition-all duration-300 font-mono text-xs w-full max-w-sm">
      {/* HUD Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="font-bold tracking-wider text-white">ENGINEER HUD</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>LIVE</span>
        </div>
      </div>

      {/* HUD Status Fields */}
      <div className="mt-3 space-y-2.5">
        <div className="flex items-center justify-between text-zinc-400 text-[11px]">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-zinc-500" />
            STATUS
          </span>
          <span className="text-emerald-400 font-medium">AVAILABLE FOR WORK</span>
        </div>

        <div className="flex items-center justify-between text-zinc-400 text-[11px]">
          <span className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-zinc-500" />
            API LATENCY
          </span>
          <span className="text-zinc-200">{latency} ms</span>
        </div>

        <div className="flex items-center justify-between text-zinc-400 text-[11px]">
          <span className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-zinc-500" />
            DATABASE
          </span>
          <span className="text-purple-400">PostgreSQL · Prisma</span>
        </div>

        <div className="flex items-center justify-between text-zinc-400 text-[11px]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
            ARCHITECTURE
          </span>
          <span className="text-blue-400">Multi-Tenant · Clean Arch</span>
        </div>
      </div>

      {/* Core Stack Pills */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="text-[10px] tracking-wider text-zinc-500 uppercase mb-2">
          PRIMARY STACK
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Next.js 15", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Socket.IO"].map(
            (tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-zinc-300 hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
