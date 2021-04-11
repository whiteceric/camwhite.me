import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  var text =
    "I'm a computer science student at MIT looking for a software engineering internship. My passions (besides coding) include writing, economics, teaching, and music. I believe in the power of discipline and I try to live a life guided by it.";

  return (
    <Router>
      <NavBar />
      <Header />
      <AboutSection text={text} />
    </Router>
  );
}

export default App;
