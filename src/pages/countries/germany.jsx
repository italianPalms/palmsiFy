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
        <div className='countryInfo-container'>
            <h1>Germany</h1>
            <button className='blue-btn_small'
                onClick={goBack}
            >Go back</button>
            <div>
            {germanyInfo.map((germany, index) => {
                return ( 
                    <div key={index}>
                        <p>Name: {germany.name.common}</p>
                        <p>Official Name: {germany.name.official}</p>
                        <p>Continent: {germany.continents}</p>
                        <p>Population: {new Intl.NumberFormat('en-US').format(germany.population)}</p>
                        <p>Timezone: {germany.timezones}</p>
                        <p>Flag: {germany.flag}</p>
                        <pre>{JSON.stringify(germany, null, 2)}</pre>
                </div>
                )
            })}
            </div>
        </div>
        </>
    )
}