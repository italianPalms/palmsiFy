import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NorwayInfo() {
    const navigate = useNavigate();
    const [norwayInfo, setNorwayInfo] = useState([]);

    const goBack = () => {
        navigate("/countryInfo")
    }

    useEffect(() => {
        async function fetchNorwayInfo() {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/name/norway')
                const data = response.data; 
                setNorwayInfo(data);
                console.log(data);

            } catch (error) {
                console.log("Failed to fetch Norway info", error)
            }
        }
        fetchNorwayInfo();
    }, []);

    return (
        <>
            <h1 className='ml-4 text-2xl font-semibold'>Norway</h1>
            <button className='ml-4 mt-2 p-2 border-2 w-24 bg-sky-400 hover:bg-sky-500'
            onClick={goBack}
            >Go back</button>
            <div className='flex'>
            {norwayInfo.map((norway, index) => {
                return ( 
                    <div key={index} className='m-4'>
                        <p>Name: {norway.name.common}</p>
                        <p>Official Name: {norway.name.official}</p>
                        <p>Continent: {norway.continents}</p>
                        <p>Population: {new Intl.NumberFormat('en-US').format(norway.population)}</p>
                        <p>Timezone: {norway.timezones}</p>
                        <p>Flag: {norway.flag}</p>
                        <pre className='whitespace-pre-wrap break-word'>{JSON.stringify(norway, null, 2)}</pre>
                </div>
                )
            })}
            </div>
        </>
    )
}