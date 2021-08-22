import React, { Component } from 'react'
import './SolveCard.scss'

type SolveCardProps = {
    icon: string
    title: string
}

export class SolveCard extends Component<SolveCardProps, {}> {
    render() {
        return (
            <div className="SolveCard">
                <div className="SolveCard__header">
                    <img src={this.props.icon} alt="" className="SolveCard__icon" />
                    <h1 className="SolveCard__title">{this.props.title}</h1>
                </div>
                <p className="SolveCard__description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </p>
            </div>
        )
    }
}

export default SolveCard
