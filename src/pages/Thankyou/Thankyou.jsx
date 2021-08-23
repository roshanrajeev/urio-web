import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./Thankyou.scss"
import Navbar from '../../components/Navbar/Navbar'
import Tick from '../../assets/images/icons/tick.svg'

export class Thankyou extends Component {
    render() {
        return (
            <div className="Thankyou">
                <Navbar />
                <div className="Thankyou__content-container">
                    <div className="Thankyou__content-inner-container">
                        <img src={Tick} alt="tick" className="Thankyou__icon" />
                        <h1 className="Thankyou__title">Thank You!</h1>
                        <p className="Thankyou__description">Your submission has been sent</p>
                        <Link to="/" className="Thankyou__link">Back to home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thankyou
