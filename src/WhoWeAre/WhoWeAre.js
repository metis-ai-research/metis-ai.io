import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useScrollProgress } from "../motion";
import "./WhoWeAre.css";

// Split the statement into units that light up in reading order: words for
// English, characters for Japanese (which has no spaces).
const tokenize = (text, lang) =>
  lang === "ja" ? Array.from(text) : text.split(/(\s+)/).filter((s) => s.length);

const WhoWeAre = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "en").split("-")[0];
  const statement = t("who.statement");
  const tokens = useMemo(() => tokenize(statement, lang), [statement, lang]);
  const words = tokens.filter((s) => s.trim()).length;
  const scrubRef = useScrollProgress({ start: 0.85, end: 0.3 });

  let index = 0;
  return (
    <section className="section who" id="vision" aria-labelledby="who-title">
      <div className="container">
        <h2 id="who-title" className="sr-only">{t("who.heading")}</h2>
        <p className="who-statement" ref={scrubRef} style={{ "--n": words }}>
          <span className="sr-only">{statement}</span>
          <span aria-hidden="true">
            {tokens.map((tok, i) =>
              tok.trim() ? (
                <span key={i} className="who-word" style={{ "--i": index++ }}>{tok}</span>
              ) : (
                tok
              )
            )}
          </span>
        </p>
        <div className="who-body">
          <p className="reveal">{t("who.body1")}</p>
          <p className="reveal" style={{ "--d": "120ms" }}>{t("who.body2")}</p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
