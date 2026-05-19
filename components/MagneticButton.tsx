"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { scrollToSection } from "@/lib/scroll";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-hover
      data-cursor={external ? "Open" : "View"}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
        isPrimary
          ? "bg-accent text-slate-950 hover:bg-cyan-300"
          : "border border-white/15 bg-white/5 text-white hover:border-accent/60 hover:text-accentSoft"
      }`}
      animate={reduceMotion ? undefined : { x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onClick={(event) => {
        if (!href.startsWith("#")) return;
        event.preventDefault();
        scrollToSection(href.slice(1));
      }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.18;
        const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.18;
        setOffset({ x, y });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" />
    </motion.a>
  );
}
