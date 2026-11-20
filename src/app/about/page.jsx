import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/sections/Stats";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { SITE } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: "Sync Sutra is WooCommerce analytics for multi-store teams, built by Sutra Analytics Private Limited. Learn what we believe and how we work.",
  path: "/about",
});

const VALUES = [
  { icon: "Eye", t: "Clarity over clutter", d: "Dashboards should answer questions, not create new ones. We pre-calculate the numbers so you don't need SQL or spreadsheets." },
  { icon: "Store", t: "Built for WooCommerce", d: "We focus on one platform and do it properly — stores, orders, products and customers, end to end." },
  { icon: "Rocket", t: "Ship weekly", d: "We improve Sync Sutra continuously and let customers vote on what's next." },
  { icon: "Handshake", t: "Fair, honest pricing", d: "Start free, upgrade when you outgrow it. No surprises on the bill." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="One Sync." highlight="Endless Insights." description="Sync Sutra exists so WooCommerce teams can stop switching between admins, exporting CSVs and rebuilding the same report every week." crumbs={[{ label: "About" }]} />

      <section className="container-x section-y">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Our story" title="Too much data, no clarity." />
          <div className="space-y-4 text-lg leading-relaxed text-[#524673]">
            <p>Running more than one WooCommerce store usually means more logins, more exports and more spreadsheets that break. Decisions get delayed and opportunities get missed.</p>
            <p>We built Sync Sutra to put every order, product and customer from every store into one clean place — with dashboards, alerts and reports that work out of the box.</p>
            <p>Sync Sutra is a product of <a className="font-semibold text-[#7955e6] hover:underline" href={SITE.companyUrl} target="_blank" rel="noreferrer noopener">{SITE.company}</a>.</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-6">
        <SectionHeading eyebrow="What we believe" title="Principles we build by" />
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <StaggerItem key={v.t}>
              <div className="surface h-full p-7 transition-all hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f3f0fd] text-[#7955e6]"><Icon name={v.icon} className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-[#524673]">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <div className="py-10 lg:py-16"><Stats /></div>

      <section className="container-x pb-6 text-center">
        <p className="text-[#524673]">Questions, ideas or partnership requests? <Link href="/contact" className="font-bold text-[#7955e6] hover:underline">Get in touch</Link>.</p>
      </section>
      <CTASection />
    </>
  );
}
