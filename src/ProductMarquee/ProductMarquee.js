import React from "react";
import { useTranslation } from "react-i18next";
import "./ProductMarquee.css";

const ProductMarquee = () => {
  const { t } = useTranslation();
  return (
    <section className="product-marquee" id="product">
      <div className="container">
        <div className="eyebrow pm-eyebrow">{t("productMarquee.eyebrow")}</div>

        <div className="pm-stage">
          <div className="pm-text">
            <h2 className="pm-name display">
              aro<span className="italic-accent">taro</span>
            </h2>
            <p className="pm-tagline">{t("productMarquee.tagline")}</p>

            <div className="pm-meta">
              <span className="mono pm-meta-item">{t("productMarquee.metaWellness")}</span>
              <span className="pm-meta-sep" />
              <span className="mono pm-meta-item">{t("productMarquee.metaTarot")}</span>
              <span className="pm-meta-sep" />
              <span className="mono pm-meta-item">{t("productMarquee.metaAlways")}</span>
            </div>

            <a
              href="https://arotaro.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-link link-underline"
            >
              {t("productMarquee.linkLabel")} <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="pm-visual">
            <div className="pm-visual-glow" />
            <div className="pm-visual-card">
              <div className="pm-mock-header">
                <span className="pm-mock-dot" />
                <span className="mono pm-mock-label">{t("productMarquee.mockLabel")}</span>
              </div>
              <div className="pm-mock-body">
                <div className="pm-bubble pm-bubble--user">{t("productMarquee.mockUser1")}</div>
                <div className="pm-bubble pm-bubble--ai">{t("productMarquee.mockAi1")}</div>
                <div className="pm-bubble pm-bubble--user">{t("productMarquee.mockUser2")}</div>
                <div className="pm-typing">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMarquee;
