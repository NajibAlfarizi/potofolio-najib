"use client";

import React, { useState } from "react";
import { GitBranch, CheckCircle2, Cloud, ShieldCheck, ArrowRight, Activity, Terminal, Play } from "lucide-react";

export const BuildShipScale: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"build" | "ship" | "scale">("ship");
  const [deployStep, setDeployStep] = useState(4); // completed by default
  const [isDeploying, setIsDeploying] = useState(false);

  const triggerDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => setDeployStep(2), 500);
    setTimeout(() => setDeployStep(3), 1000);
    setTimeout(() => {
      setDeployStep(4);
      setIsDeploying(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="font-mono text-xs text-blue-600 font-semibold tracking-wider uppercase mb-1">
            METODOLOGI & ALUR KERJA // 03
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            BUILD. SHIP. SCALE.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-1 leading-relaxed">
            Filosofi rekayasa perangkat lunak menyeluruh dari baris kode lokal hingga deployment cloud terskala.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 w-fit mb-8 font-mono text-xs shadow-xs">
          <button
            onClick={() => setActiveTab("build")}
            className={`px-5 py-2.5 rounded-xl transition-all font-bold ${
              activeTab === "build"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            01. BUILD
          </button>
          <button
            onClick={() => setActiveTab("ship")}
            className={`px-5 py-2.5 rounded-xl transition-all font-bold ${
              activeTab === "ship"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            02. SHIP
          </button>
          <button
            onClick={() => setActiveTab("scale")}
            className={`px-5 py-2.5 rounded-xl transition-all font-bold ${
              activeTab === "scale"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            03. SCALE
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          {activeTab === "build" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Clean Code", desc: "TypeScript end-to-end, arsitektur modular, dan linting terstruktur.", icon: "01" },
                { title: "Database Schema", desc: "Pemodelan relasional, migrasi skema deklaratif, dan indexing Prisma ORM.", icon: "02" },
                { title: "REST & WebSockets", desc: "Endpoint Express.js, validasi skema runtime Zod, dan channel Socket.IO.", icon: "03" },
                { title: "Modern UI/UX", desc: "Tailwind CSS, clean design system, dan interaktivitas micro yang mulus.", icon: "04" },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-mono text-xs flex items-center justify-center font-bold">
                    {item.icon}
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-base">{item.title}</div>
                  <div className="text-slate-600 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ship" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="font-mono text-xs text-slate-600">
                  <span className="text-slate-900 font-bold">SIMULASI OTOMASI:</span> Automated CI/CD Deployment Pipeline
                </div>
                <button
                  onClick={triggerDeploy}
                  disabled={isDeploying}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-mono text-xs font-semibold shadow-xs transition-all active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isDeploying ? "SIMULASI GIT PUSH..." : "SIMULASIKAN PIPELINE DEPLOY"}</span>
                </button>
              </div>

              {/* Deployment Steps Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                {/* Step 1 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    deployStep >= 1 ? "bg-blue-50/70 border-blue-300 text-slate-900 shadow-xs" : "bg-slate-50 border-slate-200 text-slate-400"
                  }`}
                >
                  <div className="text-[10px] text-slate-500 font-bold mb-1">STAGE 01</div>
                  <div className="font-bold text-sm">LOCAL COMMIT</div>
                  <div className="text-[11px] text-slate-600 mt-1 font-mono">git push origin main</div>
                  {deployStep >= 1 && <div className="text-[10px] text-blue-700 font-semibold mt-2">✓ Commit pushed</div>}
                </div>

                {/* Step 2 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    deployStep >= 2 ? "bg-blue-50/70 border-blue-300 text-slate-900 shadow-xs" : "bg-slate-50 border-slate-200 text-slate-400"
                  }`}
                >
                  <div className="text-[10px] text-slate-500 font-bold mb-1">STAGE 02</div>
                  <div className="font-bold text-sm">GITHUB ACTIONS</div>
                  <div className="text-[11px] text-slate-600 mt-1 font-mono">Lint & Typecheck Test</div>
                  {deployStep >= 2 && <div className="text-[10px] text-blue-700 font-semibold mt-2">✓ 0 Errors passed</div>}
                </div>

                {/* Step 3 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    deployStep >= 3 ? "bg-indigo-50/70 border-indigo-300 text-slate-900 shadow-xs" : "bg-slate-50 border-slate-200 text-slate-400"
                  }`}
                >
                  <div className="text-[10px] text-slate-500 font-bold mb-1">STAGE 03</div>
                  <div className="font-bold text-sm">DOCKER CONTAINER</div>
                  <div className="text-[11px] text-slate-600 mt-1 font-mono">Prisma Migrate & Build</div>
                  {deployStep >= 3 && <div className="text-[10px] text-indigo-700 font-semibold mt-2">✓ Image tagged</div>}
                </div>

                {/* Step 4 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    deployStep >= 4 ? "bg-emerald-50 border-emerald-300 text-emerald-950 shadow-xs" : "bg-slate-50 border-slate-200 text-slate-400"
                  }`}
                >
                  <div className="text-[10px] text-emerald-700 font-bold mb-1">STAGE 04</div>
                  <div className="font-bold text-sm text-emerald-800">CLOUD PRODUCTION</div>
                  <div className="text-[11px] text-emerald-900 mt-1 font-mono">Zero-Downtime Rollout</div>
                  {deployStep >= 4 && <div className="text-[10px] text-emerald-700 font-bold mt-2">✓ DEPLOYMENT SUKSES</div>}
                </div>
              </div>
            </div>
          )}

          {activeTab === "scale" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Cloud VPS & Docker", desc: "Isolasi instance, persistent volume, dan Nginx reverse proxy SSL.", icon: "01" },
                { title: "Database Indexing", desc: "Connection pooling, vacuum rutin, dan query profiling PostgreSQL.", icon: "02" },
                { title: "Real-time Monitoring", desc: "Health check endpoints, latency tracking, dan pemantauan error.", icon: "03" },
                { title: "Multi-Tenant Growth", desc: "Penyediaan merchant baru secara otomatis dan skema database skalabel.", icon: "04" },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-mono text-xs flex items-center justify-center font-bold">
                    {item.icon}
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-base">{item.title}</div>
                  <div className="text-slate-600 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
