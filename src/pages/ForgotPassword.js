import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function () {

    const navigate = useNavigate();

    const resetPassword = () => {
        console.log("Reset password")
        navigate("/login");
    }

    return (
        <>
        <div className="mt-2">
            <Header />
        </div>

        <div className="flex flex-col items-center min-h-screen justify-center py-2">
        <h1 className="text-4xl font-semibold">Enter your email to reset your password</h1>

        <label className="mb-2 mt-2 font-semibold">Email</label>
        <input className="p-2 mb-2 text-black"
        id="email" 
        type="email" 
        placeholder="Enter your email"
        required></input>

        <button className="border-2 p-2 w-48 mt-2 bg-sky-400 hover:bg-sky-500">Verify email</button>

        <label className="mb-2 mt-4 font-semibold">New password</label>
        <input className="p-2 mb-2 text-black"
        id="password"
        type="password"
        placeholder="Enter new password"
        required></input>

        <button className="border-2 p-2 w-48 mt-2 bg-orange-700 hover:bg-orange-900"
        onClick={resetPassword}>Reset password</button>
        </div>
        </>
    )

}