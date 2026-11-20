import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { ROADMAP, SHIPPED } from "@/data/roadmap";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Roadmap",
  description: "See what Sync Sutra has shipped and what's coming next: bulk edit, Airtable, cross-store dashboards, Shopify support and more.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <>
      <PageHero eyebrow="Roadmap" title="What we're building" highlight="next." description="We ship weekly. Tell us what matters most and it moves up the list." crumbs={[{ label: "Roadmap" }]}>
        <Link href="/contact" className="btn-primary">Suggest a feature</Link>
      </PageHero>
      <section className="container-x section-y">
        <div className="grid gap-5 lg:grid-cols-4">
          {ROADMAP.map((col, ci) => (
            <Reveal key={col.col} delay={ci * 0.08}>
              <h2 className="eyebrow mb-4">{col.col}</h2>
              <div className="space-y-4">
                {col.items.map((it) => (
                  <div key={it.t} className="surface p-5 transition-all hover:-translate-y-1 hover:shadow-glow">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f3f0fd] text-[#7955e6]"><Icon name={it.icon} className="h-5 w-5" /></span>
                    <h3 className="mt-3 font-display text-lg font-bold">{it.t}</h3>
                    <p className="mt-1 text-sm text-[#524673]">{it.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-x pb-6">
        <h2 className="font-display text-2xl font-extrabold lg:text-3xl">Already shipped</h2>
        <StaggerGroup className="mt-6 grid gap-3 sm:grid-cols-2">
          {SHIPPED.map((s) => (
            <StaggerItem key={s}><div className="surface flex items-center gap-3 p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#7955e6]" />{s}</div></StaggerItem>
          ))}
        </StaggerGroup>
      </section>
      <CTASection />
    </>
  );
}
