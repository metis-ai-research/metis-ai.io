import React from "react";
import "./ProductMarquee.css";

const ProductMarquee = () => {
  return (
    <section className="product-marquee" id="product">
      <div className="container">
        <div className="eyebrow pm-eyebrow">02 &mdash; What we&rsquo;re building</div>

        <div className="pm-stage">
          <div className="pm-text">
            <h2 className="pm-name display">
              aro<span className="italic-accent">taro</span>
            </h2>
            <p className="pm-tagline">
              A mental wellness companion &mdash; tarot, astrology, and fortune
              telling in a safe space to talk through whatever&rsquo;s on your
              mind. Counselling at your fingertips, 24/7.
            </p>

            <div className="pm-meta">
              <span className="mono pm-meta-item">MENTAL WELLNESS</span>
              <span className="pm-meta-sep" />
              <span className="mono pm-meta-item">TAROT &middot; ASTROLOGY</span>
              <span className="pm-meta-sep" />
              <span className="mono pm-meta-item">24/7</span>
            </div>

            <a
              href="https://arotaro.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-link link-underline"
            >
              Visit arotaro.ai <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="pm-visual">
            <div className="pm-visual-glow" />
            <div className="pm-visual-card">
              <div className="pm-mock-header">
                <span className="pm-mock-dot" />
                <span className="mono pm-mock-label">arotaro &middot; live</span>
              </div>
              <div className="pm-mock-body">
                <div className="pm-bubble pm-bubble--user">
                  I&rsquo;ve been feeling stuck lately. Can you pull a card?
                </div>
                <div className="pm-bubble pm-bubble--ai">
                  Of course. Take a breath &mdash; I drew The Star for you.
                  It&rsquo;s a sign of quiet hope after a hard stretch. What
                  feels heaviest right now?
                </div>
                <div className="pm-bubble pm-bubble--user">
                  Work. I can&rsquo;t tell if I&rsquo;m burnt out or just lost.
                </div>
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
