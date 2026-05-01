"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { localizeHref } from "@/lib/site-config";

type Answer = "yes" | "no" | "dontknow";

const QUESTIONS_EN: { id: string; q: string; cite: string }[] = [
  {
    id: "q1",
    q: "Have you mapped every SKU placed on the EU market against the Annex V single-use format restrictions that apply from 12 August 2026?",
    cite: "Art. 25, Annex V",
  },
  {
    id: "q2",
    q: "Have you screened all food-contact packaging for intentionally added PFAS above 25 ppb (individual), 250 ppb (sum) or 50 ppm (total fluorine)?",
    cite: "Art. 5",
  },
  {
    id: "q3",
    q: "Have you graded the Class A, B or C recyclability of your top-volume SKUs under reasonable interpretations of the Article 6 criteria?",
    cite: "Art. 6",
  },
  {
    id: "q4",
    q: "Have you sourced certified post-consumer recycled-content suppliers under mass-balance certification for your contact-sensitive PET packaging?",
    cite: "Art. 7",
  },
  {
    id: "q5",
    q: "Have you costed the 2030 recycled-content targets (30% / 10% / 30% / 35%) at portfolio level?",
    cite: "Art. 7",
  },
  {
    id: "q6",
    q: "Have you assessed the 2030 reuse and refill obligations for transport, beverage and HORECA packaging in your channel mix?",
    cite: "Art. 29, 30, 33",
  },
  {
    id: "q7",
    q: "Have you measured the empty space ratio of your grouped, transport and e-commerce packaging against the 50% cap from 12 August 2028?",
    cite: "Art. 24",
  },
  {
    id: "q8",
    q: "Have you drafted a Declaration of Conformity and the supporting technical file for at least one packaging unit in line with Article 39?",
    cite: "Art. 39, 40",
  },
  {
    id: "q9",
    q: "Have you registered your producer obligations and EPR fees with the relevant Member State PRO under Article 45?",
    cite: "Art. 45, 47",
  },
  {
    id: "q10",
    q: "Have you assessed the harmonised material composition and sorting label requirements due 12 August 2028?",
    cite: "Art. 12, 13",
  },
  {
    id: "q11",
    q: "If you sell beverages in single-use plastic bottles up to 3 L or metal cans, have you scoped DRS infrastructure under Article 50?",
    cite: "Art. 50",
  },
  {
    id: "q12",
    q: "Have you appointed an authorised representative under Article 18 if your manufacturing entity is established outside the European Union?",
    cite: "Art. 18",
  },
];

const QUESTIONS_FR: { id: string; q: string; cite: string }[] = [
  {
    id: "q1",
    q: "Avez-vous cartographié chaque SKU mis sur le marché européen face aux restrictions de formats à usage unique de l'Annexe V applicables au 12 août 2026 ?",
    cite: "Art. 25, Annexe V",
  },
  {
    id: "q2",
    q: "Avez-vous criblé l'ensemble des emballages au contact alimentaire pour les PFAS intentionnellement ajoutés au-delà de 25 ppb (individuel), 250 ppb (somme) ou 50 ppm (fluor total) ?",
    cite: "Art. 5",
  },
  {
    id: "q3",
    q: "Avez-vous noté la recyclabilité classe A, B ou C de vos SKU à plus fort volume selon des interprétations raisonnables des critères de l'article 6 ?",
    cite: "Art. 6",
  },
  {
    id: "q4",
    q: "Avez-vous identifié des fournisseurs certifiés en contenu recyclé post-consommation sous certification bilan massique pour vos emballages PET en contact sensible ?",
    cite: "Art. 7",
  },
  {
    id: "q5",
    q: "Avez-vous chiffré au niveau du portefeuille les objectifs 2030 de contenu recyclé (30 % / 10 % / 30 % / 35 %) ?",
    cite: "Art. 7",
  },
  {
    id: "q6",
    q: "Avez-vous évalué les obligations 2030 de réemploi et de rechargement pour les emballages transport, boissons et CHR dans votre mix de canaux ?",
    cite: "Art. 29, 30, 33",
  },
  {
    id: "q7",
    q: "Avez-vous mesuré le ratio d'espace vide de vos emballages groupés, de transport et e-commerce face au plafond de 50 % au 12 août 2028 ?",
    cite: "Art. 24",
  },
  {
    id: "q8",
    q: "Avez-vous rédigé une Déclaration de conformité et le dossier technique associé pour au moins une unité d'emballage selon l'article 39 ?",
    cite: "Art. 39, 40",
  },
  {
    id: "q9",
    q: "Avez-vous déclaré vos obligations producteur et payé les éco-contributions REP auprès de l'éco-organisme de l'État membre concerné selon l'article 45 ?",
    cite: "Art. 45, 47",
  },
  {
    id: "q10",
    q: "Avez-vous évalué les exigences harmonisées d'étiquetage de composition matériau et de tri attendues au 12 août 2028 ?",
    cite: "Art. 12, 13",
  },
  {
    id: "q11",
    q: "Si vous vendez des boissons en bouteilles plastiques à usage unique jusqu'à 3 L ou en canettes métalliques, avez-vous cadré l'infrastructure DRS au titre de l'article 50 ?",
    cite: "Art. 50",
  },
  {
    id: "q12",
    q: "Avez-vous désigné un mandataire au titre de l'article 18 si votre entité de fabrication est établie hors Union européenne ?",
    cite: "Art. 18",
  },
];

