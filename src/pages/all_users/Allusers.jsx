import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ResponsivePie } from '@nivo/pie';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PieChartVerified from '../../components/PieChartVerified';
import PieChartAdmin from "../../components/PieChartAdmin";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function AllUsers() {

    const [users, setUsers] = useState([]);
    // Fetch all users from db
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/getAllUsers");
                const users = response.data;
                console.log(users)
                setUsers(users);
            } catch (error) {
                console.log("Failed to fetch users", error);
            }
        }
        fetchUsers();
    }, []);

    //Make sure that the users are without circular reference
    const usersWithoutCircularReferences = JSON.parse(JSON.stringify(users));

    //Columns in the data grid from Mui
    const columns = [
        {
            field: "username", 
            headerName: "Username",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "email", 
            headerName: "Email",
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
                 backgroundColor={isVerified === "True" ? "#4cceac" : "red"}
                 borderRadius="4px"
                 >
                    {isVerified === "True" ? <VerifiedOutlinedIcon /> : <ErrorOutlineOutlinedIcon />}
                    <Typography color="#e0e0e0" sx={{ ml: "5px"}}>
                        {isVerified}
                    </Typography>
                </Box>
            )
        },
        {
            field: "isAdmin",
            headerName: "Is admin",
            flex: 1, 
        }
    ];

    //Rows in the data grid from Mui
    const rows = usersWithoutCircularReferences.map((users, index) => ({
        id: users._id, 
        username: users.username,
        email: users.email, 
        isVerified: users.isVerified ? 'True' : 'False',
        isAdmin: users.isAdmin ? 'True': 'False',
    }));

    return (
        <>
        <div>
            <h1 className="font-medium text-4xl flex justify-center items-center mt-8 mb-6">See all registered users</h1>
        </div>
        <Box
        //Style the data grind from Mui (overwrite the default styling)
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
        <div className="flex justify-center items-center ml-10 mr-10 mt-16">
        <DataGrid className="max-w-7xl"
            rows={rows}
            columns={columns}
        />
        </div>
        </Box>

        {/*Pie chart for verified */}
        <div className="pieChart flex justify-center items-center">
        <Box m="20px">
            <h1 className="font-medium text-2xl flex justify-center items-center mt-16">Verified users</h1>
            <Box height="50vh" width="40vh">
            <PieChartVerified />
            </Box>
        </Box>

        {/* Pie chart for admin */}
        <Box m="20px">
            <h1 className="font-medium text-2xl flex justify-center items-center mt-16">Admin users</h1>
            <Box height="50vh" width="40vh">
                <PieChartAdmin />
            </Box>
        </Box>
        </div>
        </>
    )   
}