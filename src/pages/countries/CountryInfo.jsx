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
        <div className='flex flex-col items-left justify-left min-w-min mt-4 ml-4'>
            <h1 className='text-2xl font-semibold'>Country Information</h1>
           <button className='p-2 border-2 mt-2 w-24 bg-sky-400 hover:bg-sky-500'
           onClick={italy}
           >Italy</button>
           <button className='p-2 border-2 mt-2 w-24 bg-sky-400 hover:bg-sky-500'
           onClick={norway}
           >Norway</button>
            <button className='p-2 border-2 mt-2 w-24 bg-sky-400 hover:bg-sky-500'
           onClick={USA}
           >USA</button>
           <button className='p-2 border-2 mt-2 w-24 bg-sky-400 hover:bg-sky-500'
           onClick={germany}
           >Germany</button>
        </div>
        </>
    )
}