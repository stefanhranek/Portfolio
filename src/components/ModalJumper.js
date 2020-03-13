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