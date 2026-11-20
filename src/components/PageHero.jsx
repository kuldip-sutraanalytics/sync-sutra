"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const up = (i) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
});

/** Animated hero used on every inner page. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs = [],
  children,
  align = "center",
}) {
  const center = align === "center";

  return (
    <section className="relative overflow-hidden">
      {/* Full Page Ambient Background */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-40 mask-[linear-gradient(to_bottom,black_40%,transparent_100%)]" />
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#7955e6]/15 blur-3xl animate-aurora" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl animate-aurora [animation-delay:-6s]" />
      </div>

      <div
        className={`container-x mt-10 mb-10 relative z-10 ${center ? "text-center" : ""}`}
      >
        {crumbs.length > 0 && (
          <motion.nav
            {...up(0)}
            aria-label="Breadcrumb"
            className={`mb-6 flex items-center gap-1.5 text-xs font-semibold text-[#524673] ${center ? "justify-center" : ""}`}
          >
            <Link href="/" className="hover:text-[#7955e6]">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-[#7955e6]">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[#120d26]">{c.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <div className={center ? "mx-auto max-w-4xl" : "max-w-3xl"}>
          {eyebrow && (
            <motion.span {...up(1)} className="chip">
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            {...up(2)}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl"
          >
            {title}{" "}
            {highlight && (
              <span className="gradient-text-animated">{highlight}</span>
            )}
          </motion.h1>
          {description && (
            <motion.p
              {...up(3)}
              className={`mt-5 text-lg leading-relaxed text-[#524673] lg:text-xl ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              {...up(4)}
              className={`mt-8 flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
