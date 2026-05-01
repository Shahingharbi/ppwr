import { ArrowRight, CalendarDays } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

export type TimelineMilestone = {
  date: string;
  year: number;
  title: string;
  article: string;
  body: string;
  link: { href: string; label: string };
};

export const MILESTONES: TimelineMilestone[] = [
  {
    date: "22 January 2025",
    year: 2025,
    title: "Publication in the Official Journal",
    article: "Reg. (EU) 2025/40",
    body: "Regulation (EU) 2025/40 published in OJ L. CELEX 32025R0040. Reading the published text — recitals included — is the first step in any compliance programme.",
    link: { href: "/resources/ppwr-faq", label: "PPWR basics FAQ" },
  },
  {
    date: "11 February 2025",
    year: 2025,
    title: "Entry into force",
    article: "Art. 79",
    body: "Twentieth day after publication. The Regulation is now binding law; the eighteen-month general application clock starts here. Capital expenditure plans for 2026 should already cite the Regulation by article number.",
    link: {
      href: "/services/ppwr-gap-analysis",
      label: "Five-day gap analysis",
    },
  },
  {
    date: "12 August 2026",
    year: 2026,
    title: "General application — including PFAS, single-use bans and HORECA reuse",
    article: "Art. 5, Art. 25, Annex V, Art. 33",
    body: "Most provisions become applicable. Food-contact packaging containing PFAS above 25 ppb (individual), 250 ppb (sum) or 50 ppm (total fluorine) is prohibited. Annex V single-use formats are banned (under-1.5 kg fresh produce films, on-premise HORECA single-use, hotel mini-toiletries, condiment sachets, very lightweight carrier bags). HORECA must offer a reusable take-away option.",
    link: {
      href: "/services/pfas-compliance",
      label: "PFAS compliance service",
    },
  },
  {
    date: "12 August 2028",
    year: 2028,
    title: "Empty space ratio cap and harmonised labelling",
    article: "Art. 24, Art. 12, Art. 13",
    body: "Maximum 50% empty space in grouped, transport and e-commerce packaging. Harmonised material composition and sorting labels mandatory on every packaging unit. QR code or other digital data carrier required — Digital Product Passport rollout begins.",
    link: {
      href: "/services/declaration-of-conformity",
      label: "DoC and labelling service",
    },
  },
  {
    date: "31 December 2029",
    year: 2029,
    title: "DRS 90% separate-collection target",
    article: "Art. 50",
    body: "Member States must achieve 90% separate collection of single-use plastic beverage bottles up to 3 L and metal cans. DRS becomes mandatory unless 80% was achieved by 31 December 2026 with a credible plan to reach 90%.",
    link: {
      href: "/sectors/fmcg",
      label: "FMCG & beverage sector",
    },
  },
  {
    date: "1 January 2030",
    year: 2030,
    title: "Recyclability A/B/C threshold, recycled content, reuse and refill",
    article: "Art. 6, Art. 7, Art. 29, Art. 30",
    body: "Every packaging unit must reach Class C recyclability minimum. Recycled-content targets apply to plastic packaging: 30% contact-sensitive PET, 10% other contact-sensitive plastics, 30% beverage bottles, 35% other plastic. Reuse first targets: 40% transport and grouped, 10% beverage. Refill stations required at retailers with surface area ≥400 m².",
    link: {
      href: "/services/recycled-content-roadmap",
      label: "Recycled-content roadmap",
    },
  },
  {
    date: "1 January 2038",
    year: 2038,
    title: "Class C packaging banned",
    article: "Art. 6",
    body: "From this date only Class A (≥95%) and Class B (≥80%) packaging may be placed on the EU market. Class C packaging is withdrawn. The eight-year window from 2030 to 2038 is the redesign runway.",
    link: {
      href: "/services/recyclability-assessment",
      label: "Recyclability assessment",
    },
  },
  {
    date: "1 January 2040",
    year: 2040,
    title: "Stretch targets — recycled content and reuse",
    article: "Art. 7, Art. 29",
    body: "Recycled-content rises to 50% (contact-sensitive PET), 25% (other contact-sensitive plastics), 65% (beverage bottles) and 65% (other plastic). Reuse rises to 70% transport and grouped, 40% beverage. Large household appliances reach 90% reuse of transport packaging by this horizon.",
    link: {
      href: "/services/reuse-targets-strategy",
      label: "Reuse and refill strategy",
    },
  },
];

