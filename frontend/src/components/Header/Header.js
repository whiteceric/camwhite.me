import React from "react";
import "./Header.css";

import profile_pic_rounded from "../../images/profile_pic_rounded.png";
import linkedin from "../../images/linkedin.png";
import email from "../../images/email.png";
import github from "../../images/github.png";

const Header = () => (
  <div className="Header">
    <div className="grid-container">
      <img alt="" src={profile_pic_rounded} className="profile-pic" />
      <h1 className="header-text">Hi, I{"'"}m Cameron</h1>
      <div className="header-row-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/camwhite1301/"
        >
          <img alt="" src={linkedin} className="link-pic" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/whiteceric"
        >
          <img alt="" src={github} className="link-pic" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:whiteceric@gmail.com"
        >
          <img alt="" src={email} className="link-pic" />
        </a>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
