import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import React, {useState, useEffect} from "react";
import logo from "../img/logo.png";
import Youtube from "../img/yt_logo_rgb_dark.png";
import X from "../img/logo-white.png";
import Instagram from "../img/Instagram_Glyph_Gradient.png";
import "./components.css";


export function LoggedInHeader () {

    const navigate = useNavigate();
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(false)
    const [cookies ] = useCookies(["access_token"]);
    const [, setCookie] = useCookies();
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <>
        <nav className="flex justify-between items-center">
        <div className="flex items-center">
        <div className="pl-5">
                    <button className=" relative p-1 mt-3 "
                        onClick={() => {
                        console.log("Search icon clicked");
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill="white">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                    </button>
                </div>

            {/* <Link to ="../profile" className="p-1 flex items-center">
                <img src={logo} alt="logo" className="w-28"></img>
                <span className="font-bold text-4xl italic">PalmsiFy</span>
            </Link> */}

            {/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>       
                </div> */}
            {/* <div className="mt-1">
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to ="../movies" className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center">
                    Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="../groceries" className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center">
                    Groceries
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="../etchASketch" className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center">
                        Etch-A-Sketch
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="../rockPaperScissor" className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center">
                        Rock Paper Scissor
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="../allusers" className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center">
                        Get all users
                    </NavLink>
                </li>
            </ul>
            </div> */}
        </div>
        
        </nav>
        <div className="ml-auto flex items-center mt-3 justify-end flex-direction: column">
            <p className="p-1 m-3 font-semibold">Welcome <strong className="text-[#FF00FF] capitalize">{userId}</strong></p>    
            <button className="p-1 m-3 mr-6 hover:font-bold transition-transform duration-100 transform origin-center"
            onClick={logout}
            >Logout</button>

            <div className="SOME-logo flex items-center p-1 m-3 mr-6 logo">
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