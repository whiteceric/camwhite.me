import React from "react";

const ProjectDetailView = () => {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <h1>Overview</h1>
        <p>
          After a few tutorial web projects, I decided to make this site my
          first deployed website. Decided to keep it simple for the first few
          versions, but eventually updated to using React for the frontend and using Django only for a backend REST API. Web development is not
          something I saw myself doing before this, but having really enjoyed
          this project I definitely plan to do more of it.
        </p>
        <h1>Technology</h1>
	  <p>
	  Currently, this project uses React for the frontend, the django-rest-framework module for the backend API, and a remote Ubuntu server (v20.04) for deployment on an Apache server.
	  </p>
        <p>
          I went with the Django framework for two main reasons: First I know
          and love Python, making learning web development that much easier
          because I was using a familiar language. Second, the documentation on
          Django is extensive, so virtually any problem I came accross was
          solvable by reading through APIs and forums.
        </p>
	  <p>
	  It is possible that React was a bit overkill for such a simple site, but I wanted to get experience with it before starting bigger projects, so I figured this was the best place to start.
	  </p>
        <h1>Things I Learned</h1>
        <ul>
          <li>
            <p>Web Dev is Fun!</p>
          </li>
          <li>
            <p>Basics of React and deploying static files for React using the whitenoise python module</p>
          </li>
          <li>
            <p>How to use Ubuntu from terminal to setup web server</p>
          </li>
          <li>
            <p>Managing asymmetric RSA keys for SSH access</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailView;
