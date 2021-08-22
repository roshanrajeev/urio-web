import React, { Component } from 'react'
import './Button.scss'

type ButtonProps = {
    onClick?: any
    text?: string
    spinner?: string
}

class Button extends Component<ButtonProps, {}> {
    render() {
        return (
            <button className="Button" onClick={this.props.onClick ? this.props.onClick : () => {}}>
                <span className="Button__text">{this.props.text ? this.props.text : 'Click Me'}</span>
                {this.props.spinner && <img src={this.props.spinner} className="Button__spinner" />}
            </button>
        )
    }
}

export default Button
