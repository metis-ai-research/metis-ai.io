import React from "react";
import { useTranslation } from "react-i18next";
import "./HowWeBuild.css";

// Metis OS — our internal operating system. It is sign-in-only (metis-ai.io Workspace
// accounts), so it is presented as how we work, not as a product: no link, and no
// architecture detail beyond what a visitor needs to understand the idea.
const HowWeBuild = () => {
  const { t } = useTranslation();
  const pillars = t("howWeBuild.pillars", { returnObjects: true });

  return (
    <section className="how" id="how">
      <div className="container">
        <div className="eyebrow how-eyebrow">{t("howWeBuild.eyebrow")}</div>

        <div className="how-grid">
          <div className="how-left">
            <div className="mono how-name">
              <span className="signal-dot" /> {t("howWeBuild.name")}
            </div>
            <h2 className="how-title display">
              {t("howWeBuild.titleLine1")}
              <br />
              <span className="italic-accent">{t("howWeBuild.titleLine2Em")}</span>
            </h2>
          </div>

          <div className="how-right">
            <p className="how-body">{t("howWeBuild.body1")}</p>
            <p className="how-body">{t("howWeBuild.body2")}</p>
          </div>
        </div>

        <figure className="how-shot">
          <div className="how-shot-glow" aria-hidden="true" />
          <div className="how-shot-frame">
            <img
              src="images/metis-os.png"
              alt={t("howWeBuild.shotAlt")}
              width="1492"
              height="897"
              loading="lazy"
            />
          </div>
          <figcaption className="mono how-shot-caption">{t("howWeBuild.shotCaption")}</figcaption>
        </figure>

        <div className="how-pillars">
          {pillars.map((p) => (
            <article key={p.title} className="how-pillar">
              <h3 className="how-pillar-title display">{p.title}</h3>
              <p className="how-pillar-body">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mono how-meta">{t("howWeBuild.meta")}</div>
      </div>
    </section>
  );
};

export default HowWeBuild;
