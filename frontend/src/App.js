import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillList from "./components/SkillList/SkillList";
import SkillListItem from "./components/SkillListItem/SkillListItem";

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

  return (
    <Router>
      <NavBar />
      <Header />
      <AboutSection text={text} />
      <SkillList title="Skills" list_side="right" skills={skills} />
    </Router>
  );
}

export default App;
