import React, { Component } from 'react';
import first from '../../images/port01.png';
import two from '../../images/port02.png';
import three from '../../images/port03.png';
import four from '../../images/port04.png';
import five from '../../images/port05.png';
import './portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div className="resume-portfolio">
                <div>
                    <h1 className="portfolio-heading"><i className="fa fa-briefcase icon-portfolio" aria-hidden="true"></i> PORTFOLIO</h1>
                </div>

                <div class="container">
                    <img src={first} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">
                                <a href="https://hamza011.github.io/ng4-SlideShow/" className="portfolio-demo-link" target="_blank"><button className="demo-btn">Live Demo</button></a> 
                            </div>
                        </div>
                </div>
                <div class="container">
                    <img src={two} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">
                                <a href="https://sample001-26c6a.firebaseapp.com/" className="portfolio-demo-link" target="_blank"><button className="demo-btn">Live Demo</button></a> 
                            </div>
                        </div>
                </div>
                <div class="container">
                    <img src={three} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">
                                <a href="https://progressive-web-app-d8b2b.firebaseapp.com/" className="portfolio-demo-link" target="_blank"><button className="demo-btn">Live Demo</button></a> 
                            </div>
                        </div>
                </div>
                <div class="container">
                    <img src={four} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">
                                <a href="https://hamza011.github.io/Student-Registration-Form/" className="portfolio-demo-link" target="_blank"><button className="demo-btn">Live Demo</button></a> 
                            </div>
                        </div>
                </div>
                <div class="container">
                    <img src={five} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">
                                <a href="https://react-todo-59fbb.firebaseapp.com/" className="portfolio-demo-link" target="_blank"><button className="demo-btn">Live Demo</button></a> 
                            </div>
                        </div>
                </div>

            </div>
        );
    }
}

export default Portfolio;
