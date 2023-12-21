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
        <Box className="flex flex-row p-2">
        <Box>
            {/* Search bar */}
            <Box
            display="flex"
            backgroundColor="#1f2a40"
            borderRadius="3px"
            flexDirection="row"
            alignItems="center"
            >
                <InputBase
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

        <Box className=" flex flex-end" marginLeft="auto">
            
            {/* Welcome message */}
            <Box display= "flex">
            <p className='welcome-user mr-4 font-semibold mt-2'>Welcome
                <strong className='text-[#FF00FF] capitalize ml-2'>{userId}</strong>
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
            <Box className='SOME-logo flex items-center logo'>
                    <a href="https://www.youtube.com">
                        <img className='w-16 mr-4 hover:w-20 transition-transform duration-100 transform origin-center' src={Youtube} alt="" />
                    </a>
                    <a href="https://www.x.com">
                        <img className='w-4 mr-4 hover:w-5 transition-transform duration-100 transform origin-center' src={X} alt=""/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img className='w-6 mr-4 hover:w-7 transition-transform duration-100 transform origin-center' src={Instagram} alt="" />
                    </a>
            </Box>
        </Box>
        </Box>
    )
}

export default Topbar;
