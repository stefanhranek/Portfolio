import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Projects extends Component {
    render() {
        return (
            <div className="projectsContainer">
                <header>Recent work.</header>
                <p>
                    Here's a short selection of my most recent projects. <br/>
                    Tech Stack: React, HTML, CSS, JavaScript, Node.js, Express, MongoDB
                </p>
            </div>
        )
    }
}
