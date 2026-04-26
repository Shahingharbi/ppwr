import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  variant?: "light" | "dark";
};

export function InlineCTA({
  title,
  description,
  ctaLabel = "Book a working session",
  ctaHref = "/contact",
  imageSrc,
  variant = "light",
}: Props) {
  const isDark = variant === "dark";

  return (
    <aside
      className={`not-prose my-12 grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-5 rounded-2xl border p-5 md:p-6 ${
        isDark
          ? "bg-[#0f1a16] text-white border-[#0f1a16]"
          : "bg-[#f5f7f4] text-foreground border-border"
      }`}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          className="h-24 w-full md:h-24 md:w-[180px] rounded-xl object-cover"
        />
      ) : (
        <div
          aria-hidden
          className={`h-24 w-full md:h-24 md:w-[180px] rounded-xl flex items-center justify-center ${
            isDark ? "bg-[#10b981]/15" : "bg-white"
          }`}
        >
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
              isDark ? "text-[#10b981]" : "text-[#10b981]"
            }`}
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            (EU) 2025/40
          </span>
        </div>
      )}
      <div>
        <p
          className={`text-sm font-bold ${isDark ? "text-[#10b981]" : "text-[#10b981]"}`}
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {title}
        </p>
        <p
          className={`mt-1 text-sm leading-relaxed ${isDark ? "text-white/80" : "text-muted-foreground"}`}
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {description}
        </p>
      </div>
      <a
        href={ctaHref}
        className={`inline-flex flex-shrink-0 items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
          isDark
            ? "bg-[#10b981] text-white hover:bg-[#059669]"
            : "bg-[#10b981] text-white hover:bg-[#059669]"
        }`}
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {ctaLabel}
        <ArrowRight size={14} />
      </a>
    </aside>
  );
}
