import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { USE_CASES, getUseCase } from "@/data/use-cases";
import { getFeature } from "@/data/features";
import { SITE } from "@/data/site";
import { createMetadata, breadcrumbLd } from "@/lib/seo";

export const generateStaticParams = () => USE_CASES.map((u) => ({ slug: u.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const u = getUseCase(slug);
  return u ? createMetadata({ title: `Sync Sutra for ${u.title}`, description: u.description, path: `/use-cases/${u.slug}` }) : {};
}

export default async function UseCasePage({ params }) {
  const { slug } = await params;
  const u = getUseCase(slug);
  if (!u) notFound();
  const feats = u.features.map(getFeature).filter(Boolean).map((f) => ({ href: `/features/${f.slug}`, icon: f.icon, title: f.title, short: f.short }));
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Use cases", path: "/use-cases" }, { name: u.title, path: `/use-cases/${u.slug}` }])} />
      <PageHero eyebrow={u.title} title={u.headline} description={u.description} crumbs={[{ label: "Use cases", href: "/use-cases" }, { label: u.title }]}>
        <a href={SITE.signupUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start free</a>
        <Link href="/pricing" className="btn-secondary">See pricing</Link>
      </PageHero>
      <section className="container-x section-y">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="surface p-8">
            <h2 className="font-display text-xl font-extrabold">Without Sync Sutra</h2>
            <ul className="mt-5 space-y-3">{u.pains.map((p) => <li key={p} className="flex gap-3 text-[#524673]"><X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />{p}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.1} className="surface border-[#7955e6]/40 p-8 shadow-glow">
            <h2 className="font-display text-xl font-extrabold">With Sync Sutra</h2>
            <ul className="mt-5 space-y-3">{u.wins.map((w) => <li key={w} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#7955e6]" />{w}</li>)}</ul>
          </Reveal>
        </div>
        <p className="mt-8 text-center text-sm text-[#524673]">Recommended plan: <strong className="text-[#120d26]">{u.plan}</strong></p>
      </section>
      <section className="container-x pb-6">
        <SectionHeading title="Features you'll use most" />
        <div className="mt-8"><FeatureGrid items={feats} /></div>
      </section>
      <CTASection />
    </>
  );
}
