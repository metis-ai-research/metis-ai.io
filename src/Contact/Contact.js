import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Copy, Check } from "../Icons";
import "./Contact.css";

const EMAIL = "info@metis-ai.io";

const Contact = () => {
  const { t } = useTranslation();
  const [copyState, setCopyState] = useState("idle"); // idle | copied | failed
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch (e) {
      setCopyState("failed");
    }
    timer.current = setTimeout(() => setCopyState("idle"), 2400);
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <h2 id="contact-title" className="contact-title reveal">{t("contact.heading")}</h2>
        <p className="lead contact-sub reveal" style={{ "--d": "100ms" }}>{t("contact.sub")}</p>

        <div className="contact-actions reveal" style={{ "--d": "180ms" }}>
          <a href={`mailto:${EMAIL}`} className="btn contact-email">
            {EMAIL} <ArrowRight size={20} />
          </a>
          <button type="button" className={`btn btn--ghost contact-copy contact-copy--${copyState}`} onClick={copy}>
            {copyState === "copied" ? <Check /> : <Copy />}
            <span>{copyState === "copied" ? t("contact.copied") : t("contact.copy")}</span>
          </button>
        </div>
        <p className="contact-status" role="status" aria-live="polite">
          {copyState === "failed" ? t("contact.copyFailed") : ""}
        </p>

        <p className="contact-open">
          <span className="contact-open-dot" aria-hidden="true" />
          {t("contact.open")}
        </p>
      </div>
    </section>
  );
};

export default Contact;
