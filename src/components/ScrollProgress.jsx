"use client";
import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.3,
  });

  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 z-60 h-0.75 bg-linear-to-r from-[#7955e6] via-[rgb(151,118,236)] to-[#7955e6] shadow-[0_0_12px_rgba(121,85,230,0.6)]"
      aria-hidden
    />
  );
}
