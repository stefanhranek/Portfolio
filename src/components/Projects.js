import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./../styles/App.scss";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-scroll";
import Modal from "./Modals";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="page-section" id="projects">
        <div className="projectsContainer">
          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <section>
              <h1>Spot Check</h1>
              <h2>Features:</h2>
              <ul>
                <li>User authentication with private routes</li>
                <li>Sign up & Log in</li>
                <li>Form error feedback</li>
                <li>Edit user profile</li>
                <li>Choose point on global map to create a new skate spot</li>
                <li>View details of skate spot</li>
                <li>Add existing spots to "Favorites" list</li>
                <li>Number of user contributions displayed on profile</li>
                <li>Mobile-first design, fully responsive</li>
              </ul>
              <h2>Technologies:</h2>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>CSS</li>
                <li>REST API</li>
                <li>Axios</li>
                <li>Mapbox API</li>
                <li>Heroku</li>
              </ul>
              <div className="modalLinkContainer">
                <a
                  className="modalLink"
                  href="https://github.com/stefanhranek/Spot-Check-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub (Client)
                </a>
                <a
                  className="modalLink"
                  href="https://github.com/stefanhranek/Spot-Check-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub (Server)
                </a>
                <a
                  className="modalLink"
                  href="https://spotcheck-react.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              </div>
            </section>
            <section className="modalRight">
              <img
                className="imageBorder"
                src="./../../spotCheckPhone.png"
                alt="Spot Check app"
              />
            </section>
          </Modal>

          <header>Recent work.</header>
          <p>
            Here's a short selection of my most recent projects. <br />
            Tech Stack: React, JavaScript, HTML, CSS, React, Node.js, Express, MongoDB
          </p>
        </div>

        <Link
          className="navLink"
          activeClass="active"
          to="projectsList"
          spy={true}
          smooth={true}
          offset={120}
          duration={800}
        >
          <img
            src="./arrowDown.svg"
            className="arrow bounce"
            alt="Down arrow"
          />
        </Link>

        <div className="projectsList" id="projectsList">
          <Bounce left>
            <section>
              <article>
                <h1>Spot Check</h1>
                <p>Map-based platform for finding & sharing skate spots.</p>
              </article>
                <img
                  onClick={this.toggleModal}
                  className="imageBorder"
                  src="./../../spotCheckProject.png"
                  alt="Spot Check app"
                />
            </section>
          </Bounce>

          <Bounce right>
            <section className="movieLogProject">
              <a
                href="https://m2-deploy-movielog.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="reversedImage"
                  src="./../../movieLogProject.png"
                  alt="Movie Log app"
                />
              </a>
              <article className="reversedProject">
                <h1>Movie Log</h1>
                <p>
                  Keep track of the movies you've watched & the ones you wish to
                  see.
                </p>
              </article>
            </section>
          </Bounce>

          <Bounce left>
            <section>
              <article>
                <h1>Jumper</h1>
                <p>
                  2D JavaScript platformer game inspired by my favorite Super
                  Nintendo games.
                </p>
              </article>
              <a
                href="https://stefanhranek.github.io/jumper/"
                target="_blank"
                rel="noopener noreferrer"
                className="lastProjectImage"
              >
                <img
                  className="imageBorder"
                  src="./../../jumperProject.png"
                  alt="Jumper app"
                />
              </a>
            </section>
          </Bounce>
        </div>
      </div>
    );
  }
}
