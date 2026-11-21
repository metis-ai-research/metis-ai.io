import React from "react";
import { useTranslation } from "react-i18next";
import "./Manifesto.css";

const Manifesto = () => {
  const { t } = useTranslation();
  const principles = t("manifesto.principles", { returnObjects: true });

  return (
    <section className="section manifesto" aria-labelledby="manifesto-title">
      <div className="container manifesto-grid">
        <h2 id="manifesto-title" className="h-section manifesto-heading reveal">{t("manifesto.heading")}</h2>
        <ol className="principles">
          {principles.map((p) => (
            <li key={p.title} className="principle reveal">
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-body">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Manifesto;
