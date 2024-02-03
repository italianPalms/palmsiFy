import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function USAInfo() {
    const navigate = useNavigate();
    const [USAInfo, setUSAInfo] = useState([]);

    const goBack = () => {
        navigate("/countryInfo")
    }

    useEffect(() => {
        async function fetchUSAInfo() {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/name/usa')
                const data = response.data; 
                setUSAInfo(data);
                console.log(data);

            } catch (error) {
                console.log("Failed to fetch USA info", error)
            }
        }
        fetchUSAInfo();
    }, []);

    return (
        <>
            <h1 className='ml-4 text-2xl font-semibold'>USA</h1>
            <button className='ml-4 mt-2 p-2 border-2 w-24 bg-sky-400 hover:bg-sky-500'
            onClick={goBack}
            >Go back</button>
            <div className='flex'>
            {USAInfo.map((USA, index) => {
                return ( 
                    <div key={index} className='m-4'>
                        <p>Name: {USA.name.common}</p>
                        <p>Official Name: {USA.name.official}</p>
                        <p>Continent: {USA.continents}</p>
                        <p>Population: {new Intl.NumberFormat('en-US').format(USA.population)}</p>
                        <p>Timezone: {USA.timezones}</p>
                        <p>Flag: {USA.flag}</p>
                        <pre className='whitespace-pre-wrap break-word'>{JSON.stringify(USA, null, 2)}</pre>
                    </div>
                )
            })}
            </div>
        </>
    )
}