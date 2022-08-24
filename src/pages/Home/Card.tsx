import React, { Component } from 'react'
import './Card.scss'

type CardProps = {
    img: string
    title: string
    description?: string[]
}

class Card extends Component<CardProps, {}> {
    render() {
        return (
            <div className="Card">
                <div className="Card__image-container">
                    <img src={this.props.img} className="Card__image" alt="card" />
                </div>
                <h1 className="Card__title">{this.props.title}</h1>
                <ul className="Card__description">
                    {this.props.description?.map(text => <li>{text}</li>)}
                </ul>
            </div>
        )
    }
}

export default Card
