import React, { Component } from 'react'
import './Register.scss'

type RegisterProps = {
    handleRegister: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

class Register extends Component<RegisterProps, {}> {
    render() {
        return (
            <div className="Register">
                <input type="text" placeholder="Enter your email" onChange={this.props.handleChange} name="email" />
                <button onClick={this.props.handleRegister}>Register</button>
            </div>
        )
    }
}

export default Register
