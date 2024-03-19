import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import airbot from "../../img/airobot.png";

export default function Login() {
    const [user, setUser] = useState({
        email: "", 
        password: "",
    })

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [, setCookie] = useCookies();
    const [cookies] = useCookies(["access_token"]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [emailBorderColor, setEmailBorderColor] = useState(false);
    const [passwordBorderColor, setPasswordBorderColor] = useState(false);
    const [loginAttempted, setLoginAttempted] = useState(false);

    // redicrect to profile page
    // if user try to enter the login page when logged in
    React.useEffect(() => {
        if (cookies.access_token) {
            navigate("/profile");
        }    
    }, [cookies.access_token, navigate]);
    
    const onLogin = async () => {
        try {
            if (user.email.length === 0) {
                console.log("Enter a email")
                return
            } else if (user.password.length === 0) {
                console.log("Enter your password")
                return
            }
            setLoading(true);
            const response = await axios.post('http://localhost:4000/login', user);
            console.log("Login successful", response.data);

            
            const accessToken = response.data.access_token;
            localStorage.setItem("access_token", response.data.access_token);
            // console.log("Access token", accessToken);
            setCookie("access_token", accessToken, {path: "/"}); 
            navigate('/profile');
            
        } catch (error) {
            console.log("Login failed " + error);
        } finally {
            setLoading(false);
            setLoginAttempted(true);
        }
    }

    const onLoginKeypress = e => {
        if (e.keyCode === 13 && !buttonDisabled) {
            onLogin();
        }
    };

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

        setEmailBorderColor( loginAttempted && user.email.length === 0)
        setPasswordBorderColor(loginAttempted && user.password.length === 0)

    }, [user.email.length, user.password.length, loginAttempted]);

    const buttonColor = buttonDisabled ? 'bg-orange-700 hover:bg-orange-900' : 'bg-sky-400 hover:bg-sky-500';

    const emailColor = emailBorderColor ? "border-red-500" : ""; 
    const passwordColor = passwordBorderColor ? "border-red-500" : "";

    return (
        <>
        <div>
            <Header />
        </div>
        <div className="login_signup-container">
            <div>
                <img className="login_signup-img" src={airbot} alt="Aitbot"></img>
            </div>
            <div className="login_signup-content">
                <h1>{loading ? "Processing" : "Login"}</h1>
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
                {loginAttempted && emailBorderColor && <p className="required-field">Email is required</p>}

                <label className="login_signup-label">Password</label>
                <input
                    className={`login_signup-input ${passwordColor}`}
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    onKeyDown={onLoginKeypress}
                    placeholder="Enter your password"
                    required>
                </input>
                {loginAttempted && passwordBorderColor && <p className="required-field">Password is required</p>}

                <button type="submit" className={`login_signup-btn ${buttonColor}`}
                onClick={onLogin}
                >{buttonDisabled ? "Fill out required fields" : "Login"}</button>

                <a href="/signup" className="login_signup-link">Not a user? Signup here!</a>

                {loginAttempted && emailBorderColor || passwordBorderColor ? <h2 className="login_signup-error">Please fill out all required fields</h2> : ""}
            </div>
        </div>
        </>
    )
}