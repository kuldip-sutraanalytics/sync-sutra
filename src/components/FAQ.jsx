"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

export default function FAQ({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`surface overflow-hidden transition-shadow ${isOpen ? "shadow-glow" : ""}`}>
            <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="font-display text-lg font-bold">{f.q}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3f0fd] text-[#7955e6]">
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <p className="px-6 pb-6 leading-relaxed text-[#524673]">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
