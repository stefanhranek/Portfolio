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
            I'm always interested in working on new projects. If you'd like to hire me, or you have any questions, shoot me an email!
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
                href="mailto:hranekstefan@gmail.com?subject=Just viewed your portfolio! 😊&body=Hey Stefan! ... "
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
