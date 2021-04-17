import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="Contact">
    <h1 className="section-title">Contact Me</h1>
    <hr />
    <h2 className="contact-link-title">
      Email - <a href="mailto:whiteceric@gmail.com">whiteceric@gmail.com</a>
    </h2>
    <h2 className="contact-link-title">
      Twitter -{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/camwhite271"
      >
        @camwhite271
      </a>
    </h2>
    <h2 className="contact-link-title">
      LinkedIn -{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/camwhite1301/"
      >
        camwhite1301
      </a>
    </h2>
    <h2 className="contact-link-title">
      GitHub -{" "}
      <a target="_blank" rel="noreferrer" href="https://github.com/whiteceric">
        whiteceric
      </a>
    </h2>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
