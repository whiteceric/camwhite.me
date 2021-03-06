import React from "react";
import { Link } from "react-router-dom";

const ProjectDetailView = () => {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <h1>Overview</h1>

        <p>The theme of this project is change.</p>
        <p>
          To start my modile development journey, I came up with an idea that
          involved my interest in financial markets and education. Looking at
          some of the dummy portfolios out there I noticed there are few mobile
          apps for them and the ones that do exist are overly complicated. I
          wanted to make something that a total beginner could use and
          understand.
        </p>

        <h1>Technology</h1>

        <p>
          I started this project using the Kivy framework for app development in
          Python (I really like Python). Using Kivy I finished a Beta that was
          usable on desktop, but Kivy deployment is whole different
          story-deploying to iOS was very difficult for a few reasons, primarily
          the lack of support for the new line of M1 Mac computers. With that, I
          decided to migrate to Xcode and redo the app in Swift. That part is
          still ongoing, but a testable Beta should be up within a couple weeks.
        </p>

        <p>
          For financial market data, I started with an{" "}
          <a target="_blank" rel="noreferrer" href="https://iexcloud.io/">
            IEXCloud API
          </a>
          , using the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pypi.org/project/iexfinance/"
          >
            iexfinance
          </a>{" "}
          Python module as a wrapper. This worked really well, except I later
          realized that the API calls I would make were a little out of my price
          range. With that, I moved to webscraping Yahoo Finance, which worked
          like a charm. With the move to Swift, I will have to re-write this
          part of project, but a solution that uses my Python code for
          webscraping would be nice (and easier to port to Android later on) so
          if you have suggestions, please <Link to={"/contact"}>email</Link> me!
        </p>

        <h1>Things I Learned</h1>

        <ul>
          <li>
            <p>Basic iOS Development</p>
          </li>
          <li>
            <p>Working with HTTPS API requests</p>
          </li>
          <li>
            <p>Mobile UI Design</p>
          </li>
          <li>
            <p>Sometimes you have to know when to switch technologies!</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailView;
