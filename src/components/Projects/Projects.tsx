"use client";

import { useState } from "react";
import { projectItems } from "@/data/projects";
import { useI18n } from "@/i18n/I18nProvider";
import { withBasePath } from "@/lib/basePath";
import styles from "./Projects.module.css";

type ProjectCardProps = {
  name: string;
  description: string;
  url: string;
  logoSrc: string;
  logoAlt: string;
  visitLabel: string;
};

function ProjectCard({
  name,
  description,
  url,
  logoSrc,
  logoAlt,
  visitLabel,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.logoWrap}>
        <img
          src={withBasePath(logoSrc)}
          alt={logoAlt}
          className={styles.logo}
          width={180}
          height={64}
        />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className={styles.linkLabel}>{visitLabel}</span>
    </a>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = projectItems
    .map((project) => {
      const copy = t.projects.items.find((item) => item.id === project.id);
      if (!copy) {
        return null;
      }

      return {
        id: project.id,
        url: project.url,
        logoSrc: project.logoSrc,
        logoAlt: project.logoAlt,
        name: copy.name,
        description: copy.description,
      };
    })
    .filter((slide): slide is NonNullable<typeof slide> => slide !== null);

  const hasSlider = slides.length > 1;

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section className={styles.projects} id="proyectos">
      <div className="container">
        <h2 className="section-title">
          {t.projects.titlePrefix}{" "}
          <span>{t.projects.titleHighlight}</span>
        </h2>

        <div className={styles.slider}>
          {hasSlider ? (
            <button
              type="button"
              className={styles.navButton}
              aria-label={t.projects.previous}
              onClick={goToPrevious}
            >
              ‹
            </button>
          ) : null}

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className={styles.slide}>
                  <ProjectCard
                    name={slide.name}
                    description={slide.description}
                    url={slide.url}
                    logoSrc={slide.logoSrc}
                    logoAlt={slide.logoAlt}
                    visitLabel={t.projects.visitSite}
                  />
                </div>
              ))}
            </div>
          </div>

          {hasSlider ? (
            <button
              type="button"
              className={styles.navButton}
              aria-label={t.projects.next}
              onClick={goToNext}
            >
              ›
            </button>
          ) : null}
        </div>

        {hasSlider ? (
          <div className={styles.dots} role="tablist" aria-label={t.projects.listLabel}>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-label={`${slide.name} (${index + 1}/${slides.length})`}
                aria-selected={activeIndex === index}
                className={
                  activeIndex === index
                    ? `${styles.dot} ${styles.dotActive}`
                    : styles.dot
                }
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
