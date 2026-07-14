"use client";

import { useEffect, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./SettingsMenu.module.css";

export default function SettingsMenu() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label={t.settings.open}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">⚙️</span>
      </button>

      {open && (
        <div
          className={styles.backdrop}
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={t.settings.title}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{t.settings.title}</h2>
              <button
                type="button"
                className={styles.close}
                aria-label={t.settings.close}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <div className={styles.row}>
              <span className={styles.label}>{t.settings.language}</span>
              <LanguageToggle />
            </div>

            <div className={styles.row}>
              <span className={styles.label}>{t.settings.theme}</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
