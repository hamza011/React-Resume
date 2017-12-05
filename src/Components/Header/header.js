import React, { Component } from 'react';
import './header.css';
import Nav from './../Nav/navigation'

// import logo from '../../images/background.jpg'
class Header extends Component {
  render() {
    return (
      <div className="resume-header">
        <Nav />
        <div className="header-content">
          <h1 className="typewriter-heading">MUHAMMAD HAMZA AHMED ...</h1>
        </div>
        {/*<img src={logo} alt="img not found"/>*/}
      </div>
    );
  }
}

export default Header;
