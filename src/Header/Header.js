import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Company Logo */}
      <div className="header-logo">
        <img
          src="images/brandmark.svg"
          alt="Metis AI Logo"
          className="logo-image"
        />
        <span className="logo-text">metis ai</span>
      </div>

      {/* Contact Us */}
      <nav>
        <a href="mailto:contact@metisai.com" className="nav-link">
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
