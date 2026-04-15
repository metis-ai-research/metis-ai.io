import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-row">
        <a href="#top" className="footer-mark" aria-label="Metis">
          <Logo variant="dark" markOnly width={22} height={35} />
        </a>

        <div className="footer-links">
          <a href="https://arotaro.ai" target="_blank" rel="noopener noreferrer" className="link-underline">arotaro</a>
          <a href="#team" className="link-underline">team</a>
          <a href="mailto:info@metis-ai.io" className="link-underline">contact</a>
        </div>

        <div className="mono footer-meta">
          Vancouver, BC &middot; &copy; {year}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
