import React from "react";
import PropTypes from "prop-types";
import "./SkillListItem.css";
import { useState } from "react";

// {open ? <p className="skill-text">{text}</p> : <p></p>}
const SkillListItem = ({ title, text }) => (
  <div className="SkillListItem">
    <h1>{title}</h1>
    <p className="skill-text">{text}</p>
  </div>
);

SkillListItem.propTypes = {};

SkillListItem.defaultProps = {};

export default SkillListItem;
