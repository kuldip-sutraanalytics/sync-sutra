import Icon from "@/components/Icon";

export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden mask-[linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max gap-4 animate-marquee group-hover:paused">
        {row.map((it, i) => (
          <div key={i} aria-hidden={i >= items.length} className="chip px-5! py-3! text-sm! text-[rgb(18,13,38)]!">
            <Icon name={it.icon} className="h-4 w-4 text-[#7955e6]" /> {it.name}
            <span className="rounded-full bg-[#f3f0fd] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#7955e6]">{it.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
