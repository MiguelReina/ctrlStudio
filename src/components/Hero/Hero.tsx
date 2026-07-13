"use client";

import CtaButton from "@/components/CtaButton";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>CTRL STUDIO</h1>
        <p className={styles.tagline}>&quot;{t.hero.tagline}&quot;</p>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <CtaButton href="#contacto">{t.hero.cta}</CtaButton>
      </div>
    </section>
  );
}
