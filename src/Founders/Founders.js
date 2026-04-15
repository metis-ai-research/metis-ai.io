import React from "react";
import "./Founders.css";

const founders = [
  {
    initial: "S",
    name: "Sarah",
    role: "Design &middot; Co-founder",
    bio: "Experienced designer, formerly at Microsoft, with years of craft building UX that feels effortless.",
  },
  {
    initial: "R",
    name: "Riku",
    role: "Engineering &middot; Co-founder",
    bio: "Ex-Microsoft engineer who lives on the web stack and builds what&rsquo;s best for the people on the other side of the screen.",
  },
  {
    initial: "J",
    name: "Jason",
    role: "Quality &middot; Co-founder",
    bio: "SET veteran from GitLab, Broadcom, and more &mdash; the kind of engineer who makes sure things actually work.",
  },
];

const Founders = () => {
  return (
    <section className="founders" id="team">
      <div className="container">
        <div className="founders-head">
          <div className="eyebrow">04 &mdash; The team</div>
          <h2 className="founders-title display">
            A small studio from Vancouver,
            <br />
            <span className="italic-accent">building the future quietly.</span>
          </h2>
        </div>

        <div className="founders-grid">
          {founders.map((f) => (
            <article key={f.initial} className="founder-card">
              <div className="founder-avatar display">{f.initial}</div>
              <div className="founder-name display">{f.name}</div>
              <div className="mono founder-role" dangerouslySetInnerHTML={{ __html: f.role }} />
              <p className="founder-bio" dangerouslySetInnerHTML={{ __html: f.bio }} />
            </article>
          ))}
        </div>

        <div className="founders-location">
          <span className="mono founders-location-label">HEADQUARTERED</span>
          <span className="founders-location-value">
            Vancouver, British Columbia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Founders;
