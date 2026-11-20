"use client";
import React from "react";
import { motion } from "motion/react";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  FileSpreadsheet,
  Pencil,
  Columns3,
  Download,
  BarChartHorizontal,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const ITEMS = [
  // {
  //   icon: FileSpreadsheet,
  //   t: "Google Sheets sync",
  //   d: "Live two-way sync between your store data and Google Sheets. Build custom dashboards in Sheets without copy-paste.",
  //   status: "In design",
  // },
  {
    icon: Pencil,
    t: "Bulk edit everything",
    d: "Update prices, stock, statuses, customer details and more across hundreds of rows — without leaving Sync Sutra.",
    status: "In build",
  },
  {
    icon: Columns3,
    t: "Airtable integration",
    d: "Push orders, products and customers straight into your Airtable workspace. Trigger automations downstream.",
    status: "Soon",
  },
  {
    icon: Download,
    t: "Quick selective downloads",
    d: "Select any rows in the data table and download as CSV or Excel with one click — with just the columns you picked.",
    status: "Soon",
  },
  {
    icon: BarChartHorizontal,
    t: "Cross-store comparative dashboard",
    d: "Benchmark your stores side-by-side. Spot winners, laggards, and shared seasonality in one clear view.",
    status: "In design",
  },
  {
    icon: Sparkles,
    t: "…and a lot more",
    d: "AI anomaly alerts, Shopify support, Slack/Teams digests, customer segments. We ship weekly — vote on what's next.",
    status: "You pick",
  },
];

const ComingSoon = () => {
  return (
    <section
      id="roadmap"
      data-testid="coming-soon-section"
      className="relative py-20 overflow-hidden isolate"
    >
      {/* Layered background so text stays readable */}
      <div className="absolute inset-0 -z-20 bg-[#0d0922]" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-130 w-250 rounded-full bg-[#7955e6]/35 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="container-x text-white relative">
        <Reveal variant="up" className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-xs uppercase tracking-[0.22em] font-bold text-white">
              <Sparkles className="h-3.5 w-3.5 text-[rgb(207,191,247)]" /> Coming up next
            </span>
            <h2 className="mt-5 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter text-white">
              We ship every week.{" "}
              <span className="bg-linear-to-r from-[rgb(207,191,247)] via-white to-[rgb(207,191,247)] bg-clip-text text-transparent">
                Here's what's cooking.
              </span>
            </h2>
          </div>
          <p className="lg:max-w-sm text-white/75 leading-relaxed">
            A public roadmap — not a press release. Vote, suggest, and follow along as we build.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((it, i) => (
            <StaggerItem
              key={it.t}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/6 backdrop-blur-md p-7 transition-all duration-300 over:border-brand-200/50 hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(121,85,230,0.65)]"
              data-testid={`roadmap-item-${i}`}
            >
              <div
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#7955e6]/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-[#7955e6]/25 border border-[#7955e6]/50 grid place-items-center text-[rgb(207,191,247)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <it.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/15 border border-white/20 text-white">
                  {it.status}
                </span>
              </div>
              <h3 className="relative mt-6 font-display font-bold text-xl text-white">{it.t}</h3>
              <p className="relative mt-2 text-white/80 leading-relaxed">{it.d}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15} className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-white/15 bg-white/6 backdrop-blur-md p-6 lg:p-8">
          <div className="text-white text-center sm:text-left">
            <div className="font-display font-bold text-lg">Got a feature you need yesterday?</div>
            <div className="text-sm text-white/70">Tell us — if it helps our users, it ships.</div>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            data-testid="roadmap-cta"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#120d26] px-6 py-3 font-semibold hover:bg-[rgb(207,191,247)] transition-colors shadow-[0_12px_40px_-10px_rgba(255,255,255,0.5)]"
          >
            Suggest a feature <ArrowRight className="h-4 w-4" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

export default React.memo(ComingSoon);
