"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import {
  ctaPrimary,
  resources,
  sectors,
  services,
  type NavItem,
} from "@/lib/site-config";

type MegaKey = "services" | "sectors" | "resources";

const SIMPLE_LINKS: NavItem[] = [
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);

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
    if (href === "/") return pathname === "/";
    if (group) {
      return group.some((item) => pathname.startsWith(item.href.split("?")[0].replace(/\/$/, "")));
    }
    return pathname === href || pathname.startsWith(`${href}/`);
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
        <Link href="/" aria-label="Pactum — home" className="flex-shrink-0">
          <Logo variant="dark" />
        </Link>

        {/* Center: desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <MegaTrigger
            label="Services"
            megaKey="services"
            openMega={openMega}
            setOpenMega={setOpenMega}
            items={services}
            active={isActive("", services)}
          />
          <MegaTrigger
            label="Sectors"
            megaKey="sectors"
            openMega={openMega}
            setOpenMega={setOpenMega}
            items={sectors}
            active={isActive("", sectors)}
            columns={1}
            compact
          />
          <MegaTrigger
            label="Resources"
            megaKey="resources"
            openMega={openMega}
            setOpenMega={setOpenMega}
            items={resources}
            active={isActive("", resources)}
          />

          {SIMPLE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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
          ))}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href={ctaPrimary.href}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#10b981] px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#059669] transition-colors shadow-sm"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {ctaPrimary.label}
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-[#0f1a16]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            <MobileGroup label="Services" items={services} pathname={pathname} />
            <MobileGroup label="Sectors" items={sectors} pathname={pathname} />
            <MobileGroup label="Resources" items={resources} pathname={pathname} />

            <div className="space-y-1 pt-2 border-t border-border">
              {SIMPLE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-2 text-[15px] font-semibold",
                    pathname === link.href ? "text-[#10b981]" : "text-[#0f1a16]",
                  )}
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href={ctaPrimary.href}
              className="flex items-center justify-center gap-2 rounded-full bg-[#10b981] py-3 text-sm font-semibold text-white hover:bg-[#059669] transition-colors"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {ctaPrimary.label}
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
                  href={item.href}
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
}: {
  label: string;
  items: NavItem[];
  pathname: string;
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
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
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
