import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="services-badge">Our Services</div>

          {/* The Future of AI-Powered Personal Assistance */}
          <h1 className="services-title">
            The Future of AI-Powered Personal Assistance.
          </h1>

          {/* Our innovative solutions... */}
          <p className="services-description">
            Our innovative solutions, powered by advanced AI, are here to
            enhance your everyday life. The launch of our new AI companion app
            is just the beginning!
          </p>

          {/* Contact Us Button */}
          <button className="contact-button">Contact Us</button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="images/ai-image.png"
            alt="AI Assistance"
            className="services-image w-full h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
