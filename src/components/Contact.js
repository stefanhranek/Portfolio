import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Contact extends Component {
    render() {
        return (
            <div className="contactContainer">
                <header>Get in touch.</header>
                <p>
                    I'm always open to collaborating and exploring new projects. Have an idea? Need some advice? Shoot me a message. I'd love to help!
                </p>
            </div>
        )
    }
}
