import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Fade from "react-reveal/Fade";
import "./../styles/App.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="page-section" id="contact">
        <div className="contactContainer">
          <header>Get in touch.</header>
          <p>
            I'm always open to collaborating, sharing ideas, and learning new
            tricks & tips. Want me to build your project? Need advice? I'm happy to converse!
          </p>

          <section className="bottomContactContainer">
            <Fade left>
              <a
                href="https://github.com/stefanhranek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="singleLogoContainer">
                  <div className="linkContainer">
                    <img
                      src="./github.svg"
                      className="contactLogos"
                      alt="Github"
                    />
                    <h3>Github</h3>
                  </div>
                </div>
              </a>
            </Fade>

            <Fade bottom>
              <a
                href="mailto:hranekstefan@gmail.com?subject=Let's work together! 😊&body=Hey Stefan! My name is Foobar. Would you like to grab a coffee and discuss projects?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="singleLogoContainer">
                  <div className="linkContainer">
                    <img
                      src="./gmail.svg"
                      className="contactLogos"
                      alt="Gmail"
                    />
                    <h3>Gmail</h3>
                  </div>
                </div>
              </a>
            </Fade>

            <Fade right>
              <a
                href="https://www.linkedin.com/in/stefanhranek/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="singleLogoContainer">
                  <div className="linkContainer">
                    <img
                      src="./linkedin.svg"
                      className="contactLogos"
                      alt="Github"
                    />
                    <h3>LinkedIn</h3>
                  </div>
                </div>
              </a>
            </Fade>
          </section>
        </div>
      </div>
    );
  }
}