type Band = {
  label: string;
  color: string;
  bg: string;
  icon: typeof CheckCircle2;
  summary: string;
};

function scoreBandEn(score: number): Band {
  if (score >= 80) {
    return {
      label: "Track A — On track",
      color: "text-[#065f46]",
      bg: "bg-[#d1fae5]",
      icon: CheckCircle2,
      summary:
        "Your packaging compliance programme is in good shape. Focus on the remaining gaps and lock in delegated-act monitoring.",
    };
  }
  if (score >= 50) {
    return {
      label: "Track B — Material work to do",
      color: "text-amber-700",
      bg: "bg-[#fff9db]",
      icon: HelpCircle,
      summary:
        "You have started but key articles are unaddressed. A five-day gap analysis will compress the path to August 2026 readiness.",
    };
  }
  return {
    label: "Track C — Critical gaps",
    color: "text-red-700",
    bg: "bg-red-50",
    icon: AlertTriangle,
    summary:
      "Major articles are unaddressed. The 12 August 2026 deadline carries recall and withdrawal risk under Article 68. Move now.",
  };
}

function scoreBandFr(score: number): Band {
  if (score >= 80) {
    return {
      label: "Voie A — Sur la bonne voie",
      color: "text-[#065f46]",
      bg: "bg-[#d1fae5]",
      icon: CheckCircle2,
      summary:
        "Votre programme de conformité emballages est bien engagé. Concentrez-vous sur les écarts restants et verrouillez la veille des actes délégués.",
    };
  }
  if (score >= 50) {
    return {
      label: "Voie B — Travail substantiel à mener",
      color: "text-amber-700",
      bg: "bg-[#fff9db]",
      icon: HelpCircle,
      summary:
        "Vous avez démarré mais des articles clés ne sont pas couverts. Une analyse des écarts en 5 jours compressera votre trajectoire jusqu'à l'échéance d'août 2026.",
    };
  }
  return {
    label: "Voie C — Écarts critiques",
    color: "text-red-700",
    bg: "bg-red-50",
    icon: AlertTriangle,
    summary:
      "Des articles majeurs ne sont pas couverts. L'échéance du 12 août 2026 fait peser un risque de rappel et de retrait au titre de l'article 68. Agissez maintenant.",
  };
}

type Copy = {
  eyebrow: string;
  title: string;
  intro: string;
  yes: string;
  no: string;
  dontknow: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  unanswered: string;
  scoreEyebrow: string;
  scoreOf: string;
  pdfHeading: string;
  pdfBody: string;
  shortly: string;
  disclaimer: string;
  bookCta: string;
  seeCta: string;
};

const COPY_EN: Copy = {
  eyebrow: "12 questions · ~10 minutes",
  title: "Score your PPWR readiness.",
  intro:
    "For each question, choose Yes / No / I do not know. Your answers stay in your browser; only your email and score are sent to receive the PDF report.",
  yes: "Yes",
  no: "No",
  dontknow: "I do not know",
  emailLabel: "Where should we send the PDF report?",
  emailPlaceholder: "director.packaging@yourcompany.eu",
  submit: "Get my score and PDF",
  unanswered: "Answer all 12 questions to unlock the score.",
  scoreEyebrow: "Indicative readiness score",
  scoreOf: "/ 100",
  pdfHeading: "Detailed PDF report on the way.",
  pdfBody:
    "We will email a 12-page article-by-article breakdown — with your Track A/B/C interpretation, the priority articles for your portfolio, and a sample roadmap — to ",
  shortly: " shortly.",
  disclaimer:
    "Indicative only. Not legal advice. The PDF report is generated from the answers you submitted and verified against the OJ L text of Regulation (EU) 2025/40.",
  bookCta: "Book a working session",
  seeCta: "See the 5-day gap analysis",
};

const COPY_FR: Copy = {
  eyebrow: "12 questions · ~10 minutes",
  title: "Évaluez votre maturité PPWR.",
  intro:
    "Pour chaque question, choisissez Oui / Non / Je ne sais pas. Vos réponses restent dans votre navigateur ; seuls votre e-mail et votre score sont transmis pour recevoir le rapport PDF.",
  yes: "Oui",
  no: "Non",
  dontknow: "Je ne sais pas",
  emailLabel: "À quelle adresse devons-nous envoyer le rapport PDF ?",
  emailPlaceholder: "directeur.packaging@votreentreprise.eu",
  submit: "Obtenir mon score et le PDF",
  unanswered: "Répondez aux 12 questions pour débloquer le score.",
  scoreEyebrow: "Score de maturité indicatif",
  scoreOf: "/ 100",
  pdfHeading: "Rapport PDF détaillé en route.",
  pdfBody:
    "Nous enverrons par e-mail une analyse article par article de 12 pages — avec votre interprétation Voie A/B/C, les articles prioritaires pour votre portefeuille et une feuille de route exemple — à ",
  shortly: " sous peu.",
  disclaimer:
    "Indicatif uniquement. Ne constitue pas un avis juridique. Le rapport PDF est généré à partir de vos réponses et vérifié face au texte du Règlement (UE) 2025/40 publié au JO L.",
  bookCta: "Réserver une session de travail",
  seeCta: "Voir l'analyse des écarts en 5 jours",
};

