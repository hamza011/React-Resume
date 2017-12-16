import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Components/Header/header'; 
import About from './Components/About/about';
import Education from './Components/Education/education';
import Skills from './Components/Skills/skills';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
// import Slider from './Components/Slider/slider' 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Header />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
        {/*<Slider />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
