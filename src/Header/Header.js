import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header pr-20 pl-20">
      <div className="header-content">
        {/* Company Logo */}
        <div className="header-logo">
          <img
            src="images/header-logo.svg"
            alt="Metis AI Logo"
            className="logo-image"
          />
        </div>

        {/* Contact Us */}
        <nav>
          <a href="mailto:info@metis-ai.io" className="nav-link">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