export function ReadinessQuiz({ locale = "en" }: { locale?: Locale }) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFr = locale === "fr";
  const questions = isFr ? QUESTIONS_FR : QUESTIONS_EN;
  const copy = isFr ? COPY_FR : COPY_EN;
  const scoreBand = isFr ? scoreBandFr : scoreBandEn;

  const score = useMemo(() => {
    const total = questions.length;
    const yes = Object.values(answers).filter((a) => a === "yes").length;
    return Math.round((yes / total) * 100);
  }, [answers, questions.length]);

  const allAnswered = Object.keys(answers).length === questions.length;

  function setAnswer(id: string, a: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: a }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!allAnswered) return;
    setSubmitted(true);
  }

  if (submitted) {
    const band = scoreBand(score);
    const Icon = band.icon;
    return (
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <p
          className="text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {copy.scoreEyebrow}
        </p>
        <div className="mt-3 flex items-baseline gap-3">
          <span
            className="text-6xl md:text-7xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {score}
          </span>
          <span
            className="text-xl font-semibold text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.scoreOf}
          </span>
        </div>
        <div
          className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${band.bg} ${band.color}`}
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          <Icon size={16} />
          {band.label}
        </div>
        <p
          className="mt-5 text-base text-muted-foreground leading-relaxed"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {band.summary}
        </p>
        <div
          className="mt-6 rounded-2xl border border-dashed border-[#10b981]/40 bg-[#d1fae5]/30 p-5 text-sm leading-relaxed text-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          <strong className="block text-[#065f46]">{copy.pdfHeading}</strong>
          {copy.pdfBody}
          <span className="font-semibold text-foreground">{email}</span>
          {copy.shortly}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{copy.disclaimer}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={localizeHref("/contact", locale)}
            className="inline-flex items-center gap-2 rounded-full bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#059669]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.bookCta}
            <ArrowRight size={14} />
          </a>
          <a
            href={localizeHref("/services/ppwr-gap-analysis", locale)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-[#f5f7f4]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.seeCta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-white p-6 md:p-8 shadow-sm"
      style={{ fontFamily: "var(--font-maison-neue)" }}
    >
      <p
        className="text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {copy.eyebrow}
      </p>
      <h2
        className="mt-2 text-2xl md:text-3xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {copy.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{copy.intro}</p>

      <ol className="mt-6 space-y-5">
        {questions.map((q, i) => {
          const a = answers[q.id];
          return (
            <li
              key={q.id}
              className="rounded-2xl border border-border bg-[#f5f7f4] p-4 md:p-5"
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-xs font-bold text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <p
                      className="text-sm md:text-base font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {q.q}
                    </p>
                    <span
                      className="rounded-full bg-[#d1fae5] px-2 py-0.5 text-[10px] font-semibold text-[#065f46]"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {q.cite}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(
                      [
                        ["yes", copy.yes],
                        ["no", copy.no],
                        ["dontknow", copy.dontknow],
                      ] as const
                    ).map(([val, label]) => {
                      const active = a === val;
                      return (
                        <button
                          type="button"
                          key={val}
                          onClick={() => setAnswer(q.id, val)}
                          className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                            active
                              ? "border-[#10b981] bg-[#10b981] text-white"
                              : "border-border bg-white text-foreground hover:border-foreground/30"
                          }`}
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 rounded-2xl border border-border bg-[#0f1a16] p-5 text-white">
        <label
          htmlFor="email"
          className="text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {copy.emailLabel}
        </label>
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <input
            id="email"
            type="email"
            required
            placeholder={copy.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-[#10b981] focus:outline-none"
          />
          <button
            type="submit"
            disabled={!allAnswered || !email}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#059669] disabled:cursor-not-allowed disabled:bg-white/20"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.submit}
            <ArrowRight size={14} />
          </button>
        </div>
        {!allAnswered && (
          <p className="mt-3 text-xs text-white/60">{copy.unanswered}</p>
        )}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        {isFr
          ? "Indicatif uniquement. Ne constitue pas un avis juridique. En soumettant, vous acceptez de recevoir le rapport PDF par e-mail conformément à notre avis RGPD. Aucune newsletter, aucune séquence commerciale."
          : "Indicative only. Not legal advice. By submitting you agree to receive the PDF report by email under our GDPR notice. No newsletter, no sales sequence."}
      </p>
    </form>
  );
}
