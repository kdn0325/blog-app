import React from 'react'
import "./Register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your Username..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your Email..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your Password..." />
                <button className="registerButton">register</button>
                <button className="registerResister">Login</button>
            </form>
        </div>
    )
}
