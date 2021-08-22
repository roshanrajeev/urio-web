import React, { Component } from 'react'
import { History } from 'history'

import './Contact.scss'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Message from './Message'
import Spinner from '../../assets/images/spinner-loader.gif'

type FieldError = {
    field: string
    message: string
}

type Notification = {
    type: string
    message: string
}

type ContactState = {
    name: string
    email: string
    message: string
    fieldErrors: Array<FieldError>
    notification: Notification | null
}

type ContactProps = {
    history: History
}

class Contact extends Component<ContactProps, ContactState> {
    constructor(props: any) {
        super(props)
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.validateFields = this.validateFields.bind(this)
        this.getInputClassName = this.getInputClassName.bind(this)
        this.getErrorMessage = this.getErrorMessage.bind(this)
        this.handleNotificationClose = this.handleNotificationClose.bind(this)
    }

    state = {
        name: '',
        email: '',
        message: '',
        fieldErrors: [],
        notification: null,
        loaderActive: false,
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
            let errors: Array<FieldError> = []
            for (let i = 0; i < fields.length; i++) {
                errors.push({ field: fields[i], message: messages[i] })
            }
            this.setState({ fieldErrors: errors })
            return { success: false }
        }
        this.setState({ fieldErrors: [] })
        return { success: true }
    }

    getInputClassName(field: string): string {
        let error: Error | undefined = this.state.fieldErrors.find((error: FieldError) => error.field === field)
        if (error) {
            if ((error as FieldError).field == field) return 'form-field-error'
        }
        return 'form-field'
    }

    getErrorMessage(field: string): string {
        let error: Error | undefined = this.state.fieldErrors.find((error: FieldError) => error.field === field)
        if (error) {
            if ((error as FieldError).field == field) return (error as FieldError).message
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
            const URL = `https://script.google.com/macros/s/AKfycbyBvdU5fOxGw0fA24jW8EhJUzBQfqu_zBq2dtzAYU6ZPDrVThbm8fBN1s0Al7oZEiQ/exec`

            const formData = new FormData()
            formData.append('Name', this.state.name)
            formData.append('Email', this.state.email)
            formData.append('Message', this.state.message)

            fetch(URL, { method: 'POST', body: formData })
                .then((response) => response.json())
                .then((data) => {
                    if (data.result === 'success') {
                        this.props.history.push('/thankyou')
                    } else {
                        this.setState({ notification: { type: 'error', message: 'Try again' } })
                    }
                })
                .catch((error) => {
                    this.setState({
                        notification: { type: 'error', message: 'Sorry! there was an error. Try aagain later' },
                    })
                    console.error('Error!', error.message)
                })
        }
    }

    handleNotificationClose() {
        this.setState({ notification: null })
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
                    {this.state.notification && (
                        <Message
                            type={(this.state.notification! as Notification).type}
                            message={(this.state.notification! as Notification).message}
                            handleClose={this.handleNotificationClose}
                        />
                    )}
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
