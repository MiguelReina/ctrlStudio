"use client";

import Logo from "@/components/Logo";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./About.module.css";

export default function About() {
  const { t } = useI18n();

  return (
    <section className={styles.about} id="nosotros">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{t.about.title}</h2>
            <p>{t.about.description}</p>
            <ul className={styles.featuresList}>
              {t.about.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className={styles.visual}>
            <Logo className={styles.logoLarge} variant="about" />
            <p className={styles.visualTagline}>{t.about.visualTagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
