import React from "react";
import PropTypes from "prop-types";
import "./SkillListItem.css";
import { useState } from "react";

// {open ? <p className="skill-text">{text}</p> : <p></p>}
const SkillListItem = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="SkillListItem"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <h1>{title}</h1>
      <p className="skill-text">{text}</p>
    </div>
  );
};

SkillListItem.propTypes = {};

SkillListItem.defaultProps = {};

export default SkillListItem;
