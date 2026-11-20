import React from "react";
import Reveal from "@/components/Reveal";
import {
  Table2,
  Bell,
  FileSpreadsheet,
  Users2,
  RefreshCw,
  MapPin,
  Layers,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="container-x"
    >
      <Reveal className="max-w-3xl">
        <span className="eyebrow">Everything you need</span>
        <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          One workspace for every store, every order, every customer.
        </h2>
        <p className="mt-4 text-[#524673] text-base lg:text-lg leading-relaxed">
          Built specifically for WooCommerce. No plugins to fight with, no
          spreadsheets to babysit.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[minmax(0,auto)]">
        {/* Big — Data Tables (spans full width on lg now since we removed bulk-edit) */}
        <Reveal className="md:col-span-6 lg:col-span-12 surface p-7 lg:p-10 hover:-translate-y-1 transition-transform duration-300">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
                  <Table2 className="h-5 w-5" />
                </div>
                <span className="chip">Data tables</span>
              </div>
              <h3 className="mt-5 font-display font-bold text-2xl lg:text-3xl">
                Compact, fast tables for orders, products and customers.
              </h3>
              <p className="mt-3 text-[#524673] leading-relaxed">
                Choose the columns you actually care about. Filter by date, sort
                by anything, search across stores — and switch stores in a
                single click.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#120d26]">
                {[
                  "Pick your columns",
                  "Date-range filters, quick search",
                  "One-click store switching",
                  "Orders, Products & Customers — all in one place",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7955e6]" />{" "}
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 rounded-2xl border border-[#e2dbf7] overflow-x-auto">
              <div className="min-w-162.5 md:min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider font-semibold text-[#524673] bg-[#f3f0fd]">
                      <th className="px-4 py-2.5 text-left w-[8%]">#</th>
                      <th className="px-4 py-2.5 text-left w-[22%]">
                        Customer
                      </th>
                      <th className="px-4 py-2.5 text-left w-[25%]">Product</th>
                      <th className="px-4 py-2.5 text-left w-[15%]">Status</th>
                      <th className="px-4 py-2.5 text-left w-[15%]">Total</th>
                      <th className="px-4 py-2.5 text-left w-[15%]">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "1042",
                        "Aisha P.",
                        "Linen Tote · Sand",
                        "Completed",
                        "$84.00",
                        "02-02-2026",
                      ],
                      [
                        "1041",
                        "Marco V.",
                        "Ceramic Mug · Indigo",
                        "Processing",
                        "$28.00",
                        "30-01-2026",
                      ],
                      [
                        "1040",
                        "Lara H.",
                        "Walnut Stand",
                        "Completed",
                        "$112.00",
                        "15-01-2026",
                      ],
                      [
                        "1039",
                        "Diego R.",
                        "Vegan Lip Balm ×2",
                        "On hold",
                        "$18.00",
                        "10-01-2026",
                      ],
                      [
                        "1038",
                        "Nia K.",
                        "Hand-dyed Scarf",
                        "Completed",
                        "$64.00",
                        "01-01-2026",
                      ],
                    ].map((r, i) => (
                      <tr
                        key={i}
                        className={`${i % 2 ? "bg-white" : "bg-[#f3f0fd]/40"}`}
                      >
                        <td className="px-4 py-3 text-sm font-mono text-[#524673]">
                          {r[0]}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {r[1]}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#524673]">
                          {r[2]}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`whitespace-nowrap ${r[3] === "Completed" ? "text-emerald-600" : r[3] === "Processing" ? "text-[#7955e6]" : "text-rose-500"}`}
                          >
                            {r[3]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold whitespace-nowrap">
                          {r[4]}
                        </td>
                        <td className="px-4 py-3 text-right text-xs text-[#524673] whitespace-nowrap">
                          {r[5]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Low stock */}
        <Reveal
          delay={0.05}
          className="md:col-span-3 lg:col-span-4 surface p-7 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
            <Bell className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display font-bold text-xl">
            Low-stock email alerts
          </h3>
          <p className="mt-2 text-[#524673]">
            Set per-product thresholds and get notified the moment you're about
            to lose a sale.
          </p>
        </Reveal>

        {/* Auto export */}
        <Reveal
          delay={0.1}
          className="md:col-span-3 lg:col-span-4 surface p-7 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
            <FileSpreadsheet className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display font-bold text-xl">
            Scheduled CSV & Excel exports
          </h3>
          <p className="mt-2 text-[#524673]">
            Daily, weekly or monthly — orders, products, customers and full
            performance reports straight to your inbox.
          </p>
        </Reveal>

        {/* Team sharing */}
        <Reveal
          delay={0.15}
          className="md:col-span-6 lg:col-span-4 surface p-7 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
            <Users2 className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display font-bold text-xl">
            Share access with your team
          </h3>
          <p className="mt-2 text-[#524673]">
            Invite your sales team, analysts or freelance partners to specific
            stores. Read-only or full access — your call.
          </p>
        </Reveal>

        {/* Sync frequency */}
        <Reveal className="md:col-span-6 lg:col-span-7 surface p-7 lg:p-9 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
              <RefreshCw className="h-5 w-5" />
            </div>
            <span className="chip">Live sync</span>
          </div>
          <h3 className="mt-5 font-display font-bold text-2xl">
            Sync as fast as your business moves.
          </h3>
          <p className="mt-2 text-[#524673] leading-relaxed">
            From every 5 minutes to once a night — choose the cadence per store.
            Hit "Sync now" anytime for fresh data on demand.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Every 5 min",
              "Every 15 min",
              "Hourly",
              "Every 4 hrs",
              "Every 12 hrs",
              "Daily 08:00",
              "Nightly default",
            ].map((c, i) => (
              <span
                key={c}
                className={`chip ${i === 2 ? "bg-[#7955e6] text-white border-[#7955e6]" : ""}`}
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Locations */}
        <Reveal
          delay={0.05}
          className="md:col-span-3 lg:col-span-5 surface p-7 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
            <MapPin className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display font-bold text-xl">
            Revenue & orders by location
          </h3>
          <p className="mt-2 text-[#524673]">
            See which countries and cities drive growth — and which need a
            marketing nudge.
          </p>
        </Reveal>

        {/* Categories & retention */}
        <Reveal
          delay={0.1}
          className="md:col-span-3 lg:col-span-7 surface p-7 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-11 w-11 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
            <Layers className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display font-bold text-xl">
            Top products, categories & retention
          </h3>
          <p className="mt-2 text-[#524673]">
            Surface what's selling, what's stuck and how often customers come
            back — automatically.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
