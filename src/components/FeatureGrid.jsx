import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

/** items: [{ href, icon, title, short }] */
export default function FeatureGrid({ items, cols = "lg:grid-cols-3" }) {
  return (
    <StaggerGroup className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((it) => (
        <StaggerItem key={it.href}>
          <Link href={it.href} className="surface group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
            <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7955e6]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#7955e6]/20" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f3f0fd] text-[#7955e6] transition-all duration-300 group-hover:bg-[#7955e6] group-hover:text-white group-hover:rotate-6">
              <Icon name={it.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{it.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#524673]">{it.short}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#7955e6]">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
