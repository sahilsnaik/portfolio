"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";

export function SectionProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.28,
  });
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight * 0.5;
      let closestSection = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = Math.max(rect.top, 0);
        const sectionBottom = Math.min(rect.bottom, window.innerHeight);
        const visibleCenter =
          sectionBottom > sectionTop ? (sectionTop + sectionBottom) / 2 : rect.top + rect.height / 2;
        const distance = Math.abs(visibleCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      setActiveId((currentId) => (currentId === closestSection.id ? currentId : closestSection.id));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/55 px-3 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-white/8" />
        <motion.div
          className="absolute left-5 top-4 origin-top bg-gradient-to-b from-accent via-accentSoft to-transparent"
          style={{ scaleY: reduceMotion ? 1 : scaleY, height: "calc(100% - 2rem)", width: "1px" }}
        />
        <div className="relative flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center justify-end gap-3 rounded-full py-1.5 pl-2 pr-1 transition ${
                  isActive ? "text-accentSoft" : "text-slate-500 hover:text-slate-200"
                }`}
                data-hover
                data-cursor="Go"
                aria-label={`Jump to ${item.label}`}
              >
                <span
                  className={`overflow-hidden whitespace-nowrap text-xs uppercase tracking-[0.24em] transition-all duration-300 ${
                    isActive
                      ? "max-w-[8rem] opacity-100"
                      : "max-w-0 opacity-0 group-hover:max-w-[8rem] group-hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`h-2.5 w-2.5 rounded-full border transition duration-300 ${
                    isActive
                      ? "scale-125 border-accentSoft bg-accentSoft shadow-[0_0_14px_rgba(103,232,249,0.65)]"
                      : "border-white/20 bg-white/10 group-hover:scale-125 group-hover:border-accent/40 group-hover:bg-accent/20"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
