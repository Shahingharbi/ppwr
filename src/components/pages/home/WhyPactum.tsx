import { Crosshair, FileText, Calendar, Lock } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

type Reason = { title: string; body: string };

type WhyCopy = {
  chip: string;
  title: string;
  intro: string;
  reasons: Reason[];
};

const ICONS = [Crosshair, FileText, Calendar, Lock];

const COPY: Record<Locale, WhyCopy> = {
  fr: {
    chip: "Pourquoi Pactum",
    title: "Le cabinet de conseil bâti pour un seul Règlement",
    intro:
      "Les cabinets généralistes vendent la PPWR comme une diapositive dans un deck développement durable. Pactum a été fondé pour ne faire que cela, avec la profondeur que cela exige.",
    reasons: [
      {
        title: "Pure-player PPWR",
        body: "Pas de stratégie développement durable. Pas de reporting ESG. Le Règlement (UE) 2025/40, uniquement — chaque consultant affecté à votre dossier travaille à temps plein sur le mandat PPWR et sur les 30+ actes délégués et d'exécution que la Commission doit adopter.",
      },
      {
        title: "Livrables article par article",
        body: "Chaque recommandation cite un article, un considérant, une Annexe et une date d'application. Aucune grille de maturité abstraite. Votre direction juridique peut auditer chaque ligne en remontant au Journal officiel.",
      },
      {
        title: "Feuille de route chiffrée en 5 jours",
        body: "Le produit d'entrée standard est à périmètre fixe, prix fixe et délai fixe. Vous recevez un deck prêt pour comité de pilotage et un plan capex / opex prêt pour la direction financière en une semaine de travail.",
      },
      {
        title: "Engagements sous NDA",
        body: "Votre portefeuille emballages est une intelligence concurrentielle. Chaque mission s'ouvre par un NDA mutuel, et nos analystes travaillent par défaut dans des environnements clients cloisonnés.",
      },
    ],
  },
  en: {
    chip: "Why Pactum",
    title: "The advisory built for one Regulation",
    intro:
      "Generalist consultancies sell PPWR as one slide in a sustainability deck. Pactum was founded to do nothing else, with the depth that demands.",
    reasons: [
      {
        title: "Pure-play PPWR",
        body: "Not sustainability strategy. Not ESG reporting. Regulation (EU) 2025/40, only — every consultant on your case is full-time on the PPWR mandate and the 30+ delegated and implementing acts the Commission must adopt.",
      },
      {
        title: "Article-precise deliverables",
        body: "Every recommendation cites an article, a recital, an Annex and an applicability date. No abstract maturity grids. Your legal counsel can audit every line back to the Official Journal.",
      },
      {
        title: "5-day costed roadmap",
        body: "The standard entry product is fixed scope, fixed price, fixed deadline. You receive a steerco-ready deck and a CFO-ready capex / opex plan in one working week.",
      },
      {
        title: "NDA-first engagements",
        body: "Your packaging portfolio is competitive intelligence. Every engagement opens with a mutual NDA, and our analysts work in segregated client environments by default.",
      },
    ],
  },
};

export function WhyPactum({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  return (
    <section
      aria-labelledby="why-pactum-title"
      className="bg-[#f5f7f4] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span
              className="inline-block rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {copy.chip}
            </span>
            <h2
              id="why-pactum-title"
              className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {copy.title}
            </h2>
            <p
              className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {copy.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {copy.reasons.map((r, idx) => {
              const Icon = ICONS[idx];
              return (
                <article
                  key={r.title}
                  className="rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f1a16] text-[#10b981]">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3
                    className="mt-5 text-xl font-bold leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    {r.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
