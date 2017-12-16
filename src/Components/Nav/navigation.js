import React, { Component } from 'react';
import './navigation.css'
// import logo from '../../images/background.jpg'
class Nav extends Component {
  render() {
    return (
      <div className="resume-nav">
        <a className="nav-tabs" href="">HOME</a>
        <a className="nav-tabs" href="">ABOUT</a>
        <a className="nav-tabs" href="">EDUCATION</a>
        <a className="nav-tabs" href="">SKILLS</a>
        <a className="nav-tabs" href="">PORTFOLIO</a>
        <a className="nav-tabs" href="">CONTACT</a>
        
        <div className="icon-user">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>


      </div>
    );
  }
}

export default Nav;
