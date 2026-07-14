"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import SettingsMenu from "@/components/SettingsMenu";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: t.nav.services },
    { href: "#proyectos", label: t.nav.projects },
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
        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>
        <ul
          className={`${styles.navList} ${menuOpen ? styles.navListOpen : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <SettingsMenu />
        </div>
      </nav>
    </header>
  );
}
