import React, { useState } from "react";
import "./LoginPage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function LoginPage(){
    let navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
    async function onSubmit(e) {
        e.preventDefault();
        const loginObject = {
            email: email,
            password: password
        } 

        axios.post("http://localhost:5000/login", loginObject)
            .then((res) => {
                console.log(res.data)
                if(res.data.isCorrect===true){
                    navigate("/landing")
                }
                else{
                    setEmail("");
                    setPassword("");
                    navigate("/login")
                }

            }).catch((error) => {
                console.log(error)
            });
        }
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

export default LoginPage;