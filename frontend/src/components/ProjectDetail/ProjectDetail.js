import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./ProjectDetail.css";

// function to load a given component from the ProjectDetail directory dynamically
const importDetail = (slugified_name) =>
  lazy(() =>
    import(`./${slugified_name}`).catch(() => import("./nullDetailView"))
  );

const ProjectDetail = () => {
  const { slugified_title } = useParams();
  const project = useFetch(
    `http://127.0.0.1:8000/api/project/${slugified_title}`
  );
  console.log(project);
  const DetailComponent = importDetail(project.slugified_name);

  return (
    <div className="ProjectDetail">
      <div className="project-detail-header">
        <h1 className="section-title">{project.title}</h1>
        <div className="project-detail-header-centered">
          <small>Start: {project.start_date}</small>
          <br />
          <small>Initial Deliverable/Beta: {project.end_date}</small>
          {project.link !== "" ? (
            <a target="_blank" rel="noreferrer" href={project.link}>
              <p className="project-detail-link-text">Link</p>
            </a>
          ) : (
            <></>
          )}
        </div>
        <p className="project-detail-summary">{project.summary}</p>
      </div>
      <hr />
      <React.Suspense fallback="Loading...">
        <DetailComponent />
      </React.Suspense>
    </div>
  );
};

ProjectDetail.propTypes = {};

ProjectDetail.defaultProps = {};

export default ProjectDetail;
