import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./../styles/App.scss";
import AboutDetails from "./AboutDetails";

export default class About extends Component {
  componentDidMount() {
    console.log('%c Welcome to my portfolio! Have an avocado 🥑', 'font-weight: bold; font-size: 40px;color: peachpuff; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
  }

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
