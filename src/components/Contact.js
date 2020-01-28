import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Contact extends Component {
    render() {
        return (
            <div className="page-section" id="contact">
            <div className="contactContainer">
                <header>Get in touch.</header>
                <p>
                    I'm always open to collaborating, sharing ideas, and learning new tricks & tips. Have an idea? Need some advice? Want to grab coffee? Shoot me a message. I'd be happy to talk!
                </p>
                
                <section className="bottomContactContainer">
                    <a 
                        href="https://github.com/stefanhranek"
                        target="_blank"
                    >
                        <div className="singleLogoContainer">
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
                        href="mailto:hranekstefan@gmail.com?subject=Let's work together! 😊&body=Hey Stefan! My name is Foobar. Would you like to grab a coffee and discuss projects?"
                        target="_blank"
                    >
                        <div className="singleLogoContainer">
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
                        <div className="singleLogoContainer">
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
