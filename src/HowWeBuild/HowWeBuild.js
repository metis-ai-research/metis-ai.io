import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "../Icons";
import { useInView, useReducedMotion } from "../motion";
import "./HowWeBuild.css";

// Metis OS is internal and sign-in only, so it is presented as how we work:
// no link, and no architecture detail beyond what a visitor needs.

const STEP_MS = 1100;

const ApprovalFlow = () => {
  const { t } = useTranslation();
  const steps = t("howWeBuild.flow", { returnObjects: true });
  const reduced = useReducedMotion();
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [active, setActive] = useState(-1);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setActive(steps.length - 1);
      return undefined;
    }
    setActive(-1);
    const timers = steps.map((_, i) => setTimeout(() => setActive(i), 250 + i * STEP_MS));
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced, run, steps.length]);

  const fill = active < 0 ? 0 : active / (steps.length - 1);

  return (
    <div className={`flow ${reduced ? "flow--still" : ""}`} ref={ref} style={{ "--fill": fill }}>
      <div className="flow-head">
        <h3 className="flow-label">{t("howWeBuild.flowLabel")}</h3>
        {!reduced && (
          <button type="button" className="flow-replay" onClick={() => setRun((r) => r + 1)}>
            {t("howWeBuild.replay")}
          </button>
        )}
      </div>
      <ol className="flow-track">
        {steps.map((s, i) => {
          const state = i < active ? "done" : i === active ? "active" : "todo";
          return (
            <li key={s.title} className={`flow-step flow-step--${state} ${i === 2 ? "flow-step--gate" : ""}`}>
              <span className="flow-marker" aria-hidden="true">
                {state === "done" || (state === "active" && i === steps.length - 1) ? <Check size={14} /> : <span className="flow-dot" />}
              </span>
              <span className="flow-title">{s.title}</span>
              <span className="flow-body">{s.body}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const HowWeBuild = () => {
  const { t } = useTranslation();
  const pillars = t("howWeBuild.pillars", { returnObjects: true });

  return (
    <section className="section how" id="how" aria-labelledby="how-title">
      <div className="container">
        <div className="how-intro">
          <h2 id="how-title" className="h-section reveal">{t("howWeBuild.heading")}</h2>
          <div className="how-copy">
            <p className="reveal" style={{ "--d": "120ms" }}>{t("howWeBuild.body1")}</p>
            <p className="reveal" style={{ "--d": "180ms" }}>{t("howWeBuild.body2")}</p>
          </div>
        </div>

        <div className="reveal">
          <ApprovalFlow />
        </div>

        <ul className="how-pillars">
          {pillars.map((p, i) => (
            <li key={p.title} className="how-pillar reveal" style={{ "--d": `${i * 80}ms` }}>
              <h3 className="how-pillar-title">{p.title}</h3>
              <p className="how-pillar-body">{p.body}</p>
            </li>
          ))}
        </ul>

        <p className="how-note">{t("howWeBuild.note")}</p>
      </div>
    </section>
  );
};

export default HowWeBuild;
