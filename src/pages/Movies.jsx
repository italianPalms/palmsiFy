import React, { useState, useEffect, useRef } from "react";
import { LoggedInHeader } from "../components/LoggedInHeader";
import Footer from "../components/Footer";

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [footerVisible, setFooterVisible] = useState(false);
    const contentRef = useRef(null);

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

    useEffect(() => {
        // handle scrolling to make sure the footer is not visible before the user scroll all the way down
        function handleScroll() {
            // calculate how far the user has scrolled down
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const contentTop = contentRef.current.offsetTop;
            const contentHeight = contentRef.current.clientHeight;


            // when the user has scrolled to the end of the content, show the footer
            if(scrollY + windowHeight >= contentTop + contentHeight /2) {
                setFooterVisible(true);
            } else {
            setFooterVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // TODO: Add functionality to search for movies (including a search bar that cbecomes visible when the user click the search icon)

    return (
        <>
        <div className="relative">
            <div>
                <div className="flex">
                    <LoggedInHeader />
                </div>
            </div>
            <div className="flex-1" ref={contentRef}>
                <div className="mt-4 bg-gradient-to-r from-neutral-950 via-purple-950 to-neutral-950">
                    <div className="flex flex-col items-center justify-center pt-8 pb-8 text-4xl font-semibold">
                        <h1>Movies</h1>
                    </div>
                </div>
                <div className="pl-10 mb-8">
                    <button className=" relative p-1 m-3 mt-4 top-5"
                        onClick={() => {
                        console.log("Search icon clicked");
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill="white">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-wrap pl-10 pr-10 mb-10">
                    {movies.map((movie) => (
                    <div key={movie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                        <div className="text-center">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
                            className="mx-auto mb-2"/>
                            <h2 className="text-lg font-semibold">{movie.title}</h2>
                            <p className="font-medium">{movie.vote_average}</p>
                        </div>
                    </div>
                    ))}
                </div>
                {movies.map((movie) => {
                return <pre key={movie.id}>{JSON.stringify(movie, null, 2)}</pre>
                })}
            </div>
            <Footer className={footerVisible ? "sticky-footer footerVisible" : "sticky-footer"} />
        </div>
        </>
    )
}