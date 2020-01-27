import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './../styles/App.scss';

export default class Projects extends Component {
    render() {
        return (
            <>
                <div className="projectsContainer">
                    <header>Recent work.</header>
                    <p>
                        Here's a short selection of my most recent projects. <br/>
                        Tech Stack: React, HTML, CSS, JavaScript, Node.js, Express, MongoDB
                    </p>
                </div>
                <div className="projectsList">
                    <section>
                        <article>
                            <h1>Spot Check</h1>
                            <p>Map-based platform for finding & sharing skate spots.</p>
                        </article>
                        <img className="imageBorder" src="./../../spotCheckProject.png" alt="Spot Check app image"/>
                    </section>
                    <section>
                        <img src="./../../movieLogProject.png" alt="Movie Log app image"/>
                        <article className="reversedProject">
                            <h1>Movie Log</h1>
                            <p>Keep track of the movies you've watched & the ones you wish to see.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <h1>Jumper</h1>
                            <p>2D JavaScript platformer game inspired by my favorite Super Nintendo games.</p>
                        </article>
                        <img className="imageBorder" src="./../../jumperProject.png" alt="Jumper app image"/>
                    </section>
                </div>
            </>
        )
    }
}
