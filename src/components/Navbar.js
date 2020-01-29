import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../styles/App.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navContainer">
                <ul>

                    <Link 
                        className="navLink"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    >
                    About
                    </Link>

                    <Link 
                        className="navLink"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    >
                    Projects
                    </Link>

                    <Link 
                        className="navLink"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                    >
                    Contact
                    </Link>

                </ul>
            </nav>
        )
    }
}