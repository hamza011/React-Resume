import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';

import About     from './../About/about';
import Education from './../Education/education';
import Skills    from './../Skills/skills';
import Portfolio from './../Portfolio/portfolio';
import Contact   from './../Contact/contact';

import './navigation.css'

class Nav extends React.Component {
  render() {
    return (
      <div className="resume-nav">
        {/*<a className="nav-tabs" href="">HOME</a>
        <a className="nav-tabs" href="">ABOUT</a>
        <a className="nav-tabs" href="">EDUCATION</a>
        <a className="nav-tabs" href="">SKILLS</a>
        <a className="nav-tabs" href="">PORTFOLIO</a>
        <a className="nav-tabs" href="">CONTACT</a>
        
        <div className="icon-user">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>*/}

        <Router>
          <div>
            <ul>
              <li className="nav-tabs"><Link to="/">                          HOME      </Link></li>
              <li className="nav-tabs"><Link target="_blank" to="/about">     ABOUT     </Link></li>
              <li className="nav-tabs"><Link target="_blank" to="/edu">       EDUCATION </Link></li>
              <li className="nav-tabs"><Link target="_blank" to="/skills">    SKILLS    </Link></li>
              <li className="nav-tabs"><Link target="_blank" to="/portfolio"> PORTFOLIO </Link></li>
              <li className="nav-tabs"><Link target="_blank" to="/contact">   CONTACT   </Link></li>
            </ul>

            <Route path="/about"     component={About}     />
            <Route path="/about"     component={About}     />
            <Route path="/edu"       component={Education} />
            <Route path="/skills"    component={Skills}    />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact"   component={Contact}   />
          </div>
        </Router>


      </div>
    );
  }
}

export default Nav;
