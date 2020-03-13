import React from 'react';
import "./../styles/App.scss";
import PropTypes from 'prop-types';

class ModalJumper extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
        <div className="backdrop">
          <div className="modal">
            {this.props.children}
            <section>
              <h1>Jumper</h1>
              <h2>Features:</h2>
              <ul>
                <li>Left & right movement</li>
                <li>Jump / fly up to platforms</li>
                <li>Player has three lives</li>
                <li>Collect coins and "dragon balls"</li>
                <li>Win upon reaching "Master Roshi"</li>
                <li>Snowballs and shurikens will decrease lives</li>
                <li>HTML DOM elements track lives and collectables</li>
                <li>Background music & various sound effects</li>
                <li>Three-page transitions: Start, Game, End</li>
                <li>Styling inspired by retro games</li>
                <li>Designed for desktop devices</li>
              </ul>
              <h2>Technologies:</h2>
              <ul>
                <li>JavaScript</li>
                <li>Canvas</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>GitHub Pages</li>
                <li>Piskel (Pixel Art)</li>
              </ul>
              <div className="modalLinkContainer">
                <a
                  className="modalLink"
                  href="https://github.com/stefanhranek/jumper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="modalLink"
                  href="https://stefanhranek.github.io/jumper/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              </div>
            </section>
            <section className="modalRight">
              <img
                style={{transform: 'scale(0.9)', borderRadius:'20px'}}
                className="imageBorder"
                src="./../../3.png"
                alt="Spot Check app"
              />
            </section>
            <div className="footer">
              <button className="modalEscapeButton" onClick={this.props.onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

ModalJumper.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalJumper;