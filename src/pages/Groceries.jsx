import { LoggedInHeader } from "../components/LoggedInHeader";
import React, { useState } from "react";

export default function Groceries() {

    const [groceries, setGroceries] = useState([]);
    const [input, setInput] = useState();

    const handleAddGroceries = () => {
        const newGroceries = {
            id: Math.random(), //Generate a unique ID for each item
            text: input, //Get the text fdrom the input field
            completed: false, //Initialize the item as not completed
        };

        setGroceries([...groceries, newGroceries]); //Add the new item to the list
        setInput(''); //Clear the input field
        }
    
    const handleToggleGroceries = (id) => {
        setGroceries(groceries.map((groceries) => {
            if (groceries.id === id) {
                return { ...groceries, completed: !groceries.completed}; //Toggle the completed property
            }
            return groceries;
        }));
    };

    return (
        <>
        <div className="flex">
            <LoggedInHeader />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-4xl font-bold">Groceries</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-medium mt-3">Add your item</label>
            <input className="p-1 text-black mt-2 w-48" 
                type="text"
                placeholder="Add item "
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ></input>
            <button className="p-1 mt-4 bg-sky-400 w-48 hover:bg-sky-500 text-white rounded"
            onClick={() => {
                handleAddGroceries()
            }}
            >Add</button>
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
            <ul>
                {groceries.map((groceries) => (
                    <li key={groceries.id}>
                        <input type="checkbox" checked={groceries.completed} onChange={(e) => handleToggleGroceries(groceries.id)} />
                        {groceries.text}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}