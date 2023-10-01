import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword () {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "", 
        password: "",
    })
    const resetPassword = async () => {
        try {
            const response = await axios.post('http://localhost:4000/resetPassword', user);
            console.log('Password reset successful', response.data);
            
            navigate("/login");

        } catch (error) {
            console.log("Password reset failed" + error);
        }        
    }


    return (
        <>
        <div>
            <Header />
        </div>

        <div className="flex flex-col items-center min-h-screen justify-center py-2">
        <h1 className="text-4xl font-semibold">Enter your email to reset your password</h1>

        <label className="mb-2 mt-2 font-semibold">Email</label>
        <input className="p-2 mb-2 text-black rounded"
        id="email" 
        type="email" 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="Enter your email"
        required>
        </input>

        {/* <button className="border-2 p-2 w-48 mt-2 bg-sky-400 hover:bg-sky-500"
        onClick={verifyEmail}
        >Verify email</button> */}

        <label className="mb-2 mt-4 font-semibold">New password</label>
        <input className="p-2 mb-2 text-black rounded"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="Enter new password"
        required>
        </input>

        <button className="border-2 p-2 w-48 mt-2 bg-orange-700 hover:bg-orange-900"
        onClick={resetPassword}>Reset password</button>
        </div>
        </>
    )

}