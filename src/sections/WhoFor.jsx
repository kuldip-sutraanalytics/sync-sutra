import React from "react";
import { Store, Briefcase, Code2, BarChart3, Users, ShoppingBag } from "lucide-react";

const ROLES = [
  { icon: Store, t: "WooCommerce store owners", d: "Run your store from a single dashboard instead of jumping between tabs." },
  { icon: Briefcase, t: "Store managers", d: "See live performance, manage orders in bulk and ship reports without touching admin." },
  { icon: Code2, t: "Freelance WooCommerce devs", d: "Connect every client store in one place. Hand them clean monthly reports automatically." },
  { icon: ShoppingBag, t: "Ecommerce founders", d: "Spot growth signals across multiple brands and react before opportunities cool down." },
  { icon: Users, t: "Sales teams", d: "Live order feeds, top customers and refund leaks — without giving access to WooCommerce admin." },
  { icon: BarChart3, t: "Analysts & decision makers", d: "Cohort retention, revenue by location and category — already calculated, no SQL needed." },
];

export default function WhoFor() {
  return (
    <section id="who-for" data-testid="who-for-section" className="container-x">
      <div className="max-w-2xl">
        <span className="eyebrow">Who Sync Sutra is for</span>
        <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          If you live in a WooCommerce admin tab, this is for you.
        </h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ROLES.map((r, i) => (
          <div key={r.t} data-testid={`who-for-${i}`} className="surface p-7 hover:-translate-y-1 transition-transform">
            <div className="h-11 w-11 rounded-xl bg-[#7955e6] text-white grid place-items-center shadow-[0_8px_22px_-10px_rgba(121,85,230,0.5)]">
              <r.icon className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 font-display font-bold text-xl">{r.t}</h3>
            <p className="mt-2 text-[#524673] leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
