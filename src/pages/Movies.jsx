import React from "react";
import { LoggedInHeader } from "../components/LoggedInHeader";
import { MovieHeader } from "../components/MovieHeader";

export default function Movies() {

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
        </>
    )
}