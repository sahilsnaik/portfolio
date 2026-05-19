"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Download, Server, ShieldCheck, TerminalSquare } from "lucide-react";
import { aboutCopy, personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Server,
    title: "Architecture",
    copy: "Clean backend structure with practical performance and delivery in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    copy: "Secure flows, stable releases, and systems designed for real production use.",
  },
  {
    icon: Code2,
    title: "Execution",
    copy: "Clear implementation, team collaboration, and features that actually ship.",
  },
];

export function About() {
  const reduceMotion = useReducedMotion();
  const terminalLines = [
    "$ stack --primary",
    "laravel  |  node.js  |  postgresql",
    "$ focus --now",
    "apis  ·  payments  ·  reliability",
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-40 w-[min(78%,900px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),rgba(6,182,212,0)_72%)] blur-3xl" />

      <div className="section-shell pt-32 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Built for reliability
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="grid gap-6">
            <div>
              <p className="section-kicker">About</p>
              <h2 className="section-title max-w-lg">
                Engineering products that feel steady under pressure.
              </h2>
            </div>

            <div className="glass-panel overflow-hidden rounded-[2rem] p-6">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(6,182,212,0.14),rgba(255,255,255,0.04))] p-6">
                <div className="absolute right-[-1rem] top-[-1rem] h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
                <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base uppercase tracking-[0.22em] text-slate-500">Profile</p>
                      <p className="mt-2 font-display text-2xl text-white">{personalInfo.name}</p>
                      <p className="mt-2 text-base leading-8 text-slate-300">{personalInfo.role}</p>
                    </div>
                    <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accentSoft">
                      <TerminalSquare className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-cyan-300/16 bg-[#07101a]/95">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      </div>
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                        backend profile
                      </p>
                    </div>
                    <div className="grid gap-3 px-4 py-4 font-mono text-sm text-slate-200 sm:px-5">
                      {terminalLines.map((line, index) => (
                        <div key={line} className="flex items-center gap-3">
                          <span className="text-cyan-300/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={index % 2 === 0 ? "text-cyan-100" : "text-slate-300"}>
                            {line}
                          </span>
                          {index === terminalLines.length - 1 ? (
                            <motion.span
                              className="inline-block h-4 w-2 rounded-[2px] bg-cyan-300/80"
                              animate={reduceMotion ? undefined : { opacity: [0, 1, 0] }}
                              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    <div className="grid gap-3 border-t border-white/10 px-4 py-4 sm:grid-cols-3 sm:px-5">
                      {["Laravel", "Node.js", "PostgreSQL"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-sm uppercase tracking-[0.2em] text-white"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={personalInfo.resumeUrl}
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accentSoft"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-[1.35rem] leading-10 text-slate-200">{aboutCopy[0]}</p>
            <p className="mt-5 section-copy">{aboutCopy[1]}</p>
            <p className="mt-5 section-copy">{aboutCopy[2]}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-base uppercase tracking-[0.22em] text-slate-500">Profile</p>
                <p className="mt-3 text-xl text-white">{personalInfo.role}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-base uppercase tracking-[0.22em] text-slate-500">Best Fit</p>
                <p className="mt-3 text-xl text-white">Backend, API, and product engineering teams</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="glass-panel rounded-[1.75rem] p-6">
                <div className="inline-flex rounded-2xl border border-accent/25 bg-accent/10 p-3 text-accentSoft">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-300">{item.copy}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
