import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const setLang = (lng) => {
    if (lng === current) return;
    i18n.changeLanguage(lng);
    // A #en / #ja hash is a shareable language link; keep it in sync only when
    // it is the current hash, so section anchors like #product are untouched.
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (["en", "ja", "english", "japanese"].includes(hash)) {
      window.history.replaceState(null, "", `#${lng}`);
    }
  };

  return (
    <div className="lang-switch" role="group" aria-label={t("languageSwitcher.label")} data-lang={current}>
      <button
        type="button"
        lang="en"
        className="lang-switch-btn"
        onClick={() => setLang("en")}
        aria-pressed={current === "en"}
      >
        {t("languageSwitcher.english")}
      </button>
      <button
        type="button"
        lang="ja"
        className="lang-switch-btn lang-switch-btn--ja"
        onClick={() => setLang("ja")}
        aria-pressed={current === "ja"}
      >
        {t("languageSwitcher.japanese")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
