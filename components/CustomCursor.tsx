"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 820, damping: 42, mass: 0.12 });
  const ringY = useSpring(cursorY, { stiffness: 820, damping: 42, mass: 0.12 });
  const dotX = useSpring(cursorX, { stiffness: 1400, damping: 52, mass: 0.08 });
  const dotY = useSpring(cursorY, { stiffness: 1400, damping: 52, mass: 0.08 });

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      setVisible(true);
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactiveTarget = target?.closest<HTMLElement>("a, button, [data-hover]");
      setHovered(Boolean(interactiveTarget));
      setLabel(interactiveTarget?.dataset.cursor ?? "");
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 md:flex md:items-center md:justify-center"
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.7 : 1,
          width: hovered ? 68 : 40,
          height: hovered ? 68 : 40,
        }}
        style={{
          x: ringX,
          y: ringY,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 48, mass: 0.1 }}
      >
        <div className="cursor-ring h-full w-full rounded-full bg-accent/5" />
        {label ? (
          <span className="absolute text-[10px] font-semibold uppercase tracking-[0.18em] text-accentSoft">
            {label}
          </span>
        ) : null}
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 0.55 : 1,
        }}
        style={{
          x: dotX,
          y: dotY,
        }}
        transition={{ type: "spring", stiffness: 1500, damping: 58, mass: 0.08 }}
      />
    </>
  );
}
