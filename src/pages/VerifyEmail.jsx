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
    }, [token]);

    return (
        <>
        <div className='items-center justify-center flex flex-col min-h-screen p-2'>

        <h1 className='text-4xl font-semibold'>Verify Email</h1>
        {/* <h2 className='font-semibold text-2xl mt-8'>{token ? `${token}` : "no token"}</h2> */}

        {verified && (
            <div>
                <h2 className='text-2xl bg-green-400 text-black p-2 mt-8 items-center justify-center flex w-66'>Email verified</h2>
                <a href='/login' className='font-medium text-base mt-8 items-center justify-center flex flex-col'>Click here to go to the login page</a>
            </div>
            
        )}    

        {error && (
            <div>
                <h2 className='text-3xl bg-red-400 text-black p-2 mt-8 w-66 items-center justify-center flex'>Error</h2>
                <p className='font-medium mt-4 flex items-center justify-center'>Something went wrong.Please try again!</p>
            </div>
        )}
        </div>
        </>
    )
}