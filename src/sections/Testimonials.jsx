"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Quote, Star } from "lucide-react";

const T = [
  {
    name: "Aanya Mehta",
    role: "Founder",
    company: "Lumière Boutique",
    quote:
      "We connected three Woo stores in under ten minutes. Sync Sutra replaced a freelance analyst we used to pay monthly — and our weekly reports go out on autopilot now.",
    avatar: "/Annya.jpg",
  },
  {
    name: "Marco Vela",
    role: "Operations Lead",
    company: "Haven & Hearth Co.",
    quote:
      "The data tables alone are worth it. We cut our weekly reporting time from six hours to fifteen minutes. The team actually looks at the numbers now — and acts on them.",
    avatar: "/Marco.jpg",
  },
  {
    name: "Diego Rojas",
    role: "Freelance Woo Developer",
    company: "PixelCraft Studio",
    quote:
      "I onboarded eleven client stores in a week. The auto-export reports make my retainer feel premium without me lifting a finger — clients renewed on the spot.",
    avatar: "/Diago.jpg",
  },
];

// Image component with lazy loading and placeholder
const AvatarImage = ({ src, alt }) => (
  <div
    role="img"
    aria-label={alt}
    className="h-11 w-11 rounded-full bg-[#e2dbf7] bg-cover bg-center"
    style={{ backgroundImage: `url(${src})` }}
  />
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="container-x"
    >
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Loved by store owners</span>
        <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          Quiet weekends. <span className="text-[#7955e6]">Loud results.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {T.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.1}
            data-testid={`testimonial-${i}`}
            className="group surface p-7 lg:p-8 flex flex-col transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#7955e6]/30 hover:shadow-[0_24px_48px_-24px_rgba(121,85,230,0.4)]"
          >
            <Quote className="h-7 w-7 text-[#7955e6]/40" aria-hidden />
            <blockquote className="mt-4 text-[#120d26] text-[16px] lg:text-[17px] leading-relaxed flex-1">
              "{t.quote}"
            </blockquote>
            <div className="mt-4 flex gap-0.5 text-[#7955e6]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-[#7955e6]" />
              ))}
            </div>
            <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-[#e2dbf7]">
              <AvatarImage src={t.avatar} alt={t.name} />
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-[#120d26] truncate">
                  {t.name}
                </div>
                <div className="text-xs text-[#524673] truncate">
                  {t.role} ·{" "}
                  <span className="text-[#7955e6] font-semibold">
                    {t.company}
                  </span>
                </div>
              </div>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
