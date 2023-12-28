import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from '@mui/material';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PieChartVerified from "../../components/PieChartVerified"; 

    export default function Profile() {

        const [loading, setLoading] = useState(false);
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
            <div className="flex-col justify-center items-center mt-28">
                <h1 className="text-4xl font-semibold justify-center items-center flex">{loading ? "Logging out" : "Welcome to your profile"}</h1>
                <div className=" text-xl mt-8">
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
                        <div className="flex justify-center items-center ml-10 mr-10 mt-10">
                            <DataGrid className="max-w-7xl"
                                rows={rows}
                                columns={columns}
                                getRowId={getRowId}
                            />
                        </div>
                    </Box>
                    ) : (
                        <p className="mt-4 flex justify-center items-center">Click below to see user details 🚀</p>
                    )}
                </div>

                <div className="flex justify-center items-center">
                <button className="border-2 mt-8 p-2 w-48 bg-orange-700 hover:bg-orange-900 rounded" 
                onClick={toggleUserDetails}
                >{buttonText}</button>
                </div>

                <Box m="20px">
                    <h1 className="font-medium text-2xl flex justify-center items-center mt-16">Verified users</h1>
                    <Box className="piechart_profile" height="50vh" width="50vh justify-center items-center">
                        <PieChartVerified />
                    </Box>
                </Box>
            </div>
            </>
        )
    }