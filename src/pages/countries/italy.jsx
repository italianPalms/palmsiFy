import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ItalyInfo() {
    const navigate = useNavigate();
    const [italyInfo, setItalyInfo] = useState([]);

    const goBack = () => {
        navigate("/countryInfo")
    }

    useEffect(() => {
        async function fetchItalyInfo() {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/name/italy')
                const data = response.data; 
                setItalyInfo(data);
                console.log(data);

            } catch (error) {
                console.log("Failed to fetch Italy info", error)
            }
        }
        fetchItalyInfo();
    }, []);

    return (
        <>
            <h1 className='ml-4 text-2xl font-semibold'>Italy</h1>
            <button className='ml-4 mt-2 p-2 border-2 w-24 bg-sky-400 hover:bg-sky-500'
            onClick={goBack}
            >Go back</button>
            <div className='flex'>
            {italyInfo.map((italy, index) => {
                return ( 
                    <div key={index} className='m-4'>
                        <p>Name: {italy.name.common}</p>
                        <p>Official Name: {italy.name.official}</p>
                        <p>Continent: {italy.continents}</p>
                        <p>Population: {new Intl.NumberFormat('en-US').format(italy.population)}</p>
                        <p>Timezone: {italy.timezones}</p>
                        <p>Flag: {italy.flag}</p>
                        <pre className='whitespace-pre-wrap break-word'>{JSON.stringify(italy, null, 2)}</pre>
                </div>
                )
            })}
            </div>
        </>
    )
}