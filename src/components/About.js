import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./../styles/App.scss";
import AboutDetails from "./AboutDetails";

export default class About extends Component {
  componentDidMount() {
    console.log(`%c Welcome to my portfolio! Have an avocado 🥑`, 'padding: 20px 20px 40px 20px; font-weight: bold; font-size: 30px;color: peachpuff; text-shadow: 3px 3px 0 #138086 , 6px 6px 0 #534666 , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 #CD7672 , 15px 15px 0 #EEB462 , 18px 18px 0 #DC8665 , 21px 21px 0 black');
  }

  render() {
    return (
      <div className="page-section" id="about">
        <div className="aboutContainer">
          <header>Hello.</header>
          <section className="aboutDetailsWrapper">
            <AboutDetails className="AboutDetails"/>
          </section>
        </div>
      </div>
    );
  }
}
