"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Radar, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { keyStats, personalInfo } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
});

const TYPE_SPEED = 70;
const heroIntro =
  "Backend developer focused on scalable APIs, payment workflows, and reliable systems that are built to ship and hold up in production.";

const statVisuals = [
  { icon: Radar, accent: "from-cyan-300/40 via-cyan-300/18 to-transparent" },
  { icon: Sparkles, accent: "from-sky-300/40 via-sky-300/16 to-transparent" },
  { icon: ShieldCheck, accent: "from-emerald-300/35 via-emerald-300/16 to-transparent" },
  { icon: Workflow, accent: "from-cyan-200/35 via-cyan-300/16 to-transparent" },
] as const;

function AnimatedStatValue({ value, active }: { value: string; active: boolean }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const numeric = value.match(/^\d+$/);
    if (!numeric || !active) {
      setDisplayValue(value);
      return;
    }

    const target = Number(value);
    let frame = 0;
    const steps = 24;
    const interval = window.setInterval(() => {
      frame += 1;
      const next = Math.round((target * frame) / steps);
      setDisplayValue(String(next).padStart(value.length, "0"));

      if (frame >= steps) {
        window.clearInterval(interval);
        setDisplayValue(value);
      }
    }, 26);

    return () => window.clearInterval(interval);
  }, [active, value]);

  return <>{displayValue}</>;
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [nameCount, setNameCount] = useState(0);
  const [roleCount, setRoleCount] = useState(0);
  const [cardTransform, setCardTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg)");
  const [cardGlow, setCardGlow] = useState({ x: 74, y: 18 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.26]);
  const contentScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.94]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [0.72, 0.12]);
  const canAnimate = mounted && !reduceMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setNameCount(personalInfo.name.length);
      setRoleCount(personalInfo.role.length);
      return;
    }

    const timers: number[] = [];

    personalInfo.name.split("").forEach((_, index) => {
      timers.push(window.setTimeout(() => setNameCount(index + 1), index * TYPE_SPEED));
    });

    const roleStart = personalInfo.name.length * TYPE_SPEED + 260;

    personalInfo.role.split("").forEach((_, index) => {
      timers.push(window.setTimeout(() => setRoleCount(index + 1), roleStart + index * 38));
    });

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [reduceMotion]);

  const typedName = personalInfo.name.slice(0, nameCount);
  const typedRole = personalInfo.role.slice(0, roleCount);

  const handleCardMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!canAnimate) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateX = ((y / bounds.height) - 0.5) * -5;
    const rotateY = ((x / bounds.width) - 0.5) * 5;

    setCardGlow({
      x: (x / bounds.width) * 100,
      y: (y / bounds.height) * 100,
    });
    setCardTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate min-h-[92vh] overflow-hidden lg:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(6,182,212,0.14),transparent_28%)]" />
      <motion.div
        className="absolute inset-0 hidden lg:block"
        style={canAnimate ? { opacity: backgroundOpacity } : undefined}
      >
        <ParticleBackground />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_28%_42%,rgba(4,7,13,0.14),rgba(4,7,13,0.54)_34%,rgba(4,7,13,0.84)_58%,rgba(4,7,13,0.94)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-background via-background/92 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_68%)] blur-2xl" />
      <div className="absolute inset-0 opacity-55 lg:hidden">
        <ParticleBackground />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-20 z-[1] h-32 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.16),transparent_72%)] blur-2xl lg:hidden" />

      <div className="section-shell flex min-h-[92vh] items-center pb-20 pt-28 lg:min-h-screen lg:pb-28">
        <div className="relative z-10 grid w-full gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.82fr)] lg:items-center lg:gap-24 xl:gap-28 2xl:grid-cols-[minmax(0,1fr)_minmax(460px,0.86fr)] 2xl:gap-36">
          <motion.div
            initial={canAnimate ? { opacity: 0, y: 24 } : false}
            animate={canAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={canAnimate ? { y: contentY, opacity: contentOpacity, scale: contentScale } : undefined}
            className="max-w-3xl"
          >
            {/* <p className="section-kicker">Software Developer Portfolio</p> */}
            <div className="mt-6 max-w-[44rem]">
              <h1 className="font-display text-5xl leading-[0.92] tracking-[-0.08em] text-white sm:text-7xl lg:text-[5.9rem]">
                <span className="block">{typedName}</span>
              </h1>
              <p className="mt-5 max-w-2xl font-display text-3xl leading-[1.02] tracking-[-0.05em] text-gradient sm:text-4xl lg:text-[3.35rem]">
                {typedRole}
              </p>
            </div>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              {heroIntro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="#projects">View Work</MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300 transition hover:text-accentSoft"
                data-hover
                data-cursor="Talk"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact Me
                <ArrowDown className="h-4 w-4 -rotate-90" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <a
                href={`https://github.com${personalInfo.github}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 hover:border-accent/50 hover:text-white"
                data-hover
                data-cursor="Open"
              >
                <Github className="h-4 w-4" />
                {personalInfo.github}
              </a>
              <a
                href={`https://www.linkedin.com/in${personalInfo.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 hover:border-accent/50 hover:text-white"
                data-hover
                data-cursor="Open"
              >
                <Linkedin className="h-4 w-4" />
                {personalInfo.linkedin}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 hover:border-accent/50 hover:text-white"
                data-hover
                data-cursor="Mail"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:max-w-4xl xl:grid-cols-4">
              {keyStats.map((stat, index) => {
                const visual = statVisuals[index % statVisuals.length];
                const Icon = visual.icon;

                return (
                <motion.div
                  key={stat.label}
                  initial={canAnimate ? { opacity: 0, y: 18 } : false}
                  animate={canAnimate ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: 0.24 + index * 0.05, duration: 0.45 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${visual.accent}`} />
                  <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/0 via-accent/25 to-transparent" />
                  <div className="relative flex items-start justify-between gap-3 pl-3">
                    <p className="max-w-[8.5rem] text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <div className="mt-0.5 rounded-full bg-white/[0.04] p-1.5 text-accentSoft/70 transition duration-300 group-hover:text-accentSoft">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <p className="mt-2 pl-3 text-base font-semibold leading-6 text-white">
                    <AnimatedStatValue value={stat.value} active={mounted} />
                  </p>
                </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={canAnimate ? { opacity: 0, x: 36 } : false}
            animate={canAnimate ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={canAnimate ? { y: contentY } : undefined}
            className="relative lg:mt-20 2xl:pl-6"
          >
            <div
              className="group"
              onMouseMove={handleCardMove}
              onMouseLeave={() => {
                setCardTransform("perspective(1200px) rotateX(0deg) rotateY(0deg)");
                setCardGlow({ x: 74, y: 18 });
              }}
            >
            <div className="pointer-events-none absolute inset-[-1.25rem] -z-10 rounded-[2.6rem] bg-[radial-gradient(circle_at_center,rgba(4,9,18,0.96),rgba(4,9,18,0.84)_48%,rgba(4,9,18,0.08)_100%)] blur-2xl" />
            <div className="pointer-events-none absolute inset-[-0.35rem] -z-10 rounded-[2.2rem] bg-[#050b14]/88" />
            <motion.div
              style={canAnimate ? { transform: cardTransform } : undefined}
              className="relative isolate overflow-hidden rounded-[2rem] border border-cyan-300/22 bg-[linear-gradient(180deg,rgba(9,18,32,0.985),rgba(7,13,24,0.975))] p-6 shadow-[0_24px_80px_rgba(3,8,18,0.72),0_0_0_1px_rgba(103,232,249,0.08)] backdrop-blur-2xl transition-transform duration-200 will-change-transform sm:p-8"
              data-hover
              data-cursor="View"
            >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%)]" />
            <div
              className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at ${cardGlow.x}% ${cardGlow.y}%, rgba(103,232,249,0.14), transparent 36%)`,
              }}
            />
            <div className="absolute inset-y-0 -left-16 w-10 rotate-[18deg] bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 blur-sm transition-all duration-700 group-hover:left-[112%] group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <p className="section-kicker">Currently</p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-white sm:text-[2.35rem]">
                Wholewave Elements Pvt Ltd
              </h2>
              <p className="mt-3 text-lg font-semibold text-white/95">Software Developer (Backend)</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-300">
                Chennai • June 2025 to Present
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-100">
                Focused on APIs, payments, and reliability for products that need stable
                backend execution.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/14 bg-white/[0.085] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-sm text-slate-300">Core Focus</p>
                  <p className="mt-3 text-xl font-semibold text-white">Backend Systems</p>
                </div>
                <div className="rounded-3xl border border-white/14 bg-white/[0.085] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-sm text-slate-300">Primary Strength</p>
                  <p className="mt-3 text-xl font-semibold text-white">Reliable APIs</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:text-accentSoft"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  See Experience
                </a>
              </div>

              <div className="mt-4 rounded-3xl border border-cyan-300/24 bg-[linear-gradient(180deg,rgba(6,182,212,0.18),rgba(6,182,212,0.08))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-sm font-medium text-cyan-50/90">Current Outcome</p>
                <p className="mt-3 text-lg font-semibold leading-8 text-white">
                  Building scalable backend systems that are designed to ship cleanly and
                  hold up in production.
                </p>
              </div>

              <a
                href="#about"
                className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-cyan-200"
                data-hover
                data-cursor="Scroll"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("about");
                }}
              >
                Scroll to explore
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3]">
        <div className="mx-auto h-px w-[min(92%,1400px)] bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
        <div className="mx-auto mt-5 h-16 w-[min(90%,1180px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),rgba(6,182,212,0)_68%)] blur-2xl" />
      </div>
    </section>
  );
}
