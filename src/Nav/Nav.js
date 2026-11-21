import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { Menu, Close, ArrowRight } from "../Icons";
import "./Nav.css";

const LINKS = [
  ["#product", "nav.product"],
  ["#vision", "nav.vision"],
  ["#how", "nav.how"],
  ["#team", "nav.team"],
];

const Nav = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const sheetRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile sheet: lock scroll, close on Escape, return focus to the toggle.
  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    const first = sheetRef.current && sheetRef.current.querySelector("a, button");
    if (first) first.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      if (toggleRef.current) toggleRef.current.focus();
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-bar container">
        <a href="#top" className="nav-logo" aria-label={t("nav.home")}>
          <Logo variant="dark" width={104} height={31} />
        </a>

        <nav className="nav-links" aria-label={t("nav.primary")}>
          {LINKS.map(([href, key]) => (
            <a key={href} href={href} className="nav-link">{t(key)}</a>
          ))}
        </nav>

        <div className="nav-right">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn--light nav-cta">{t("nav.contact")}</a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="nav-sheet" ref={sheetRef} className="nav-sheet" hidden={!open}>
        <nav aria-label={t("nav.primary")}>
          {LINKS.map(([href, key], i) => (
            <a key={href} href={href} className="nav-sheet-link" style={{ "--i": i }} onClick={() => setOpen(false)}>
              {t(key)}
            </a>
          ))}
          <a href="#contact" className="nav-sheet-link nav-sheet-link--cta" style={{ "--i": LINKS.length }} onClick={() => setOpen(false)}>
            {t("nav.contact")} <ArrowRight size={22} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
