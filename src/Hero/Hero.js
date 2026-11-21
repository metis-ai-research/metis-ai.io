import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowDown } from "../Icons";
import { useScrollProgress } from "../motion";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  // 0 while the screenshot sits low in the first viewport, 1 once it has risen
  // to the upper third: drives the tilt-to-flat as the visitor scrolls.
  const shotRef = useScrollProgress({ start: 0.95, end: 0.25 });

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-field" aria-hidden="true">
        <span className="hero-field-a" />
        <span className="hero-field-b" />
      </div>

      <div className="container hero-copy">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-line"><span>{t("hero.titleLine1")}</span></span>
          <span className="hero-line"><span>{t("hero.titleLine2")}</span></span>
        </h1>
        <p className="lead hero-sub">{t("hero.sub")}</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn">
            {t("hero.ctaPrimary")} <ArrowRight />
          </a>
          <a href="#product" className="btn btn--ghost">
            {t("hero.ctaSecondary")} <ArrowDown />
          </a>
        </div>
      </div>

      <figure className="hero-shot container" ref={shotRef}>
        <div className="hero-shot-land">
          <div className="hero-shot-tilt">
            <img
              src="images/metis-os.png"
              alt={t("hero.shotAlt")}
              width="1492"
              height="897"
              fetchpriority="high"
            />
          </div>
        </div>
        <figcaption className="hero-shot-caption">{t("hero.shotCaption")}</figcaption>
      </figure>
    </section>
  );
};

export default Hero;
