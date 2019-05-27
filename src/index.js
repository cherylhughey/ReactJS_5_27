import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="http://www.cherylhughey.com">
            Visit CherylHughey.com
          </a>
        </nav>
      </div>

      <div className="App">
        <h1>
          <center>
            <br />
            <b>Cheryl Hughey</b>
          </center>
        </h1>
        <h2>
          <center>ReactJS Developer</center>
        </h2>
        <p />

        <p>
          <i>This is a glorious placeholder paragraph. Isn't it nice?</i>
        </p>
      </div>

      <div class="container">
        <hr />
        <hr />
      </div>

      <div class="container">
        <div class="alert alert-danger" role="alert">
          <center>She's on fire!</center>
        </div>
      </div>

      <div class="container">
        <hr />
        <hr />
      </div>

      <br />
      <div>
        <center>
          <img
            src="https://cherylhughey.github.io/img/campfire1.jpg"
            class="img-fluid"
            alt="campfire"
          />
        </center>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
