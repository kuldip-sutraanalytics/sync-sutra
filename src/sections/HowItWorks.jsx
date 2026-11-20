import React from "react";
import Reveal from "@/components/Reveal";
import { Plug, LineChart, MoveRight, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Plug,
    title: "Connect your store",
    desc: "Paste your WooCommerce URL and API keys, pick your timezone , country — and we securely import all your orders, products and customers in minutes.",
  },
  {
    n: "02",
    icon: LineChart,
    title: "Gain instant insights",
    desc: "Three ready-made dashboards plus interactive data tables for orders, products and customers. Filter, sort and switch stores in one click.",
  },
  {
    n: "03",
    icon: BadgeCheck,
    title: "Take better decisions",
    desc: "Spot top products, slow movers, location trends, retention and refund leaks. Export reports automatically and act with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="container-x">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
            Up and running in <span className="text-[#7955e6]">three simple steps.</span>
          </h2>
        </div>
        <p className="text-[#524673] lg:max-w-sm text-base">
          No engineering team required. If you can copy and paste an API key, you can connect Sync Sutra.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 gap-6 relative">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1} data-testid={`step-${i}`} className="relative surface p-8 lg:p-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-[#7955e6] text-white grid place-items-center shadow-[0_10px_24px_-8px_rgba(121,85,230,0.6)]">
                <s.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="font-mono text-sm text-[#7955e6] font-bold tracking-widest">{s.n}</span>
            </div>
            <h3 className="mt-6 font-display font-bold text-2xl text-[#120d26]">{s.title}</h3>
            <p className="mt-3 text-[#524673] leading-relaxed">{s.desc}</p>

            {i < STEPS.length - 1 && (
              <MoveRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 h-7 w-7 text-[#7955e6]/60" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
