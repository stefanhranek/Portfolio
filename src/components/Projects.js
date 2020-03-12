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
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
          <header>Recent work.</header>
          <p>
            Here's a short selection of my most recent projects. <br />
            Tech Stack: JavaScript, HTML, CSS, React, Node.js, Express, MongoDB
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
              <a
                href="https://spotcheck-react.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageBorder"
                  src="./../../spotCheckProject.png"
                  alt="Spot Check app"
                />
              </a>
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
