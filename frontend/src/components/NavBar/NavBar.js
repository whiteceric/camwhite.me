import React from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo_3.png";
import resume_pdf from "../../static/resume.pdf";

const NavBar = (link_pdf_resume) => {
  const openResume = () => {
    window.open(resume_pdf);
  };
  const location = useLocation();
  if (location.pathname == "/") {
    return null;
  }
  return (
    <div className="NavBar">
      <Link to="/">
        <img alt="" src={logo} className="logo" />
      </Link>
      <div className="navbar-links">
        {location.pathname == "/resume" ? (
          <button className="navbar-link-item" onClick={openResume}>
            Resume (PDF)
          </button>
        ) : (
          <Link className="navbar-link-item" to="/resume">
            Resume
          </Link>
        )}
        <Link className="navbar-link-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
