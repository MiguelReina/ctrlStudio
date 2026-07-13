"use client";

import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/dictionaries";
import styles from "./LanguageToggle.module.css";

const flags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
};

export default function LanguageToggle() {
  const { locale, t, setLocale } = useI18n();

  function handleClick() {
    setLocale(locale === "es" ? "en" : "es");
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={handleClick}
      aria-label={t.language.switchTo}
    >
      <span aria-hidden="true">{flags[locale]}</span>
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}
