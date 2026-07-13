"use client";

import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/config/contact";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section className={styles.contact} id="contacto">
      <div className="container">
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>{t.contact.title}</h2>
            <div className={styles.info}>
              <p>{t.contact.description}</p>
              <strong>📞 {t.contact.phoneLabel}</strong>
              <p>0963169401</p>
              <strong>📧 {t.contact.emailLabel}</strong>
              <p>{CONTACT_EMAIL}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
