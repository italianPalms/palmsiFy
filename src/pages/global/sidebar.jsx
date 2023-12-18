import { useState } from 'react';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
// import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
// import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
// import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
// import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Item = ({ title, to, icon, selected, setSelected}) => {
    return (
        <MenuItem
            active = {selected === title}
            style = {{color: '#e0e0e0' }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            {/* <Link to={to} /> */}
        </MenuItem>
    );
};

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Home")

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
                                    <img src={`../../img/logo.png`} alt="logo" className="w-28"></img>
                                    <span className="font-bold text-4xl italic">PalmsiFy</span>
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../img/hunter-2_2x.webp`}
                                style={{ cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                variant="h2"
                                color="#e0e0e0"
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0"}}
                                >
                                    Eirik
                                </Typography>
                                <Typography
                                variant="h5"
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
                            icon={HomeOutlinedIcon}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                        variant="h6"
                        color="#a3a3a3"
                        sx={{ m: "15px 0 5px 20px"}}
                        >
                            Welcome
                        </Typography>
                        <Item
                            title="Movies"
                            to="/movies"
                            icon={TheatersOutlinedIcon}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}
export default Sidebar;