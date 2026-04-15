import React from "react";
import "./Manifesto.css";

const principles = [
  {
    n: "01",
    title: "AI should feel inevitable, not impressive.",
    body: "The best technology disappears. We don't build demos for the AI era — we build products that feel obvious in hindsight, the kind you can't imagine living without a month after using them.",
  },
  {
    n: "02",
    title: "Personalization is a craft, not a feature.",
    body: "Every product we create is shaped to your actual life — whether for learning, productivity, or wellbeing. Generic AI is loud; personal AI is quiet and precise. We choose precision.",
  },
  {
    n: "03",
    title: "Small teams with strong taste outperform big teams with big budgets.",
    body: "We are a small team, supported by Microsoft for Startups Founders Hub, building with focus and conviction. The future belongs to teams that care about details other people skip.",
  },
];

const Manifesto = () => {
  return (
    <section className="manifesto">
      <div className="container">
        <div className="eyebrow manifesto-eyebrow">03 &mdash; How we think</div>

        <div className="manifesto-list">
          {principles.map((p) => (
            <article key={p.n} className="principle">
              <div className="principle-number mono">{p.n}</div>
              <div className="principle-content">
                <h3 className="principle-title display">{p.title}</h3>
                <p className="principle-body">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
