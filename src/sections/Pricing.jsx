"use client";
import React, { useState } from "react";
import { Check, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

const PLANS = [
  {
    key: "free",
    name: "Free",
    monthly: 0,
    yearly: 0,
    tagline: "Everything you need to get started. Free, forever.",
    features: [
      "1 store",
      "1 team member",
      "Sync order upto 100/month/store",
      "Today + Lifetime dashboards (Limited Metrics)",
      "Core KPIs: revenue, orders, customers, AOV, shipping, discount, refund",
      "Once-nightly sync only",
      "Email Support",
      "Google Sheet Sync",
    ],
    notIncluded: [
      "Custom sync frequencies",
      "Data exports",
      "Report exports",
      "Low-stock alerts",
      "Instant On-demand Sync",
      "Onboarding Assistance",
      "Early Access to new features",
    ],
    cta: "Start Free - Forever",
  },
  {
    key: "starter",
    name: "Starter",
    monthly: 29,
    yearly: 19,
    tagline: "For solo store owners getting serious.",
    features: [
      "1 store",
      "2 team members",
      "Sync order upto 500/month/store",
      "5 low-stock alerts",
      "Custom daily sync",
      "Hourly sync (Every 3, 4, 6, 12 hour)",
      "Monthly data + report export",
      "Google Sheet Sync",
      "Today + Lifetime dashboards",
      "Orders by status, revenue by location",
      "Top products & customers",
      "Onboarding Assistance",
      "Email + chat support",
      "Early Access to new features",
    ],
    notIncluded: ["Instant On-demand Sync", "Custom Dashboard"],
    cta: "Start with Starter",
  },
  {
    key: "growth",
    name: "Growth",
    monthly: 59,
    yearly: 49,
    tagline: "Most teams pick this. 7-day free trial included.",
    recommended: true,
    features: [
      "3 stores",
      "5 team members",
      "Sync order upto 5000/month/store",
      "25 low-stock alerts",
      "Daily, hourly & minutely sync",
      "More sync frequency options",
      "Instant On-demand Sync",
      "Weekly + monthly exports",
      "Google Sheet Sync",
      "All 3 dashboards (incl. Custom Analytics)",
      "Customer retention chart",
      "Low-stock & out-of-stock lists",
      "Monthly + yearly trends, revenue by category",
      "Onboarding Assistance",
      "Priority Support",
      "Early Access to new features",
    ],
    cta: "Start With Growth",
    hasFreeTrialBadge: true,
  },
  {
    key: "scale",
    name: "Scale",
    monthly: 129,
    yearly: 99,
    tagline: "Built for high-volume stores, agencies, and enterprise teams.",

    features: [
      "10 stores",
      "Unlimited team members",
      "Sync unlimited order month/store",
      "Unlimited low-stock alerts",
      "Full sync flexibility",
      "Instant On-demand Sync",
      "Daily, weekly, monthly exports",
      "Google Sheet Sync",
      "All dashboards + all metrics",
      "Customer retention",
      "Highest limits across the board",
      "Onboarding Assistance",
      "Dedicated account manager",
      "Early Access to new features",
    ],
    cta: "Start With Scale",
  },
];

const Pricing = ({ hideHeading = false }) => {
  const [yearly, setYearly] = useState(true);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleAllFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <section id="pricing" data-testid="pricing-section" className="container-x">
      <div className="text-center max-w-2xl mx-auto">
        {!hideHeading && (<><span className="eyebrow">Pricing</span><h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          Fair pricing. <span className="text-[#7955e6]">No surprises.</span>
        </h2></>)}
        <p className="mt-4 text-[#524673] leading-relaxed">
          Start free. Upgrade when you outgrow it. The Growth plan comes with a
          7-day free trial — no credit card required.
        </p>

        <div className="mt-8 inline-flex items-center bg-white border border-[#e2dbf7] rounded-full p-1.5">
          <button
            data-testid="billing-monthly"
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              !yearly
                ? "bg-[#7955e6] text-white shadow-[0_8px_22px_-10px_rgba(121,85,230,0.6)]"
                : "text-[#524673]"
            }`}
          >
            Monthly
          </button>
          <button
            data-testid="billing-yearly"
            onClick={() => setYearly(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all flex items-center gap-2 ${
              yearly
                ? "bg-[#7955e6] text-white shadow-[0_8px_22px_-10px_rgba(121,85,230,0.6)]"
                : "text-[#524673]"
            }`}
          >
            Yearly
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                yearly
                  ? "bg-white text-[#7955e6]"
                  : "bg-[#f3f0fd] text-[#7955e6]"
              }`}
            >
              Save up to 34%
            </span>
          </button>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PLANS.map((p) => {
          const price = yearly ? p.yearly : p.monthly;
          const showSave =
            yearly && p.monthly > 0
              ? Math.round(((p.monthly - p.yearly) / p.monthly) * 100)
              : 0;
          const isReco = !!p.recommended;

          const totalFeatures =
            p.features.length + (p.notIncluded?.length || 0);
          const hasMoreFeatures = totalFeatures > 5;

          return (
            <div
              key={p.key}
              data-testid={`plan-${p.key}`}
              className={`relative rounded-3xl p-7 lg:p-8 transition-all duration-300 mt-3 ${
                isReco
                  ? "bg-[#120d26] text-white border border-[#120d26] shadow-[0_30px_60px_-20px_rgba(121,85,230,0.5)] -translate-y-2"
                  : "bg-white border border-[#e2dbf7] hover:-translate-y-1 shadow-[0_8px_30px_rgba(121,85,230,0.06)]"
              }`}
            >
              {isReco && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#7955e6] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  <Sparkles className="h-3 w-3" /> Recommended
                </span>
              )}

              <div className="flex items-baseline justify-between">
                <h3
                  className={`font-display font-extrabold text-2xl ${
                    isReco ? "text-white" : "text-[#120d26]"
                  }`}
                >
                  {p.name}
                </h3>
                {showSave > 0 && (
                  <span
                    className={`text-[11px] font-bold ${
                      isReco
                        ? "bg-white/10 text-white"
                        : "bg-[#f3f0fd] text-[#7955e6]"
                    } px-2 py-1 rounded-full`}
                  >
                    -{showSave}%
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  isReco ? "text-white/70" : "text-[#524673]"
                }`}
              >
                {p.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={`font-display font-extrabold text-5xl tracking-tighter ${
                    isReco ? "text-white" : "text-[#120d26]"
                  }`}
                >
                  ${price}
                </span>
                <span
                  className={`text-sm ${
                    isReco ? "text-white/60" : "text-[#524673]"
                  }`}
                >
                  /mo
                </span>
              </div>
              {p.key === "free" && (
                <div
                  className={`mt-1 text-xs ${isReco ? "text-white/60" : "text-[#524673]"}`}
                >
                  No credit card required
                </div>
              )}
              {yearly && p.yearly > 0 && (
                <div
                  className={`mt-1 text-xs ${
                    isReco ? "text-white/60" : "text-[#524673]"
                  }`}
                >
                  billed yearly
                </div>
              )}
              {!yearly && p.monthly > 0 && (
                <div
                  className={`mt-1 text-xs ${
                    isReco ? "text-white/60" : "text-[#524673]"
                  }`}
                >
                  billed monthly
                </div>
              )}

              <div className="relative mt-6">
                <a
                  href="https://app.syncsutra.io"
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`plan-cta-${p.key}`}
                  className={`inline-flex w-full justify-center rounded-full px-5 py-3 font-semibold transition-all ${
                    isReco
                      ? "bg-[#7955e6] hover:bg-[rgb(104,68,207)] text-white"
                      : "bg-[#120d26] hover:bg-[rgb(36,24,72)] text-white"
                  }`}
                >
                  {p.cta}
                </a>
                {p.hasFreeTrialBadge && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#120d26] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                    7 days free
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul
                className={`mt-7 space-y-3 text-sm ${
                  isReco ? "text-white/85" : "text-[#120d26]"
                }`}
              >
                {p.features
                  .slice(0, showAllFeatures ? undefined : 5)
                  .map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          isReco ? "text-[rgb(207,191,247)]" : "text-[#7955e6]"
                        }`}
                        strokeWidth={2.6}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                {showAllFeatures &&
                  p.notIncluded?.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 opacity-60 line-through"
                    >
                      <Check className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
              </ul>

              {/* Show More / Show Less Button - Only visible at the bottom of each card */}
              {hasMoreFeatures && (
                <button
                  onClick={toggleAllFeatures}
                  className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-medium text-[#7955e6] hover:text-[rgb(104,68,207)] transition-colors py-2 rounded-lg hover:bg-[#f3f0fd]"
                >
                  {showAllFeatures ? (
                    <>
                      <ChevronUp className="h-3 w-3" />
                      <span>Show less features</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3" />
                      <span>View all features</span>
                    </>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-xs text-[#524673]">
        All plans support secure WooCommerce REST API connections, GDPR-friendly
        storage and unlimited views per dashboard.
      </p>
    </section>
  );
};

export default React.memo(Pricing);
