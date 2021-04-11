import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar"; // use bootstrap Navbar
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import logo from "../../logo.png";

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
