import Reveal from "@/components/Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left", className = "" }) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tighter lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-[#524673] lg:text-lg">{description}</p>}
    </Reveal>
  );
}
