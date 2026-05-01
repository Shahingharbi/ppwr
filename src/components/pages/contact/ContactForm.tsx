"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

const COUNTRIES_EN = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Non-EU (United Kingdom, Switzerland, Norway, etc.)",
];

const COUNTRIES_FR = [
  "Allemagne",
  "Autriche",
  "Belgique",
  "Bulgarie",
  "Chypre",
  "Croatie",
  "Danemark",
  "Espagne",
  "Estonie",
  "Finlande",
  "France",
  "Grèce",
  "Hongrie",
  "Irlande",
  "Italie",
  "Lettonie",
  "Lituanie",
  "Luxembourg",
  "Malte",
  "Pays-Bas",
  "Pologne",
  "Portugal",
  "Roumanie",
  "République tchèque",
  "Slovaquie",
  "Slovénie",
  "Suède",
  "Hors UE (Royaume-Uni, Suisse, Norvège, etc.)",
];

const SKU_RANGES_EN = [
  "Under 50 SKUs",
  "50–250 SKUs",
  "250–1,000 SKUs",
  "1,000–5,000 SKUs",
  "Over 5,000 SKUs",
];

const SKU_RANGES_FR = [
  "Moins de 50 SKU",
  "50 à 250 SKU",
  "250 à 1 000 SKU",
  "1 000 à 5 000 SKU",
  "Plus de 5 000 SKU",
];

type Copy = {
  successTitle: string;
  successBody: string;
  successFootnote: string;
  eyebrow: string;
  title: string;
  intro: string;
  nameLabel: string;
  companyLabel: string;
  roleLabel: string;
  countryLabel: string;
  countryPlaceholder: string;
  skusLabel: string;
  skusPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  honeypotLabel: string;
  consentBefore: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
};

const COPY_EN: Copy = {
  successTitle: "Request received.",
  successBody:
    "A Pactum advisor will reply within one business day with proposed slots for a 30-minute working session. The first call is held under mutual NDA on request.",
  successFootnote:
    "Submission confirmation in production environments includes a calendar link and an automated intake email.",
  eyebrow: "Working session intake",
  title: "Tell us where you are with PPWR.",
  intro:
    "Required fields marked with an asterisk. Form submission wired up in production — this build runs a client-side simulation only.",
  nameLabel: "Full name *",
  companyLabel: "Company *",
  roleLabel: "Role / job title *",
  countryLabel: "EU country of HQ *",
  countryPlaceholder: "Select",
  skusLabel: "Number of SKUs in scope *",
  skusPlaceholder: "Select range",
  messageLabel: "What is keeping you up about PPWR? *",
  messagePlaceholder:
    "e.g. We have 1,800 SKUs across DE/FR/IT and no consolidated PFAS test data.",
  honeypotLabel: "Leave this field empty",
  consentBefore: "I consent to Pactum Advisory processing this enquiry under its ",
  consentLink: "GDPR notice",
  consentAfter:
    ". Data is stored in EU-region encrypted environments and deleted on request.",
  submit: "Request a working session",
};

const COPY_FR: Copy = {
  successTitle: "Demande reçue.",
  successBody:
    "Un consultant Pactum vous répondra sous un jour ouvré avec des créneaux pour une session de travail de 30 minutes. Le premier appel est tenu sous NDA mutuel sur demande.",
  successFootnote:
    "En environnement de production, la confirmation de soumission inclut un lien de calendrier et un e-mail d'intake automatisé.",
  eyebrow: "Intake session de travail",
  title: "Dites-nous où vous en êtes sur la PPWR.",
  intro:
    "Les champs obligatoires sont marqués d'un astérisque. La soumission du formulaire est branchée en production — cette version exécute une simulation côté client uniquement.",
  nameLabel: "Nom *",
  companyLabel: "Société *",
  roleLabel: "Rôle / fonction *",
  countryLabel: "Pays UE du siège *",
  countryPlaceholder: "Choisir",
  skusLabel: "Nombre de SKU dans le périmètre *",
  skusPlaceholder: "Choisir une fourchette",
  messageLabel: "Qu'est-ce qui vous inquiète sur la PPWR ? *",
  messagePlaceholder:
    "Ex. Nous avons 1 800 SKU sur DE/FR/IT et aucune donnée de test PFAS consolidée.",
  honeypotLabel: "Laissez ce champ vide",
  consentBefore:
    "Je consens à ce que Pactum Advisory traite cette demande conformément à son ",
  consentLink: "avis RGPD",
  consentAfter:
    ". Les données sont stockées dans des environnements chiffrés en zone UE et supprimées sur demande.",
  submit: "Envoyer",
};

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const copy = locale === "fr" ? COPY_FR : COPY_EN;
  const countries = locale === "fr" ? COUNTRIES_FR : COUNTRIES_EN;
  const skuRanges = locale === "fr" ? SKU_RANGES_FR : SKU_RANGES_EN;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // honeypot — bots typically fill all fields
    const honey = (form.elements.namedItem("company_url") as HTMLInputElement | null)?.value;
    if (honey) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#10b981]/40 bg-[#d1fae5]/40 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10b981] text-white">
          <CheckCircle2 size={24} />
        </div>
        <h2
          className="mt-5 text-2xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {copy.successTitle}
        </h2>
        <p
          className="mt-3 text-base text-muted-foreground leading-relaxed"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {copy.successBody}
        </p>
        <p
          className="mt-4 text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {copy.successFootnote}
        </p>
      </div>
    );
  }

  return (
    <form
      action="#"
      method="post"
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

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={copy.nameLabel} name="name" required />
          <Field label={copy.companyLabel} name="company" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={copy.roleLabel} name="role" required />
          <SelectField
            label={copy.countryLabel}
            name="country"
            required
            options={countries}
            placeholder={copy.countryPlaceholder}
          />
        </div>
        <SelectField
          label={copy.skusLabel}
          name="skus"
          required
          options={skuRanges}
          placeholder={copy.skusPlaceholder}
        />
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={copy.messagePlaceholder}
            className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20"
          />
        </div>

        {/* honeypot — visually hidden but available to bots */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company_url">{copy.honeypotLabel}</label>
          <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-border text-[#10b981] focus:ring-[#10b981]"
          />
          <span>
            {copy.consentBefore}
            <a href="#" className="text-[#10b981] underline-offset-2 hover:underline">
              {copy.consentLink}
            </a>
            {copy.consentAfter}
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669] sm:w-auto"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {copy.submit}
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
