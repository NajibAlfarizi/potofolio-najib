"use client";

import React from "react";
import { ProjectData } from "@/types";
import { ArrowUpRight, ExternalLink, CheckCircle2, Layers, Cpu, Database } from "lucide-react";
import { playHover, playTick } from "@/lib/sound";

interface ProjectCardProps {
  project: ProjectData;
  onSelect: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const handleOpenModal = () => {
    playTick();
    onSelect(project);
  };

  return (
    <div
      onMouseEnter={playHover}
      className="group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-400 p-7 sm:p-9 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
    >
      {/* Top subtle decorative ambient glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none transition-opacity group-hover:opacity-25"
        style={{ backgroundColor: project.accentColor }}
      />

      <div>
        {/* Card Header: Number, Category & Status */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-lg font-mono text-xs font-bold text-white shadow-xs"
              style={{ backgroundColor: project.accentColor }}
            >
              PROYEK {project.number}
            </span>
            <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>LIVE IN PRODUCTION</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-sm font-medium text-blue-600">{project.tagline}</p>
        </div>

        {/* Summary Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
          {project.summary}
        </p>

        {/* Key Measurable Results Badges */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
          {project.results.slice(0, 4).map((res, idx) => (
            <div key={idx} className="font-mono">
              <div className="font-heading font-black text-slate-900 text-lg leading-tight" style={{ color: project.accentColor }}>
                {res.metric}
              </div>
              <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Features Preview */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Highlight Fitur Utama:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {project.features.slice(0, 4).map((feat) => (
              <div key={feat.title} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-800">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Tech Badges & Dual Action Buttons */}
      <div className="pt-6 border-t border-slate-100 space-y-4">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-sm active:scale-95"
            >
              <span>Kunjungi Live App ({new URL(project.links.demo).hostname})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            onClick={handleOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs tracking-wide transition-colors"
          >
            <span>Arsitektur & Detail</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
