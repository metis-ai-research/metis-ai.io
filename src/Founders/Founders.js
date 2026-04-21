import React from "react";
import { useTranslation } from "react-i18next";
import "./Founders.css";

const Founders = () => {
  const { t } = useTranslation();
  const members = t("founders.members", { returnObjects: true });

  return (
    <section className="founders" id="team">
      <div className="container">
        <div className="founders-head">
          <div className="eyebrow">{t("founders.eyebrow")}</div>
          <h2 className="founders-title display">
            {t("founders.titleLine1")}
            <br />
            <span className="italic-accent">{t("founders.titleLine2Em")}</span>
          </h2>
        </div>

        <div className="founders-grid">
          {members.map((f) => (
            <article key={f.initial} className="founder-card">
              <div className="founder-avatar display">{f.initial}</div>
              <div className="founder-name display">{f.name}</div>
              <div className="mono founder-role">{f.role}</div>
              <p className="founder-bio">{f.bio}</p>
            </article>
          ))}
        </div>

        <div className="founders-location">
          <span className="mono founders-location-label">{t("founders.locationLabel")}</span>
          <span className="founders-location-value">{t("founders.locationValue")}</span>
        </div>
      </div>
    </section>
  );
};

export default Founders;
