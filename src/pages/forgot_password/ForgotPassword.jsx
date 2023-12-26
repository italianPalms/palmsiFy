import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword () {

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "", 
        password: "",
    })

    const [emailBorderColor, setEmailBorderColor] = useState(false);
    const [passwordBorderColor, setPasswordBorderColor] = useState(false);
    const [resetPasswordAttempted, setResetPasswordAttempted] = useState(false);

    const resetPassword = async () => {
        try {
            if (user.email.length === 0) {
                console.log("Please enter a email")
                return;
            } else if (user.password.length === 0) {
                console.log("Pleas enter a new password")
                return; 
            }
            
            const response = await axios.post('http://localhost:4000/resetPassword', user);
            console.log('Password reset successful', response.data);
            
            navigate("/login");

        } catch (error) {
            console.log("Password reset failed" + error);
        } finally {
            setResetPasswordAttempted(true);
        }
    }

    const onResetKeyPress = e => {
        if (e.keyCode === 13 && !buttonDisabled) {
            resetPassword();
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

        setEmailBorderColor(resetPasswordAttempted && user.email.length === 0);
        setPasswordBorderColor(resetPasswordAttempted && user.password.length === 0);

    }, [user.email.length, user.password.length, resetPasswordAttempted]);

    const buttonColor = buttonDisabled ? 'bg-orange-700 hover:bg-orange-900' : 'bg-sky-400 hover:bg-sky-500';
    const emailColor = emailBorderColor ? "border-red-500" : "";
    const passwordColor = passwordBorderColor ? "border-red-500" : "";

    return (
        <>
        <div>
            <Header />
        </div>
        <div className="flex flex-col items-center min-h-screen justify-center py-2 pb-56">
            <h1 className="text-4xl font-semibold mb-3">Reset your password below</h1>
            <label className="mb-2 mt-2 font-semibold">Email</label>
            <input className={`p-2 text-black rounded border-2 ${emailColor}`}
                id="email" 
                type="email" 
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Enter your email"
                required>
            </input>
            {resetPasswordAttempted && emailBorderColor ? <p className="text-red-500">Email is required</p> : ""}

            <label className="mb-2 mt-4 font-semibold">New password</label>
            <input className={`p-2 text-black rounded border-2 ${passwordColor}`}
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                onKeyDown={onResetKeyPress}
                placeholder="Enter new password"
                required>
            </input>
            {resetPasswordAttempted && passwordBorderColor ? <p className="text-red-500">New password is required</p> : ""}

            <button className={`border-2 p-2 w-48 mt-6 mb-3 ${buttonColor}`}
            onClick={resetPassword}
            >{buttonDisabled ? "Fill out required fields": "Reset password"}</button>

            <a href="/login" className="p-2 font-medium text-base">Back to login</a>

            {resetPasswordAttempted && emailBorderColor || passwordBorderColor ? <h2 className="text-2xl">Please fill out all required fields</h2> : ""}
        </div>
        </>
    )

}