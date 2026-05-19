"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Email: Mail,
  Phone,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-divider" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-20 h-80 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.09),transparent_56%)] ambient-pulse"
        animate={reduceMotion ? undefined : { opacity: [0.32, 0.58, 0.32] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell pt-32 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.18),transparent_26%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker text-base tracking-[0.28em]">Contact</p>
              <h2 className="section-title max-w-xl">Let&apos;s build backend systems that stay reliable as they scale.</h2>
              <p className="mt-6 max-w-xl text-[1.2rem] leading-10 text-slate-300">
                If you&apos;re hiring for backend or full-stack development, I&apos;d be glad to
                connect and talk through the product, the team, and the engineering problems ahead.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href={`mailto:${personalInfo.email}`}>Email Me</MagneticButton>
                <MagneticButton
                  href={`https://www.linkedin.com/in${personalInfo.linkedin}`}
                  external
                  variant="secondary"
                >
                  LinkedIn
                </MagneticButton>
                <MagneticButton href={personalInfo.resumeUrl} download variant="secondary">
                  Resume
                </MagneticButton>
              </div>
              <div className="mt-10 rounded-[1.75rem] border border-accent/15 bg-accent/[0.06] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Best Fit</p>
                <p className="mt-3 max-w-lg text-xl leading-9 text-white">
                  Backend and full-stack roles where reliability, APIs, integrations, and
                  delivery quality matter.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {socialLinks.map((item) => {
                const Icon = iconMap[item.label];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
                    data-hover
                    data-cursor={item.label === "Email" ? "Mail" : item.label === "Phone" ? "Call" : "Open"}
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accentSoft transition duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 truncate text-lg text-white">{item.value}</p>
                      </div>
                      <div className="flex items-center gap-2 text-base font-medium text-accentSoft opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        <span>{item.label === "Email" ? "Send" : item.label === "Phone" ? "Call" : "Open"}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
        <a
          href={`mailto:${personalInfo.email}`}
          className="block rounded-full bg-accent px-5 py-4 text-center text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(6,182,212,0.24)]"
          data-hover
          data-cursor="Mail"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
