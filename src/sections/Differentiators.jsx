import React from "react";
import { Check, X } from "lucide-react";

const ROWS = [
  ["Connect multiple WooCommerce stores", true, "Limited"],
  ["3 dashboards (Today / Lifetime / Custom)", true, false],
  // ["Bulk edit orders, products & customers", true, false],
  ["Sync as fast as every 5 minutes", true, false],
  ["Auto exports to email (CSV + Excel)", true, "Add-on"],
  ["Low-stock email alerts", true, false],
  ["Share stores with team members", true, "Per-seat"],
  ["No plugins, no servers, no engineers", true, false],
];

export default function Differentiators() {
  return (
    <section id="different" data-testid="differentiators-section" className="container-x">
      <div className="max-w-2xl">
        <span className="eyebrow">What makes us different</span>
        <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          Built for stores. Not for <span className="text-[#7955e6]">enterprise BI tools.</span>
        </h2>
        <p className="mt-4 text-[#524673] leading-relaxed">
          Most analytics tools are generic. Sync Sutra is opinionated, focused, and built around how WooCommerce store owners actually work.
        </p>
      </div>

      <div className="mt-12 surface overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 bg-[#f3f0fd] text-xs uppercase tracking-widest font-bold text-[#524673]">
          <div className="col-span-6">Capability</div>
          <div className="col-span-3 text-center text-[#7955e6]">Sync Sutra</div>
          <div className="col-span-3 text-center">Generic dashboards</div>
        </div>
        {ROWS.map(([cap, ours, theirs], i) => (
          <div key={cap} className={`grid grid-cols-12 items-center px-6 py-4 text-sm ${i % 2 ? "bg-white" : "bg-[#f3f0fd]/40"}`}>
            <div className="col-span-6 font-medium text-[#120d26]">{cap}</div>
            <div className="col-span-3 flex justify-center">
              {ours === true ? <Check className="h-5 w-5 text-[#7955e6]" strokeWidth={2.5} /> : <span className="text-[#524673]">{ours}</span>}
            </div>
            <div className="col-span-3 flex justify-center">
              {theirs === false ? <X className="h-5 w-5 text-[#524673]/50" strokeWidth={2.2} /> : <span className="text-[#524673] text-xs font-semibold chip">{theirs}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
