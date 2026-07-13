import type { ReactNode } from "react";
import styles from "./CtaButton.module.css";

type CtaButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
};

export default function CtaButton({
  href,
  type = "button",
  children,
}: CtaButtonProps) {
  if (href) {
    return (
      <a href={href} className={styles.ctaButton}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles.ctaButton}>
      {children}
    </button>
  );
}
