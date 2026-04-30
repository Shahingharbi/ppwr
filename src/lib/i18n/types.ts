export type Locale = "fr" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
};

export const LOCALE_OG_TAG: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "fr" || value === "en";
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
