import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-90" />
      <div className="absolute -top-32 -right-24 -z-10 h-105 w-105 rounded-full bg-[#7955e6]/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 -z-10 h-95 w-95 rounded-full bg-[#7955e6]/15 blur-3xl" />

      <div className="container-x p-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span data-testid="hero-eyebrow" className="chip animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-[#7955e6]" />
            Built for WooCommerce store owners
          </span>

          <h1
            data-testid="hero-heading"
            className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[1.02] animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Manage every order, product
            <br className="hidden sm:block" /> and customer in{" "}
            <span className="gradient-text">one clean place.</span>
          </h1>

          <p
            data-testid="hero-subheading"
            className="mt-6 text-lg lg:text-xl text-[#524673] max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Connect multiple WooCommerce stores in minutes. Get live dashboards,
            auto exports, low-stock alerts and reports — without spreadsheets,
            without code.
            <span className="block mt-2 font-semibold text-[#120d26]">
              One Sync. Endless Insights.
            </span>
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row items-center gap-3 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="https://app.syncsutra.io"
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-primary"
              className="btn-primary group"
            >
              <Zap className="h-4 w-4" />
              Connect your first store
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#dashboards"
              data-testid="hero-cta-secondary"
              className="btn-secondary"
            >
              See live dashboards
            </a>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#524673] animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#7955e6]" /> 7-day free
              trial on Growth
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#7955e6]" /> No credit card
              required
            </span>
            <span className="inline-flex items-center gap-1.5">
              ★ 4.9/5 from early users
            </span>
          </div>
        </div>

        {/* Hero dashboard visual */}
        <div
          className="relative mt-14 lg:mt-20 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="absolute inset-x-10 -top-6 h-24 bg-[#7955e6]/20 blur-3xl rounded-full -z-10" />
          <div className="surface overflow-hidden p-2 lg:p-3 max-w-6xl mx-auto">
            <div className="rounded-2xl bg-linear-to-br from-[#f3f0fd] via-white to-[#f3f0fd] p-4 sm:p-6 lg:p-8 border border-[#e2dbf7]">
              <DashboardMock />
            </div>
          </div>
          <div className="hidden md:flex absolute -left-2 lg:left-6 top-1/12 surface px-4 py-3 items-center gap-3 animate-float">
            <div className="h-9 w-9 rounded-xl bg-[#7955e6]/10 grid place-items-center">
              <Zap className="h-4 w-4 text-[#7955e6]" />
            </div>
            <div className="text-left">
              <div className="text-xs text-[#524673]">Live sync</div>
              <div className="text-sm font-semibold text-[#120d26]">
                3 stores · just now
              </div>
            </div>
          </div>
          <div
            className="hidden md:flex absolute -right-2 lg:right-6 top-2/3 surface px-4 py-3 items-center gap-3 animate-float"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="h-9 w-9 rounded-xl bg-[#7955e6]/10 grid place-items-center text-[#7955e6] font-bold">
              +
            </div>
            <div className="text-left">
              <div className="text-xs text-[#524673]">Today's revenue</div>
              <div className="text-sm font-semibold text-[#120d26]">
                $24,830 ▲ 18%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="grid grid-cols-12 md:gap-4 gap-0 space-y-4 md:space-y-0">
      <div className="col-span-12 md:col-span-3 surface p-5">
        <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
          Today
        </div>
        <div className="mt-2 text-3xl font-display font-extrabold text-[#120d26]">
          $24,830
        </div>
        <div className="text-xs text-emerald-600 font-semibold mt-1">
          ▲ 18.2% vs yesterday
        </div>
        <div className="mt-5 flex items-end gap-1.5 h-16">
          {[40, 55, 32, 70, 48, 88, 64, 92, 58, 76, 84, 96].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-[#7955e6]"
              style={{ height: `${h}%`, opacity: 0.55 + i * 0.03 }}
            />
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-5 surface p-5">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
            Revenue trend · 12 mo
          </div>
          <span className="chip">+24.8%</span>
        </div>
        <svg viewBox="0 0 400 130" className="mt-4 w-full h-32">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#7955e6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7955e6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C40,80 80,90 120,70 C160,50 200,75 240,55 C280,35 320,60 360,30 L400,20 L400,130 L0,130 Z"
            fill="url(#g)"
          />
          <path
            d="M0,100 C40,80 80,90 120,70 C160,50 200,75 240,55 C280,35 320,60 360,30 L400,20"
            fill="none"
            stroke="#7955e6"
            strokeWidth="2.5"
          />
        </svg>
        <div className="mt-2 grid grid-cols-4 gap-2 text-[10px] text-[#524673]">
          {["Jan", "Apr", "Jul", "Dec"].map((m) => (
            <div key={m}>{m}</div>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 surface p-5">
        <div className="text-xs uppercase tracking-widest text-[#524673] font-semibold">
          Top products
        </div>
        <ul className="mt-3 space-y-2.5">
          {[
            { name: "Linen Tote · Sand", v: "1,204" },
            { name: "Ceramic Mug · Indigo", v: "986" },
            { name: "Walnut Stand", v: "742" },
            { name: "Vegan Lip Balm", v: "615" },
          ].map((p) => (
            <li key={p.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="h-7 w-7 rounded-lg bg-[#f3f0fd] grid place-items-center text-[#7955e6] text-xs font-bold">
                  {p.name[0]}
                </span>
                <span className="text-sm text-[#120d26]">{p.name}</span>
              </div>
              <span className="text-xs font-semibold text-[#524673]">
                {p.v}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
