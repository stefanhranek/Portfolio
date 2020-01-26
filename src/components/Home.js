import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <header>I'm Stefan.</header>
                <p>
                    full-stack web developer
                </p>
            </div>
        )
    }
}
