import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "120+", label: "Early access users" },
  { value: "260+", label: "Stores synced" },
  { value: "$850K+", label: "GMV analyzed" },
  { value: "6 hrs", label: "Saved per week, on average" },
];

export default function Stats() {
  return (
    <section data-testid="stats-section" className="container-x">
      <Reveal className="surface px-6 sm:px-10 py-10 lg:py-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#7955e6]/10 blur-3xl" aria-hidden />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 relative">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-testid={`stat-${i}`}
              className="text-center lg:border-r last:border-r-0 border-[#e2dbf7]"
            >
              <div className="font-display font-extrabold text-4xl lg:text-5xl text-[#7955e6] tracking-tighter">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-2 text-sm text-[#524673] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
