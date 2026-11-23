import React from "react";

const CASES = [
  {
    img: "/MultiBrand.jpg",
    tag: "Multi-brand owners",
    title: "Run upto 10 stores like one.",
    desc: "Jump across brands in seconds. See what’s working, compare performance, and optimize instantly with clear, actionable insights.",
  },
  {
    img: "/Frelancer.jpg",
    tag: "Freelance developers",
    title: "Scale your client roster.",
    desc: "Plug every client store into one workspace. Auto-deliver weekly performance reports — and look like a hero, every Monday.",
  },
  {
    img: "/Agencies.jpg",
    tag: "Agencies",
    title: "Scale your clients without the chaos..",
    desc: "Bring every client store into one dashboard. Monitor performance, spot opportunities, and optimize campaigns faster with data you can trust.",
  },
];

const UseCases = () => {
  return (
    <section
      id="use-cases"
      data-testid="use-cases-section"
      className="container-x"
    >
      <div className="max-w-2xl">
        <span className="eyebrow">Use cases</span>
        <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
          Real teams. <span className="text-[#7955e6]">Real time saved.</span>
        </h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {CASES.map((c, i) => (
          <article
            key={c.title}
            data-testid={`use-case-${i}`}
            className="surface overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="aspect-video overflow-hidden bg-[#f3f0fd]">
              <div
                role="img"
                aria-label={c.title}
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${c.img})` }}
              />
            </div>
            <div className="p-7 lg:p-9">
              <span className="chip">{c.tag}</span>
              <h3 className="mt-4 font-display font-bold text-2xl">
                {c.title}
              </h3>
              <p className="mt-2 text-[#524673] leading-relaxed">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default React.memo(UseCases);
