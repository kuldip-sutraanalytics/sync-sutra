"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";
import Link from "next/link";

export default function CTASection({
  title = "Ready to see all your stores in one place?",
  description = "Connect your first WooCommerce store in minutes. Start free — no credit card required.",
  primary = { label: "Start free", href: SITE.signupUrl, external: true },
  secondary = { label: "Talk to us", href: "/contact" },
}) {
  const P = primary.external ? "a" : Link;
  return (
    <section className="container-x">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="dark-surface relative overflow-hidden rounded-4xl px-6 py-14 text-center text-white sm:px-12 lg:py-20"
      >
        <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#7955e6]/50 blur-3xl animate-aurora" />
        <div aria-hidden className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl animate-aurora [animation-delay:-8s]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-white/70">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <P href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white! text-[rgb(18,13,38)]! hover:bg-[rgb(243,240,253)]!">{primary.label} <ArrowRight className="h-4 w-4" /></P>
            {secondary && <Link href={secondary.href} className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">{secondary.label}</Link>}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
