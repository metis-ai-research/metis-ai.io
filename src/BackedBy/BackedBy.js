import React from "react";
import { useTranslation } from "react-i18next";
import "./BackedBy.css";

const BackedBy = () => {
  const { t } = useTranslation();
  return (
    <section className="backed">
      <div className="container backed-inner">
        <div className="mono backed-label">{t("backed.label")}</div>
        <div className="backed-logo">
          <span className="backed-logo-name">{t("backed.logoName")}</span>
          <span className="backed-logo-sub">{t("backed.logoSub")}</span>
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
