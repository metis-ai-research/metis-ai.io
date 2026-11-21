import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, External, Apple, Play, Back } from "../Icons";
import { useInView, useReducedMotion } from "../motion";
import "./ProductMarquee.css";

/* ---------------- arotaro: a conversation that plays in ---------------- */

// Step timeline (ms after the panel scrolls into view). Each step reveals one
// more line of the conversation, ending on arotaro's second reply.
const AROTARO_STEPS = [0, 700, 2000, 3300, 4100, 5600];

const ArotaroDemo = () => {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const [ref, inView] = useInView({ threshold: 0.45 });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setStep(AROTARO_STEPS.length);
      return undefined;
    }
    const timers = AROTARO_STEPS.map((ms, i) => setTimeout(() => setStep(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  const k = (key) => t(`products.arotaro.${key}`);
  const typing = step === 2 || step === 5;

  return (
    <div className="demo demo--chat" ref={ref} role="group" aria-label={k("demoLabel")}>
      <div className="demo-bar">
        <span className="chat-avatar" aria-hidden="true">
          <svg viewBox="0 0 20 20" width="14" height="14"><path fill="currentColor" d="M10 2.5 11.6 8.4 17.5 10l-5.9 1.6L10 17.5l-1.6-5.9L2.5 10l5.9-1.6Z" /></svg>
        </span>
        <span className="demo-bar-title">{k("demoTitle")}</span>
        <span className="demo-sample">{k("sample")}</span>
        <span className="chat-status">{k("demoStatus")}</span>
      </div>
      <div className="chat-body">
        {step >= 1 && <p className="msg msg--user">{k("mockUser1")}</p>}
        {step >= 3 && <p className="msg msg--ai">{k("mockAi1")}</p>}
        {step >= 4 && <p className="msg msg--user">{k("mockUser2")}</p>}
        {step >= 6 && <p className="msg msg--ai">{k("mockAi2")}</p>}
        {typing && (
          <p className="msg msg--ai msg--typing" aria-label={k("typing")}>
            <span /><span /><span />
          </p>
        )}
      </div>
    </div>
  );
};

/* ---------------- Blinc: tap a card, get the barcode ---------------- */

// Bar widths for the sample barcodes (1 = thin, 3 = thick). Fixed rather than
// random so the demo renders identically on every load.
const BARS = [2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1, 1, 3, 2];
const CARD_TINTS = ["#F3B95F", "#86A6FB", "#5FD3A8"];

const Barcode = ({ seed }) => (
  <div className="barcode-bars" aria-hidden="true">
    {BARS.map((_, i) => {
      const w = BARS[(i + seed * 7) % BARS.length];
      return <span key={i} style={{ flexGrow: w, opacity: i % 2 === 0 ? 1 : 0 }} />;
    })}
  </div>
);

const BlincDemo = () => {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const cards = t("products.blinc.cards", { returnObjects: true });
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [open, setOpen] = useState(null);
  const [origin, setOrigin] = useState(null);
  const touched = useRef(false);
  const listRef = useRef(null);
  const backRef = useRef(null);
  const cardRefs = useRef([]);

  const openCard = (i, fromUser) => {
    if (fromUser) touched.current = true;
    const screen = listRef.current;
    const card = cardRefs.current[i];
    if (screen && card) {
      const s = screen.getBoundingClientRect();
      const c = card.getBoundingClientRect();
      setOrigin({ top: c.top - s.top, bottom: s.bottom - c.bottom, left: c.left - s.left, right: s.right - c.right });
    }
    setOpen(i);
  };

  const close = () => {
    touched.current = true;
    const i = open;
    setOpen(null);
    requestAnimationFrame(() => cardRefs.current[i] && cardRefs.current[i].focus());
  };

  // Demonstrate once: shortly after the phone scrolls into view, tap the first card.
  useEffect(() => {
    if (!inView) return undefined;
    const id = setTimeout(() => !touched.current && openCard(0, false), reduced ? 0 : 1100);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced]);

  useLayoutEffect(() => {
    if (open !== null && touched.current && backRef.current) backRef.current.focus();
  }, [open]);

  const card = open !== null ? cards[open] : null;
  const style = origin
    ? { "--o-top": `${origin.top}px`, "--o-bottom": `${origin.bottom}px`, "--o-left": `${origin.left}px`, "--o-right": `${origin.right}px` }
    : undefined;

  return (
    <div className="demo demo--phone" ref={ref} role="group" aria-label={t("products.blinc.demoLabel")}>
      <div className="phone-screen" ref={listRef}>
        <div className="phone-head">
          <img src="images/blinc-icon.png" alt="" width="22" height="22" />
          <span className="demo-bar-title">Blinc</span>
          <span className="phone-hint">{t("products.blinc.demoHint")}</span>
        </div>
        <p className="demo-sample demo-sample--phone">{t("products.blinc.sample")}</p>
        <ul className="wallet">
          {cards.map((c, i) => (
            <li key={c.name}>
              <button
                type="button"
                ref={(el) => (cardRefs.current[i] = el)}
                className="wallet-card"
                style={{ "--tint": CARD_TINTS[i % CARD_TINTS.length], "--i": i }}
                onClick={() => openCard(i, true)}
                aria-expanded={open === i}
                tabIndex={open === null ? 0 : -1}
              >
                <span className="wallet-mark" aria-hidden="true">{c.mark}</span>
                <span className="wallet-text">
                  <span className="wallet-name">{c.name}</span>
                  <span className="wallet-kind">{c.kind}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {card && (
          <div
            key={open}
            className={`scan ${reduced ? "scan--still" : ""}`}
            style={{ ...style, "--tint": CARD_TINTS[open % CARD_TINTS.length] }}
            role="region"
            aria-label={card.name}
          >
            <div className="scan-top">
              <button type="button" ref={backRef} className="scan-back" onClick={close} aria-label={t("products.blinc.back")}>
                <Back size={18} />
              </button>
              <span className="wallet-mark" aria-hidden="true">{card.mark}</span>
              <span className="wallet-name">{card.name}</span>
              <span className="demo-sample scan-sample">{t("products.arotaro.sample")}</span>
            </div>
            <div className="scan-code">
              <Barcode seed={open} />
              <div className="barcode-digits">{card.digits}</div>
            </div>
            <p className="scan-stat">{t("products.blinc.stat")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- Section ---------------- */

const Facts = ({ items }) => (
  <ul className="pm-facts">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ProductMarquee = () => {
  const { t } = useTranslation();
  return (
    <section className="section pm" id="product" aria-labelledby="pm-title">
      <div className="container">
        <header className="pm-head">
          <h2 id="pm-title" className="h-section reveal">{t("products.heading")}</h2>
          <p className="lead reveal" style={{ "--d": "100ms" }}>{t("products.sub")}</p>
        </header>

        <article className="pm-row" aria-labelledby="arotaro-name">
          <div className="pm-text reveal">
            <h3 id="arotaro-name" className="pm-name">arotaro</h3>
            <p className="pm-tagline">{t("products.arotaro.tagline")}</p>
            <Facts items={t("products.arotaro.facts", { returnObjects: true })} />
            <div className="pm-links">
              <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer" className="text-link">
                <span>{t("products.arotaro.linkLabel")}</span> <ArrowRight />
              </a>
            </div>
          </div>
          <div className="pm-visual reveal" style={{ "--d": "120ms" }}>
            <ArotaroDemo />
          </div>
        </article>

        <article className="pm-row pm-row--reverse" id="blinc" aria-labelledby="blinc-name">
          <div className="pm-text reveal">
            <h3 id="blinc-name" className="pm-name">Blinc</h3>
            <p className="pm-tagline">{t("products.blinc.tagline")}</p>
            <Facts items={t("products.blinc.facts", { returnObjects: true })} />
            <div className="pm-links">
              <a href="https://blinc.metis-ai.io" target="_blank" rel="noopener noreferrer" className="text-link">
                <span>{t("products.blinc.linkLabel")}</span> <ArrowRight />
              </a>
              <a href="https://apps.apple.com/us/app/blinc/id6793009804" target="_blank" rel="noopener noreferrer" className="text-link text-link--quiet">
                <Apple /> <span>{t("products.blinc.appStore")}</span> <External size={14} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.fullybaked.justcards" target="_blank" rel="noopener noreferrer" className="text-link text-link--quiet">
                <Play /> <span>{t("products.blinc.googlePlay")}</span> <External size={14} />
              </a>
            </div>
          </div>
          <div className="pm-visual reveal" style={{ "--d": "120ms" }}>
            <BlincDemo />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductMarquee;
