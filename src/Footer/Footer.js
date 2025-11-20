import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    window.location.hash = lng;
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="footer-logo">
          <span className="footer-logo-image">
            <img src="images/logo.png" alt={t('footer.logoAlt')} />
          </span>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-section-title">{t('footer.quickLinks.title')}</h4>
          <ul className="footer-links">
            <li>
              <a href="#arotaro">{t('footer.quickLinks.arotaro')}</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">{t('footer.company.title')}</h4>
          <ul className="footer-links">
            <li>
              <a href="#team">{t('footer.company.team')}</a>
            </li>
            <li>
              <a href="#contact">{t('footer.company.contact')}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Language Picker */}
      <div className="language-picker">
        <button
          onClick={() => changeLanguage('en')}
          className={`language-link ${i18n.language === 'en' ? 'active' : ''}`}
          aria-label="Switch to English"
        >
          {t('footer.language.english')}
        </button>
        <span className="language-separator"> | </span>
        <button
          onClick={() => changeLanguage('ja')}
          className={`language-link ${i18n.language === 'ja' ? 'active' : ''}`}
          aria-label="Switch to Japanese"
        >
          {t('footer.language.japanese')}
        </button>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
