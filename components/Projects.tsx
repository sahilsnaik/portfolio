"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { projects } from "@/lib/data";
import type { ProjectItem } from "@/types";

function ProjectVisual({ project }: { project: ProjectItem }) {
  if (project.title === "WEGOFIN") {
    return (
      <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(6,182,212,0.10),rgba(10,14,24,0.88))] p-4">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">
          <span>Payment Flow</span>
          <span>Live Tracking</span>
        </div>
        <div className="mt-5 grid gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-100">
              Checkout
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent" />
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white">
              Gateway
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-white">
              Settlement
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b1220]/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Refunds</p>
              <p className="mt-2 text-xl font-semibold text-white">Streamlined</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1220]/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Methods</p>
              <p className="mt-2 text-xl font-semibold text-white">Multi Pay</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b1220]/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Status</p>
              <p className="mt-2 text-xl font-semibold text-white">Tracked</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.title === "MERN Stack Real Estate Platform") {
    return (
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(10,14,24,0.88))] p-4">
        <div className="rounded-[1.2rem] border border-white/10 bg-[#0a0f18] p-4">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-500">
            <span>Listings</span>
            <span>Search</span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="h-24 rounded-xl bg-[linear-gradient(135deg,rgba(6,182,212,0.22),rgba(255,255,255,0.04))]" />
              <div className="mt-3 h-3 w-2/3 rounded-full bg-white/70" />
              <div className="mt-2 h-2.5 w-1/3 rounded-full bg-white/30" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["OAuth", "Images", "Filters"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-xs text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(9,18,32,0.94),rgba(6,10,20,0.9))] p-4">
      <div className="grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-[1.2rem] border border-cyan-300/16 bg-cyan-400/[0.07] p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-100/75">RFID</p>
          <div className="mt-4 grid gap-2">
            <div className="h-10 rounded-xl border border-cyan-300/16 bg-[#0c1422]" />
            <div className="h-10 rounded-xl border border-cyan-300/16 bg-[#0c1422]" />
            <div className="h-10 rounded-xl border border-cyan-300/16 bg-[#0c1422]" />
          </div>
        </div>
        <div className="rounded-[1.2rem] border border-white/10 bg-[#0a111c] p-4">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-500">
            <span>MQTT</span>
            <span>Realtime</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white">
              Tag Read
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent" />
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white">
              PostgreSQL
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["Weight", "Vaccines", "Health", "Alerts"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDiagram({ project }: { project: ProjectItem }) {
  const nodes =
    project.title === "WEGOFIN"
      ? ["Client", "API Layer", "Gateway", "Tracking", "Settlement"]
      : project.title === "MERN Stack Real Estate Platform"
        ? ["OAuth", "Listings", "Uploads", "Search", "Redux"]
        : ["RFID", "ESP8266", "MQTT", "PostgreSQL", "Dashboard"];

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#08111d]/88 p-5">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-500">
        <span>System View</span>
        <span>{project.visualLabel}</span>
      </div>
      <div className="mt-5 grid gap-3">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-3">
            <div className="min-w-[6.5rem] rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/45 to-transparent" />
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDrawer({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[70] bg-[#02050b]/72 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-label="Close project details"
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-[71] w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-[#07101c]/96 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),-32px_0_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8"
            data-project-drawer="open"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.7 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="section-kicker">{project.visualLabel}</p>
                  <h3 className="mt-4 font-display text-4xl tracking-[-0.05em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    {project.summary}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-200 transition hover:border-accent/40 hover:text-white"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4">
                <ProjectVisual project={project} />
                <ProjectDiagram project={project} />
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Problem</p>
                  <p className="mt-4 text-sm leading-7 text-slate-200">{project.problem}</p>
                </div>
                <div className="rounded-[1.5rem] border border-cyan-300/18 bg-cyan-400/[0.06] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">Solution</p>
                  <p className="mt-4 text-sm leading-7 text-white/90">{project.solution}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Role</p>
                  <p className="mt-4 text-sm leading-7 text-slate-200">{project.role}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Outcome</p>
                  <p className="mt-4 text-sm leading-7 text-slate-200">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Highlights</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 text-sm text-white"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Demo Status</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {project.demoNote ?? "Demo details available on request."}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  data-hover
                  data-cursor="Open"
                >
                  <Github className="h-4 w-4" />
                  Open GitHub
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:text-accentSoft"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {project.demoLabel ?? "Open Demo"}
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:text-accentSoft"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: ProjectItem;
  index: number;
  onOpen: (project: ProjectItem) => void;
}) {
  const reduceMotion = useReducedMotion();
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateX = ((y / bounds.height) - 0.5) * -14;
    const rotateY = ((x / bounds.width) - 0.5) * 14;

    setSpotlight({
      x: (x / bounds.width) * 100,
      y: (y / bounds.height) * 100,
    });
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const style = { transform } satisfies CSSProperties;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div
        className="group h-full [transform-style:preserve-3d]"
        onMouseMove={handleMove}
        onMouseLeave={() =>
          setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")
        }
      >
        <div
          style={style}
            className={`glass-panel relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[2rem] p-6 transition-transform duration-200 ease-out will-change-transform sm:p-8 ${
            index === 0 ? "xl:min-h-[28rem]" : ""
          }`}
          role="button"
          tabIndex={0}
          data-hover
          data-cursor="View"
          onClick={() => onOpen(project)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onOpen(project);
            }
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(103,232,249,0.16), rgba(6,182,212,0.03) 22%, transparent 52%)`,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="relative flex h-full flex-col">
            <div className="inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-accentSoft">
              {index === 0 ? "Flagship Project" : "Featured Project"}
            </div>
            <div className="mt-5">
              <ProjectVisual project={project} />
            </div>
            <h3 className="mt-6 font-display text-3xl leading-tight tracking-[-0.04em] text-white">
              {project.title}
            </h3>
            <p className="mt-5 text-sm leading-8 text-slate-300 transition duration-300 group-hover:-translate-y-1">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:bg-accent/[0.08]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Live Demo</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {project.demoNote ?? "Demo details available on request."}
              </p>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 opacity-85 transition duration-300 group-hover:translate-x-1 group-hover:text-accentSoft group-hover:opacity-100">
                View details
                <ArrowRight className="h-4 w-4" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-accent/50 hover:text-accentSoft"
                  data-hover
                  data-cursor="Open"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    data-hover
                    data-cursor="Open"
                  >
                    {project.demoLabel ?? "Demo"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-divider" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-28 h-64 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_58%)] ambient-pulse"
        animate={reduceMotion ? undefined : { opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell pt-32 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected builds across payments, platforms, and IoT.</h2>
          </div>
          <p className="max-w-xl text-[1.2rem] leading-10 text-slate-300 lg:justify-self-end">
            A focused set of projects showing backend depth, system integration work, and
            full-stack delivery when the product needs it.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-5 rounded-[2rem] border border-white/8 bg-white/[0.015] p-4 sm:p-5 xl:grid-cols-[1.2fr_1fr_1fr]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </div>
      <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
