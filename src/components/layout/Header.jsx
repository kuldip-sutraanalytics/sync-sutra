"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";
import { NAV } from "@/data/nav";
import { SITE } from "@/data/site";

const isActive = (item, pathname) =>
  item.href
    ? item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(item.href + "/")
    : item.children?.some(
        (c) =>
          pathname === c.href ||
          (c.href !== "/features" && pathname.startsWith(c.href + "/")),
      ) ||
      (item.label === "Features" && pathname.startsWith("/features"));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(null); // desktop dropdown
  const [mobile, setMobile] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const closeTimer = useRef(null);

  // Close menus when the route changes
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const enter = (label) => {
    clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2dbf7] bg-white">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Sync Sutra home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-xl font-extrabold tracking-tight text-[#120d26]">
            Sync Sutra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = isActive(item, pathname);
            const base =
              "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors";
            const tone = active
              ? "text-[#7955e6]"
              : "text-[#524673] hover:text-[#120d26]";

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && enter(item.label)}
                onMouseLeave={item.children ? leave : undefined}
                onKeyDown={(e) => e.key === "Escape" && setOpen(null)}
              >
                {item.href ? (
                  <Link href={item.href} className={`${base} ${tone}`}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    aria-expanded={open === item.label}
                    aria-haspopup="menu"
                    onClick={() =>
                      setOpen(open === item.label ? null : item.label)
                    }
                    className={`${base} ${tone}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${open === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}

                <AnimatePresence>
                  {item.children && open === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-1/2 top-full z-50 w-88 -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-2xl border border-[#e2dbf7] bg-white p-2 shadow-glow">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#f3f0fd]"
                          >
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#f3f0fd] text-[#7955e6] transition-colors group-hover:bg-[#7955e6] group-hover:text-white">
                              <Icon name={c.icon} className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-[#120d26]">
                                {c.label}
                              </span>
                              <span className="block text-xs text-[#524673]">
                                {c.desc}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SITE.loginUrl}
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#120d26] transition-colors hover:bg-[#f3f0fd]"
          >
            Log in
          </a>
          <a
            href={SITE.signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5! py-2.5! text-sm"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          onClick={() => setMobile((m) => !m)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#e2dbf7] bg-white lg:hidden"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white px-6 pb-10 pt-4 lg:hidden"
          >
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-[#e2dbf7]/70">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-4 font-display text-xl font-bold"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileGroup(
                            mobileGroup === item.label ? null : item.label,
                          )
                        }
                        aria-expanded={mobileGroup === item.label}
                        className="flex w-full items-center justify-between py-4 font-display text-xl font-bold"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${mobileGroup === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileGroup === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 pb-4">
                              {item.children.map((c) => (
                                <Link
                                  key={c.href}
                                  href={c.href}
                                  className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#f3f0fd]"
                                >
                                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f3f0fd] text-[#7955e6]">
                                    <Icon name={c.icon} className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm font-semibold">
                                    {c.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <a href={SITE.signupUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start free <ArrowRight className="h-4 w-4" />
              </a>
              <a href={SITE.loginUrl} className="btn-secondary">
                Log in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
