"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

type Answer = "yes" | "no" | "dontknow";

const QUESTIONS: { id: string; q: string; cite: string }[] = [
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

function scoreBand(score: number) {
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

export function ReadinessQuiz() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const total = QUESTIONS.length;
    const yes = Object.values(answers).filter((a) => a === "yes").length;
    return Math.round((yes / total) * 100);
  }, [answers]);

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;

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
          Indicative readiness score
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
            / 100
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
          <strong className="block text-[#065f46]">Detailed PDF report on the way.</strong>
          We will email a 12-page article-by-article breakdown — with your Track A/B/C interpretation,
          the priority articles for your portfolio, and a sample roadmap — to{" "}
          <span className="font-semibold text-foreground">{email}</span> shortly.
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Indicative only. Not legal advice. The PDF report is generated from the answers you submitted
          and verified against the OJ L text of Regulation (EU) 2025/40.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#059669]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Book a working session
            <ArrowRight size={14} />
          </a>
          <a
            href="/services/ppwr-gap-analysis"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-[#f5f7f4]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            See the 5-day gap analysis
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
        12 questions · ~10 minutes
      </p>
      <h2
        className="mt-2 text-2xl md:text-3xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        Score your PPWR readiness.
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        For each question, choose Yes / No / I do not know. Your answers stay in your browser; only
        your email and score are sent to receive the PDF report.
      </p>

      <ol className="mt-6 space-y-5">
        {QUESTIONS.map((q, i) => {
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
                        ["yes", "Yes"],
                        ["no", "No"],
                        ["dontknow", "I do not know"],
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
          Where should we send the PDF report?
        </label>
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <input
            id="email"
            type="email"
            required
            placeholder="director.packaging@yourcompany.eu"
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
            Get my score and PDF
            <ArrowRight size={14} />
          </button>
        </div>
        {!allAnswered && (
          <p className="mt-3 text-xs text-white/60">
            Answer all 12 questions to unlock the score.
          </p>
        )}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Indicative only. Not legal advice. By submitting you agree to receive the PDF report by email
        under our GDPR notice. No newsletter, no sales sequence.
      </p>
    </form>
  );
}
