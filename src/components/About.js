import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./../styles/App.scss";
import AboutDetails from "./AboutDetails";

export default class About extends Component {
  render() {
    return (
      <div className="page-section" id="about">
        <div className="aboutContainer">
          <header>Hello.</header>
          <section className="aboutDetailsWrapper">
            <AboutDetails className="AboutDetails"/>
          </section>
          {/* <p>
            I'm a web developer based in San Diego, CA. I have a passion for
            bringing ideas to life, and especially love creating web & mobile
            applications.
          </p> */}
        </div>
      </div>
    );
  }
}
