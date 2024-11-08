import React from "react";
import Badge from "../Badge/Badge";
import "./Solution.css";

const Solution = () => {
  return (
    <div className="solution-container">
      <div className="solution-content">
        {/* Title */}
        <Badge
          label="Why Choose Metis AI"
        />
        <h2 className="solution-title">Your Ultimate AI Solution</h2>
        <p className="solution-description">
          At Metis AI Solutions, we are more than just a technology company — we
          are <br /> a partner in innovation. Here’s why you should trust us
          with your next project:
        </p>

        {/* Features */}
        <div className="solution-features">
          {/* Feature 1 */}
          <div className="solution-feature">
            <div className="text-left">
              <h6 className="feature-title">AI-Driven Innovation</h6>
              <p className="feature-description">
                Our cutting-edge AI adapts to your needs, delivering solutions
                that grow with you, helping you meet today’s goals, and keeping
                you ready for tomorrow’s challenges.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="solution-feature">
            <div className="text-left">
              <h4 className="feature-title">Personalized Solutions</h4>
              <p className="feature-description">
                Every product we create is customized to meet your unique
                requirements—whether for education, productivity, or well-being—
                ensuring tailored experiences that work for you.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="solution-feature">
            <div className="text-left">
              <h4 className="feature-title">Microsoft-Supported</h4>
              <p className="feature-description">
                As part of the Microsoft for Startups Founders Hub, we have
                access to world-class technology and resources, empowering us to
                build with excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
