import React, { Component } from 'react'
import './Register.scss'

type RegisterProps = {
    handleRegister: () => void
}

class Register extends Component<RegisterProps, {}> {
    render() {
        return (
            <div className="Register">
                <input type="text" placeholder="Enter your email" />
                <button onClick={this.props.handleRegister}>Register</button>
            </div>
        )
    }
}

export default Register
