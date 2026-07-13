"use client";

import { FormEvent, useState } from "react";
import CtaButton from "@/components/CtaButton";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./ContactForm.module.css";
import { readContactFormData, submitContactForm } from "./helpers";

export default function ContactForm() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      await submitContactForm(readContactFormData(form));
      alert(t.form.confirmation);
      form.reset();
    } catch {
      alert(t.form.error);
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">{t.form.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t.form.messagePlaceholder}
          required
          disabled={isSubmitting}
        />
      </div>
      <CtaButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.form.submitting : t.form.submit}
      </CtaButton>
    </form>
  );
}
