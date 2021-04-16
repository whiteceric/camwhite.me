import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./ProjectListItem.css";

const ProjectListItem = ({ title, title_href, dates, summary, link }) => (
  <Link className="project-item-link" to={title_href}>
    <div className="ProjectListItem">
      <div className="project-item-top-row">
        <h1 className="project-title">{title}</h1>
        <small className="dates-text">{dates}</small>
      </div>
      <p className="summary-text">{summary}</p>
    </div>
  </Link>
);

ProjectListItem.propTypes = {};

ProjectListItem.defaultProps = {};

export default ProjectListItem;
