"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, FolderGit2, Sparkles, Mail, ExternalLink, X, ArrowRight, Layers, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Navigasi" | "Proyek" | "Aksi" | "Kontak";
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }

      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "nav-projects",
      title: "Lihat 2 Proyek Unggulan (IbiiOS & Konter System)",
      category: "Navigasi",
      icon: <FolderGit2 className="w-4 h-4 text-blue-600" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "proj-ibiios",
      title: "Buka IbiiOS (https://ibiios.app/) - 3-in-1 POS",
      category: "Proyek",
      icon: <ExternalLink className="w-4 h-4 text-blue-600" />,
      action: () => {
        onClose();
        window.open("https://ibiios.app/", "_blank");
      },
    },
    {
      id: "proj-konter",
      title: "Buka Konter System (https://konter-system.vercel.app/)",
      category: "Proyek",
      icon: <ExternalLink className="w-4 h-4 text-sky-600" />,
      action: () => {
        onClose();
        window.open("https://konter-system.vercel.app/", "_blank");
      },
    },
    {
      id: "nav-what-i-build",
      title: "Spesialisasi & Kapabilitas Arsitektur",
      category: "Navigasi",
      icon: <Layers className="w-4 h-4 text-indigo-600" />,
      action: () => scrollToSection("what-i-build"),
    },
    {
      id: "nav-tech-universe",
      title: "Eksplorasi Tech Stack & Relasi Sistem",
      category: "Navigasi",
      icon: <Layers className="w-4 h-4 text-sky-600" />,
      action: () => scrollToSection("tech-universe"),
    },
    {
      id: "nav-about",
      title: "Tentang Najib Alfarizi (Profil & Timeline)",
      category: "Navigasi",
      icon: <Sparkles className="w-4 h-4 text-amber-600" />,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-services",
      title: "Daftar Layanan & Pengembangan Software",
      category: "Navigasi",
      icon: <Layers className="w-4 h-4 text-emerald-600" />,
      action: () => scrollToSection("services"),
    },
    {
      id: "action-whatsapp",
      title: "Chat via WhatsApp dengan Najib",
      category: "Kontak",
      icon: <MessageSquare className="w-4 h-4 text-emerald-600" />,
      action: () => {
        onClose();
        window.open("https://wa.me/6281234567890", "_blank");
      },
    },
    {
      id: "action-hire",
      title: "Kirim Formulir Konsultasi Proyek",
      category: "Kontak",
      icon: <Mail className="w-4 h-4 text-blue-600" />,
      action: () => scrollToSection("contact"),
    },
    {
      id: "action-confetti",
      title: "Rayakan dengan Efek Confetti 🎉",
      category: "Aksi",
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      action: () => {
        onClose();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#0284C7", "#059669", "#4F46E5"],
        });
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/40 backdrop-blur-sm">
      <div
        className="w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-slate-900"
        onKeyDown={handleKeyDownList}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari menu, proyek (IbiiOS / Konter System), atau kontak... (Esc untuk tutup)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              Tidak ditemukan perintah untuk "{query}"
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                onClick={cmd.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                  selectedIndex === idx
                    ? "bg-blue-50 text-blue-900 border border-blue-200"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100">{cmd.icon}</div>
                  <span className="font-sans font-medium">{cmd.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100 font-semibold">
                    {cmd.category}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-slate-200 bg-slate-50 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Navigasi:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200">↓</kbd>
            <span className="ml-1">Pilih:</span>
            <kbd className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">Enter</kbd>
          </div>
          <span>Esc untuk keluar</span>
        </div>
      </div>
    </div>
  );
};
