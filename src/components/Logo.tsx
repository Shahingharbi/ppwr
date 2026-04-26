import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

/**
 * Pactum wordmark.
 * - Inline SVG geometric mark (stacked layered ring evoking packaging strata).
 * - "Pactum" wordmark rendered with Maison Neue Extended.
 * - Optional "  · The PPWR Advisory" descriptor on desktop.
 * - Two color variants for dark/light surfaces.
 */
export function Logo({ variant = "dark", compact = false, className }: LogoProps) {
  const isDark = variant === "dark";
  const wordmarkColor = isDark ? "#0f1a16" : "#ffffff";
  const accentColor = "#10b981";
  const descriptorColor = isDark ? "rgba(15,26,22,0.55)" : "rgba(255,255,255,0.65)";

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
      aria-label="Pactum — The PPWR Advisory"
    >
      {/* Geometric stacked-rings mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {/* outer ring */}
        <circle cx="16" cy="16" r="14" stroke={accentColor} strokeWidth="2" fill="none" />
        {/* inner ring */}
        <circle
          cx="16"
          cy="16"
          r="8"
          stroke={wordmarkColor}
          strokeWidth="1.6"
          fill="none"
          opacity={isDark ? 0.85 : 0.9}
        />
        {/* central dot */}
        <circle cx="16" cy="16" r="2" fill={accentColor} />
        {/* opening notch — reads as a P / a packaging seal */}
        <path
          d="M16 2 L16 8"
          stroke={isDark ? "#ffffff" : "#0f1a16"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity={isDark ? 0.001 : 0.001}
        />
      </svg>

      <span
        className="text-[1.35rem] leading-none font-semibold tracking-tight"
        style={{
          fontFamily: "var(--font-maison-neue-extended)",
          color: wordmarkColor,
          letterSpacing: "-0.015em",
        }}
      >
        Pactum
      </span>

      {!compact && (
        <span
          className="hidden md:inline text-[0.7rem] uppercase tracking-[0.18em] leading-none mt-0.5"
          style={{
            fontFamily: "var(--font-maison-neue-extended)",
            color: descriptorColor,
          }}
        >
          <span aria-hidden="true" className="mx-1.5">·</span>
          The PPWR Advisory
        </span>
      )}
    </span>
  );
}
