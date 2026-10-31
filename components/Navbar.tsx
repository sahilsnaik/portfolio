"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Code2, Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, personalInfo } from "@/lib/data";
import { normalizeLandingToHero, scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const resumeTriggerRef = useRef<HTMLButtonElement>(null);
  const resumeDialogRef = useRef<HTMLElement>(null);
  const closeResumeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 120);
      lastScroll = current;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;

    const resumeTrigger = resumeTriggerRef.current;
    const menuTrigger = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeResumeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setResumeOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = resumeDialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!resumeDialogRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => {
        (resumeTrigger?.isConnected ? resumeTrigger : menuTrigger)?.focus();
      });
    };
  }, [resumeOpen]);

  useEffect(() => {
    normalizeLandingToHero();

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={reduceMotion ? undefined : { y: hidden ? -120 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-5 py-3.5 backdrop-blur-xl sm:px-7 2xl:max-w-[1600px]">
          <a
            href="#hero"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accentSoft transition hover:border-accent/50 hover:bg-accent/15"
            data-hover
            data-cursor="Home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("hero");
            }}
          >
            <Code2 className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </a>

          <LayoutGroup>
            <nav className="hidden items-center gap-2 xl:flex">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    data-hover
                    data-cursor="Go"
                    className={`relative rounded-full px-4 py-2.5 text-base transition ${
                      isActive ? "text-accentSoft" : "text-slate-300 hover:text-white"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent/15"
                        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.42 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </LayoutGroup>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 xl:flex">
              <button
                type="button"
                ref={resumeTriggerRef}
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-2.5 text-sm font-semibold text-accentSoft transition hover:border-accent/50 hover:bg-accent/[0.1] hover:text-white"
              >
                Resume
              </button>
            </div>
            <button
              type="button"
              ref={menuButtonRef}
              className="rounded-full border border-white/10 p-2.5 text-white xl:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              data-hover
              data-cursor="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-3 flex items-center justify-end gap-3 px-2">
              <button
                type="button"
                ref={resumeTriggerRef}
                onClick={() => {
                  setResumeOpen(true);
                  setMenuOpen(false);
                }}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white"
              >
                Resume
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-2xl px-4 py-3 text-base ${
                    activeId === item.id ? "bg-accent/15 text-accentSoft" : "text-slate-300"
                  }`}
                  data-cursor="Go"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {resumeOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setResumeOpen(false);
            }}
          >
            <motion.section
              ref={resumeDialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-dialog-title"
              className="flex h-[min(92vh,1000px)] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#080f18] shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                <div>
                  <h2 id="resume-dialog-title" className="font-display text-lg text-white">Resume</h2>
                  <p className="text-sm text-slate-400">{personalInfo.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-2 text-sm text-accentSoft transition hover:bg-accent/20"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    type="button"
                    ref={closeResumeButtonRef}
                    onClick={() => setResumeOpen(false)}
                    aria-label="Close resume"
                    className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <iframe
                src={personalInfo.resumeUrl}
                title={`${personalInfo.name} resume`}
                className="min-h-0 flex-1 bg-white"
              />
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
