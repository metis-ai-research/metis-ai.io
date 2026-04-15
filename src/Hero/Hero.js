import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="eyebrow hero-eyebrow">
          <span className="signal-dot" /> VANCOUVER &middot; AI RESEARCH
        </div>

        <h1 className="display hero-title">
          Intelligence,
          <br />
          <em>quietly delivered</em> to
          <br />
          everyday life.
        </h1>

        <p className="hero-sub">
          A Vancouver-based AI research studio building products
          that make ordinary moments better.
        </p>

        <div className="hero-cta-row">
          <a href="mailto:info@metis-ai.io" className="hero-cta-primary">
            Get in touch <span>&rarr;</span>
          </a>
          <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer" className="hero-cta-secondary link-underline">
            See arotaro &mdash; our first product &rarr;
          </a>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="hero-spectrum">
            {[
              { c: "#0B1957", n: "MIDNIGHT" },
              { c: "#13288F", n: "INDIGO" },
              { c: "#1A3EF3", n: "SIGNAL" },
              { c: "#438DF1", n: "SKY" },
              { c: "#7AAFF7", n: "MIST" },
            ].map((s) => (
              <div key={s.c} className="hero-spec-cell">
                <div className="hero-spec-chip" style={{ background: s.c }} />
                <div className="hero-spec-name mono">{s.n}</div>
                <div className="hero-spec-hex mono">{s.c}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
