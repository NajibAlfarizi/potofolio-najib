"use client";

import React from "react";
import { ProjectArchitectureNode, ProjectArchitectureEdge } from "@/types";
import { Monitor, Server, Database, CreditCard, Clock, Smartphone, ShieldCheck, Wrench, Sparkles, Printer, LayoutDashboard, Bot, Cpu, QrCode, Radio, Tv, Calendar, User, Briefcase, ShieldAlert, Lock, HardDrive } from "lucide-react";

interface ArchitectureDiagramProps {
  nodes: ProjectArchitectureNode[];
  edges: ProjectArchitectureEdge[];
  accentColor?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  edges,
  accentColor = "#2563EB",
}) => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "Monitor": return <Monitor className="w-4 h-4" />;
      case "Server": return <Server className="w-4 h-4" />;
      case "Database": return <Database className="w-4 h-4" />;
      case "HardDrive": return <HardDrive className="w-4 h-4" />;
      case "CreditCard": return <CreditCard className="w-4 h-4" />;
      case "Clock": return <Clock className="w-4 h-4" />;
      case "Smartphone": return <Smartphone className="w-4 h-4" />;
      case "ShieldCheck": return <ShieldCheck className="w-4 h-4" />;
      case "Wrench": return <Wrench className="w-4 h-4" />;
      case "Sparkles": return <Sparkles className="w-4 h-4" />;
      case "Printer": return <Printer className="w-4 h-4" />;
      case "LayoutDashboard": return <LayoutDashboard className="w-4 h-4" />;
      case "Bot": return <Bot className="w-4 h-4" />;
      case "Cpu": return <Cpu className="w-4 h-4" />;
      case "QrCode": return <QrCode className="w-4 h-4" />;
      case "Radio": return <Radio className="w-4 h-4" />;
      case "Tv": return <Tv className="w-4 h-4" />;
      case "Calendar": return <Calendar className="w-4 h-4" />;
      case "User": return <User className="w-4 h-4" />;
      case "Briefcase": return <Briefcase className="w-4 h-4" />;
      case "ShieldAlert": return <ShieldAlert className="w-4 h-4" />;
      case "Lock": return <Lock className="w-4 h-4" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 text-[11px] text-slate-500 font-medium">
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span>ARSITEKTUR & TOPOLOGI SISTEM</span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-slate-400">HIGH AVAILABILITY</span>
      </div>

      {/* Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all flex items-start gap-3 shadow-xs group"
          >
            <div
              className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform"
              style={{ color: accentColor }}
            >
              {getIcon(node.iconName)}
            </div>
            <div>
              <div className="font-heading font-bold text-slate-900 text-xs tracking-tight group-hover:text-blue-600 transition-colors">
                {node.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">{node.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Data Connections List */}
      <div className="mt-5 pt-3.5 border-t border-slate-200">
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
          ALUR INTEGRASI & PIPELINE DATA
        </div>
        <div className="flex flex-wrap gap-2">
          {edges.map((edge, idx) => (
            <div
              key={idx}
              className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-700 flex items-center gap-1.5 shadow-xs"
            >
              <span className="font-bold text-slate-900 uppercase">{edge.from}</span>
              <span className="text-blue-600 font-sans font-bold">→</span>
              <span className="font-bold text-slate-900 uppercase">{edge.to}</span>
              {edge.label && <span className="text-slate-500 text-[10px]">({edge.label})</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
