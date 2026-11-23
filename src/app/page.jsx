import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Problems from "@/sections/Problems";
import HowItWorks from "@/sections/HowItWorks";
import Dashboards from "@/sections/Dashboards";
import Features from "@/sections/Features";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Differentiators from "@/sections/Differentiators";
import WhoFor from "@/sections/WhoFor";
import UseCases from "@/sections/UseCases";
import ComingSoon from "@/sections/ComingSoon";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import ContactForm from "@/sections/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Marquee from "@/components/Marquee";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { FEATURES } from "@/data/features";
import { INTEGRATIONS } from "@/data/integrations";
import { FAQS } from "@/data/faq";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sync Sutra – WooCommerce Analytics & Multi-Store Dashboard",
  description:
    "Connect multiple WooCommerce stores in minutes. Live dashboards, auto exports, low-stock alerts, Google Sheets sync and reports — without spreadsheets, without code.",
  path: "/",
});

const Gap = ({ children }) => <div className="py-10 lg:py-16">{children}</div>;

export default function Home() {
  return (
    <>
      <Hero />
      <Gap>
        <Stats />
      </Gap>
      <Problems />
      <Gap>
        <HowItWorks />
      </Gap>
      <Gap>
        <Dashboards />
      </Gap>
      <Gap>
        <Features />
      </Gap>

      <section className="container-x">
        <SectionHeading
          eyebrow="Explore"
          title="Every feature, in depth."
          description="Dive into what each part of Sync Sutra does and which plan it's on."
        />
        <div className="mt-12">
          <FeatureGrid
            items={FEATURES.map((f) => ({
              href: `/features/${f.slug}`,
              icon: f.icon,
              title: f.title,
              short: f.short,
            }))}
          />
        </div>
      </section>

      <WhyChooseUs />
      <Gap>
        <Differentiators />
      </Gap>
      <WhoFor />
      <Gap>
        <UseCases />
      </Gap>

      {/* <section className="container-x pb-6">
        <SectionHeading align="center" eyebrow="Integrations" title="Works with the tools you already use." />
        <div className="mt-10"><Marquee items={INTEGRATIONS} /></div>
        <div className="mt-8 text-center"><Link href="/integrations" className="btn-secondary">All integrations <ArrowRight className="h-4 w-4" /></Link></div>
      </section> */}

      <Gap>
        <ComingSoon />
      </Gap>
      <Gap>
        <Testimonials />
      </Gap>
      <Gap>
        <Pricing />
      </Gap>

      <section className="container-x">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions, answered."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQ items={FAQS.slice(0, 5)} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="font-bold text-[#7955e6] hover:underline"
          >
            See all FAQs →
          </Link>
        </div>
      </section>

      <Gap>
        <ContactForm />
      </Gap>
      <CTASection />
    </>
  );
}
