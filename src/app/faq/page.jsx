import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/data/faq";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Answers about Sync Sutra: supported platforms, setup, pricing, data sync, team access, exports and security.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero eyebrow="FAQ" title="Frequently asked" highlight="questions." description="Can't find what you need? Email support@syncsutra.io." crumbs={[{ label: "FAQ" }]} />
      <section className="container-x pb-10"><div className="mx-auto max-w-3xl"><FAQ items={FAQS} /></div></section>
      <CTASection title="Still have questions?" description="Our team replies quickly. Send us a message and we'll help you get set up." primary={{ label: "Contact us", href: "/contact" }} secondary={null} />
    </>
  );
}
