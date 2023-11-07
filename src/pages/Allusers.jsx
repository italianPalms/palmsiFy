import { LoggedInHeader } from "../components/LoggedInHeader";
import { LoggedInHeaderII } from "../components/LoggedInHeaderII";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AllUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/getAllUsers");
                const users = response.data;
                console.log(users)
                setUsers(users);
            } catch (error) {
                console.log("Failed to fetch users", error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <>
        <div className="flex">
            <LoggedInHeader />
            <LoggedInHeaderII />
        </div>
        <div>
            <h1 className="font-medium text-4xl flex justify-center items-center mt-4 mb-6">See all registered users</h1>
        </div>
        <div className="p-2 ml-6">
           <ol>
            {users.map((user, index) => (                
            <li key={user._id} className="mt-1">
                {index + 1}. Username: <strong className="text-[#FF00FF]">{user.username}</strong>, Email: {user.email}, isVerified: {user.isVerified ? 'True' : 'False'}, isAdmin: {user.isAdmin ? 'True' : 'False'} 
            </li>
            ))}
           </ol>
        </div>
        </>
    )
}