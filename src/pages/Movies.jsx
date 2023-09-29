import React from "react";
import { LoggedInHeader } from "../components/LoggedInHeader";

export default function Movies() {

    return (
        <>
        <div className="flex">
    
        <div>
            <LoggedInHeader />
        </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 text-4xl font-semibold">
            <h1>Movies</h1>
        </div>
        </>
    )
}