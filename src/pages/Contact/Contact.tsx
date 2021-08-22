import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.scss'

class Contact extends Component {
    handleFormSubmit() {}

    render() {
        return (
            <div className="Contact">
                <div className="Contact__navbar-container">
                    <Navbar />
                </div>
                <div className="Contact__container">
                    <h1 className="Contact__title">
                        <span className="Contact__title--primary">Contact us</span>
                        <span className="Contact__title--secondary">
                            Have any questions? We'd love to hear from you.
                        </span>
                    </h1>
                    <form action="" className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Your message" />
                        </div>
                        <div className="form-btn-container">
                            <Button onClick={this.handleFormSubmit} text="Send" />
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact
