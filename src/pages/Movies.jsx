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
                // console.log(movieList);
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
        
        <div className="bg-gradient-to-r from-neutral-950 via-purple-950 to-neutral-950">
        <div className="flex flex-col items-center justify-center pt-8 pb-8 text-4xl font-semibold">
            <h1>Movies</h1>
        </div>
        </div>
        <div className="flex flex-wrap pl-10 pr-10 mb-10">
        {movies.map((movie) => (
            <div key={movie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <div className="text-center">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
                        className="mx-auto mb-2"/>
                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                    {/* <p className="">{movie.overview}</p> */}
                </div>
            </div>
        ))}
        </div>
        
        
        {movies.map((movie) => {
            return <pre key={movie.id}>{JSON.stringify(movie, null, 2)}</pre>
        })}
        
        </>
    )
}