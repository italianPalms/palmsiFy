import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import React, {useState, useEffect} from "react";

export function LoggedInHeader () {

    const navigate = useNavigate();
    const [ cookies ] = useCookies(["access_token"]);
    const [userId, setUserId] = useState();

    useEffect(() => {
        const fetchUsername = async () => {
            await axios.get('http://localhost:4000/getUserDetails', {
                headers: {
                    Authorization: `Bearer ${cookies.access_token}`
                }
            })
            .then((response) => {
                const username = response.data.username;
                setUserId(response.data.username);
                // console.log(username);
            })
            .catch(err => {
                console.log("Failed to fetch userId", err);
            })
        }
        fetchUsername();
    }, [])

  
   
    // const logout = () => {
    //     navigate('/home');
    // }

    const profile = () => {
        navigate('/profile');
    }

    const movies = () => {
        navigate('/movies');
    }

    return (
        <>
        <div className="fixed">
            <button className="p-1 m-3 ml-4"
            onClick={profile}
            >Go to profile page</button>

            <button className="p-1 m-3"
            onClick={movies}
            >Movies</button>
            <button className="p-1 m-3">Groceries</button>
        </div>
        <div className=" fixed top-0 right-0 flex justify-between items-start">
            <p className="p-1 m-3 font-semibold">Logged in as: {userId} </p>
            
            <button className="p-1 m-3 mr-4"
            >Logout</button>
        </div>
        </>
    )
}