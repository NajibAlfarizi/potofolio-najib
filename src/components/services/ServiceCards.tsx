"use client";

import React from "react";
import { freelanceServices } from "@/data/services";
import { CheckCircle2, ArrowUpRight, Clock, Sparkles } from "lucide-react";

export const ServiceCards: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // LAYANAN & PENGEMBANGAN SOFTWARE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            SOLUSI YANG DAPAT SAYA BANGUN
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mt-2 leading-relaxed">
            Paket solusi end-to-end untuk kebutuhan startup, UMKM, bisnis ritel, 
            maupun perusahaan yang membutuhkan sistem custom siap pakai dengan standar industri.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceServices.map((service) => (
            <div
              key={service.number}
              className="group p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg relative overflow-hidden"
            >
              <div>
                {/* Header: Number & Timeline */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <span className="font-mono text-base font-black text-blue-600">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-600 px-2.5 py-1 rounded-full bg-slate-100">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading font-black text-xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="font-mono text-xs text-blue-700 font-semibold mt-1 mb-4">{service.tagline}</p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    OUTPUT & DELIVERABLES:
                  </div>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 text-xs font-mono font-bold text-slate-800 transition-all group/btn shadow-2xs"
                >
                  <span>Mulai Proyek Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
