import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";

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
                console.log(movieList);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    // TODO: Add functionality to search for movies (including a search bar that cbecomes visible when the user click the search icon)

    return (
        <>
        <div className="moviePage-container">
            <div className="movie-container">
                <h1>Movies</h1>
                <div className="movie-grid">
                    {movies.map((movie) => (
                    <div className="movie-item" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                            <h2>{movie.title}</h2>
                            <p>{movie.vote_average}</p>
                    </div>
                    ))}
                </div>
                {/* <div className="movie-jsonResponse">
                {movies.map((movie) => {
                return <pre key={movie.id}>{JSON.stringify(movie, null, 2)}</pre>
                })}
                </div> */}
            </div>
            {/* <Footer /> */}
        </div>
        </>
    )
}