import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who" id="vision">
      <div className="container who-grid">
        <div className="who-left">
          <div className="eyebrow who-eyebrow">01 &mdash; Who we are</div>
          <blockquote className="who-quote display">
            We believe AI&rsquo;s highest purpose is
            <span className="italic-accent"> making ordinary moments better</span>.
          </blockquote>
        </div>

        <div className="who-right">
          <p className="who-body">
            Metis AI Research was founded in Vancouver on the belief that the
            AI era demands companies that build with care. Our mission is to
            revolutionize how people live and work through innovative,
            AI-powered solutions.
          </p>
          <p className="who-body">
            Whether it&rsquo;s personalized learning, intelligent assistants, or
            tools that simplify complex tasks, we focus on creating seamless
            experiences that elevate daily interactions &mdash; and stay out of
            the way when they should.
          </p>
          <p className="who-body">
            We believe in the transformative potential of AI to positively
            impact every aspect of life, and we&rsquo;re building quietly
            toward that future.
          </p>

          <div className="who-signature">
            <span className="mono who-sig-label">SIGNED</span>
            <span className="who-sig-names display">
              The Metis team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
