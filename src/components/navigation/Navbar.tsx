"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import { Magnetic } from "../effects/Magnetic";
import { playTick, playHover } from "@/lib/sound";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Proyek Unggulan", href: "#projects" },
    { name: "Spesialisasi", href: "#what-i-build" },
    { name: "Tech Stack", href: "#tech-universe" },
    { name: "Tentang Najib", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Available Status */}
        <div className="flex items-center gap-3.5">
          <a
            href="#"
            onMouseEnter={playHover}
            onClick={playTick}
            className="flex items-center gap-3 group transition-transform"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-600/30 group-hover:ring-blue-600 transition-all shadow-sm">
              <Image
                src="/images/profile.jpg"
                alt="Najib Alfarizi"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-900 text-sm tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                Najib Alfarizi
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Status Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-medium text-emerald-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Projects & Hiring</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={playHover}
              onClick={playTick}
              className="hover:text-blue-600 transition-colors py-1 relative hover:font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Contact CTA */}
          <Magnetic strength={0.2} className="hidden sm:block">
            <a
              href="#contact"
              onMouseEnter={playHover}
              onClick={playTick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <span>Konsultasi Proyek</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 shadow-xs"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col gap-3 font-medium text-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>
            <span className="text-slate-400 text-[11px] font-mono">Indonesia (WIB)</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 py-1.5 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-slate-300">→</span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm"
          >
            Hubungi Najib Sekarang →
          </a>
        </div>
      )}
    </header>
  );
};
