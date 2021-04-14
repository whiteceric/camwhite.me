import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillList from "./components/SkillList/SkillList";
import SkillListItem from "./components/SkillListItem/SkillListItem";
import ProjectListItem from "./components/ProjectListItem/ProjectListItem";

function App() {
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

  var projects = [
    ProjectListItem({
      title: "camwhite.me",
      title_href: "camwhite.me",
      dates: "february 25, 2021 - february 27, 2021",
      summary: { summary },
      link: "camwhite.me",
      summary:
        '(this website!) a personal resume-type website for recording projects and tracking skills/tools i\'ve learned. back-end written in python using django framework. "projects" database managed with sqlite3. front-end developed with html and css. site is deployed on a remote linux server running ubuntu and managed with ssh. git used for version control.',
    }),
    ProjectListItem({
      title: "camwhite.me",
      title_href: "camwhite.me",
      dates: "february 25, 2021 - february 27, 2021",
      summary: { summary },
      link: "camwhite.me",
      summary:
        '(this website!) a personal resume-type website for recording projects and tracking skills/tools i\'ve learned. back-end written in python using django framework. "projects" database managed with sqlite3. front-end developed with html and css. site is deployed on a remote linux server running ubuntu and managed with ssh. git used for version control.',
    }),
  ];

  var summary =
    '(This website!) A personal resume-type website for recording projects and tracking skills/tools I\'ve learned. Back-end written in Python using Django framework. "Projects" database managed with SQLite3. Front-end developed with HTML and CSS. Site is deployed on a remote Linux server running Ubuntu and managed with SSH. Git used for version control.';

  return (
    <Router>
      <NavBar />
      <Header />
      <AboutSection text={text} />
      <SkillList title="Skills" list_side="left" skills={skills} />
      <SkillList title="Tools I Use" list_side="right" skills={tools} />
      <h1 className="section-title">Projects</h1>
      {projects}
    </Router>
  );
}

export default App;
