import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, Clock, Sparkles, ArrowUpRight } from "lucide-react";

const KPI = ({ label, value, delta, positive = true }) => (
  <div className="rounded-2xl border border-[#e2dbf7] bg-white p-5">
    <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
      {label}
    </div>
    <div className="mt-2 font-display font-extrabold text-2xl lg:text-3xl text-[#120d26]">
      {value}
    </div>
    {delta && (
      <div
        className={`mt-1 text-xs font-semibold ${positive ? "text-emerald-600" : "text-rose-500"}`}
      >
        {positive ? "▲" : "▼"} {delta}
      </div>
    )}
  </div>
);

function MiniBars({ values, color = "#7955e6" }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-1 h-20">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            opacity: 0.55 + (i / values.length) * 0.4,
          }}
        />
      ))}
    </div>
  );
}

function TodayPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPI label="Revenue today" value="$24,830" delta="18.2%" />
      <KPI label="Orders" value="412" delta="9.1%" />
      <KPI label="Avg. order value" value="$60.27" delta="6.3%" />
      <KPI label="Refunds" value="$214" delta="2.1%" positive={false} />
      <div className="col-span-1 sm:col-span-2 rounded-2xl border border-[#e2dbf7] bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
            Hourly revenue
          </div>
          <span className="chip">live</span>
        </div>
        <div className="mt-4">
          <MiniBars
            values={[
              12, 18, 24, 31, 28, 36, 44, 52, 48, 60, 72, 65, 80, 88, 76, 92,
              84, 96,
            ]}
          />
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 rounded-2xl border border-[#e2dbf7] bg-white p-5">
        <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
          Orders by status
        </div>
        <ul className="mt-4 space-y-2.5">
          {[
            { l: "Completed", v: 286, c: "#7955e6" },
            { l: "Processing", v: 84, c: "#9776ec" },
            { l: "On hold", v: 28, c: "#cfbff7" },
            { l: "Refunded", v: 14, c: "#ff7e67" },
          ].map((s) => (
            <li key={s.l} className="flex items-center gap-3 text-sm">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: s.c }}
              />
              <span className="flex-1 text-[#120d26]">{s.l}</span>
              <span className="font-semibold text-[#524673]">{s.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LifetimePanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPI label="Total revenue" value="$2.4M" delta="all-time" />
      <KPI label="Total orders" value="38,124" delta="all-time" />
      <KPI label="Customers" value="14,902" delta="all-time" />
      <KPI label="Products sold" value="92,108" delta="all-time" />
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 rounded-2xl border border-[#e2dbf7] bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
            Yearly revenue trend
          </div>
          <span className="chip">+24.8% YoY</span>
        </div>
        <svg viewBox="0 0 600 160" className="mt-4 w-full h-36">
          <defs>
            <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#7955e6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7955e6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,130 C50,120 100,110 150,90 C200,70 250,80 300,60 C350,40 400,55 450,40 C500,25 550,35 600,15 L600,160 L0,160 Z"
            fill="url(#lg)"
          />
          <path
            d="M0,130 C50,120 100,110 150,90 C200,70 250,80 300,60 C350,40 400,55 450,40 C500,25 550,35 600,15"
            fill="none"
            stroke="#7955e6"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </div>
  );
}

function CustomPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-1 sm:col-span-2 rounded-2xl border border-[#e2dbf7] bg-white p-5">
        <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
          Date range
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Yesterday",
            "This week",
            "Last week",
            "This month",
            "Last month",
            "This year",
            "Custom",
          ].map((l, i) => (
            <span
              key={l}
              className={`chip ${i === 4 ? "bg-[#7955e6] text-white border-[#7955e6]" : ""}`}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-[#524673]">
          <Calendar className="h-4 w-4 text-[#7955e6]" /> 01 Nov — 30 Nov, 2025
        </div>
      </div>
      <KPI label="Revenue" value="$184,210" delta="12.4% vs prev." />
      <KPI label="Retention" value="42.6%" delta="3.1%" />
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 rounded-2xl border border-[#e2dbf7] bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
            Revenue by product category
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { l: "Apparel", v: 62 },
            { l: "Home & Living", v: 48 },
            { l: "Beauty", v: 36 },
            { l: "Accessories", v: 28 },
          ].map((c) => (
            <div key={c.l} className="rounded-xl bg-[#f3f0fd] p-4">
              <div className="text-xs text-[#524673] font-semibold">{c.l}</div>
              <div className="mt-2 font-display font-bold text-xl text-[#120d26]">
                ${(c.v * 1000).toLocaleString()}
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white overflow-hidden">
                <div
                  className="h-full bg-[#7955e6]"
                  style={{ width: `${c.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Dashboards() {
  return (
    <section
      id="dashboards"
      data-testid="dashboards-section"
      className="container-x"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">The main feature</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
            Three dashboards that answer{" "}
            <span className="text-[#7955e6]">every store question.</span>
          </h2>
        </div>
        <p className="lg:col-span-5 text-[#524673] text-base leading-relaxed">
          From this morning's spike to this year's retention curve — switch
          context in one click and stop digging through WooCommerce admin tabs.
        </p>
      </div>

      <Tabs defaultValue="today" className="mt-12">
        {/* Responsive TabsList: 1 col on mobile, 3 cols on tablet/desktop */}
        <TabsList
          data-testid="dashboard-tabs"
          className="bg-white border border-[#e2dbf7] p-2 rounded-xl h-auto grid grid-cols-1 sm:grid-cols-3 gap-2 w-full sm:w-auto sm:inline-flex"
        >
          <TabsTrigger
            value="today"
            data-testid="tab-today"
            className="rounded-full px-5 py-2.5 data-[state=active]:bg-[#7955e6] data-[state=active]:text-white text-[#524673] data-[state=active]:shadow-[0_8px_22px_-10px_rgba(121,85,230,0.6)] w-full justify-center flex items-center"
          >
            <Clock className="h-3.5 w-3.5 mr-1.5 shrink-0" /> Today's
            Performance
          </TabsTrigger>
          <TabsTrigger
            value="lifetime"
            data-testid="tab-lifetime"
            className="rounded-full px-5 py-2.5 data-[state=active]:bg-[#7955e6] data-[state=active]:text-white text-[#524673] data-[state=active]:shadow-[0_8px_22px_-10px_rgba(121,85,230,0.6)] w-full justify-center flex items-center"
          >
            Lifetime Summary
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            data-testid="tab-custom"
            className="rounded-full px-5 py-2.5 data-[state=active]:bg-[#7955e6] data-[state=active]:text-white text-[#524673] data-[state=active]:shadow-[0_8px_22px_-10px_rgba(121,85,230,0.6)] w-full justify-center flex items-center"
          >
            Custom Analytics{" "}
            <ArrowUpRight className="h-3.5 w-3.5 ml-1 shrink-0" />
          </TabsTrigger>
        </TabsList>

        <div className="mt-8 surface p-4 lg:p-7">
          <TabsContent value="today">
            <TodayPanel />
          </TabsContent>
          <TabsContent value="lifetime">
            <LifetimePanel />
          </TabsContent>
          <TabsContent value="custom">
            <CustomPanel />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
