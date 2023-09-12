import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {

    const [user, setUser] = useState({
        email: "", 
        password: "",
    })

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [, setCookie] = useCookies();

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/login', user);
            console.log("Login successful", response.data);

            const accessToken = response.data.access_token;
            // console.log("Access token", accessToken);
            setCookie("access_token", accessToken, {path: "/"}); 
            
            navigate('/profile');

        } catch (error) {
            console.log("Login failed" + error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <div className="mt-2">
            <Header />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-semibold mb-3">Login</h1>

        <label className="text-xl font-medium mt-3">Email</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({... user, email: e.target.value})}
        placeholder="Enter your email"></input>

        <label className="text-xl font-medium mt-3">Password</label>
        <input
        className="p-2 mt-2 text-black rounded"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({... user, password: e.target.value})}
        placeholder="Enter your password"></input>

        <button className="border-2 mt-8 p-2 w-48 bg-sky-400 hover:bg-sky-500"
        onClick={onLogin}
        >Login</button>

        <a href="/signup" className="p-2 font-medium text-base">Not a user? Signup here!</a>

        </div>
        </>
    )
}