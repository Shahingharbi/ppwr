import Link from "next/link";
import { Mail } from "lucide-react";

import { Logo } from "@/components/Logo";
import { resources, sectors, services, siteConfig } from "@/lib/site-config";

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z" />
    </svg>
  );
}

const insightsAndLegal = [
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/imprint", label: "Imprint" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookie policy" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f1a16] text-white pt-16 pb-8 mt-auto">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Pactum — home" className="inline-flex">
              <Logo variant="light" compact />
            </Link>
            <p
              className="mt-5 text-[13.5px] leading-relaxed text-white/65 max-w-[34ch]"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Pactum is the EU advisory dedicated to Regulation (EU) 2025/40 — the Packaging and
              Packaging Waste Regulation. We turn the Regulation into a costed, audit-ready
              compliance roadmap for packaging-intensive companies.
            </p>

            <p
              className="mt-5 text-[11.5px] uppercase tracking-[0.18em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              The PPWR Advisory
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Email Pactum Advisory"
              >
                <Mail size={15} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Pactum on LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <FooterCol title="Services" className="col-span-1 lg:col-span-3">
            {services.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Sectors */}
          <FooterCol title="Sectors" className="col-span-1 lg:col-span-2">
            {sectors.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Resources */}
          <FooterCol title="Resources" className="col-span-1 lg:col-span-2">
            {resources.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Insights / Legal */}
          <FooterCol title="Company & legal" className="col-span-1 lg:col-span-1">
            {insightsAndLegal.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        {/* Newsletter */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 border-t border-white/10 pt-10">
          <div className="lg:col-span-5">
            <h3
              className="text-[15px] font-semibold text-white"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Quarterly regulatory briefing
            </h3>
            <p
              className="mt-2 text-[13.5px] text-white/60 leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Quarterly briefing. Regulatory updates only. No upsell.
            </p>
          </div>
          <form
            action="#"
            className="lg:col-span-7 flex flex-col sm:flex-row gap-3"
            aria-label="Newsletter signup"
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Work email
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="director.packaging@yourgroup.eu"
              className="flex-1 rounded-full bg-white/5 border border-white/15 px-5 py-3 text-[13.5px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#10b981]/60 focus:border-transparent transition"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            />
            <button
              type="submit"
              className="rounded-full bg-[#10b981] hover:bg-[#059669] px-6 py-3 text-[13px] font-semibold text-white transition-colors"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-10 text-[11.5px] text-white/40 leading-relaxed max-w-[88ch]"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          Pactum Advisory is an independent consulting firm. We are not affiliated with the
          European Commission, the European Parliament, the Council of the European Union, or any
          other EU institution. References to Regulation (EU) 2025/40 cite the official text
          published in the Official Journal of the European Union (OJ L, 22 January 2025).
        </p>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p
            className="text-[11.5px] text-white/45"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            &copy; 2025 Pactum Advisory. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-white/45">
            <span
              className="inline-flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              Made in EU
            </span>
            <span style={{ fontFamily: "var(--font-maison-neue)" }}>
              Regulation (EU) 2025/40 — your roadmap, our craft
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h4
        className="text-[11px] uppercase tracking-[0.16em] text-white/55 font-semibold mb-4"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[13px] text-white/70 hover:text-white transition-colors leading-snug"
        style={{ fontFamily: "var(--font-maison-neue)" }}
      >
        {children}
      </Link>
    </li>
  );
}
