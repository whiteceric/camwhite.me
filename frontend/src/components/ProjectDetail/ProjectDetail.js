import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { formatDate } from "../formatDate";
import "./ProjectDetail.css";

// function to load a given component from the ProjectDetail directory dynamically
const importDetail = (slugified_name) =>
  lazy(() =>
    import(`./${slugified_name}`).catch(() => import("./nullDetailView"))
  );

const ProjectDetail = () => {
  const { slugified_title } = useParams();
  // fetch the project json from backend api
  const project = useFetch(`api/project/${slugified_title}`);
  console.log(project);

  // for date conversion
  const options = { year: "numeric", month: "long", day: "numeric" };

  const DetailComponent = importDetail(project.slugified_name);

  return (
    <div className="ProjectDetail">
      <div className="project-detail-header">
        <h1 className="section-title">{project.title}</h1>
        <div className="project-detail-header-centered">
          <small>
            Start: {project.start_date ? formatDate(project.start_date) : ""}
          </small>
          <br />
          <small>
            Initial Deliverable:{" "}
            {project.end_date ? formatDate(project.end_date) : ""}
          </small>
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
