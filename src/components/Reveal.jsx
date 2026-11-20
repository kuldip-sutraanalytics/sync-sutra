"use client";
import React from "react";
import { motion } from "motion/react";

// Lightweight scroll reveal — opacity + transform only, runs once when scrolled into view.
export default function Reveal({ children, variant = "up", delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: variant === "up" ? 40 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
