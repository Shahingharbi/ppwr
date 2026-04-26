import { CTAButton } from "./CTAButton";
import { ReassuranceBadges } from "./ReassuranceBadges";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  primaryCTA?: { href: string; label: string };
  secondaryCTA?: { href: string; label: string };
  badge?: { eyebrow: string; title: string; description: string };
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc = "https://images.unsplash.com/photo-1610629554029-e36b7166cca0?w=1400&q=80&auto=format&fit=crop",
  imageAlt = "Industrial packaging line — cardboard cartons on a high-throughput conveyor",
  primaryCTA = { href: "/contact", label: "Book a working session" },
  secondaryCTA = { href: "/resources/ppwr-readiness-assessment", label: "Free PPWR readiness check" },
  badge = {
    eyebrow: "5-day delivery",
    title: "Article-by-article roadmap",
    description: "Audit-ready output mapped to Regulation (EU) 2025/40.",
  },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7f4] to-white pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-[1280px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          {eyebrow && (
            <span
              className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {eyebrow}
            </span>
          )}
          <h1
            className="mt-4 text-4xl md:text-6xl font-bold text-foreground leading-[1.05]"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {title}
          </h1>
          <p
            className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTAButton href={primaryCTA.href}>{primaryCTA.label}</CTAButton>
            <CTAButton href={secondaryCTA.href} variant="ghost">
              {secondaryCTA.label}
            </CTAButton>
          </div>

          <div className="mt-8">
            <ReassuranceBadges />
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/0 blur-2xl"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative h-[420px] w-full rounded-[32px] object-cover shadow-2xl"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-border">
            <p
              className="text-xs font-semibold text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {badge.eyebrow}
            </p>
            <p
              className="mt-1 text-sm font-semibold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {badge.title}
            </p>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-maison-neue)" }}>
              {badge.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
