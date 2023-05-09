import React, { useState } from "react";
import "./LoginPage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function LoginPage(){
    return(
        <div className="LoginPage">
            <div className="login-content">
                <div className="contentBox">
                    <h1>Welcome Back</h1>
                    <div>
                        <div>To stay connected with the community</div>
                        <div>login with your info</div>
                    </div>
                    
                </div>
            </div>
            <div className="login-form">
                <div className="loginBox">
                    <form>
                        <h2>Sign in</h2>
                        <div className="inputBox">
                            <input type="email" required onChange={onChangeEmail} name="email"></input>
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required onChange={onChangePassword} name="password"></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <a href="/forgot">Forgot Password</a>
                            <a href="/register">Sign up</a>
                        </div>
                        <input type="submit" value="login" className="submitButton" onClick={onSubmit}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;