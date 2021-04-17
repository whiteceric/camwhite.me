import React from "react";
import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap"; // use bootstrap Navbar;
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import resume_pdf from "../../static/resume.pdf";

const NavBar = () => {
  const openResume = () => {
    window.open(resume_pdf);
  };
  return (
    <div className="NavBar">
      <Navbar
        className="navbar-custom-bg"
        variant="dark"
        stick="top"
        expand="lg"
      >
        <Navbar.Brand>
          <Link to="/">
            <img alt="" src={logo} className="logo d-inline-block align-top" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <button className="navbar-link-item" onClick={openResume}>
              Resume
            </button>
          </Nav.Link>
          <Nav.Link>
            <Link className="navbar-link-item" to="/contact">
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
