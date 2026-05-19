"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/scroll";

export function BackToTop() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 720);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      type="button"
      className="fixed bottom-6 right-5 z-40 hidden rounded-full border border-white/10 bg-slate-950/70 p-3 text-slate-200 shadow-glow backdrop-blur-xl lg:block"
      aria-label="Back to top"
      data-hover
      data-cursor="Top"
      initial={false}
      animate={
        reduceMotion
          ? { opacity: visible ? 1 : 0 }
          : { opacity: visible ? 1 : 0, y: visible ? 0 : 18, scale: visible ? 1 : 0.92 }
      }
      transition={{ duration: 0.25 }}
      onClick={() => scrollToSection("hero")}
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  );
}
