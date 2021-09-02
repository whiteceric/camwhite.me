import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <div className="list-item">
              <h1 className="list-item-title">Web Development</h1>
              <p className="list-item-body">
                I build high quality websites <a href="#">(full stack)</a> for
                startups, small businesses and agencies. Contact me to get
                started!
              </p>
            </div>
            <div className="list-item">
              <h1 className="list-item-title">Web Development</h1>
              <p className="list-item-body">
                I build high quality websites <a href="#">(full stack)</a> for
                startups, small businesses and agencies. Contact me to get
                started!
              </p>
            </div>
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
