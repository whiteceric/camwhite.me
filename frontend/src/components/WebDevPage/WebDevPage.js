import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import "./WebDevPage.css";
import { API_URL } from "../../env";

const WebDevPage = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [body, setBody] = useState(null);
  const [sent, setSent] = useState(false);

  const formSubmitted = (event) => {
    const url = "api/new-web-dev-contact/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        name: name,
        body: body,
      }),
    };
    fetch(API_URL + url, requestOptions);
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <Fragment>
        <Redirect to="/webdev/thankyou" />
      </Fragment>
    );
  }
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
