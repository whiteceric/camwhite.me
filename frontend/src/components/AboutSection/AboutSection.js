import React from "react";
import PropTypes from "prop-types";
import "./AboutSection.css";

const AboutSection = ({ text }) => (
  <div className="AboutSection">
    <div className="about-row-container">
      <h1 className="about-header">About</h1>
      <p className="about-body">{text}</p>
    </div>
  </div>
);

AboutSection.propTypes = {};

AboutSection.defaultProps = {};

export default AboutSection;
