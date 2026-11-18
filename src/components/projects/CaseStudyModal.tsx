"use client";

import React, { useEffect } from "react";
import { ProjectData } from "@/types";
import { X, CheckCircle2, AlertCircle, ExternalLink, GitCommit, ArrowUpRight } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { GitTimeline } from "./GitTimeline";

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-900">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-lg font-mono text-xs font-bold text-white shadow-xs"
              style={{ backgroundColor: project.accentColor }}
            >
              PROYEK {project.number}
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs font-mono">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-xs transition-colors"
              >
                <span>Buka Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Tutup Studi Kasus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-10">
          
          {/* Tagline & Summary Hero */}
          <div className="space-y-4 pb-6 border-b border-slate-100">
            <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
              {project.tagline}
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>

            {/* Results Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div
                    className="font-heading font-black text-2xl"
                    style={{ color: project.accentColor }}
                  >
                    {res.metric}
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 uppercase tracking-wider mt-0.5">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 01 Problem & 02 Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-rose-700 uppercase font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>01 // TANTANGAN BISNIS & PROBLEM</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 uppercase font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>02 // PENDEKATAN TEKNIKAL & SOLUSI</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* 03 System Architecture */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-blue-700 uppercase font-bold tracking-wider">
              03 // ARSITEKTUR & INTEGRASI SISTEM
            </div>
            <p className="text-slate-600 text-xs font-mono">{project.architecture.overview}</p>
            <ArchitectureDiagram
              nodes={project.architecture.nodes}
              edges={project.architecture.edges}
              accentColor={project.accentColor}
            />
          </div>

          {/* 04 Core Features */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-indigo-700 uppercase font-bold tracking-wider">
              04 // FITUR & MODUL UNGGULAN
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat) => (
                <div key={feat.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{feat.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {feat.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 05 Tech Stack Badges */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
              05 // TEKNOLOGI & INFRASTRUKTUR
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 06 Engineering Challenges & Solutions */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-amber-700 uppercase font-bold tracking-wider">
              06 // TANTANGAN ARSITEKTURAL & RESOLUSI
            </div>
            <div className="space-y-3">
              {project.challenges.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="text-rose-800 font-medium">
                    <span className="font-bold uppercase font-mono mr-2">TANTANGAN:</span>
                    {c.challenge}
                  </div>
                  <div className="text-emerald-800 font-medium pt-2 border-t border-slate-200">
                    <span className="font-bold uppercase font-mono mr-2">SOLUSI:</span>
                    {c.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 07 Git Commit Timeline */}
          <div className="pt-4 border-t border-slate-200">
            <GitTimeline commits={project.gitCommits} accentColor={project.accentColor} />
          </div>

          {/* Bottom Live Link Button */}
          {project.links?.demo && (
            <div className="pt-6 border-t border-slate-200 flex justify-center">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95"
              >
                <span>Buka Aplikasi Live: {project.title} ({new URL(project.links.demo).hostname})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
