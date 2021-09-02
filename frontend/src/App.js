import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillList from "./components/SkillList/SkillList";
import Contact from "./components/Contact/Contact";
import ResumePage from "./components/ResumePage/ResumePage";
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
      <Route path="/" exact render={(props) => <h1>Home Page</h1>} />
      <Route path="/resume" exact render={(props) => <ResumePage />} />
      <Route path="/contact" exact render={(props) => <Contact />} />
      <Route path="/project/:slugified_title" children={<ProjectDetail />} />
      <Footer />
    </Router>
  );
}

export default App;
