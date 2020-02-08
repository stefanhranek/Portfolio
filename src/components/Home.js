import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Bounce from "react-reveal/Bounce";
import "./../styles/App.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Bounce top>
          <header>
            I<h4>'</h4>m Stefan<h5>.</h5>
          </header>
          <p>
            full<span>—</span>stack web developer
          </p>
        </Bounce>
      </div>
    );
  }
}
