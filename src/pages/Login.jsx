import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {
''
    const [user, setUser] = useState({
        email: "", 
        password: "",
    })

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [, setCookie] = useCookies();
    const [cookies] = useCookies(["access_token"]);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // redicrect to profile page
    // if user try to enter the login page when logged in
    React.useEffect(() => {
        if (cookies.access_token) {
            navigate("/profile");
        }    
    }, [cookies.access_token, navigate]);
    
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/login', user);
            console.log("Login successful", response.data);

            
            const accessToken = response.data.access_token;
            localStorage.setItem("access_token", response.data.access_token);
            // console.log("Access token", accessToken);
            setCookie("access_token", accessToken, {path: "/"}); 
            navigate('/profile');
            
        } catch (error) {
            console.log("Login failed" + error);
        } finally {
            setLoading(false);
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
    }, [user.email.length, user.password.length]);

    const buttonColor = buttonDisabled ? 'bg-orange-700 hover:bg-orange-900' : 'bg-sky-400 hover:bg-sky-500';

    return (
        <>
        <div>
            <Header />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen py-2 pb-56">
        <h1 className="text-4xl font-semibold mb-3">{loading ? "Processing" : "Login"}</h1>

        <label className="text-xl font-medium mt-3">Email</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="Enter your email"></input>

        <label className="text-xl font-medium mt-3">Password</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        onKeyDown={onLoginKeypress}
        placeholder="Enter your password"></input>

        <button type="submit" className={`border-2 mt-8 p-2 w-48 ${buttonColor}`}
        onClick={onLogin}
        >{buttonDisabled ? "Fill out required fields" : "Login"}</button>

        <a href="/signup" className="p-2 font-medium text-base">Not a user? Signup here!</a>

        </div>
        </>
    )
}