import React from 'react';


export default function VerifyEmail() {

    return (
        <>
        <div className='items-center justify-center flex flex-col min-h-screen p-2'>
        <h1 className='text-4xl font-semibold'>Verify Email</h1>
        <p className='font-semibold text-xl mt-8'>Please check your email and follow the steps to verify your email</p>    

        <a href='/login' className='font-medium text-base mt-4'>Go to login page</a>
        </div>
        </>
    )
}