import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="Footer">
      <div className="footer-link-container">
        <div onClick={scrollToTop}>
          <small className="footer-link-text">Back to Top</small>
        </div>
        <Link to="/">
          <small className="footer-link-text">Home</small>
        </Link>
        <Link to="/contact">
          <small className="footer-link-text">Contact</small>
        </Link>
      </div>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
