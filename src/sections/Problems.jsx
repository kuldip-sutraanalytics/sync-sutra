import React from "react";
import Reveal from "@/components/Reveal";
import { TriangleAlert, Unplug, FileWarning } from "lucide-react";

const ITEMS = [
  {
    icon: TriangleAlert,
    title: "Too much data, no clarity",
    desc: "Hundreds of orders, products and customers — but no clean way to spot trends, leaks or wins. Decisions get delayed, opportunities get missed.",
  },
  {
    icon: Unplug,
    title: "Disconnected stores, fragmented view",
    desc: "Switching between WooCommerce admins for each store eats hours. You can't compare performance side-by-side or share access cleanly with your team.",
  },
  {
    icon: FileWarning,
    title: "The reporting struggle is real",
    desc: "Manual exports, broken spreadsheets and \"can you send me last month's numbers?\" pings. Weekly reports take an entire afternoon — every week.",
  },
];

export default function Problems() {
  return (
    <section id="problems" data-testid="problems-section" className="container-x">
      <div className="max-w-2xl">
        <span className="eyebrow">The reality of running stores</span>
        <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          Sound familiar? <span className="text-[#7955e6]">We thought so.</span>
        </h2>
        <p className="mt-4 text-[#524673] text-base lg:text-lg leading-relaxed">
          Sync Sutra exists to remove the friction between your store data and the decisions you need to make today.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {ITEMS.map((it, i) => (
          <Reveal
            key={it.title}
            delay={i * 0.08}
            data-testid={`problem-card-${i}`}
            className="surface p-7 lg:p-8 hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_20px_45px_-18px_rgba(121,85,230,0.35)]"
          >
            <div className="h-12 w-12 rounded-2xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
              <it.icon className="h-5.5 w-5.5" strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 font-display font-bold text-xl text-[#120d26]">{it.title}</h3>
            <p className="mt-2.5 text-[#524673] leading-relaxed text-[15px]">{it.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
