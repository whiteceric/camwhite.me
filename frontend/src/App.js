import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillList from "./components/SkillList/SkillList";
import Contact from "./components/Contact/Contact";
import ProjectListItem from "./components/ProjectListItem/ProjectListItem";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import { useFetch } from "./components/useFetch";
import { formatDate } from "./components/formatDate";

function App() {
  const projects = useFetch("api/project-list/");
  const bio = useFetch("api/bio/");
  console.log(bio);

  const options = { year: "numeric", month: "long", day: "numeric" };

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
        )}
      />
      <Route path="/contact" exact render={(props) => <Contact />} />
      <Route path="/project/:slugified_title" children={<ProjectDetail />} />
      <Footer />
    </Router>
  );
}

export default App;
