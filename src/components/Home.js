import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <header>I<h4>'</h4>m Stefan<h5>.</h5></header>
                <p>
                    full<h6>—</h6>stack web developer
                </p>
            </div>
        )
    }
}
