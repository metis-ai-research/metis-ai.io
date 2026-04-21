import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="eyebrow hero-eyebrow">
          <span className="signal-dot" /> {t("hero.eyebrow")}
        </div>

        <h1 className="display hero-title">
          {t("hero.title.line1")}
          <br />
          {t("hero.title.line2Pre")}
          <em>{t("hero.title.line2Em")}</em>
          {t("hero.title.line2Post")}
          <br />
          {t("hero.title.line3")}
        </h1>

        <p className="hero-sub">{t("hero.sub")}</p>

        <div className="hero-cta-row">
          <a href="mailto:info@metis-ai.io" className="hero-cta-primary">
            {t("hero.ctaPrimary")} <span>&rarr;</span>
          </a>
          <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer" className="hero-cta-secondary link-underline">
            {t("hero.ctaSecondary")} &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
