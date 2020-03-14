import React, { Component } from "react";
import "./../styles/App.scss";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-scroll";
import ModalSpotCheck from "./ModalSpotCheck";
import ModalMovieLog from "./ModalMovieLog";
import ModalJumper from "./ModalJumper";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSpotModal: false,
      isOpenMovieModal: false,
      isOpenJumperModal: false
    };
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event) {
    if (event.keyCode === 27 && this.state.isOpenSpotModal) {
      this.toggleModalSpotCheck();
    } else if (event.keyCode === 27 && this.state.isOpenMovieModal) {
      this.toggleModalMovieLog();
    } else if (event.keyCode === 27 && this.state.isOpenJumperModal) {
      this.toggleModalJumper();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  toggleModalSpotCheck = () => {
    this.setState({
      isOpenSpotModal: !this.state.isOpenSpotModal
    });
  };

  toggleModalMovieLog = () => {
    this.setState({
      isOpenMovieModal: !this.state.isOpenMovieModal
    });
  };

  toggleModalJumper = () => {
    this.setState({
      isOpenJumperModal: !this.state.isOpenJumperModal
    });
  };

  render() {
    return (
      <div className="page-section" id="projects">
        <div className="projectsContainer">
          <ModalSpotCheck show={this.state.isOpenSpotModal} onClose={this.toggleModalSpotCheck}></ModalSpotCheck>
          <ModalMovieLog
            show={this.state.isOpenMovieModal}
            onClose={this.toggleModalMovieLog}
          ></ModalMovieLog>
          <ModalJumper
            show={this.state.isOpenJumperModal}
            onClose={this.toggleModalJumper}
          ></ModalJumper>

          <header>Recent work.</header>
          <p>
            Here's a short selection of my most recent projects. <br />
            Tech Stack: React, JavaScript, HTML, CSS, React, Node.js, Express,
            MongoDB
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
                onClick={this.toggleModalSpotCheck}
                className="imageBorder"
                src="./../../spotCheckProject.png"
                alt="Spot Check app"
              />
            </section>
          </Bounce>

          <Bounce right>
            <section className="movieLogProject">
              <img
                onClick={this.toggleModalMovieLog}
                className="reversedImage"
                src="./../../movieLogProject.png"
                alt="Movie Log app"
              />
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
                  2D JavaScript platformer game inspired by Super
                  Mario.
                </p>
              </article>
              <img
                onClick={this.toggleModalJumper}
                className="imageBorder"
                src="./../../jumperProject.png"
                alt="Jumper app"
              />
            </section>
          </Bounce>
        </div>
      </div>
    );
  }
}
