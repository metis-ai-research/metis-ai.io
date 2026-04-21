import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="eyebrow contact-eyebrow">{t("contact.eyebrow")}</div>

        <h2 className="contact-title display">
          {t("contact.titleLine1")}
          <br />
          {t("contact.titleLine2Pre")}<span className="contact-italic">{t("contact.titleLine2Em")}</span>
        </h2>

        <a href="mailto:info@metis-ai.io" className="contact-email">
          info@metis-ai.io
          <span className="arrow">&rarr;</span>
        </a>

        <div className="contact-footer-row">
          <span className="mono contact-meta">
            <span className="signal-dot" /> {t("contact.metaOpen")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
