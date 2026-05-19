"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="relative">
      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic foundation with strong consistency.</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => {
            const metaMatch = item.meta.match(/^CGPA\s+([\d.]+)\s+\(([^)]+)\)$/i);
            const cgpaValue = metaMatch?.[1] ?? item.meta;
            const periodValue = metaMatch?.[2];

            return (
              <motion.article
                key={item.degree}
                className="glass-panel rounded-[2rem] p-6 sm:p-8"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accentSoft">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-3xl tracking-[-0.04em] text-white">
                  {item.degree}
                </h3>
                <p className="mt-4 text-xl text-slate-300">{item.institution}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accentSoft/80">
                      CGPA
                    </p>
                    <p className="mt-1 font-display text-xl tracking-[-0.04em] text-white">
                      {cgpaValue}
                    </p>
                  </div>
                  {periodValue ? (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accentSoft/80">
                        Years
                      </p>
                      <p className="mt-1 font-display text-xl tracking-[-0.04em] text-white">
                        {periodValue}
                      </p>
                    </div>
                  ) : null}
                </div>
                {item.coursework?.length ? (
                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accentSoft/80">
                      Key Subjects
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {item.coursework.map((subject) => (
                        <span
                          key={subject}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-slate-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
