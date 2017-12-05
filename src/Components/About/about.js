import React, { Component } from 'react';
import './about.css'

class About extends Component {
  render() {
    return (
      <div className="resume-about">
        <div className="about-cont">
            <h1><i className="fa fa-info-circle" aria-hidden="true"></i> ABOUT</h1>
            <table className="about-content">
                <tr>
                    <td><b>Name:</b></td>
                    <td>Muhammad Hamza Ahmed.</td>
                </tr>
                <tr>
                    <td><b>Father's Name:</b></td>
                    <td>Feroz Ahmed Jafri.</td>
                </tr>
                <tr>
                    <td><b>Date Of Birth:</b></td>
                    <td>30th December 1997.</td>
                </tr>
                <tr>
                    <td><b>Gender:</b></td>
                    <td>Male.</td>
                </tr>
                <tr>
                    <td><b>Nationality:</b></td>
                    <td>Pakistani.</td>
                </tr>
                <tr>
                    <td><b>City:</b></td>
                    <td>Karachi.</td>
                </tr>
                <tr>
                    <td><b>Address:</b></td>
                    <td>HNo: A-128 Sector 15-A/5 BufferZone North Khi.</td>
                </tr>
            </table>
        </div>
      </div>
    );
  }
}

export default About;
