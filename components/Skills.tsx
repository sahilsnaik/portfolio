"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-divider" />
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-[38rem] bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_56%)] ambient-pulse"
        animate={reduceMotion ? undefined : { opacity: [0.24, 0.55, 0.24] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell pt-32 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">A backend-first stack with full-stack flexibility.</h2>
          </div>
          <p className="max-w-xl section-copy lg:justify-self-end">
            Languages, frameworks, and tools I use to move from architecture decisions to
            shipped features with confidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 2xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 ${
                category.primaryItems?.length ? "border-accent/15" : ""
              }`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <div className="flex items-center justify-between gap-3">
                <p className="section-kicker">{category.title}</p>
                {category.primaryItems?.length ? (
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accentSoft">
                    Primary
                  </span>
                ) : null}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`rounded-full border px-4 py-3 text-base transition ${
                      category.primaryItems?.includes(skill)
                        ? "border-accent/25 bg-accent/[0.1] font-semibold text-white shadow-[0_0_0_1px_rgba(103,232,249,0.06)]"
                        : "border-white/10 bg-white/[0.05] text-slate-200 hover:border-accent/35 hover:bg-accent/[0.08]"
                    }`}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.08 + skillIndex * 0.04 }}
                  >
                    {skill}
                    {category.primaryItems?.includes(skill) ? (
                      <span className="ml-2 text-xs uppercase tracking-[0.18em] text-accentSoft/85">
                        Core
                      </span>
                    ) : null}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
