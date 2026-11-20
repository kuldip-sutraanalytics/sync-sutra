"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Card wrapper that tilts subtly toward the cursor and adds a
 * purple spotlight behind it on hover. Drop-in replacement for any div.
 */
export default function MagneticCard({
  children,
  className = "",
  intensity = 8, // degrees of max tilt
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, (v) => -v * intensity), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, (v) => v * intensity), { stiffness: 200, damping: 20 });
  const glareX = useTransform(x, (v) => `${50 + v * 50}%`);
  const glareY = useTransform(y, (v) => `${50 + v * 50}%`);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className={`relative group/magnet ${className}`}
      {...rest}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover/magnet:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(420px circle at ${gx} ${gy}, rgba(121,85,230,0.18), transparent 60%)`,
          ),
        }}
      />
      <div className="relative" style={{ transform: "translateZ(0.01px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
