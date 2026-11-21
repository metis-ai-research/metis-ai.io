import React from "react";
import { useTranslation } from "react-i18next";
import "./Founders.css";

const Founders = () => {
  const { t } = useTranslation();
  const members = t("founders.members", { returnObjects: true });

  return (
    <section className="section founders" id="team" aria-labelledby="team-title">
      <div className="container">
        <header className="founders-head">
          <h2 id="team-title" className="h-section reveal">{t("founders.heading")}</h2>
          <p className="lead reveal" style={{ "--d": "100ms" }}>{t("founders.sub")}</p>
        </header>

        <ul className="founders-list">
          {members.map((f, i) => (
            <li key={f.name} className="founder reveal" style={{ "--d": `${i * 70}ms` }}>
              <h3 className="founder-name">{f.name}</h3>
              <p className="founder-role">{f.role}</p>
              <p className="founder-bio">{f.bio}</p>
            </li>
          ))}
        </ul>

        <p className="founders-location">{t("founders.location")}</p>
      </div>
    </section>
  );
};

export default Founders;
