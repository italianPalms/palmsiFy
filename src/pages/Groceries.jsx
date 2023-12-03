import { LoggedInHeader } from "../components/LoggedInHeader";
import React, { useEffect, useState } from "react";

export default function Groceries() {

    const [groceries, setGroceries] = useState([]);
    const [input, setInput] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [addGroceriesAttempted, setAddGroceriesAttempted] = useState(false);

    const handleAddGroceries = () => {
        if(!input) {
            setAddGroceriesAttempted(true);
            return;
        }
        try {
            const newGroceries = {
                id: Math.random(), //Generate a unique ID for each item
                text: input.charAt(0).toUpperCase() + input.slice(1), //Capitalize the input text
                completed: false, //Initialize the item as not completed
            };
    
            setGroceries([...groceries, newGroceries]); //Add the new item to the list
            setInput(''); //Clear the input field
            
        } catch (error) {
            console.log("Please add groceris" + error)
        } finally {
            setAddGroceriesAttempted(false);
        }
        }
    
    const handleToggleGroceries = (id) => {
        setGroceries(groceries.map((groceries) => {
            if (groceries.id === id) {
                return { ...groceries, completed: !groceries.completed}; //Toggle the completed property
            }
            return groceries;
        }));
    };

    const onAddGroceriesKeypress = e => {
        if (e.keyCode === 13) {
            handleAddGroceries();
        }
    }

    useEffect(() => {
        if (groceries.length > 0) {
            setButtonDisabled(false); 
        } else {
            setButtonDisabled(true);
        }
    }, []);

    // TODO: Send the data to the DB

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
                onKeyDown={onAddGroceriesKeypress}
                ></input>
            <button className="p-1 mt-4 bg-sky-400 w-48 hover:bg-sky-500 text-white rounded"
            onClick={() => {
                handleAddGroceries()
            }}
            >Add</button>
            {addGroceriesAttempted || groceries.lenght === 0 ? (
                <p className="text-red-500 mt-4">Please add groceries</p>
                ) : null}
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
            <ul className="text-xl">
                {groceries.map((groceries) => (
                    <li className="mt-1" key={groceries.id}>
                        <input 
                            className="mr-2 w-4 h-4"
                            type="checkbox" 
                            checked={groceries.completed} onChange={(e) => handleToggleGroceries(groceries.id)} />
                        {groceries.text}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}