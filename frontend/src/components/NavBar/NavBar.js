import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar"; // use bootstrap Navbar
import Nav from "react-bootstrap/Nav";

import logo from "../../images/logo.png";

const NavBar = () => (
  <div className="NavBar">
    <Navbar className="navbar-custom-bg" variant="dark" stick="top" expand="lg">
      <Navbar.Brand href="#home">
        <img alt="" src={logo} className="logo d-inline-block align-top" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="navbar-link-item" href="#home">
          Resume
        </Nav.Link>
        <Nav.Link className="navbar-link-item" href="#features">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
