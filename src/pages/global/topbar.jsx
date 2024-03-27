import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Box, IconButton} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import InputBase from '@mui/material/InputBase';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Youtube from '../../img/yt_logo_rgb_dark.png';
import X from '../../img/logo-white.png';
import Instagram from '../../img/Instagram_Glyph_Gradient.png';

const Topbar = ({ access_token }) => {
    const [cookies] = useCookies(["access_token"])
    const [, setCookie] = useCookies();
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    if(!cookies.access_token) {
        return null;
    }


    return (
    <>
    <div className="topbar">
        {/* Search bar */}
        <div className='searchbar'>
            <input className='search-input' type="text" placeholder="Search"></input>
            <button className='search-icon'
                type="button" 
                onClick={() => {
                    console.log("search icon clicked")
                }}>
                <SearchOutlinedIcon />
            </button>
        </div>

        <div className="topbar-container">   
            {/* Welcome message */}
            <div>
            <p>Welcome
                {/* TODO: Figure out the late update of userId */}
                <strong className='topbar-user'>{userId && userId.charAt(0).toUpperCase() + userId.slice(1)}</strong>
            </p>
            </div>

            {/* Icons */}
            <div>
                <button className='topbar-icons' 
                onClick={() => {
                        console.log("lightmode button clicked")
                    }}>
                    <LightModeOutlinedIcon />
                </button>

                <button className='topbar-icons' 
                onClick={logout}>
                    <LogoutOutlinedIcon />
                </button>

                <button className='topbar-icons' 
                onClick={() => {
                        console.log("notification button clicked")
                    }}>
                    <NotificationsNoneOutlinedIcon />
                </button>
            </div>
            {/* SOME logo's */}
            <div>
                <a href="https://www.youtube.com">
                    <img className='youtube-logo' src={Youtube} alt="youtube logo" />
                </a>
                <a href="https://www.x.com">
                    <img className='x-logo' src={X} alt="x logo"/>
                </a>
                <a href="https://www.instagram.com">
                    <img className='instagram-logo' src={Instagram} alt="instagram logo" />
                </a>
            </div>
        </div>
    </div>
    </>
    )
}
export default Topbar;
