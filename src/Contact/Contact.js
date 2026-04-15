import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="eyebrow contact-eyebrow">05 &mdash; Work with us</div>

        <h2 className="contact-title display">
          Have an idea, a partnership,
          <br />
          or just want to <span className="contact-italic">say hi?</span>
        </h2>

        <a href="mailto:info@metis-ai.io" className="contact-email">
          info@metis-ai.io
          <span className="arrow">&rarr;</span>
        </a>

        <div className="contact-footer-row">
          <span className="mono contact-meta">
            <span className="signal-dot" /> CURRENTLY OPEN TO CONVERSATIONS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
