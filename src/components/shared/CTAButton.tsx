import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
};

export function CTAButton({ href, children, variant = "primary", className, icon = true }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all";
  const styles = {
    primary: "bg-[#10b981] text-white hover:bg-[#059669] shadow-sm hover:shadow-md",
    secondary: "bg-[#0f1a16] text-white hover:bg-[#1f2d27]",
    ghost: "border border-border text-foreground hover:bg-muted",
  }[variant];

  return (
    <a
      href={href}
      className={cn(base, styles, className)}
      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
    >
      {children}
      {icon && <ArrowRight size={16} />}
    </a>
  );
}
