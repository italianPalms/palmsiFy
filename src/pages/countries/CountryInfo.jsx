import React from 'react';
import { useNavigate } from "react-router-dom";

export default function CountryInfo() {

    const navigate = useNavigate();
    const italy = () => {
        navigate("/italy")
    };

    const norway = () => {
        navigate("/norway")
    };

    const USA = () => {
        navigate("/USA")
    };

    const germany = () => {
        navigate("/germany")
    };

    return (
        <>
        <div className='countryPage-container'>
            <h1>Country Information</h1>
            <div className='country-btn-container'>
                <button className='login-btn_1'
                onClick={italy}
                >Italy</button>
                <button className='login-btn_1'
                onClick={norway}
                >Norway</button>
                    <button className='login-btn_1'
                onClick={USA}
                >USA</button>
                <button className='login-btn_1'
                onClick={germany}
                >Germany</button>
           </div>
        </div>
        </>
    )
}