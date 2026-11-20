import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/Reveal";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { FEATURES, getFeature } from "@/data/features";
import { SITE } from "@/data/site";
import { createMetadata, breadcrumbLd } from "@/lib/seo";

export const generateStaticParams = () => FEATURES.map((f) => ({ slug: f.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return {};
  return createMetadata({ title: f.title, description: f.description, path: `/features/${f.slug}` });
}

export default async function FeaturePage({ params }) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();
  const related = f.related.map(getFeature).filter(Boolean).map((r) => ({ href: `/features/${r.slug}`, icon: r.icon, title: r.title, short: r.short }));

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }, { name: f.title, path: `/features/${f.slug}` }])} />
      <PageHero eyebrow={f.title} title={f.headline} description={f.description} crumbs={[{ label: "Features", href: "/features" }, { label: f.title }]}>
        <a href={SITE.signupUrl} target="_blank" className="btn-primary">Start free</a>
        <Link href="/pricing" className="btn-secondary">Compare plans</Link>
      </PageHero>

      <section className="container-x section-y">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="surface p-8 lg:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f3f0fd] text-[#7955e6]"><Icon name={f.icon} className="h-7 w-7" /></span>
            <h2 className="mt-5 font-display text-2xl font-extrabold lg:text-3xl">What you get</h2>
            <StaggerGroup className="mt-6 space-y-3">
              {f.benefits.map((b) => (
                <StaggerItem key={b}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7955e6] text-white"><Check className="h-3.5 w-3.5" /></span>
                    <span className="text-[#120d26]">{b}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
          <div>
            <h2 className="font-display text-2xl font-extrabold lg:text-3xl">How it works</h2>
            <StaggerGroup className="relative mt-6 space-y-5 before:absolute before:left-[1.35rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[#e2dbf7]">
              {f.steps.map((s, i) => (
                <StaggerItem key={s.t}>
                  <div className="relative flex gap-4">
                    <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#7955e6] font-display font-extrabold text-white shadow-glow">{i + 1}</span>
                    <div className="surface flex-1 p-5">
                      <h3 className="font-display text-lg font-bold">{s.t}</h3>
                      <p className="mt-1 text-sm text-[#524673]">{s.d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="container-x pb-6">
        <SectionHeading title="Works even better with" />
        <div className="mt-8"><FeatureGrid items={related} /></div>
      </section>
      <CTASection />
    </>
  );
}
