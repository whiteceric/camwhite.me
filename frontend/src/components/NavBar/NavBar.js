import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import resume_pdf from "../../static/resume.pdf";

const NavBar = () => {
  const openResume = () => {
    window.open(resume_pdf);
  };
  return (
    <div className="NavBar">
      <Link to="/">
        <img alt="" src={logo} className="logo" />
      </Link>
      <div className="navbar-links">
        <button className="navbar-link-item" onClick={openResume}>
          Resume
        </button>
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
