import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const setLang = (lng) => {
    if (lng === current) return;
    i18n.changeLanguage(lng);
    if (window.location.hash) {
      const next = `#${lng}`;
      if (window.location.hash !== next) window.location.hash = next;
    }
  };

  return (
    <div className="lang-switch" role="group" aria-label={t("languageSwitcher.label")}>
      <button
        type="button"
        className={`lang-switch-btn ${current === "en" ? "is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={current === "en"}
      >
        {t("languageSwitcher.english")}
      </button>
      <span className="lang-switch-sep" aria-hidden="true" />
      <button
        type="button"
        className={`lang-switch-btn ${current === "ja" ? "is-active" : ""}`}
        onClick={() => setLang("ja")}
        aria-pressed={current === "ja"}
      >
        {t("languageSwitcher.japanese")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
