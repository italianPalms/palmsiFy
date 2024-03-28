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
        <div className='countryInfo-container'>
            <h1>Italy</h1>
            <button className='blue-btn_small'
            onClick={goBack}
            >Go back</button>
            <div>
            {italyInfo.map((italy, index) => {
                return ( 
                    <div key={index}>
                        <p>Name: {italy.name.common}</p>
                        <p>Official Name: {italy.name.official}</p>
                        <p>Continent: {italy.continents}</p>
                        <p>Population: {new Intl.NumberFormat('en-US').format(italy.population)}</p>
                        <p>Timezone: {italy.timezones}</p>
                        <p>Flag: {italy.flag}</p>
                        <pre>{JSON.stringify(italy, null, 2)}</pre>
                </div>
                )
            })}
            </div>
        </div>
        </>
    )
}