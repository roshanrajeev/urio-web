import React, { Component } from 'react'
import './Card.scss'

type CardProps = {
    img: string
}

class Card extends Component<CardProps, {}> {
    render() {
        return (
            <div className="Card">
                <div className="Card__image-container">
                    <img src={this.props.img} className="Card__image" />
                </div>
                <h1 className="Card__title">Professional and Social Media ?</h1>
                <p className="Card__description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </p>
            </div>
        )
    }
}

export default Card