const MILESTONES_FR: TimelineMilestone[] = [
  {
    date: "22 janvier 2025",
    year: 2025,
    title: "Publication au Journal officiel",
    article: "Règl. (UE) 2025/40",
    body: "Le Règlement (UE) 2025/40 est publié au JO L. CELEX 32025R0040. Lire le texte publié — considérants compris — est la première étape de tout programme de conformité.",
    link: { href: "/resources/ppwr-faq", label: "FAQ PPWR — bases" },
  },
  {
    date: "11 février 2025",
    year: 2025,
    title: "Entrée en vigueur",
    article: "Art. 79",
    body: "Vingtième jour après la publication. Le Règlement devient un texte juridiquement contraignant ; le compte à rebours de dix-huit mois jusqu'à l'application générale commence ici. Les plans CAPEX 2026 doivent déjà citer le Règlement par numéro d'article.",
    link: {
      href: "/services/ppwr-gap-analysis",
      label: "Analyse des écarts en 5 jours",
    },
  },
  {
    date: "12 août 2026",
    year: 2026,
    title: "Application générale — PFAS, interdictions usage unique et réemploi CHR",
    article: "Art. 5, Art. 25, Annexe V, Art. 33",
    body: "La plupart des dispositions deviennent applicables. Les emballages au contact alimentaire contenant des PFAS au-delà de 25 ppb (individuel), 250 ppb (somme) ou 50 ppm (fluor total) sont interdits. Les formats à usage unique de l'Annexe V sont prohibés (films pour fruits et légumes frais sous 1,5 kg, vaisselle CHR consommée sur place, mini-toiletries d'hôtel, sachets de condiments, sacs plastiques très légers). Les CHR doivent proposer une option réemployable pour la vente à emporter.",
    link: {
      href: "/services/pfas-compliance",
      label: "Service conformité PFAS",
    },
  },
  {
    date: "12 août 2028",
    year: 2028,
    title: "Plafond du ratio d'espace vide et étiquetage harmonisé",
    article: "Art. 24, Art. 12, Art. 13",
    body: "Maximum 50 % d'espace vide dans les emballages groupés, de transport et e-commerce. Étiquettes harmonisées de composition matériau et de tri obligatoires sur chaque unité d'emballage. Code QR ou autre support de données numérique requis — déploiement du Passeport numérique de produit.",
    link: {
      href: "/services/declaration-of-conformity",
      label: "Service DoC et étiquetage",
    },
  },
  {
    date: "31 décembre 2029",
    year: 2029,
    title: "Objectif DRS 90 % de collecte séparée",
    article: "Art. 50",
    body: "Les États membres doivent atteindre 90 % de collecte séparée des bouteilles plastiques de boisson à usage unique jusqu'à 3 L et des canettes métalliques. La consigne (DRS) devient obligatoire à moins d'avoir atteint 80 % au 31 décembre 2026 avec un plan crédible pour atteindre 90 %.",
    link: {
      href: "/sectors/fmcg",
      label: "Secteur grande consommation & boissons",
    },
  },
  {
    date: "1er janvier 2030",
    year: 2030,
    title: "Seuil de recyclabilité A/B/C, contenu recyclé, réemploi et rechargement",
    article: "Art. 6, Art. 7, Art. 29, Art. 30",
    body: "Chaque unité d'emballage doit atteindre au minimum la classe C de recyclabilité. Les objectifs de contenu recyclé s'appliquent aux emballages plastiques : 30 % PET en contact sensible, 10 % autres plastiques en contact sensible, 30 % bouteilles de boisson, 35 % autres plastiques. Premiers objectifs de réemploi : 40 % transport et groupés, 10 % boissons. Stations de recharge obligatoires chez les détaillants avec surface ≥ 400 m².",
    link: {
      href: "/services/recycled-content-roadmap",
      label: "Feuille de route contenu recyclé",
    },
  },
  {
    date: "1er janvier 2038",
    year: 2038,
    title: "Interdiction des emballages classe C",
    article: "Art. 6",
    body: "À partir de cette date, seuls les emballages classe A (≥ 95 %) et classe B (≥ 80 %) peuvent être mis sur le marché européen. Les emballages classe C sont retirés. La fenêtre de huit ans entre 2030 et 2038 est le délai de refonte.",
    link: {
      href: "/services/recyclability-assessment",
      label: "Évaluation de recyclabilité",
    },
  },
  {
    date: "1er janvier 2040",
    year: 2040,
    title: "Objectifs ambitieux — contenu recyclé et réemploi",
    article: "Art. 7, Art. 29",
    body: "Le contenu recyclé monte à 50 % (PET contact sensible), 25 % (autres plastiques contact sensible), 65 % (bouteilles de boisson) et 65 % (autres plastiques). Le réemploi atteint 70 % pour le transport et les groupés, 40 % pour les boissons. Le gros électroménager atteint 90 % de réemploi des emballages de transport à cet horizon.",
    link: {
      href: "/services/reuse-targets-strategy",
      label: "Stratégie réemploi et rechargement",
    },
  },
];

export function getMilestones(locale: Locale): TimelineMilestone[] {
  return locale === "fr" ? MILESTONES_FR : MILESTONES;
}

export function Timeline({ locale = "en" }: { locale?: Locale }) {
  const items = getMilestones(locale);
  return (
    <ol className="relative border-l-2 border-[#10b981]/30 pl-8 md:pl-10 space-y-10">
      {items.map((m) => (
        <li key={m.date} className="relative">
          <span
            aria-hidden
            className="absolute -left-[calc(2rem+9px)] md:-left-[calc(2.5rem+9px)] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#10b981] ring-4 ring-white"
          />
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0f1a16] px-3 py-1 text-xs font-semibold text-white"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              <CalendarDays size={12} />
              {m.date}
            </span>
            <span
              className="inline-block rounded-full bg-[#d1fae5] px-2.5 py-1 text-[11px] font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {m.article}
            </span>
          </div>
          <h3
            className="mt-3 text-xl md:text-2xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {m.title}
          </h3>
          <p
            className="mt-2 text-base text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {m.body}
          </p>
          <a
            href={localizeHref(m.link.href, locale)}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#10b981] hover:text-[#059669]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {m.link.label}
            <ArrowRight size={14} />
          </a>
        </li>
      ))}
    </ol>
  );
}
