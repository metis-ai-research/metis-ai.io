import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#top" className="footer-logo" aria-label={t("nav.home")}>
            <Logo variant="dark" width={104} height={31} />
          </a>
          <p className="footer-meta">{t("footer.location")}</p>
        </div>

        <nav className="footer-col" aria-label={t("footer.products")}>
          <h2 className="footer-h">{t("footer.products")}</h2>
          <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer">{t("footer.links.arotaro")}</a>
          <a href="https://blinc.metis-ai.io" target="_blank" rel="noopener noreferrer">{t("footer.links.blinc")}</a>
        </nav>

        <nav className="footer-col" aria-label={t("footer.company")}>
          <h2 className="footer-h">{t("footer.company")}</h2>
          <a href="#how">{t("footer.links.how")}</a>
          <a href="#team">{t("footer.links.team")}</a>
          <a href="mailto:info@metis-ai.io">{t("footer.links.contact")}</a>
        </nav>
      </div>
      <div className="footer-base">
        <span>© {year} {t("footer.rights")}</span>
        <span>info@metis-ai.io</span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
