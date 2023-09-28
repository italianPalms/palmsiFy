import React from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInHeader } from "../components/LoggedInHeader";

export default function Movies() {

    const navigate = useNavigate();
    const profile = () => {
        navigate('/profile');
    }
    return (
        <>
        <div className="flex">
        <div>
        <button className="p-1 m-3 ml-4"
            onClick={profile}
            >Go to profile page</button>
        </div>
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