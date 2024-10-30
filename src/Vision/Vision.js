import React from "react";
import "./Vision.css";

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-content">
        {/* Left Section: Images */}
        <div className="vision-images">
          <img src="images/robot.png" alt="Robot" className="vision-image" />
        </div>

        {/* Right Section: Text */}
        <div className="vision-text">
          <div className="vision-badge">Our Vision</div>
          <h1 className="vision-title">Enhancing Everyday Life Through AI</h1>
          <p className="vision-description">
            Our vision is to revolutionize how people live and work by
            delivering innovative, AI-powered solutions. Whether it’s
            personalized learning, intelligent assistants, or advanced tools
            that simplify complex tasks, we focus on creating seamless
            experiences that elevate daily interactions.
          </p>
          <p className="vision-description">
            At Metis AI, we believe in the transformative potential of AI to
            positively impact every aspect of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
