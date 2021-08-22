import React, { Component } from 'react'
import './Button.scss'

type ButtonProps = {
    onClick: () => any
    text?: string
}

class Button extends Component<ButtonProps, {}> {
    render() {
        return (
            <button className="Button" onClick={this.props.onClick}>
                {this.props.text ? this.props.text : 'Click Me'}
            </button>
        )
    }
}

export default Button
