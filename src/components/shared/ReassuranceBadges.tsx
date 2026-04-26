import { Check } from "lucide-react";

const BADGES = ["NDA upfront", "5-day costed roadmap", "EU-wide project teams"];

export function ReassuranceBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {BADGES.map((b) => (
        <span
          key={b}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          <Check size={12} className="text-[#10b981]" />
          {b}
        </span>
      ))}
    </div>
  );
}
