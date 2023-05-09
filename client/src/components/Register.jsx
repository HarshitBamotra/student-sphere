import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    let navigate = useNavigate();
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")

    function onChangeFirstName(e){
        setFirstName(e.target.value);
    }
    
    function onChangeLastName(e){
        setLastName(e.target.value);
    }
    
    function onChangeUsername(e){
        setUsername(e.target.value);
    }
    
    function onChangeEmail(e){
        setEmail(e.target.value);
    }
    
    function onChangePassword(e){
        setPassword(e.target.value);
    }
    
    function onChangeCpassword(e){
        setCpassword(e.target.value);
    }
    async function onSubmit(e){
        e.preventDefault();
        const registerObject = {
            firstName:firstName,
            lastName:lastName,
            username:username,
            email:email,
            password:password,
            cpassword:cpassword
        }
        console.log(registerObject);
        axios.post("http://localhost:5000/register", registerObject)
            .then((res) => {
                console.log(res.data)
                if(res.data.isCorrect===true){
                    navigate("/login")
                }
                else{
                    navigate("/register")
                }
            }).catch((error) => {
                console.log(error)
            }
        );
    }
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
                    <h1>Start Your Journey</h1>
                    <div>
                        <div>To stay connected with the community</div>
                        <div>login with your info</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;