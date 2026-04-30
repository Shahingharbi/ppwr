"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

import { Logo } from "@/components/Logo";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { cn } from "@/lib/utils";
import {
  getMainNav,
  getResourcesNav,
  getSectorsNav,
  getServicesNav,
  localizeHref,
  type NavItem,
} from "@/lib/site-config";
import type { Locale } from "@/lib/i18n/types";
import { getDict } from "@/lib/i18n/dict";

type MegaKey = "services" | "sectors" | "resources";

type NavbarProps = {
  /** REQUIRED — the chrome must always be invoked from a locale-aware layout. */
  locale: Locale;
};

export function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);

  const dict = getDict(locale);
  const services = getServicesNav(locale);
  const sectors = getSectorsNav(locale);
  const resources = getResourcesNav(locale);
  const mainNav = getMainNav(locale);

  // Pull the simple links (Insights / About / Contact) from the localized main nav.
  const SIMPLE_LINKS: NavItem[] = mainNav.filter((item) =>
    ["/blog", "/about", "/contact"].includes(item.href),
  );

  const homeHref = localizeHref("/", locale);
  const ctaHref = localizeHref("/contact", locale);
  const ctaLabel = dict.nav.bookSession;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile panel when navigating
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenMega(null);
  }, [pathname]);

  function isActive(href: string, group?: NavItem[]) {
    const target = href ? localizeHref(href, locale) : "";
    if (target === homeHref) return pathname === homeHref;
    if (group) {
      return group.some((item) => {
        const itemHref = localizeHref(item.href, locale).split("?")[0].replace(/\/$/, "");
        return pathname.startsWith(itemHref);
      });
    }
    return pathname === target || pathname.startsWith(`${target}/`);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(15,26,22,0.04)]"
          : "bg-background border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href={homeHref} aria-label="Pactum — home" className="flex-shrink-0">
          <Logo variant="dark" />
        </Link>

        {/* Center: desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <MegaTrigger
            label={dict.nav.services}
            megaKey="services"
            openMega={openMega}
            setOpenMega={setOpenMega}
            items={services}
            active={isActive("", services)}
            locale={locale}
          />
          <MegaTrigger
            label={dict.nav.sectors}
            megaKey="sectors"
            openMega={openMega}
            setOpenMega={setOpenMega}
            items={sectors}
            active={isActive("", sectors)}
            locale={locale}
            columns={1}
            compact
          />
          <MegaTrigger
            label={dict.nav.resources}
            megaKey="resources"
            openMega={openMega}
            setOpenMega={setOpenMega}
            items={resources}
            active={isActive("", resources)}
            locale={locale}
          />

          {SIMPLE_LINKS.map((link) => {
            const href = localizeHref(link.href, locale);
            return (
              <Link
                key={link.href}
                href={href}
                className={cn(
                  "px-3 py-2 text-[13.5px] font-semibold transition-colors rounded-md",
                  isActive(link.href)
                    ? "text-[#0f1a16]"
                    : "text-[#0f1a16]/70 hover:text-[#0f1a16]",
                )}
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA + locale switcher + mobile toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden md:inline-flex">
            <LocaleSwitcher currentLocale={locale} />
          </div>

          <Link
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#10b981] px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#059669] transition-colors shadow-sm"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {ctaLabel}
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-[#0f1a16]"
            aria-label={mobileOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-5 space-y-6 max-h-[calc(100vh-68px)] overflow-y-auto">
            <MobileGroup
              label={dict.nav.services}
              items={services}
              pathname={pathname}
              locale={locale}
            />
            <MobileGroup
              label={dict.nav.sectors}
              items={sectors}
              pathname={pathname}
              locale={locale}
            />
            <MobileGroup
              label={dict.nav.resources}
              items={resources}
              pathname={pathname}
              locale={locale}
            />

            <div className="space-y-1 pt-2 border-t border-border">
              {SIMPLE_LINKS.map((link) => {
                const href = localizeHref(link.href, locale);
                return (
                  <Link
                    key={link.href}
                    href={href}
                    className={cn(
                      "block py-2 text-[15px] font-semibold",
                      pathname === href ? "text-[#10b981]" : "text-[#0f1a16]",
                    )}
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2">
              <LocaleSwitcher currentLocale={locale} />
            </div>

            <Link
              href={ctaHref}
              className="flex items-center justify-center gap-2 rounded-full bg-[#10b981] py-3 text-sm font-semibold text-white hover:bg-[#059669] transition-colors"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {ctaLabel}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Mega menu trigger (hover + focus) ---------- */

type MegaTriggerProps = {
  label: string;
  megaKey: MegaKey;
  openMega: MegaKey | null;
  setOpenMega: (k: MegaKey | null) => void;
  items: NavItem[];
  active: boolean;
  locale: Locale;
  columns?: 1 | 2;
  compact?: boolean;
};

function MegaTrigger({
  label,
  megaKey,
  openMega,
  setOpenMega,
  items,
  active,
  locale,
  columns = 2,
  compact = false,
}: MegaTriggerProps) {
  const isOpen = openMega === megaKey;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMega(megaKey)}
      onMouseLeave={() => setOpenMega(null)}
      onFocus={() => setOpenMega(megaKey)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMega(null);
      }}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold rounded-md transition-colors",
          active || isOpen
            ? "text-[#0f1a16]"
            : "text-[#0f1a16]/70 hover:text-[#0f1a16]",
        )}
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "rotate-0")}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3",
            compact ? "w-[320px]" : columns === 2 ? "w-[640px]" : "w-[360px]",
          )}
        >
          <div className="rounded-2xl border border-border bg-white shadow-[0_24px_60px_rgba(15,26,22,0.12)] p-3">
            <div
              className={cn(
                "grid gap-1",
                compact ? "grid-cols-1" : columns === 2 ? "grid-cols-2" : "grid-cols-1",
              )}
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={localizeHref(item.href, locale)}
                  className="group rounded-xl px-3 py-2.5 hover:bg-[#f5f7f4] transition-colors"
                >
                  <div
                    className="text-[13.5px] font-semibold text-[#0f1a16] group-hover:text-[#059669] transition-colors"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {item.label}
                  </div>
                  {item.description && (
                    <p
                      className="mt-1 text-[12.5px] leading-snug text-[#0f1a16]/60"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Mobile group ---------- */

function MobileGroup({
  label,
  items,
  pathname,
  locale,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
  locale: Locale;
}) {
  return (
    <div>
      <div
        className="text-[10.5px] uppercase tracking-[0.16em] text-[#0f1a16]/50 font-semibold mb-2"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {label}
      </div>
      <ul className="space-y-1">
        {items.map((item) => {
          const href = localizeHref(item.href, locale);
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={item.href}>
              <Link
                href={href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors",
                  active
                    ? "bg-[#d1fae5] text-[#065f46]"
                    : "text-[#0f1a16] hover:bg-[#f5f7f4]",
                )}
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
