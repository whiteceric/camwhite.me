import React from "react";
import "./SkillList.css";
import SkillListItem from "../SkillListItem/SkillListItem";

const SkillList = ({ title, list_side, skills }) => {
  const skill_items = Object.entries(skills).map((entry) => {
    const [title, text] = entry;
    return (
      <div key={title}>
        <SkillListItem title={title} text={text} />
      </div>
    );
  });
  return (
    <div className="SkillList">
      {list_side === "left" ? (
        <div className="list-row-container left">
          <div className="list-items">{skill_items}</div>
          <h1 className="list-header">{title}</h1>
        </div>
      ) : (
        <div className="list-row-container right">
          <h1 className="list-header">{title}</h1>
          <div className="list-items">{skill_items}</div>
        </div>
      )}
    </div>
  );
};

SkillList.propTypes = {};

SkillList.defaultProps = {};

export default SkillList;
