import React from "react";
import "./../styles/App.scss";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
      padding: 30
    };

    return (
      <div className="backdrop" style={{ backdropStyle }}>
        <div className="modal" style={{ modalStyle }}>
          {this.props.children}
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
