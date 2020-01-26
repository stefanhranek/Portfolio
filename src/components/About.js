import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class About extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <header>Hello.</header>
                <p>
                    I'm a web developer based in San Diego, CA. I have a passion for bringing ideas to life, and especially love creating web & mobile applications.
                </p>
            </div>
        )
    }
}
