import React from "react";
import { useTranslation } from "react-i18next";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const { t } = useTranslation();
  return (
    <section className="who" id="vision">
      <div className="container who-grid">
        <div className="who-left">
          <div className="eyebrow who-eyebrow">{t("who.eyebrow")}</div>
          <blockquote className="who-quote display">
            {t("who.quotePre")}
            <span className="italic-accent">{t("who.quoteEm")}</span>
            {t("who.quotePost")}
          </blockquote>
        </div>

        <div className="who-right">
          <p className="who-body">{t("who.body1")}</p>
          <p className="who-body">{t("who.body2")}</p>
          <p className="who-body">{t("who.body3")}</p>

          <div className="who-signature">
            <span className="mono who-sig-label">{t("who.signedLabel")}</span>
            <span className="who-sig-names display">{t("who.signedName")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
