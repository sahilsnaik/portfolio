"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export function Experience() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 35%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-divider" />
      <motion.div
        className="pointer-events-none absolute left-0 top-24 h-[34rem] w-[30rem] bg-[radial-gradient(circle,rgba(6,182,212,0.06),transparent_62%)] ambient-pulse"
        animate={reduceMotion ? undefined : { opacity: [0.22, 0.48, 0.22] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell pt-32 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
        >
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Professional timeline.</h2>
          </div>
          <p className="max-w-xl section-copy lg:justify-self-end">
            Current work focused on dependable backend engineering, scalable APIs, and
            production-minded implementation.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative mt-14 pl-6 sm:pl-8">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent via-accent/20 to-transparent" />
          <motion.div
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accentSoft to-transparent"
            style={reduceMotion ? { scaleY: 1 } : { scaleY: lineScale }}
          />
          <div className="grid gap-8">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={reduceMotion ? false : { opacity: 0, x: 30 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-[2.05rem] top-8 h-4 w-4 rounded-full border-4 border-background bg-accent shadow-[0_0_20px_rgba(6,182,212,0.45)] sm:-left-[2.55rem]"
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0.4 }}
                  whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                />
                <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="section-kicker">{item.period}</p>
                      <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-lg text-slate-300">
                        {item.company} <span className="text-slate-500">• {item.location}</span>
                      </p>
                    </div>
                    {item.type ? (
                      <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm uppercase tracking-[0.2em] text-slate-300">
                        {item.type}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlight}
                        className={`rounded-3xl border p-4 text-base leading-8 ${
                          highlightIndex === 0
                            ? "border-accent/20 bg-accent/[0.07] text-slate-100"
                            : "border-white/10 bg-white/[0.03] text-slate-300"
                        }`}
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {item.currentFocus?.length ? (
                    <div className="mt-6 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                      <div className="rounded-[1.75rem] border border-accent/15 bg-accent/[0.06] p-5">
                        <p className="text-sm uppercase tracking-[0.22em] text-accentSoft/85">
                          What I&apos;m currently working on
                        </p>
                        <div className="mt-4 grid gap-3">
                          {item.currentFocus.map((focus) => (
                            <div
                              key={focus}
                              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base leading-8 text-slate-200"
                            >
                              {focus}
                            </div>
                          ))}
                        </div>
                      </div>

                      {item.dailyStack?.length ? (
                        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5">
                          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                            Tech I use daily
                          </p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            {item.dailyStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
