import { Lightbulb, Info, AlertTriangle } from "lucide-react";

type Variant = "tip" | "info" | "warning";

const STYLES: Record<Variant, { bg: string; border: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string }> = {
  tip: {
    bg: "bg-[#fff9db]",
    border: "border-amber-300/60",
    label: "Pactum insight",
    icon: Lightbulb,
    color: "text-amber-700",
  },
  info: {
    bg: "bg-[#d1fae5]/40",
    border: "border-[#10b981]/30",
    label: "Bon à savoir",
    icon: Info,
    color: "text-[#065f46]",
  },
  warning: {
    bg: "bg-red-50",
    border: "border-red-200",
    label: "Attention",
    icon: AlertTriangle,
    color: "text-red-700",
  },
};

export function TipBox({
  children,
  variant = "tip",
  label,
}: {
  children: React.ReactNode;
  variant?: Variant;
  label?: string;
}) {
  const s = STYLES[variant];
  const Icon = s.icon;
  return (
    <aside className={`not-prose my-8 flex gap-4 rounded-2xl border ${s.border} ${s.bg} p-5`}>
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white ${s.color}`}>
        <Icon size={16} />
      </div>
      <div className="flex-1">
        <p
          className={`text-xs font-bold uppercase tracking-[0.12em] ${s.color}`}
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {label ?? s.label}
        </p>
        <div
          className="mt-1.5 text-sm leading-relaxed text-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {children}
        </div>
      </div>
    </aside>
  );
}
