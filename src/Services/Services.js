import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container dot-grid">
      <div className="services-content">
        {/* Left Section: Text */}
        <div className="services-text">
          <div className="services-badge">Our Services</div>

          <h1 className="services-title">
            The Future of AI-Powered Personal Assistance.
          </h1>

          <p className="services-description">
            Our innovative solutions, powered by advanced AI, are here to
            enhance your everyday life. The launch of our new AI companion app
            is just the beginning!
          </p>

          <div className="services-cta-row">
            <button
              className="contact-button"
              onClick={() => window.location.href = 'mailto:info@metis-ai.io'}
            >
              Contact Us
            </button>
            <a href="#solutions" className="services-learn-more">
              Learn more <span className="learn-more-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="services-image-wrapper">
          <div className="services-image-glow"></div>
          <img
            src="images/ai-image.png"
            alt="AI Assistance"
            className="services-image animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
