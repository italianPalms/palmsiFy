import React, { useState, useEffect } from "react";
import { LoggedInHeader } from "../components/LoggedInHeader";
import { MovieHeader } from "../components/MovieHeader";

export default function Movies() {

    const [movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2VjYzJmNTAyNTUwNWYzYTYyMzc3OGZhNzgzMTY0NiIsInN1YiI6IjYzZTdjNmQ2MTI3Nzc4MDA4OTVmMDg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wtHvOjgCOPgJELSD4gF3ofi_H71MW1P5QxxaCHCMHCQ'
        }
      };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
                const data = await response.json();
                //Extract the results array from the API reponse
                const movieList = data.results || [];
                console.log(movieList);
                setMovies(movieList);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div>
            <div className="flex">
            <LoggedInHeader />
            <MovieHeader />
            </div>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-14 text-4xl font-semibold">
            <h1>Movies</h1>
        </div>
        {movies.map((item) => {
            return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>
        })}
        </>
    )
}