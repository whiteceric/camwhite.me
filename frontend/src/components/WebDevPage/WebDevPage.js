import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WebDevPage.css";
import { useFetchPost } from "../useFetchPost";
import { API_URL } from "../../env";
import CSRFToken from "../CSRFToken";

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

const WebDevPage = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [body, setBody] = useState(null);

  const formSubmitted = (event) => {
    console.log(email);
    console.log(name);
    console.log(body);
    console.log(csrftoken);
    const url = "new-web-dev-contact/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
      body: JSON.stringify({ email: email, name: name, body: body }),
    };
    fetch(API_URL + url, requestOptions).then((response) => response.json());

    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={formSubmitted}>
        <CSRFToken />
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
