import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    return (
        <div className="RegisterPage">
            <div className="register-form">
                <div className="registerBox">
                    <form>
                        <h2>Sign up</h2>
                        <div className="inputBox">
                            <input required name="firstName" onChange={onChangeFirstName}></input>
                            <span>First Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input required name="lastName" onChange={onChangeLastName}></input>
                            <span>Last Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input required name="username" onChange={onChangeUsername}></input>
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="email" required name="email" onChange={onChangeEmail}></input>
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required name="password" onChange={onChangePassword}></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required></input>
                            <span>Confirm Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <a href="/forgot">Forgot Password</a>
                            <a href="/login">Sign in</a>
                        </div>
                        <input type="submit" value="login" className="submitButton"></input>
                    </form>
                </div>
            </div>
            <div className="register-content">
                <div className="contentBox">
                    <h1>Welcome Back</h1>
                    <div>
                        <div>To stay connected with the community</div>
                        <div>login with your info</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;