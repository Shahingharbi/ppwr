import { ShieldCheck, Scale, Globe2 } from "lucide-react";

const DEFAULT_BADGES = [
  { Icon: ShieldCheck, label: "NDA-first" },
  { Icon: Scale, label: "Article-precise" },
  { Icon: Globe2, label: "EU-wide team" },
];

export function SocialProof({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {DEFAULT_BADGES.map(({ Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          <Icon size={13} className="text-[#10b981]" />
          {label}
        </span>
      ))}
      <span
        className="inline-flex items-center rounded-full bg-[#0f1a16] px-3 py-1.5 text-xs font-semibold text-white"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        Regulation (EU) 2025/40 specialists
      </span>
    </div>
  );
}
