import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { SITE } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Security & privacy",
  description: "How Sync Sutra connects to your WooCommerce store, controls access and handles your data.",
  path: "/security",
});

const ITEMS = [
  { icon: "KeyRound", t: "You control the connection", d: "Sync Sutra connects through WooCommerce REST API keys that you generate. Revoke them in WooCommerce at any time to cut off access." },
  { icon: "Users2", t: "Read-only team sharing", d: "Teammates and clients can view dashboards and tables without WooCommerce admin access. Your store credentials are never shared." },
  { icon: "ShieldCheck", t: "GDPR-friendly by design", d: "We handle data in line with our Privacy Policy and support GDPR-friendly practices on every plan." },
  { icon: "FileText", t: "Clear policies", d: "Our Privacy Policy, Terms & Conditions and Refund Policy explain what we collect, why and how long we keep it." },
  { icon: "Mail", t: "Questions or reports", d: `Have a data request or found a security issue? Email ${SITE.email} and we'll respond promptly.` },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero eyebrow="Security" title="Your store data," highlight="handled with care." description="A plain-language summary of how Sync Sutra connects to your store and protects access." crumbs={[{ label: "Security" }]} />
      <section className="container-x section-y">
        <StaggerGroup className="grid gap-5 md:grid-cols-2">
          {ITEMS.map((i) => (
            <StaggerItem key={i.t}>
              <div className="surface flex h-full gap-4 p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f3f0fd] text-[#7955e6]"><Icon name={i.icon} className="h-6 w-6" /></span>
                <div><h2 className="font-display text-lg font-bold">{i.t}</h2><p className="mt-1 text-sm leading-relaxed text-[#524673]">{i.d}</p></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-8 text-center text-sm text-[#524673]">Read the full <Link href="/privacy-policy" className="font-bold text-[#7955e6] hover:underline">Privacy Policy</Link> and <Link href="/terms-conditions" className="font-bold text-[#7955e6] hover:underline">Terms & Conditions</Link>.</p>
      </section>
      <CTASection />
    </>
  );
}
