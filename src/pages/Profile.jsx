import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { LoggedInHeader } from "../components/LoggedInHeader";
import { LoggedInHeaderII } from "../components/LoggedInHeaderII";

    export default function Profile() {

        const navigate = useNavigate();
        const [, setCookie] = useCookies();
        const [loading, setLoading] = useState(false);
        const [user, setUser] = useState(null);
        const [cookies ] = useCookies(["access_token"]);
        const [showUserDetails, setShowUserDetails] = useState(false);
        const [buttonText, setButtonText] = useState("Show user details");


        const toggleUserDetails = () => {
            if (showUserDetails) {
                setShowUserDetails(false); 
                setButtonText("Show user details");
            } else {
                axios.get('http://localhost:4000/getUserDetails', {
                    headers: {
                        Authorization: `Bearer ${cookies.access_token}`
                    },
                })
                .then(response => {
                    setUser(response.data);
                    setShowUserDetails(true);
                    setButtonText("Hide user details");

                    console.log("User details", response.data);
                })
                .catch(err => console.log("Failed to fetch user details", err)); 
                }
            }


        return (
            <>
            <div className="flex">
                <LoggedInHeader />
                <LoggedInHeaderII />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 pb-64">
                <h1 className="text-4xl font-semibold">{loading ? "Logging out" : "Welcome to your profile"}</h1>
                <div className="w-100 text-xl mt-8">
                    {showUserDetails && user ? (
                    <table>
                        <thead>
                            <tr>
                                <th className="p-2">Username</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2">{user.username}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user._id}</td>  
                            </tr>
                        </tbody>
                    </table>
                    ) : (
                        <p className="mt-4">Click to see user details 😎</p>
                    )}
                </div>
                {/* <h4 className="font-semibold rounded bg-purple-500 p-1 mt-8">{data === "nothing" ? "Nothing" : <Link to={`/user/${data}`}>{data}</Link>}</h4> */}

                <button className="boder-2 mt-8 p-2 w-48 bg-orange-700 hover:bg-orange-900 rounded" 
                onClick={toggleUserDetails}
                >{buttonText}</button>
            </div>
            </>
        )
    }