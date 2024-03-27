import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from '@mui/material';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PieChartVerified from "../../components/PieChartVerified"; 

    export default function Profile() {

        const [loading] = useState(false);
        const [user, setUser] = useState(null);
        const [cookies ] = useCookies(["access_token"]);
        const [showUserDetails, setShowUserDetails] = useState(false);
        const [buttonText, setButtonText] = useState("Show user details");


        const toggleUserDetails = () => {
            if (showUserDetails) {
                setShowUserDetails(false); 
                setButtonText("Show user details");
            } else {
                axios.get('http://localhost:4000/getUserDetails', {
                    headers: {
                        Authorization: `Bearer ${cookies.access_token}`
                    },
                })
                .then(response => {
                    setUser(response.data);
                    setShowUserDetails(true);
                    setButtonText("Hide user details");

                    console.log("User details", response.data);
                })
                .catch(err => console.log("Failed to fetch user details", err)); 
                }
            }

            // Columns in the dataGrid from Mui
            const columns = [
                {
                    field: "username", 
                    headerName: "Username", 
                    flex: 1, 
                    cellClassName: "name-column--cell", 
                }, 
                {
                    field: "email", 
                    headerName: "Email", 
                    flex: 1,  
                },
                {
                    field: "_id", 
                    headerName: "ID", 
                    flex: 1, 
                },
                {
                    field: "isVerified", 
                    headerName: "Is verified", 
                    flex: 1,
                    display: "justifyContent: start",

                    renderCell: ({ row: {isVerified}}) => (
                        <Box className="flex justify-center items-start"
                        width="50%"
                        p="2px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={isVerified === true ? "#4cceac" : "red"}
                        borderRadius="4px"
                        >
                            {isVerified === true ? <VerifiedOutlinedIcon /> : <ErrorOutlineOutlinedIcon />}
                        <Typography sx={{ ml: "5px"}}>
                            <span>{isVerified}</span>
                        </Typography>
                        </Box>
                    )
                },
            ];
        
            //rows in the dataGrid from MUI
            const rows = user ? [user] : [];
            const getRowId = (row) => row._id;
           
        return (
            <>
            <div className="profilePage-container">
                <h1 className="profilePage-header">{loading ? "Logging out" : "Welcome to your profile"}</h1>
                <div>
                    {showUserDetails && user ? (
                    <Box
                    //style the dataGrid from Mui (overwrite the default styling)
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none", 
                            color: "white",
                        }, 
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none", 
                        }, 
                        "& .name-column--cell": {
                            color: "#4cceac",
                            display: "flex",
                            margin: "0 0 0 5px", 
                        }, 
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "rgb(31 41 55)",
                            borderBottom: "none",
                            color: "#868dfb", 
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: "#1f2a40", 
                        }, 
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: "rgb(31 41 55)",
                        },
                        "& .MuiTablePagination-toolbar": {
                            color: "white", 
                        }, 
                        "& .MuiButtonBase-root": {
                            color: "white", 
                        }, 
                        "& .MuiSvgIcon-root": {
                            color: "white",
                        }, 
                        "& .MuiBox-root": {
                            border: "none",
                            borderTop: "none", 
                            borderBottom: "none",
                        },
                    }}
                    >
                        <div className="profilePage-dataGrid">
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={getRowId}
                            />
                        </div>
                    </Box>
                    ) : (
                        <p className="dataGrid-text">Click below to see user details 🚀</p>
                    )}
                </div>

                <div className="profilePage-btn-container">
                    <button className="blue-btn_medium" 
                        onClick={toggleUserDetails}
                        >{buttonText}
                    </button>
                </div>

                <div className="verified-users">
                    <h1 className="profilePage-header">Verified users</h1>
                    <div className="piechart_profile">
                        <PieChartVerified />
                    </div>
                </div>
            </div>
            </>
        )
    }