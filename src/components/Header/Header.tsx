"use client";

import LanguageToggle from "@/components/LanguageToggle";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useI18n();

  const navLinks = [
    { href: "#servicios", label: t.nav.services },
    { href: "#nosotros", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logoContainer}>
          <Logo className={styles.logoIcon} />
          <span className={styles.logoText}>CTRL STUDIO</span>
        </a>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
