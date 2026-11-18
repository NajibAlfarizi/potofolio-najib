"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { Hero } from "@/components/hero/Hero";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { WhatIBuild } from "@/components/experience/WhatIBuild";
import { BuildShipScale } from "@/components/experience/BuildShipScale";
import { TechUniverse } from "@/components/stack/TechUniverse";
import { About } from "@/components/about/About";
import { ServiceCards } from "@/components/services/ServiceCards";
import { FinalCTA } from "@/components/contact/FinalCTA";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(id) => {
          setSelectedProjectId(id);
          const el = document.getElementById("projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Hero Section with Najib's Photo & Highlights */}
      <Hero />

      {/* 01. Flagship Production Work (IbiiOS & Konter System) */}
      <ProjectShowcase
        selectedProjectId={selectedProjectId}
        onClearSelectedProject={() => setSelectedProjectId(null)}
      />

      {/* 02. What I Build / Architectural Capabilities */}
      <WhatIBuild />

      {/* 03. Engineering Methodology: BUILD → SHIP → SCALE */}
      <BuildShipScale />

      {/* 04. Interactive Tech Stack Universe */}
      <TechUniverse />

      {/* 05. About Najib Alfarizi & Engineering Timeline */}
      <About />

      {/* 06. Professional & Freelance Services */}
      <ServiceCards />

      {/* 07. Contact & Project Consultation */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
