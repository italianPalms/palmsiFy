import { useState } from 'react';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';


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

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Home Page")

    const navigate = useNavigate();

    const homePage = () => {
        console.log("Home page button clicked");
        navigate('/home');
    }

    return (
        <Box>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Logo and menu item */}
                    <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: "#e0e0e0",
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                                display = 'flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography
                                    variant='h3'
                                    color= '#e0e0e0'
                                >
                                        <button className="p-1 m-3 ml-4 flex items-center"
                                        onClick={homePage}
                                        > 
                                            <img src={logo} alt="logo" className="w-28"></img>
                                            <span className="font-bold text-4xl italic">PalmsiFy</span>
                                        </button>
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* User */}

                </Menu>

            </ProSidebar>
        </Box>
    )
}

export default Sidebar;