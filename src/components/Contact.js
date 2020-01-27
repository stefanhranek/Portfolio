import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Contact extends Component {
    render() {
        return (
            <div className="page-section" id="3">
            <div className="contactContainer">
                <header>Get in touch.</header>
                <p>
                    I'm always open to collaborating and exploring new projects. Have an idea? Need some advice? Shoot me a message. I'd love to help!
                </p>
                <section>
                    <a 
                        href="https://github.com/stefanhranek"
                        target="_blank"
                    >
                        <div>
                            <div className="linkContainer">
                                <img
                                    src="./github.svg"
                                    className="contactLogos"
                                    alt="Github logo"
                                />
                                <h3>Github</h3>
                            </div>
                        </div>
                    </a>
                    <a 
                        href="mailto:hranekstefan@gmail.com?subject=Let's work together! 😊&body=Hey Stefan! My name is Foobar. Would you like to grab a coffee & discuss projects?"
                        target="_blank"
                    >
                        <div>
                            <div className="gmailContainer">
                                <img
                                    src="./gmail.svg"
                                    className="contactLogos"
                                    alt="Gmail logo"
                                />
                                <h3>Gmail</h3>
                            </div>
                        </div>
                    </a> 
                    <a 
                        href="https://www.linkedin.com/in/stefanhranek/"
                        target="_blank"
                    >
                        <div>
                            <div className="linkContainer">
                                <img
                                    src="./linkedin.svg"
                                    className="contactLogos"
                                    alt="Github logo"
                                />
                                <h3>LinkedIn</h3>
                            </div>
                        </div>
                    </a>
                </section>
            </div>
            </div>
        )
    }
}
