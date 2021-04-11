import React from "react";
import PropTypes from "prop-types";
import "./SkillList.css";
import SkillListItem from "../SkillListItem/SkillListItem";

const SkillList = ({ title, list_side, skills }) => (
  <div className="SkillList">
    {list_side == "left" ? (
      <div className="list-row-container left">
        <div className="list-items">{skills}</div>
        <h1 className="list-header">{title}</h1>
      </div>
    ) : (
      <div className="list-row-container right">
        <h1 className="list-header">{title}</h1>
        <div className="list-items">{skills}</div>
      </div>
    )}
  </div>
);

SkillList.propTypes = {};

SkillList.defaultProps = {};

export default SkillList;
