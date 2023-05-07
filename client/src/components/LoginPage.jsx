import React from "react";
import "./LoginPage.css"
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
                            <input type="email" required></input>
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required></input>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <a href="/forgot">Forgot Password</a>
                            <a href="/register">Sign up</a>
                        </div>
                        <input type="submit" value="login" className="submitButton"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;