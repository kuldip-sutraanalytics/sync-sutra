import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { USE_CASES } from "@/data/use-cases";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Use cases",
  description: "See how multi-brand owners, freelance WooCommerce developers, agencies and ecommerce teams use Sync Sutra.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Built for the people who" highlight="run WooCommerce." description="Whether you manage three brands or thirty client stores, Sync Sutra gives you one clear view." crumbs={[{ label: "Use cases" }]} />
      <section className="container-x pb-10">
        <FeatureGrid cols="lg:grid-cols-2" items={USE_CASES.map((u) => ({ href: `/use-cases/${u.slug}`, icon: u.icon, title: u.title, short: u.short + " " + u.description }))} />
      </section>
      <CTASection />
    </>
  );
}
