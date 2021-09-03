import "./ResumePage.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutSection from "../AboutSection/AboutSection";
import SkillList from "../SkillList/SkillList";
import Contact from "../Contact/Contact";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { useFetch } from "../useFetch";
import { formatDate } from "../formatDate";

const ResumePage = () => {
  const projects = useFetch("api/project-list/");
  const bio = useFetch("api/bio/");
  console.log(bio);

  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <Header />
      <AboutSection text={bio.ABOUT} />
      <SkillList
        title="Skills"
        list_side="left"
        skills={bio.SKILLS != null ? bio.SKILLS : []}
      />
      <SkillList
        title="Tools"
        list_side="right"
        skills={bio.TOOLS != null ? bio.TOOLS : []}
      />
      <h1 className="section-title">Projects</h1>
      {projects.map(function (project, index) {
        return (
          <div key={index}>
            <ProjectListItem
              title={project.title}
              title_href={`/project/${project.slugified_name}`}
              dates={
                formatDate(project.start_date) +
                " to " +
                formatDate(project.end_date)
              }
              summary={project.summary}
              link={project.link}
            />
          </div>
        );
      })}
    </>
  );
};

ResumePage.propTypes = {};

ResumePage.defaultProps = {};

export default ResumePage;
