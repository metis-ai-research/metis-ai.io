import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="footer-logo">
          <span className="footer-logo-image">
            <img src="/images/logo.png" alt="Metis AI logo" />
          </span>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#arotaro">arotaro</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4 className="footer-section-title">Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#team">Our team</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        ©2024 Metis AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
