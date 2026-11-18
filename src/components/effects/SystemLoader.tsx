"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SystemLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 300);
    const timer2 = setTimeout(() => setStep(2), 700);
    const timer3 = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-[#F5F5F5] font-mono select-none"
        >
          <div className="w-80 max-w-[90vw] p-5 rounded-lg border border-white/10 bg-[#0D0D0D]/90 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-zinc-400 ml-2 tracking-wider">SYSTEM INITIALIZATION</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span>INITIALIZING DEVELOPER EXPERIENCE...</span>
              </div>

              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <span className="text-purple-400">➜</span>
                  <span>LOADING NAJIB CORE STACK...</span>
                </motion.div>
              )}

              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-emerald-400 font-semibold"
                >
                  <span>✓</span>
                  <span>SYSTEM READY. LAUNCHING ENVIRONMENT.</span>
                </motion.div>
              )}
            </div>

            <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
