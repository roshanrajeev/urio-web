import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Location } from 'history'

import './Thankyou.scss'
import Navbar from '../../components/Navbar/Navbar'
import Tick from '../../assets/images/icons/tick.svg'

type ThankyouProps = typeof Thankyou.defaultProps & {
    message?: string
    location: Location
}

export class Thankyou extends Component<ThankyouProps, {}> {
    static defaultProps = {
        message: 'Your submission has been sent',
    }

    constructor(props: any) {
        super(props)
        this.getMessage = this.getMessage.bind(this)
    }

    getMessage() {
        if (this.props.location.state) {
            if ((this.props.location.state as { message: string }).message) {
                return (this.props.location.state as { message: string }).message
            }
        } else {
            return this.props.message
        }
    }

    render() {
        return (
            <div className="Thankyou">
                <Navbar />
                <div className="Thankyou__content-container">
                    <div className="Thankyou__content-inner-container">
                        <img src={Tick} alt="tick" className="Thankyou__icon" />
                        <h1 className="Thankyou__title">Thank You!</h1>
                        <p className="Thankyou__description">{this.getMessage()}</p>
                        <Link to="/" className="Thankyou__link">
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thankyou
