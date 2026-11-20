import Link from "next/link";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import Dashboards from "@/sections/Dashboards";
import Features from "@/sections/Features";
import { FEATURES } from "@/data/features";
import { SITE } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Features",
  description: "Multi-store dashboards, data tables, low-stock alerts, scheduled exports, Google Sheets sync, flexible sync and team sharing — everything for WooCommerce analytics.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero eyebrow="Features" title="Everything you need for" highlight="WooCommerce analytics." description="One workspace for every store, every order and every customer. No plugins to fight with, no spreadsheets to babysit." crumbs={[{ label: "Features" }]}>
        <a href={SITE.signupUrl} target="_blank" className="btn-primary">Start free</a>
        <Link href="/pricing" className="btn-secondary">See pricing</Link>
      </PageHero>
      <section className="container-x pb-10">
        <FeatureGrid items={FEATURES.map((f) => ({ href: `/features/${f.slug}`, icon: f.icon, title: f.title, short: f.short }))} />
      </section>
      <div className="py-10 lg:py-16"><Dashboards /></div>
      <div className="py-10 lg:py-16"><Features /></div>
      <CTASection />
    </>
  );
}
