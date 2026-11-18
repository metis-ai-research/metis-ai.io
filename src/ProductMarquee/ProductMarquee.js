import React from "react";
import { useTranslation } from "react-i18next";
import "./ProductMarquee.css";

// Bar widths for the decorative Blinc barcode (1 = thin, 3 = thick). Fixed, not random,
// so the mock renders identically on every load and in every screenshot.
const BARCODE = [2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 2];

const Meta = ({ items }) => (
  <div className="pm-meta">
    {items.map((item, i) => (
      <React.Fragment key={item}>
        {i > 0 && <span className="pm-meta-sep" />}
        <span className="mono pm-meta-item">{item}</span>
      </React.Fragment>
    ))}
  </div>
);

const ArotaroVisual = ({ t }) => (
  <div className="pm-visual-card">
    <div className="pm-mock-header">
      <span className="pm-mock-dot" />
      <span className="mono pm-mock-label">{t("productMarquee.arotaro.mockLabel")}</span>
    </div>
    <div className="pm-mock-body">
      <div className="pm-bubble pm-bubble--user">{t("productMarquee.arotaro.mockUser1")}</div>
      <div className="pm-bubble pm-bubble--ai">{t("productMarquee.arotaro.mockAi1")}</div>
      <div className="pm-bubble pm-bubble--user">{t("productMarquee.arotaro.mockUser2")}</div>
      <div className="pm-typing">
        <span /><span /><span />
      </div>
    </div>
  </div>
);

const BlincVisual = ({ t }) => (
  <div className="pm-visual-card">
    <div className="pm-mock-header">
      <img src="images/blinc-icon.png" alt="" className="pm-mock-icon" width="18" height="18" />
      <span className="mono pm-mock-label">{t("productMarquee.blinc.mockLabel")}</span>
    </div>
    <div className="blinc-card">
      <span className="blinc-card-mark display">{t("productMarquee.blinc.mockCardMark")}</span>
      <div>
        <div className="blinc-card-name">{t("productMarquee.blinc.mockCardName")}</div>
        <div className="mono blinc-card-sub">{t("productMarquee.blinc.mockCardSub")}</div>
      </div>
    </div>
    <div className="blinc-barcode" aria-hidden="true">
      <div className="blinc-bars">
        {BARCODE.map((w, i) => (
          <span key={i} style={{ flexGrow: w, opacity: i % 2 === 0 ? 1 : 0 }} />
        ))}
      </div>
      <div className="mono blinc-digits">4 901234 567894</div>
    </div>
    <div className="blinc-stat">
      <span className="blinc-stat-num display">~60ms</span>
      <span className="blinc-stat-sub">{t("productMarquee.blinc.mockStat")}</span>
    </div>
  </div>
);

const ProductMarquee = () => {
  const { t } = useTranslation();
  return (
    <section className="product-marquee" id="product">
      <div className="container">
        <div className="eyebrow pm-eyebrow">{t("productMarquee.eyebrow")}</div>

        <div className="pm-list">
          <div className="pm-stage">
            <div className="pm-text">
              <h2 className="pm-name display">
                aro<span className="italic-accent">taro</span>
              </h2>
              <p className="pm-tagline">{t("productMarquee.arotaro.tagline")}</p>
              <Meta items={t("productMarquee.arotaro.meta", { returnObjects: true })} />
              <div className="pm-links">
                <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer" className="pm-link link-underline">
                  {t("productMarquee.arotaro.linkLabel")} <span className="arrow">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="pm-visual">
              <div className="pm-visual-glow" />
              <ArotaroVisual t={t} />
            </div>
          </div>

          <div className="pm-stage pm-stage--reverse" id="blinc">
            <div className="pm-text">
              <h2 className="pm-name display">
                Blin<span className="italic-accent">c</span>
              </h2>
              <p className="pm-tagline">{t("productMarquee.blinc.tagline")}</p>
              <Meta items={t("productMarquee.blinc.meta", { returnObjects: true })} />
              <div className="pm-links">
                <a href="https://blinc.metis-ai.io" target="_blank" rel="noopener noreferrer" className="pm-link link-underline">
                  {t("productMarquee.blinc.linkLabel")} <span className="arrow">&rarr;</span>
                </a>
                <a href="https://apps.apple.com/us/app/blinc/id6793009804" target="_blank" rel="noopener noreferrer" className="pm-link pm-link--quiet link-underline">
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.fullybaked.justcards" target="_blank" rel="noopener noreferrer" className="pm-link pm-link--quiet link-underline">
                  Google Play
                </a>
              </div>
            </div>
            <div className="pm-visual">
              <div className="pm-visual-glow" />
              <BlincVisual t={t} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMarquee;
