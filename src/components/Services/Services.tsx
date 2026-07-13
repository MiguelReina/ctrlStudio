"use client";

import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useI18n();

  return (
    <section className={styles.services} id="servicios">
      <div className="container">
        <h2 className="section-title">
          {t.services.titlePrefix} <span>{t.services.titleHighlight}</span>
        </h2>
        <div className={styles.grid}>
          {t.services.items.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
