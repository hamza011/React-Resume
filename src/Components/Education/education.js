import React, { Component } from 'react';
import './education.css';

// import logo from '../../images/background.jpg'
class Education extends Component {
  render() {
    return (
      <div className="resume-edu">
          <h1 className="edu-heading"><i className="fa fa-graduation-cap" aria-hidden="true"></i> EDUCATION</h1>
          <div>
              <table className="edu-table">
                  <tr><h3>Matriculate:</h3>
                    <td>At the age of 16 from <b>"Froeble Grammar Academy."</b> in year 2014.</td>
                  </tr>
                  <tr><h3>Intermediate:</h3>
                    <td>At the age of 18 from <b>"Adamjee Govt. Science College For Boys."</b> in year 2016.</td>
                  </tr>
                  <tr><h3>Bachelors:</h3>
                    <td>From <b>"Federal Urdu  University Of Arts,Science And Technology (FUUAST) "</b> (in process).</td>
                  </tr>
              </table>
              <blockquote className="edu-quote">
                  Education is the most powerful weapon which you can use to change the world.
                <cite>Nelson Mandela</cite>
            </blockquote>
          </div>
      </div>
    );
  }
}

export default Education;
