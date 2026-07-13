"use client";

import { FormEvent } from "react";
import CtaButton from "@/components/CtaButton";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const { t } = useI18n();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(t.form.confirmation);
    e.currentTarget.reset();
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">{t.form.nameLabel}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t.form.namePlaceholder}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">{t.form.emailLabel}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t.form.emailPlaceholder}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">{t.form.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t.form.messagePlaceholder}
          required
        />
      </div>
      <CtaButton type="submit">{t.form.submit}</CtaButton>
    </form>
  );
}
