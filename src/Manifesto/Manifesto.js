import React from "react";
import { useTranslation } from "react-i18next";
import "./Manifesto.css";

const Manifesto = () => {
  const { t } = useTranslation();
  const principles = t("manifesto.principles", { returnObjects: true });

  return (
    <section className="manifesto">
      <div className="container">
        <div className="eyebrow manifesto-eyebrow">{t("manifesto.eyebrow")}</div>

        <div className="manifesto-list">
          {principles.map((p) => (
            <article key={p.n} className="principle">
              <div className="principle-number mono">{p.n}</div>
              <div className="principle-content">
                <h3 className="principle-title display">{p.title}</h3>
                <p className="principle-body">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
