import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

    export default function Profile() {

        const navigate = useNavigate();
        const [, setCookie] = useCookies();

        const logout = async () => {
            try {
                await axios.get('http://localhost:4000/logout'); 
                console.log("Logout successful");

                setCookie("access_token", "", {expires: new Date(0)});

                navigate("/home")
                
            } catch (error) {
                console.log("Logout failed" + error);
            }
        }

        return (
            <>
            <div className="flex flex-col items-center justify-center mt-40 ">
                <h1 className="text-4xl font-semibold">Welcome to your profile</h1>


                <button className="boder-2 mt-12 p-2 w-48 bg-orange-700 hover:bg-orange-900" onClick={() => {
                    console.log("User details button clicked");
                }}>Get user details</button>

                <button
                className="border-2 mt-6 p-2 w-48 bg-sky-400 hover:bg-sky-500"
                onClick={logout}
                >Logout</button>
            </div>
            </>
        )
    }