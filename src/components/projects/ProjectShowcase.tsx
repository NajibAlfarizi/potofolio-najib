"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectData } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { FolderGit2, Sparkles, CheckCircle2 } from "lucide-react";

interface ProjectShowcaseProps {
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  selectedProjectId,
  onClearSelectedProject,
}) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  // Handle external selection from CommandPalette if any
  React.useEffect(() => {
    if (selectedProjectId) {
      const found = projects.find((p) => p.id === selectedProjectId);
      if (found) setActiveModalProject(found);
    }
  }, [selectedProjectId]);

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 tracking-wider uppercase mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>01 // PROYEK PRODUKSI UNGGULAN</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
              DUA SISTEM PRODUKSI UTAMA
            </h2>
            <p className="text-slate-600 max-w-2xl text-base mt-2 leading-relaxed">
              Dua platform berskala enterprise yang dirancang dan dikembangkan dari nol untuk 
              menyelesaikan permasalahan operasional nyata: kasir 3-in-1 berkeandalan offline-first 
              dan sistem manajemen konter HP multi-tenant.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>2 SISTEM DEPLOYED & LIVE</span>
          </div>
        </div>

        {/* 2 Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Interactive Case Study Modal */}
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => {
            setActiveModalProject(null);
            if (onClearSelectedProject) onClearSelectedProject();
          }}
        />

      </div>
    </section>
  );
};
