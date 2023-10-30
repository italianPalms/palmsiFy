import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import React, {useState, useEffect} from "react";

// const logo = require ("../img/logo.png");
import logo from "../img/logo.png";

export function LoggedInHeader () {

    const navigate = useNavigate();
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(false)
    const [cookies ] = useCookies(["access_token"]);
    const [, setCookie] = useCookies();

    useEffect(() => {
        const fetchUsername = async () => {
            await axios.get('http://localhost:4000/getUserDetails', {
                headers: {
                    Authorization: `Bearer ${cookies.access_token}`
                }
            })
            .then((response) => {
                setUserId(response.data.username);
                // console.log(response.data.username);
            })
            .catch(err => {
                console.log("Failed to fetch userId", err);
            })
        }
        fetchUsername();
    }, [])

    const logout = async () => {
        try {
            setLoading(true);
            await axios.get('http://localhost:4000/logout');
            console.log("Logout successful");

            setCookie("access_token", "", {expires: new Date(0)});
            localStorage.removeItem("access_token");            

            navigate('/home');

        } catch (error) {
            console.log("Logout failed" + error)
        } finally {
            setLoading(false);
        }
        
    }

    const profile = () => {
        navigate('/profile');
    }

    const movies = () => {
        navigate('/movies');
    }

    const etchASketch = () => {
        navigate('/etchASketch');
    }

    const groceries = () => {
        navigate('/groceries');
    }

    return (
        <>
        <div className="top-0 left-0 flex justify-between">
            <button className="p-1 m-3 ml-4 flex items-center"
            onClick={profile}
            >
                <img src={logo} alt="logo" className="w-28"></img>
            <span className="font-bold text-4xl italic">PalmsiFy</span>
            </button>
            
            <button className="p-1 m-3"
            onClick={movies}
            >Movies</button>

            <button className="p-1 m-3"
            onClick={groceries}
            >Groceries</button>

            <button className="p-1 m-3" 
            onClick={etchASketch}
            >Etch-A-Sketch</button>

        </div>
        <div className="absolute top-0 right-0 flex justify-end items-end">
            <p className="p-1 m-3 font-semibold">Welcome <strong className="text-[#FF00FF] capitalize">{userId}</strong></p>
            
            <button className="p-1 m-3 mr-4"
            onClick={logout}
            >Logout</button>
        </div>
        </>
    )
}