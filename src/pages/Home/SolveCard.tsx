import React, { Component } from 'react'
import './SolveCard.scss'

type SolveCardProps = {
    icon: string
    title: string
    description: string
}

export class SolveCard extends Component<SolveCardProps, {}> {
    render() {
        return (
            <div className="SolveCard">
                <div className="SolveCard__header">
                    <img src={this.props.icon} alt="card" className="SolveCard__icon" />
                    <h1 className="SolveCard__title">{this.props.title}</h1>
                </div>
                <p className="SolveCard__description">
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default SolveCard
