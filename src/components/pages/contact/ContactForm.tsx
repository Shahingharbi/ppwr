"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const COUNTRIES = [
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

const SKU_RANGES = [
  "Under 50 SKUs",
  "50–250 SKUs",
  "250–1,000 SKUs",
  "1,000–5,000 SKUs",
  "Over 5,000 SKUs",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
          Request received.
        </h2>
        <p
          className="mt-3 text-base text-muted-foreground leading-relaxed"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          A Pactum advisor will reply within one business day with proposed slots for a 30-minute working
          session. The first call is held under mutual NDA on request.
        </p>
        <p
          className="mt-4 text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          Submission confirmation in production environments includes a calendar link and an automated
          intake email.
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
        Working session intake
      </p>
      <h2
        className="mt-2 text-2xl md:text-3xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        Tell us where you are with PPWR.
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Required fields marked with an asterisk. Form submission wired up in production — this build runs
        a client-side simulation only.
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full name *" name="name" required />
          <Field label="Company *" name="company" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Role / job title *" name="role" required />
          <SelectField
            label="EU country of HQ *"
            name="country"
            required
            options={COUNTRIES}
            placeholder="Select"
          />
        </div>
        <SelectField
          label="Number of SKUs in scope *"
          name="skus"
          required
          options={SKU_RANGES}
          placeholder="Select range"
        />
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What is keeping you up about PPWR? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="e.g. We have 1,800 SKUs across DE/FR/IT and no consolidated PFAS test data."
            className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20"
          />
        </div>

        {/* honeypot — visually hidden but available to bots */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company_url">Leave this field empty</label>
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
            I consent to Pactum Advisory processing this enquiry under its{" "}
            <a href="#" className="text-[#10b981] underline-offset-2 hover:underline">
              GDPR notice
            </a>
            . Data is stored in EU-region encrypted environments and deleted on request.
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669] sm:w-auto"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          Request a working session
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
