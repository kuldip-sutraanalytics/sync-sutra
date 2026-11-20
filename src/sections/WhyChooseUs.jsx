import React from "react";
import Reveal from "@/components/Reveal";
import { Sparkle, ShieldCheck, Headset, Gauge, Layers3, HeartHandshake } from "lucide-react";

const ITEMS = [
  { icon: Sparkle, t: "Beginner friendly", d: "Designed for store owners — not for engineers. Connect a store in three steps, no docs to read." },
  { icon: Gauge, t: "Live store insights", d: "Pick a sync cadence as fast as every 5 minutes — or hit Sync Now whenever the data needs to be fresh." },
  { icon: Layers3, t: "Reliable & scalable", d: "From your first store to ten — Sync Sutra holds up under millions of orders without choking." },
  { icon: ShieldCheck, t: "Accurate, audited data", d: "Every sync is logged. Numbers always reconcile back to your WooCommerce admin." },
  { icon: Headset, t: "Personalized support", d: "Real humans, fast replies. We help you set up your first store and tune alerts to your workflow." },
  { icon: HeartHandshake, t: "Fair, transparent pricing", d: "Affordable plans with a generous free tier — and a 7-day free trial of Growth, no credit card required." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" data-testid="why-section" className="container-x py-10 lg:py-16">
      <Reveal className="grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">Why Sync Sutra</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
            All the analytics power. <span className="text-[#7955e6]">None of the headache.</span>
          </h2>
        </div>
        <p className="lg:col-span-5 text-[#524673] leading-relaxed">
          We built Sync Sutra after watching too many founders drown in tabs and spreadsheets. It is the tool we wish we'd had.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.05} className="group surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(121,85,230,0.35)] hover:border-[#7955e6]/30" data-testid={`why-card-${i}`}>
            <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <it.icon className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 font-display font-bold text-xl">{it.t}</h3>
            <p className="mt-2 text-[#524673] leading-relaxed">{it.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
