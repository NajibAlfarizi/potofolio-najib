"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 bg-white border-t border-slate-200 text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* Top Row: Brand & Flagship Quick Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200 shadow-2xs">
              <Image
                src="/images/profile.jpg"
                alt="Najib Alfarizi"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-slate-900 text-sm tracking-tight">
                Najib Alfarizi
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Software Engineer • Fullstack & Systems
              </div>
            </div>
          </div>

          {/* Quick links to 2 flagship apps */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
              Live Projects:
            </span>
            <a
              href="https://ibiios.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors font-semibold"
            >
              <span>IbiiOS.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://konter-system.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition-colors font-semibold"
            >
              <span>Konter-system.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom Row: Copyright, Socials & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            © {new Date().getFullYear()} Najib Alfarizi. Seluruh hak cipta dilindungi.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 text-slate-600 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-slate-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:najib.dev@gmail.com"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-slate-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors"
            title="Kembali ke atas"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
