import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

    export default function Profile() {

        const navigate = useNavigate();
        const [, setCookie] = useCookies();
        const [loading, setLoading] = useState(false);

        const logout = async () => {
            try {
                setLoading(true);
                await axios.get('http://localhost:4000/logout'); 
                console.log("Logout successful");

                setCookie("access_token", "", {expires: new Date(0)});

                navigate("/home")
                
            } catch (error) {
                console.log("Logout failed" + error);
            } finally {
                setLoading(false);
            }
        }

        return (
            <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
                <h1 className="text-4xl font-semibold">{loading ? "Logging out" : "Welcome to your profile"}</h1>
                <h4 className="font-semibold rounded bg-purple-500 p-1 mt-8">See user details here</h4>


                <button className="boder-2 mt-8 p-2 w-48 bg-orange-700 hover:bg-orange-900 rounded" onClick={() => {
                    console.log("User details button clicked");
                }}>Get user details</button>

                <button
                className="border-2 mt-6 p-2 w-48 bg-sky-400 hover:bg-sky-500 rounded"
                onClick={logout}
                >Logout</button>
            </div>
            </>
        )
    }