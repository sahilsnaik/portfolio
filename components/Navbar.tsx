"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, personalInfo } from "@/lib/data";
import { normalizeLandingToHero, scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

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
            className="font-display text-base tracking-[0.22em] text-white sm:text-[1rem]"
            data-hover
            data-cursor="Home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("hero");
            }}
          >
            {personalInfo.name}
          </a>

          <LayoutGroup>
            <nav className="hidden items-center gap-2 md:flex">
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
            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-2.5 text-sm font-semibold text-accentSoft transition hover:border-accent/50 hover:bg-accent/[0.1] hover:text-white"
              >
                Resume
              </a>
            </div>
            <button
              type="button"
              className="rounded-full border border-white/10 p-2.5 text-white md:hidden"
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
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-3 flex items-center justify-end gap-3 px-2">
              <ThemeToggle />
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white"
              >
                Resume
              </a>
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
    </>
  );
}
