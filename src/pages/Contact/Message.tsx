import React, { Component } from 'react'
import './Message.scss'
import CloseIcon from '../../assets/images/icons/close.svg'

type MessageProps = {
    type: string
    message: string
    handleClose: () => void
}

class Message extends Component<MessageProps, {}> {
    constructor(props: any) {
        super(props)
        this.getClass = this.getClass.bind(this)
    }

    getClass() {
        if (this.props.type == 'success') {
            return 'Message Message--success'
        } else if (this.props.type == 'error') {
            return 'Message Message--error'
        } else {
            return 'Message'
        }
    }

    render() {
        return (
            <div className={this.getClass()}>
                <span>{this.props.message}</span>
                <img onClick={this.props.handleClose} src={CloseIcon} alt="" className="Message__close-icon" />
            </div>
        )
    }
}

export default Message
