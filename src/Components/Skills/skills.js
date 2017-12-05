import React, { Component } from 'react';
import skillIcon from '../../images/skillimg.png';
import './skills.css';

// import logo from '../../images/background.jpg'
class Skills extends Component {
  render() {
    return (
      <div className="resume-skills">
        <h1 className="skill-heading"> <img className="icon-skill" src={skillIcon} alt=""/>SKILLS</h1>
        <h3 className="skill-name">Programming..</h3>
        <p className="skills-para">
            Worked primarily with HTML5, CSS3, JavaScript and several libraries and frameworks of JavaScript, 
            such as JQuery, Meteor, Angular.js, Angular2, Angular4, ReactJs for Web Applications and also worked on 
            Progressive Web Applications. Also worked with node.js and it's modules like npm and for testing like 
            jasmine or karma etc. Also learning different paradigm of programming like Functional programming as well 
            as Object-oriented programming.
            To be a good web and mobile application developer.
        </p>
        <div className="skills">
            <li className="skill-bar">HTML5 & CSS3</li>
            <li className="skill-bar">JavaScript</li>
            <li className="skill-bar">Meteor</li>
            <li className="skill-bar">Angular.js, Angular2 & Angular4</li>
            <li className="skill-bar">React.js</li>
        </div>
        <blockquote>
                  You must either modify your dreams or magnify your skills.
                <cite>Jim Rohn</cite>
        </blockquote>
      </div>
    );
  }
}

export default Skills;
