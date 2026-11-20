"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

// Animated number counter that triggers on first in-view.
// value can be a number or string like "2,500+", "$48M+" — we extract digits & preserve the format.
export default function AnimatedCounter({ value, duration = 1500, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(/[\d.]+/.test(String(value)) ? (typeof value === "number" ? 0 : "") : String(value));

  useEffect(() => {
    if (!inView) return;

    // Parse digits out of the value
    const str = String(value);
    const match = str.match(/[\d.]+/);
    if (!match) return;
    const target = parseFloat(match[0]);
    const prefix = str.slice(0, match.index);
    const suffix = str.slice(match.index + match[0].length);
    const isInt = !match[0].includes(".");
    const formatter = (n) => {
      const num = isInt ? Math.round(n) : Number(n.toFixed(1));
      return prefix + num.toLocaleString() + suffix;
    };

    let raf;
    const start = performance.now();
    const tick = (t) => {
      const elapsed = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setDisplay(formatter(target * eased));
      if (elapsed < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
