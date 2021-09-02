import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ResumePage from "./components/ResumePage/ResumePage";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import logo from "./images/logo_3.png";
import { useFetch } from "./components/useFetch";

function App() {
  const bio = useFetch("api/bio/");
  console.log(bio);

  return (
    <Router>
      <NavBar />
      <Route
        path="/"
        exact
        render={(props) => (
          <div className="page-content">
            <img alt="" src={logo} className="list-title" />
            <Link className="list-item" to="/resume">
              <h1>Web Development</h1>
              <p>
                I build high quality websites (full stack) for startups, small
                businesses, and agencies. Contact me to get started!
              </p>
            </Link>
            <Link className="list-item" to="/resume">
              <h1>Software Engineering</h1>
              <p>
                I am a current computer science student looking for
                opportunities in the field of software engineering. Check out my
                portfolio and resume!
              </p>
            </Link>
          </div>
        )}
      />
      <Route path="/resume" exact render={(props) => <ResumePage />} />
      <Route path="/contact" exact render={(props) => <Contact />} />
      <Route path="/project/:slugified_title" children={<ProjectDetail />} />
      <Footer />
    </Router>
  );
}

export default App;
