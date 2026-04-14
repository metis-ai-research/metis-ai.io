import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="footer-logo">
          <span className="footer-logo-image">
            <img src="images/logo.png" alt="Metis AI logo" />
          </span>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer">arotaro</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#team" target="_blank" rel="noopener noreferrer">Our team</a>
            </li>
            <li>
              <a href="mailto:info@metis-ai.io">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy;2024 Metis AI Research Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
