"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, MessageSquare, Send, CheckCircle2, Phone, Github, Linkedin } from "lucide-react";
import { Magnetic } from "../effects/Magnetic";

export const FinalCTA: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo || !message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Headline & Direct Contact Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 tracking-wider uppercase font-semibold">
              <span>06 // HUBUNGI & KONSULTASI PROYEK</span>
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-[1.08]">
              PUNYA IDE ATAU PROYEK BARU?<br />
              <span className="text-gradient-blue-indigo">MARI KITA WUJUDKAN.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-lg font-normal leading-relaxed">
              Apakah Anda membutuhkan aplikasi kasir (POS), platform SaaS multi-tenant, 
              sistem manajemen bisnis kustom, atau arsitektur backend berkecepatan tinggi? 
              Saya siap berkolaborasi dan memberikan hasil nyata.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-all shadow-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat via WhatsApp Langsung</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
              </a>

              <a
                href="mailto:najib.dev@gmail.com"
                className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>najib.dev@gmail.com</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Respon Cepat (Maks. 24 Jam)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Estimasi & Konsultasi Gratis
              </span>
            </div>
          </div>

          {/* Right Column: Clean White Contact Form */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono text-xs">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-slate-600 max-w-xs mx-auto text-xs leading-relaxed">
                  Terima kasih sudah menghubungi, <strong>{name || "Rekan"}</strong>. 
                  Saya akan mempelajari kebutuhan proyek Anda dan membalasnya secepat mungkin.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName("");
                    setContactInfo("");
                    setMessage("");
                  }}
                  className="text-blue-600 font-semibold underline hover:text-blue-800 pt-2"
                >
                  Kirim pesan baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <h3 className="font-heading font-black text-xl text-slate-900">
                    Formulir Konsultasi Proyek
                  </h3>
                  <p className="text-slate-500 text-[11px]">
                    Sampaikan ide atau kendala sistem yang ingin Anda selesaikan.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    Nama Anda / Perusahaan
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    Kontak (Email / Nomor WhatsApp) *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="nama@email.com atau 08123456789"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                    Kebutuhan / Rincian Proyek *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Jelaskan jenis sistem yang Anda butuhkan (misal: sistem kasir POS, web app, backend API, integrasi printer, dll)..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Magnetic strength={0.2} className="w-full pt-1">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95"
                  >
                    <span>Kirim Brief Proyek</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
