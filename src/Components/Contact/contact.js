import React, { Component } from 'react';
import './contact.css';
import 'font-awesome/css/font-awesome.css'

class Contact extends Component {
    render() {
        return (
            <div className="resume-contact">
                <h1 className="contact-heading"><i className="fa fa-phone-square" aria-hidden="true"></i> CONTACT</h1>
                <div>
                    <a href="https://web.facebook.com/mohammedhamza.ahmed.9" target="_blank">
                        <i className="fa fa-facebook social" aria-hidden="true"></i>
                    </a>
                    <i className="fa fa-envelope social" aria-hidden="true"></i>
                    <a href="https://github.com/hamza011" target="_blank">
                        <i className="fa fa-github social" aria-hidden="true"></i>
                    </a>
                </div>


            </div>
        );
    }
}

export default Contact;
