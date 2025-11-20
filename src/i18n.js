import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import jaTranslations from './locales/ja.json';

// Custom language detector for hash-based routing
const hashDetector = {
  name: 'hashDetector',
  lookup() {
    const hash = window.location.hash;
    if (hash === '#en' || hash === '#english') return 'en';
    if (hash === '#ja' || hash === '#japanese') return 'ja';
    return null;
  },
  cacheUserLanguage(lng) {
    // Update hash when language changes
    const currentHash = window.location.hash;
    const hashLang = currentHash.replace('#', '');
    if (hashLang !== lng) {
      window.location.hash = lng;
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ja: {
        translation: jaTranslations
      }
    },
    fallbackLng: 'en',
    debug: false,

    detection: {
      // Priority order for language detection:
      // 1. Hash in URL (#en, #ja)
      // 2. localStorage (persisted user choice)
      // 3. Browser language
      // 4. Fallback to English
      order: ['hashDetector', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      customDetectors: [hashDetector]
    },

    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

// Listen for hash changes to update language
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  if (hash === '#en' || hash === '#english') {
    i18n.changeLanguage('en');
  } else if (hash === '#ja' || hash === '#japanese') {
    i18n.changeLanguage('ja');
  }
});

// Update HTML lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
