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
    <div className="topbar-container">
        <Box>
            <Box>
                {/* Search bar */}
                <Box>
                    <InputBase className='searchbar'
                    sx={{
                        ml:2, 
                        flex: 1, 
                        color: "white"
                    }}
                    text="white"
                    placeholder="Search"
                    >
                    </InputBase>
                    <IconButton 
                    type="button" 
                    sx={{ p: 1, color: "white" }} 
                    onClick={() => {
                        console.log("search icon clicked")
                    }}>
                        <SearchOutlinedIcon />
                    </IconButton>
            </Box>
        </Box>

        <Box className="topbar-icons">   
            {/* Welcome message */}
            <Box display= "flex">
            <p className='welcome-user capitalize mr-4 font-semibold mt-2'>welcome
                <strong className='topbar-user'>{userId && userId.charAt(0).toUpperCase() + userId.slice(1)}</strong>
            </p>
            </Box>

            {/* Icons */}
            <Box dispay="flex">
                <IconButton 
                sx={{ color: "white"}} 
                onClick={() => {
                        console.log("lightmode button clicked")
                    }}>
                    <LightModeOutlinedIcon />
                </IconButton>
                <IconButton 
                sx={{ color: "white"}} 
                onClick={logout}>
                    <LogoutOutlinedIcon />
                </IconButton>
                <IconButton 
                sx={{ color: "white"}} 
                onClick={() => {
                        console.log("notification button clicked")
                    }} >
                    <NotificationsNoneOutlinedIcon className='mr-4'/>
                </IconButton>
            </Box>
            {/* SOME logo's */}
                <Box className='SOME-logo flex items-center logo'>
                    <a href="https://www.youtube.com">
                        <img className='youtube-logo' src={Youtube} alt="youtube logo" />
                    </a>
                    <a href="https://www.x.com">
                        <img className='x-logo' src={X} alt="x logo"/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img className='instagram-logo' src={Instagram} alt="instagram logo" />
                    </a>
                </Box>
            </Box>
        </Box>
    </div>
    </>
    )
    
}

export default Topbar;
