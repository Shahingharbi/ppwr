import { Sparkles, Check } from "lucide-react";

export function ArticleSummary({ items }: { items: string[] }) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-[#10b981]/25 bg-gradient-to-br from-[#d1fae5]/40 to-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10b981] text-white">
          <Sparkles size={14} />
        </div>
        <p
          className="text-xs font-bold uppercase tracking-[0.14em] text-[#065f46]"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          TL;DR
        </p>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <Check size={14} className="mt-1 flex-shrink-0 text-[#10b981]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
