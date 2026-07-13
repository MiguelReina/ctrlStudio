"use client";

import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Footer.module.css";
import { getCopyright } from "./helpers";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <p>{getCopyright(new Date().getFullYear(), t.footer.rights)}</p>
      <p>{t.footer.tagline}</p>
    </footer>
  );
}
