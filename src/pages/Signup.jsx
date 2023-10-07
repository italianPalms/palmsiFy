import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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

        <div className="flex flex-col items-center justify-center min-h-screen py-2 pb-56">

        <h1 className="text-4xl font-semibold">{loading ? "Processing" : "Signup"}</h1>

        <label className="text-xl font-medium mt-3">Username</label>
        <input
        className={`p-2 mt-2 text-black rounded border-2 ${usernameColor}`}
        id="username"
        type="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="Enter your username"></input>

        <label className="text-xl font-medium mt-3">Email</label>
        <input
        className={`p-2 mt-2 text-black rounded border-2 ${emailColor}`}
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="Enter your email">
        </input>

        <label className="text-xl font-medium mt-3">Password</label>
        <input
        className={`p-2 mt-2 text-black rounded border-2 ${passwordColor}`}
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        onKeyDown={onSingupKeypress}
        placeholder="Enter your password"
        ></input>

        <button className={`border-2 mt-8 p-2 min-w-fit w-48 ${buttonColor}`}
        onClick={onSignup}
        >{buttonDisabled ? "Fill out required fields" : "Signup"}</button>

        <a href="/login" className="p-2 font-medium text-base">Already a user? Login here!</a>

        </div>
        </>
    )
}