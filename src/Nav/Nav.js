import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import "./Nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <Logo variant="dark" width={96} height={28} />
        </a>

        <div className="nav-links">
          <a href="#product" className="nav-link">Product</a>
          <a href="#vision" className="nav-link">Vision</a>
          <a href="#team" className="nav-link">Team</a>
        </div>

        <a href="mailto:info@metis-ai.io" className="nav-cta">
          Contact <span>&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
