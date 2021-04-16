import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillList from "./components/SkillList/SkillList";
import SkillListItem from "./components/SkillListItem/SkillListItem";
import ProjectListItem from "./components/ProjectListItem/ProjectListItem";
import { useState, useEffect } from "react";
import { useFetch } from "./components/useFetch";

function App() {
  const projects = useFetch("http://127.0.0.1:8000/api/project-list/");
  const bio = useFetch("http://127.0.0.1:8000/api/bio/");

  var skills = [];
  var tools = [];
  return (
    <Router>
      <NavBar />
      <Route
        path="/"
        exact
        render={(props) => (
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
                    title_href="#"
                    dates={`${project.start_date} to ${project.end_date}`}
                    summary={project.summary}
                    link={project.link}
                  />
                </div>
              );
            })}
          </>
        )}
      />
      <Footer />
    </Router>
  );
}

export default App;
