import Link from "next/link";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { INTEGRATIONS } from "@/data/integrations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Integrations",
  description: "Sync Sutra connects to WooCommerce and Google Sheets today, with Airtable, Shopify and Slack/Teams digests on the roadmap.",
  path: "/integrations",
});

const BADGE = { Live: "bg-emerald-100 text-emerald-700", Soon: "bg-[#7955e6]/10 text-[#7955e6]", Exploring: "bg-amber-100 text-amber-700" };

export default function IntegrationsPage() {
  return (
    <>
      <PageHero eyebrow="Integrations" title="Connect the tools" highlight="you already use." description="Start with WooCommerce and Google Sheets today. More integrations are on the way — and you decide what comes next." crumbs={[{ label: "Integrations" }]} />
      <section className="container-x pb-10"><Marquee items={INTEGRATIONS} /></section>
      <section className="container-x section-y">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((i) => (
            <StaggerItem key={i.name}>
              <div className="surface h-full p-7 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f3f0fd] text-[#7955e6]"><Icon name={i.icon} className="h-6 w-6" /></span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${BADGE[i.status]}`}>{i.status}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{i.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#524673]">{i.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-10 text-center text-[#524673]">Need something else? <Link href="/contact" className="font-bold text-[#7955e6] hover:underline">Request an integration</Link>.</p>
      </section>
      <CTASection />
    </>
  );
}
