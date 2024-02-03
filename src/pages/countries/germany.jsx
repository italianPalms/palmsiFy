import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function GermanyInfo() {
    const navigate = useNavigate();
    const [germanyInfo, setGermanyInfo] = useState([]);

    const goBack = () => {
        navigate("/countryInfo")
    }

    useEffect(() => {
        async function fetchGermanyInfo() {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/name/germany')
                const data = response.data; 
                setGermanyInfo(data);
                console.log(data);

            } catch (error) {
                console.log("Failed to fetch germany info", error)
            }
        }
        fetchGermanyInfo();
    }, []);

    return (
        <>
            <h1 className='ml-4 text-2xl font-semibold'>Germany</h1>
            <button className='ml-4 mt-2 p-2 border-2 w-24 bg-sky-400 hover:bg-sky-500'
            onClick={goBack}
            >Go back</button>
            <div className='flex'>
            {germanyInfo.map((germany, index) => {
                return ( 
                    <div key={index} className='m-4'>
                        <p>Name: {germany.name.common}</p>
                        <p>Official Name: {germany.name.official}</p>
                        <p>Continent: {germany.continents}</p>
                        <p>Population: {new Intl.NumberFormat('en-US').format(germany.population)}</p>
                        <p>Timezone: {germany.timezones}</p>
                        <p>Flag: {germany.flag}</p>
                        <pre className='whitespace-pre-wrap break-word'>{JSON.stringify(germany, null, 2)}</pre>
                </div>
                )
            })}
            </div>
        </>
    )
}