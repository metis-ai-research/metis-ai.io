import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      {/* Company Logo */}
      <div className="header-logo">
        <img
          src="images/brandmark.svg"
          alt={t('header.logoAlt')}
          className="logo-image"
        />
        <span className="logo-text">{t('header.logoText')}</span>
      </div>

      {/* Contact Us */}
      <nav>
        <a href="mailto:contact@metisai.com" className="nav-link">
          {t('header.contactUs')}
        </a>
      </nav>
    </header>
  );
};

export default Header;
