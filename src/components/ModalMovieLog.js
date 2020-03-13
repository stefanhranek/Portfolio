import React from "react";
import "./../styles/App.scss";
import PropTypes from "prop-types";

class ModalMovieLog extends React.Component {
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
            <h1>Movie Log</h1>
            <h2>Features:</h2>
            <ul>
              <li>Sign up & Log in</li>
              <li>User authentication with private routes</li>
              <li>Form error feedback</li>
              <li>Home page contains "Now Playing", "Upcoming", "Trending" movie sections</li>
              <li>Search for movies based off title</li>
              <li>View movie details: Title, Year, Genres, Run-time, Rating, Synopsis, Director</li>
              <li>Add movies to "Seen" or "Want to see" lists</li>
              <li>Profile page displays user's lists, quote, picture</li>
              <li>Edit user's name, email, favorite quote</li>
              <li>Mobile-first design, fully responsive</li>
            </ul>
            <h2>Technologies:</h2>
            <ul>
              <li>JavaScript</li>
              <li>Handlebars</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>CSS</li>
              <li>REST API</li>
              <li>Axios</li>
              <li>Postman</li>
              <li>The Movie Database (TMDb) API</li>
              <li>Heroku</li>
            </ul>
            <div className="modalLinkContainer">
              <a
                className="modalLink"
                href="https://github.com/stefanhranek/movie-log"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="modalLink"
                href="https://m2-deploy-movielog.herokuapp.com/"
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

ModalMovieLog.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalMovieLog;
