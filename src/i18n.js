import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./locales/en.json";
import jaTranslations from "./locales/ja.json";

const SUPPORTED = ["en", "ja"];

const hashDetector = {
  name: "hash",
  lookup() {
    const hash = (window.location.hash || "").replace(/^#/, "").toLowerCase();
    if (hash === "en" || hash === "english") return "en";
    if (hash === "ja" || hash === "japanese") return "ja";
    return undefined;
  },
};

const detector = new LanguageDetector();
detector.addDetector(hashDetector);

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ja: { translation: jaTranslations },
    },
    supportedLngs: SUPPORTED,
    fallbackLng: "en",
    load: "languageOnly",
    nonExplicitSupportedLngs: true,
    detection: {
      order: ["hash", "localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: { escapeValue: false },
  });

window.addEventListener("hashchange", () => {
  const next = hashDetector.lookup();
  if (next && next !== i18n.language) i18n.changeLanguage(next);
});

const applyLang = (lng) => {
  document.documentElement.setAttribute("lang", lng);
};

applyLang((i18n.resolvedLanguage || i18n.language || "en").split("-")[0]);
i18n.on("languageChanged", applyLang);

export default i18n;
