import ContactForm from "@/sections/ContactForm";
import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Talk to the Sync Sutra team about sales, support, billing, feature requests or partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk" highlight="WooCommerce." description="Sales, support, billing, feature requests or partnerships — send us a message." crumbs={[{ label: "Contact" }]} />
      <div><ContactForm /></div>
    </>
  );
}
