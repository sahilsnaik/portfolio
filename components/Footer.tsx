"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="relative overflow-hidden bg-[#04070d]"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.65 }}
    >
      <div className="mx-auto h-px w-[min(92%,1400px)] bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_58%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-base text-white">{personalInfo.name}</p>
          <p className="mt-1 text-slate-500">Software Developer (Backend)</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-accent/45 hover:text-accentSoft"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={`https://github.com${personalInfo.github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-accent/45 hover:text-accentSoft"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`https://www.linkedin.com/in${personalInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-accent/45 hover:text-accentSoft"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
