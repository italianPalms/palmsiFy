import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('http://localhost:4000/verifyEmail', {token: token});
                console.log(token);
            setVerified(true);
            if (!token) {
                console.log("No token");
            }

        } catch (error) {
            console.log("Verify email failed", error);
            setError(true);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    });

    return (
        <>
        <div className='verifyEmail-container'>
        <div>
            <div className='verifyHeader'>
            <h1>Verify Email</h1>
            </div>
            {verified && (
                <div className='success-error-container'>
                    <h2 className='emailVerified'>Email verified</h2>
                    <a href='/login' className='login_signup-link'>Click here to go to the login page</a>
                </div>
            )}    
            {error && (
                <div className='success-error-container'>
                    <h2 className='emailVerificationError'>Error</h2>
                    <p>Something went wrong. Please try again!</p>
                </div>
            )}
        </div>
        </div>
        </>
    )
}