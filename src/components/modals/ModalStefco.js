import React from "react";
import "./../../styles/App.scss";
import PropTypes from "prop-types";

class ModalStefco extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <section>
            <h1>Stefco</h1>
            <h2>Features:</h2>
            <ul>
              <li>
                My intent for this project was to find a website design on
                Dribbble, then do my best to re-create it while adding
                interactive elements
              </li>
              <li>Single-page website with smooth scrolling links</li>
              <li>Navbar changes to hamburger-style menu for mobile devices</li>
              <li>Consistent color pallette applied throughout website</li>
              <li>Pages include Home, About, Services, Work, Blog, Contact</li>
              <li>Lively hover effects on all clickables</li>
              <li>Responsive across all devices</li>
            </ul>
            <h2>Technologies:</h2>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>Sass</li>
              <li>Method Editor (SVG Creator)</li>
              <li>Gatsby</li>
            </ul>
            <h2>Design:</h2>
            <ul>
              <li>
                Designed by{" "}
                <a
                  className="shah"
                  href="https://dribbble.com/uiuxalam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shah Alam
                </a>
              </li>
            </ul>
            <div className="modalLinkContainer">
              <a
                className="modalLink"
                href="https://github.com/stefanhranek/digital-agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="modalLink"
                href="https://dribbble.com/shots/10748955/attachments/2416757?mode=media"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
              <a
                className="modalLink"
                href="https://stefco.netlify.com/"
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
              src="./../../stefcoApp.png"
              alt="Spot Check app"
            />
          </section>
          <div className="footer">
            <img
              className="modalEscapeButton"
              onClick={this.props.onClose}
              style={{ height: "24px", background: "transparent" }}
              src="./../../close.svg"
              alt="close modal"
            />
          </div>
        </div>
      </div>
    );
  }
}

ModalStefco.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalStefco;
