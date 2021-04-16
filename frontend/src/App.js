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

function App() {
  const [projects, setProjects] = useState([]);

  var text =
    "I'm a computer science student at MIT looking for a software engineering internship. My passions (besides coding) include writing, economics, teaching, and music. I believe in the power of discipline and I try to live a life guided by it.";

  // Create Skill List item components
  var skills = [
    SkillListItem({
      title: "Java",
      text:
        "Native language, 5+ years of experience. See more under 'Projects'",
    }),
    SkillListItem({
      title: "Python",
      text: "The most fun, used daily (this website was made with Python).",
    }),
    SkillListItem({
      title: "Web Development",
      text: "Experience with the Django (Python) framework, HTML and CSS",
    }),
  ];

  var tools = [
    SkillListItem({
      title: "Git",
      text: "Used for version control in all software projects.",
    }),
    SkillListItem({
      title: "Xcode",
      text: "Used in iOS Development.",
    }),
    SkillListItem({
      title: "Unix Terminal",
      text: "Used to access remote servers.",
    }),
  ];

  function fetchProjects() {
    console.log("Fetching...");

    fetch("http://127.0.0.1:8000/api/project-list/")
      .then((response) => response.json())
      .then((data) => setProjects(data));
    console.log(projects);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Router>
      <NavBar />
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            <Header />
            <AboutSection text={text} />
            <SkillList title="Skills" list_side="left" skills={skills} />
            <SkillList title="Tools I Use" list_side="right" skills={tools} />
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
