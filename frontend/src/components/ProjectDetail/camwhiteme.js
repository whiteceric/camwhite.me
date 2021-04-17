import React from "react";

const ProjectDetailView = () => {
  return (
    <div className="project-detail-container">
      <div className="project-detail-text">
        <h1>Overview</h1>
        <p>
          After a few tutorial web projects, I decided to make this site my
          first deployed website. Decided to keep it simple for the first few
          versions, but there are more features to come. Web development is not
          something I saw myself doing before this, but having really enjoyed
          this project I definitely plan to do more of it.
        </p>
        <h1>Technology</h1>
        <p>
          I went with the Django framework for two main reasons: First I know
          and love Python, making learning web development that much easier
          because I was using a familiar language. Second, the documentation on
          Django is extensive, so virtually any problem I came accross was
          solvable by reading through APIs and forums. At first I wanted to use
          the project to learn Javascript, but decided that it was not necessary
          for such a simple site. So, the front end is almost plain HTML, with
          Django working in the background providing some context variables. For
          CSS, I wrote I few custom classes and referenced Bootstrap.
        </p>
        <h1>Things I Learned</h1>
        <ul>
          <li>
            <p>Web Dev is Fun!</p>
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
