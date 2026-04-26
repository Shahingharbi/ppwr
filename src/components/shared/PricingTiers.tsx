import { Check } from "lucide-react";
import { CTAButton } from "./CTAButton";

const TIERS = [
  {
    name: "Readiness check",
    price: "Free",
    hours: "10 minutes",
    target: "For teams scoping the size of the gap",
    features: [
      "12-question self-assessment online",
      "Indicative readiness score A / B / C",
      "PDF report by email",
      "No commercial follow-up unless requested",
    ],
    highlighted: false,
    cta: { href: "/resources/ppwr-readiness-assessment", label: "Start the check" },
  },
  {
    name: "Gap roadmap",
    price: "From €38k",
    hours: "5 working days",
    target: "Most clients start here",
    features: [
      "NDA-first SKU intake (up to 200 SKUs)",
      "Article-by-article gap analysis (Art. 5 to 50)",
      "Recyclability A / B / C grade per SKU",
      "PFAS / Annex V screening",
      "Costed remediation backlog",
      "Steering-committee deck",
    ],
    highlighted: true,
    cta: { href: "/contact", label: "Book a working session" },
  },
  {
    name: "Programme retainer",
    price: "Custom",
    hours: "12 months minimum",
    target: "For groups managing PPWR as a multi-year programme",
    features: [
      "Everything in Gap roadmap",
      "Quarterly regulatory horizon scan",
      "Delegated and implementing acts watch",
      "Supplier clauses library and audits",
      "Member State implementation tracker",
      "Article 39 Declaration of Conformity drafting support",
    ],
    highlighted: false,
    cta: { href: "/contact", label: "Discuss scope" },
  },
];

export function PricingTiers({ id = "engagements" }: { id?: string }) {
  return (
    <section id={id} className="bg-[#f5f7f4] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Engagements
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Three ways to work with Pactum
          </h2>
          <p
            className="mt-4 text-base text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Fixed scope, fixed price. Self-serve readiness check, the 5-day gap roadmap most clients start with, or a multi-year programme retainer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                t.highlighted
                  ? "border-[#10b981] shadow-lg ring-2 ring-[#10b981]/20"
                  : "border-border shadow-sm"
              }`}
            >
              {t.highlighted && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#10b981] px-3 py-1 text-xs font-semibold text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Most chosen
                </span>
              )}
              <h3
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {t.name}
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {t.target}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className="text-4xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-ginto-nord)" }}
                >
                  {t.price}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-[#10b981]">{t.hours}</p>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[#10b981]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                href={t.cta.href}
                variant={t.highlighted ? "primary" : "ghost"}
                className="mt-8 w-full"
              >
                {t.cta.label}
              </CTAButton>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          Pricing indicative. Final scope agreed in writing under NDA. No commission, no kickback, no upsell.
        </p>
      </div>
    </section>
  );
}
