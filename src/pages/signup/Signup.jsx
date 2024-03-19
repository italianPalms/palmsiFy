import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import airbot from "../../img/airobot.png";

export default function Signup() {

    const [user, setUser] = useState({
        email: "", 
        password:"", 
        username:"", 
    })

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [cookies] = useCookies(["access_token"]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [passwordBorderColor, setPasswordBorderColor] = useState(false);
    const [emailBorderColor, setEmailBorderColor] = useState(false);
    const [usernameBorderColor, setUsernameBorderColor] = useState(false);
    const [signupAttempted, setSignupAttempted] = useState(false);

    // redicrect to profile page
    // if user try to enter the signup page when logged in 
    React.useEffect(() => {
        if (cookies.access_token) {
            navigate("/profile");
        }    
    }, [cookies.access_token, navigate]);
    
    const onSignup = async () => {
        try {
            if (user.username.length === 0) {
                console.log("Enter a username")
                return;
            } else if (user.email.length === 0) {
                console.log("Enter a email")
                return;
            } else if (user.password.length === 0) {
                console.log("Enter a password")
                return
            }
            
            setLoading(true);
            const response = await axios.post("http://localhost:4000/signup", user);
            console.log("Signup successful", response.data);
            navigate("/login");

        } catch (error) {
            console.log("Signup failed" + error)
            
        } finally {
            setLoading(false);
            setSignupAttempted(true);
        }
    }

    const onSingupKeypress = e => {
        if (e.keyCode === 13 && !buttonDisabled) {
            onSignup();
        }
    }

    useEffect(() => {
        if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

        setPasswordBorderColor(signupAttempted && user.password.length === 0)
        setEmailBorderColor(signupAttempted && user.email.length === 0)
        setUsernameBorderColor(signupAttempted && user.username.length === 0)
    }, [user, signupAttempted]);

    const buttonColor = buttonDisabled ? 'bg-orange-700 hover:bg-orange-900' : 'bg-sky-400 hover:bg-sky-500';
    const passwordColor = passwordBorderColor ? "border-red-500" : "";
    const emailColor = emailBorderColor ? "border-red-500" : "";
    const usernameColor = usernameBorderColor ? "border-red-500" : "";

    return (
        <>
        <div>
            <Header />
        </div>
        <div className="login_signup-container">
            <div>
                <img className="login_signup-img" src={airbot} alt="Airbot"></img>
            </div>
            <div className="login_signup-content">
                <h1>
                    {loading ? "Processing" : "Signup"}
                    </h1>

                <label className="login_signup-label">Username</label>
                <input
                    className={`login_signup-input ${usernameColor}`}
                    id="username"
                    type="username"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="Enter your username"
                    required>
                </input>
                {signupAttempted && usernameBorderColor && <p className="required-field">Username is required</p>}

                <label className="login_signup-label">Email</label>
                <input
                    className={`login_signup-input ${emailColor}`}
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="Enter your email"
                    required>
                </input>
                {signupAttempted && emailBorderColor && <p className="required-field">Email is required</p>}

                <label className="login_signup-label">Password</label>
                <input
                    className={`login_signup-input ${passwordColor}`}
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    onKeyDown={onSingupKeypress}
                    placeholder="Enter your password"
                    required>
                </input>
                {signupAttempted && passwordBorderColor && <p className="required-field">Password is required</p>}

                <button className={`login_signup-btn ${buttonColor}`}
                    onClick={onSignup}
                >{buttonDisabled ? "Fill out required fields" : "Signup"}</button>

                <a href="/login" className="login_signup-link">Already a user? Login here!</a>

                {signupAttempted && usernameBorderColor || emailBorderColor || passwordBorderColor ? <h2 className="login_signup-error">Please fill out all required fields</h2> : ""}
            </div>
        </div>
        </>
    )
}