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
                <div className='country-btn-top'>
                    <button className='pink-btn_medium country-btn'
                    onClick={italy}
                    >Italy</button>
                    <button className='pink-btn_medium country-btn'
                    onClick={norway}
                    >Norway</button>
                </div>
                <div>
                    <button className='pink-btn_medium country-btn'
                    onClick={USA}
                    >USA</button>
                    <button className='pink-btn_medium country-btn'
                    onClick={germany}
                    >Germany</button>
                </div>
           </div>
        </div>
        </>
    )
}