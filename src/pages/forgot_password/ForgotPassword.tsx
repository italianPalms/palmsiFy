import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import airbot from "../../img/airobot.png";

const ForgotPassword = () => {

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

    const onResetKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
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
        <div className="login_signup-container">
            <div>
                <img className="login_signup-img" src={airbot} alt="Aitbot"></img>
            </div>

            <div className="login_signup-content">
                <h1>Reset your password</h1>
                <label className="login_signup-label">Email</label>
                <input className={`login_signup-input ${emailColor}`}
                    id="email" 
                    type="email" 
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="Enter your email"
                    required>
                </input>
                
                {resetPasswordAttempted && emailBorderColor ? <p className="required-field">Email is required</p> : ""}

                <label className="login_signup-label">New password</label>
                <input className={`login_signup-input ${passwordColor}`}
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    onKeyDown={onResetKeyPress}
                    placeholder="Enter new password"
                    required>
                </input>
            
                {resetPasswordAttempted && passwordBorderColor ? <p className="required-field">New password is required</p> : ""}

                <button className={`pink-btn_medium ${buttonColor}`}
                onClick={resetPassword}
                >{buttonDisabled ? "Fill out required fields": "Reset password"}</button>

                <a href="/login" className="login_signup-link">Back to login</a>

                {resetPasswordAttempted && emailBorderColor || passwordBorderColor ? <h2 className="login_signup-error">Please fill out all required fields</h2> : ""}
            </div>
        </div>
        </>
    )
}
export default ForgotPassword;