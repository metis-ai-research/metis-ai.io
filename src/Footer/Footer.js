import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-row">
        <a href="#top" className="footer-mark" aria-label="Metis">
          <Logo variant="dark" markOnly width={22} height={35} />
        </a>

        <div className="footer-links">
          <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer" className="link-underline">{t("footer.links.arotaro")}</a>
          <a href="#team" className="link-underline">{t("footer.links.team")}</a>
          <a href="mailto:info@metis-ai.io" className="link-underline">{t("footer.links.contact")}</a>
        </div>

        <div className="mono footer-meta">
          {t("footer.metaLocation")} &middot; &copy; {year}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
