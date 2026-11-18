"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { playAccessGranted, playTick } from "@/lib/sound";

interface LogEntry {
  type: "input" | "output" | "system";
  text: string | React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "system", text: "NAJIB DEVELOPER TERMINAL (v2.6.0-prod)" },
    { type: "system", text: "Type 'help' to inspect available system commands." },
    { type: "output", text: "● SYSTEM STATUS: Online · Available for freelance & engineering roles." },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLogs: LogEntry[] = [...logs, { type: "input", text: `$ ${cmd}` }];

    switch (trimmed) {
      case "help":
        playTick();
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-1 text-zinc-300">
              <div>Available commands:</div>
              <div className="pl-4 grid grid-cols-1 sm:grid-cols-2 gap-1 text-zinc-400">
                <div><span className="text-purple-400 font-bold">whoami</span> — Identify developer</div>
                <div><span className="text-purple-400 font-bold">skills</span> — List core engineering stack</div>
                <div><span className="text-purple-400 font-bold">projects</span> — List 5 featured systems</div>
                <div><span className="text-purple-400 font-bold">status</span> — Current availability</div>
                <div><span className="text-purple-400 font-bold">contact</span> — Get direct contact links</div>
                <div><span className="text-purple-400 font-bold">clear</span> — Clear terminal output</div>
                <div><span className="text-purple-400 font-bold">sudo hire najib</span> — Secret Easter Egg</div>
              </div>
            </div>
          ),
        });
        break;

      case "whoami":
        playTick();
        newLogs.push({
          type: "output",
          text: (
            <div className="text-zinc-300 space-y-1">
              <div className="font-bold text-white">Najib Alfarizi</div>
              <div>Software Engineer & Freelance Developer based in Indonesia.</div>
              <div>Focused on web applications, multi-tenant SaaS, ERP, and backend solutions.</div>
            </div>
          ),
        });
        break;

      case "skills":
        playTick();
        newLogs.push({
          type: "output",
          text: "Core Stack: Next.js 15 · TypeScript · Node.js · Express · PostgreSQL · Prisma · Docker · WebSockets · ESC/POS Thermal · Midtrans Snap",
        });
        break;

      case "projects":
        playTick();
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-1 text-zinc-300">
              <div>01 // ChiCha Mobile (CRM E-Commerce & Retail Platform)</div>
              <div>02 // SaaS Konter / JuraganKonter (Multi-Tenant POS & Repair OS)</div>
              <div>03 // Personal MoneyOS (Wealth & Automation Engine)</div>
              <div>04 // Dojang Management (QR Attendance & Hapkido Club Management)</div>
              <div>05 // All-in-One Services (Escrow Marketplace Platform)</div>
            </div>
          ),
        });
        break;

      case "status":
        playTick();
        newLogs.push({
          type: "output",
          text: "● Available for freelance development, full-time engineering, and consulting projects.",
        });
        break;

      case "contact":
        playTick();
        newLogs.push({
          type: "output",
          text: (
            <div className="space-y-1 text-zinc-300">
              <div>Email: <a href="mailto:najib.dev@gmail.com" className="text-purple-400 underline">najib.dev@gmail.com</a></div>
              <div>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/najib</a></div>
              <div>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/najib</a></div>
              <div>WhatsApp: <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Chat via WhatsApp</a></div>
            </div>
          ),
        });
        break;

      case "sudo hire najib":
      case "hire najib":
        playAccessGranted();
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#7C3AED", "#2563EB", "#10B981", "#F59E0B"],
        });
        newLogs.push({
          type: "output",
          text: (
            <div className="p-3 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-200 space-y-1">
              <div className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                ✓ REQUEST ACCEPTED!
              </div>
              <div>Permission granted: sudo access enabled. Let's build something remarkable together!</div>
              <div className="text-xs text-zinc-400">Scroll down to the contact form or send a message directly.</div>
            </div>
          ),
        });
        break;

      case "clear":
        setLogs([]);
        return;

      default:
        playTick();
        newLogs.push({
          type: "output",
          text: `Command not found: "${trimmed}". Type 'help' for the list of available commands.`,
        });
        break;
    }

    setLogs(newLogs);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal("");
  };

  return (
    <section id="terminal" className="py-24 bg-[#070707] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 text-center space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-400 tracking-wider uppercase">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>06 // SIGNATURE ANIMATION 08</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            INTERACTIVE TERMINAL
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-mono max-w-lg mx-auto">
            Ketik perintah langsung di konsol developer di bawah untuk mengeksplorasi sistem atau ketik <span className="text-purple-400">sudo hire najib</span>.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl bg-[#090909] border border-white/15 shadow-2xl overflow-hidden font-mono text-xs cursor-text"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D0D] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-zinc-400 text-[11px]">najib@production-server:~</span>
            </div>
            <span className="text-[10px] text-zinc-500">bash 5.2</span>
          </div>

          {/* Terminal Logs Output */}
          <div className="p-6 space-y-3 min-h-[300px] max-h-[450px] overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="leading-relaxed">
                {log.type === "input" && (
                  <div className="text-purple-400 font-bold">{log.text}</div>
                )}
                {log.type === "system" && (
                  <div className="text-zinc-500">{log.text}</div>
                )}
                {log.type === "output" && (
                  <div className="text-zinc-300 pl-2">{log.text}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 px-6 py-3.5 bg-[#0D0D0D] border-t border-white/10"
          >
            <span className="text-purple-400 font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Try typing 'help' or 'sudo hire najib'..."
              className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none text-xs"
            />
            <button type="submit" className="text-zinc-500 hover:text-white transition-colors">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
