import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import React, {useState, useEffect} from "react";
// const logo = require ("../img/logo.png");
import logo from "../img/logo.png";
import Youtube from "../img/yt_logo_rgb_dark.png";
import X from "../img/logo-white.png";
import Instagram from "../img/Instagram_Glyph_Gradient.png";


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

    const getUsers = () => {
        navigate('/allusers');
    }

    const rockPaperScissor = () => {
        navigate('/rockPaperScissor')
    }

    return (
        <>
        <div className="flex justify-between items-center mt-3">
        <div className="flex items-center">
            
            <button className="p-1 flex items-center"
            onClick={profile}
            >
                <img src={logo} alt="logo" className="w-28"></img>
            <span className="font-bold text-4xl italic">PalmsiFy</span>
            </button>
            
            <div className="mt-1">
            <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
            onClick={movies}
            >Movies</button>

            <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
            onClick={groceries}
            >Groceries</button>

            <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center" 
            onClick={etchASketch}
            >Etch-A-Sketch</button>

            <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
            onClick={rockPaperScissor}
            >Rock Paper Scissor
            </button>

            <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
            onClick={getUsers}
            >Get all users</button>
            </div>
        </div>
        </div>
        <div className="ml-auto flex items-center mt-3 justify-end flex-direction: column">
            <p className="p-1 m-3 font-semibold">Welcome <strong className="text-[#FF00FF] capitalize">{userId}</strong></p>    
            <button className="p-1 m-3 mr-6 hover:font-bold transition-transform duration-100 transform origin-center"
            onClick={logout}
            >Logout</button>

            <div className="flex items-center p-1 m-3 mr-6 logo">
                <a href="https://www.youtube.com">
                <img className="w-20 mr-8 hover:w-24 transition-transform duration-100 transform origin-center" src={Youtube} alt="" />
                </a>
                <a href="https://www.x.com">
                <img className="w-5 mr-8 hover:w-6 transition-transform duration-100 transform origin-center" src={X} alt="" />
                </a>
                <a href="https://www.instagram.com">
                <img className="w-7 hover:w-8 transition-transform duration-100 transform origin-center" src={Instagram} alt="" />
                </a>
            </div>
        </div>
        </>
    )
}