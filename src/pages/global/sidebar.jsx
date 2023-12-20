import { useState } from 'react';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Picture from "../../img/hunter-2_2x.webp";
import Logo from "../../img/logo.png";
import { useCookies } from "react-cookie";



const Item = ({ title, to, icon, selected, setSelected}) => {
    return (
        <MenuItem
            active = {selected === title}
            style = {{color: '#e0e0e0' }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = ({ access_token }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('');
    const [cookies] = useCookies(["access_token"]);


    if (!cookies.access_token) {
        return null;
    }

    return (
    <>
    <div className='flex !bg-gray-900'>
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                background: "rgb(31 41 55)"
            }, 
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            }, 
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            }, 
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            }, 
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            },
        }}
        >
            <ProSidebar collapsed={isCollapsed} className='bg-gray-900'>
                <Menu iconShape="square">
                    {/* Logo and menu item */}
                    <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "5px 0 10px 0",
                        color: "#e0e0e0",
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                                display = 'flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Typography
                                    variant='h5'
                                    color= '#e0e0e0'
                                >
                                    <div className='flex justify-center items-center'>
                                    <img src={Logo} to="/profile" alt="logo" className="w-16"></img>
                                    <span className="font-bold text-xl italic">PalmsiFy</span>
                                    </div>
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon className='text-white flex' />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="20px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={Picture}
                                style={{ cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                variant="h4"
                                color="white"
                                fontWeight="bold"
                                sx={{ m: "15px 0 0 0"}}
                                >
                                    Eirik
                                </Typography>
                                <Typography
                                variant="h6"
                                color="#4cceac"
                                >
                                    VP PalmsiFy
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items*/}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Home Page"
                            to="/profile"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {!isCollapsed &&(
                        <Typography
                        variant="h6"
                        color="#a3a3a3"
                        sx={{ m: "10px 0 5px 20px"}}
                        >
                            Welcome
                        </Typography>
                        )}
                        <Item
                            title="Movies"
                            to="/movies"
                            icon={<TheatersOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                        title="Groceries"
                        to="/groceries"
                        icon={<FastfoodOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Etch-A-Sketch"
                        to="/etchasketch"
                        icon={<SmartToyOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Rock Paper Scissor"
                        to="/rockpaperscissor"
                        icon={<GamesOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        
                        title="All users"
                        to="/allusers"
                        icon={<GroupAddOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    </div>
    </>
    )
    
}

export default Sidebar;