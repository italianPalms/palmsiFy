import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const PieChartVerified = () => {

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

    const usersWithoutCircularReferences = JSON.parse(JSON.stringify(users));

    const verifiedUsers = usersWithoutCircularReferences.filter(user => user.isVerified).length;
    const unverifiedUsers = usersWithoutCircularReferences.length - verifiedUsers;

    const pieChartData = [
        {
            id: 'verified', 
            label: 'Verified', 
            value: verifiedUsers,
        }, 
        {
            id: 'unverified', 
            label: 'Unverified', 
            value: unverifiedUsers,
        },
    ];

    return (
        <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#e0e0e0"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    )
}

export default PieChartVerified;