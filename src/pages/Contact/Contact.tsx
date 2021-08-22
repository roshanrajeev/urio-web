import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.scss'

type Error = {
    field: string
    message: string
}

type ContactState = {
    name: string
    email: string
    message: string
    errors: Array<Error>
}

class Contact extends Component<{}, ContactState> {
    constructor(props: ContactState) {
        super(props)
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.validateFields = this.validateFields.bind(this)
        this.getInputClassName = this.getInputClassName.bind(this)
        this.getErrorMessage = this.getErrorMessage.bind(this)
    }

    state = {
        name: '',
        email: '',
        message: '',
        errors: [],
    }

    // helpers

    validateFields(): { success: boolean } {
        let success: boolean = true
        let messages: Array<string> = []
        let fields: Array<string> = []

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRegex.test(this.state.email.toLowerCase())) {
            success = false
            fields.push('email')
            messages.push('Invalid Email')
        }
        if (!this.state.message) {
            success = false
            fields.push('message')
            messages.push('Message cannot be empty')
        }
        if (this.state.message.length > 500) {
            success = false
            fields.push('message')
            messages.push('Message cannot exceed 500 characters')
        }
        if (!this.state.name) {
            success = false
            fields.push('name')
            messages.push('Name cannot be empty')
        }
        if (!success) {
            let errors: Array<Error> = []
            for (let i = 0; i < fields.length; i++) {
                errors.push({ field: fields[i], message: messages[i] })
            }
            this.setState({ errors: errors })
            return { success: false }
        }
        this.setState({ errors: [] })
        return { success: true }
    }

    getInputClassName(field: string): string {
        let error: Error | undefined = this.state.errors.find((error: Error) => error.field === field)
        if (error) {
            if ((error as Error).field == field) return 'form-field-error'
        }
        return 'form-field'
    }

    getErrorMessage(field: string): string {
        let error: Error | undefined = this.state.errors.find((error: Error) => error.field === field)
        if (error) {
            if ((error as Error).field == field) return (error as Error).message
        }
        return ''
    }

    // handlers

    handleFormChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        if (e.currentTarget.id === 'name') {
            this.setState({ name: e.currentTarget.value })
        } else if (e.currentTarget.id === 'email') {
            this.setState({ email: e.currentTarget.value })
        } else if (e.currentTarget.id === 'message') {
            this.setState({ message: e.currentTarget.value })
        }
    }

    handleFormSubmit(e: React.FormEvent) {
        e.preventDefault()
        const response = this.validateFields()
        if (response.success) {
        }
    }

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
                    <form action="" className="form" onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                onChange={this.handleFormChange}
                                value={this.state.name}
                                className={this.getInputClassName('name')}
                            />
                            <div className="form-error-message">{this.getErrorMessage('name')}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Your email"
                                onChange={this.handleFormChange}
                                value={this.state.email}
                                className={this.getInputClassName('email')}
                            />
                            <div className="form-error-message">{this.getErrorMessage('email')}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                placeholder="Your message"
                                id="message"
                                onChange={this.handleFormChange}
                                value={this.state.message}
                                className={this.getInputClassName('message')}
                            />
                            <div className="form-error-message">{this.getErrorMessage('message')}</div>
                        </div>
                        <div className="form-btn-container">
                            <Button text="Send" />
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact
