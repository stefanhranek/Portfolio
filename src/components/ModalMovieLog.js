import React from 'react';
import "./../styles/App.scss";
import PropTypes from 'prop-types';

class ModalMovieLog extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}

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