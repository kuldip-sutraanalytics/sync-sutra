import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { FOOTER_COLUMNS } from "@/data/nav";
import { SITE, SOCIALS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-[#120d26] text-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full bg-[#7955e6]/30 blur-3xl animate-aurora" />
      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-2xl font-extrabold tracking-tight">Sync Sutra</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              WooCommerce analytics for multi-store teams. {SITE.tagline}
            </p>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
              <Mail className="h-4 w-4 text-[rgb(181,155,242)]" /> {SITE.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-[rgb(181,155,242)] hover:text-white">
                  {s.label} <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[rgb(181,155,242)]">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.h}>
                      <Link href={l.h} className="text-sm text-white/70 transition-colors hover:text-white">{l.l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Sync Sutra. All rights reserved.</p>
          <p>
            A product of{" "}
            <a href={SITE.companyUrl} target="_blank" rel="noreferrer noopener" className="font-semibold text-white/80 hover:text-white">{SITE.company}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
