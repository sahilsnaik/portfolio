"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

export function LoadingScreen() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const terminalLines = [
    "booting portfolio kernel...",
    "loading backend profile modules...",
    "ready to ship.",
  ];

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 250 : 1800);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#03060d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-xl px-6">
            <motion.div
              className="absolute inset-0 -z-10 blur-3xl"
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1.25 }}
              transition={{ duration: reduceMotion ? 0.2 : 1.4 }}
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 65%)",
              }}
            />
            <motion.div
              className="overflow-hidden rounded-[1.8rem] border border-cyan-300/16 bg-[#07101a]/95 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  initializing
                </p>
              </div>
              <motion.h1
                className="px-5 pt-5 font-display text-4xl tracking-[-0.08em] text-white sm:text-6xl"
                initial={{ opacity: 0, y: 18, letterSpacing: "0.12em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "-0.08em" }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={{ delay: 0.12, duration: 0.8 }}
              >
                {personalInfo.name}
              </motion.h1>
              <div className="grid gap-3 px-5 pb-5 pt-5 font-mono text-sm text-slate-200">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={line}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.16, duration: 0.45 }}
                  >
                    <span className="text-cyan-300/70">$</span>
                    <span>{line}</span>
                    {index === terminalLines.length - 1 ? (
                      <motion.span
                        className="inline-block h-4 w-2 rounded-[2px] bg-cyan-300/80"
                        animate={reduceMotion ? undefined : { opacity: [0, 1, 0] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0.4, opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
