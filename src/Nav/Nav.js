import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Nav.css";

const Nav = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <Logo variant="dark" width={96} height={28} />
        </a>

        <div className="nav-links">
          <a href="#product" className="nav-link">{t("nav.product")}</a>
          <a href="#vision" className="nav-link">{t("nav.vision")}</a>
          <a href="#team" className="nav-link">{t("nav.team")}</a>
        </div>

        <div className="nav-right">
          <LanguageSwitcher />
          <a href="mailto:info@metis-ai.io" className="nav-cta">
            {t("nav.contact")} <span>&rarr;</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
