import { Check, Minus } from "lucide-react";
import PageHero from "@/components/PageHero";
import Pricing from "@/sections/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/data/faq";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Start free and upgrade when you outgrow it. Free, Starter, Growth and Scale plans for WooCommerce stores, with a 7-day free trial on Growth.",
  path: "/pricing",
});

const Y = <Check className="mx-auto h-4 w-4 text-[#7955e6]" aria-label="Included" />;
const N = <Minus className="mx-auto h-4 w-4 text-[#524673]/40" aria-label="Not included" />;
const COLS = ["Free", "Starter", "Growth", "Scale"];
const ROWS = [
  ["Stores", "1", "1", "3", "10"],
  ["Team members (read-only)", "1", "2", "5", "Unlimited"],
  ["Orders synced / month / store", "100", "500", "5,000", "Unlimited"],
  ["Low-stock alerts", N, "5", "25", "Unlimited"],
  ["Sync frequency", "Nightly", "Daily & hourly", "Daily, hourly & minutely", "Full flexibility"],
  ["Instant on-demand sync", N, N, Y, Y],
  ["Data & report exports", N, "Monthly", "Weekly + monthly", "Daily, weekly, monthly"],
  ["Dashboards", "Today + Lifetime (limited)", "Today + Lifetime", "All 3 incl. Custom", "All + all metrics"],
  ["Customer retention chart", N, N, Y, Y],
  ["Google Sheets sync", Y, Y, Y, Y],
  ["Onboarding assistance", N, Y, Y, Y],
  ["Support", "Email", "Email + chat", "Priority", "Dedicated account manager"],
];

export default function PricingPage() {
  const faqs = FAQS.filter((f) => f.cat === "Pricing" || f.cat === "Support");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero eyebrow="Pricing" title="Fair pricing." highlight="No surprises."  crumbs={[{ label: "Pricing" }]} />
      <div className="pb-10"><Pricing hideHeading /></div>

      <section className="container-x section-y">
        <SectionHeading align="center" eyebrow="Compare" title="Plans at a glance" />
        <Reveal className="surface mt-10 overflow-x-auto">
          <table className="w-full min-w-180 text-sm">
            <thead>
              <tr className="bg-[#f3f0fd] text-left">
                <th className="px-5 py-4 font-display text-base">Feature</th>
                {COLS.map((c) => (
                  <th key={c} className={`px-4 py-4 text-center font-display text-base ${c === "Growth" ? "text-[#7955e6]" : ""}`}>{c}{c === "Growth" && <span className="ml-2 rounded-full bg-[#7955e6] px-2 py-0.5 text-[10px] font-bold uppercase text-white">Popular</span>}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-[#e2dbf7] transition-colors hover:bg-[#f3f0fd]/50">
                  <th scope="row" className="px-5 py-3.5 text-left font-semibold">{r[0]}</th>
                  {r.slice(1).map((v, i) => <td key={i} className={`px-4 py-3.5 text-center text-[#524673] ${i === 2 ? "bg-[#7955e6]/4" : ""}`}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      <section className="container-x pb-6">
        <SectionHeading align="center" eyebrow="FAQ" title="Pricing questions" />
        <div className="mx-auto mt-10 max-w-3xl"><FAQ items={faqs} /></div>
      </section>
      <CTASection />
    </>
  );
}
