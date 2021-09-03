import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WebDevPage.css";

const WebDevPage = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [body, setBody] = useState(null);

  const formSubmitted = (event) => {
    console.log(email);
    console.log(name);
    console.log(body);
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={formSubmitted}>
        <h1>Ready to Upgrade your Web Presence?</h1>
        <h2>Send me any questions you have or info about your web project!</h2>
        <hr />
        <input
          className="text-input"
          type="email"
          placeholder="Your Email Address"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Your Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <textarea
          className="text-input"
          rows="7"
          placeholder="How can I help you?"
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

WebDevPage.propTypes = {};

WebDevPage.defaultProps = {};

export default WebDevPage;
