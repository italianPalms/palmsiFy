import { LoggedInHeader } from "../../components/LoggedInHeader";
import React, { useEffect, useState } from "react";

export default function Todo() {

    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [addTodoAttempted, setAddTodoAttempted] = useState(false);

    const handleAddTodo = () => {
        if(!input) {
            setAddTodoAttempted(true);
            return;
        }
        try {
            const newTodo = {
                id: Math.random(), //Generate a unique ID for each item
                text: input.charAt(0).toUpperCase() + input.slice(1), //Capitalize the input text
                completed: false, //Initialize the item as not completed
            };
    
            setTodo([...todo, newTodo]); //Add the new item to the list
            setInput(''); //Clear the input field
            
        } catch (error) {
            console.log("Please add groceris" + error)
        } finally {
            setAddTodoAttempted(false);
        }
        }
    
    const handleToggleTodo = (id) => {
        setTodo(todo.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed}; //Toggle the completed property
            }
            return todo;
        }));
    };

    const onAddTodoKeypress = e => {
        if (e.keyCode === 13) {
            handleAddTodo();
        }
    }

    useEffect(() => {
        if (todo.length > 0) {
            setButtonDisabled(false); 
        } else {
            setButtonDisabled(true);
        }
    }, []);

    // TODO: Send the data to the DB
    // TODO: Retrieve the data from the DB
    // TODO: Display the data on the screen




    return (
        <>
        <div className="flex flex-col justify-center items-center mt-16">
            <h1 className="font-semibold sm:text-2xl md:text-3xl lg:text-4xl">To Do</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-medium mt-3">Add your item</label>
            <input className="p-1 text-black mt-2 w-48" 
                type="text"
                placeholder="Add item "
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onAddTodoKeypress}
                ></input>
            <button className="p-1 mt-4 bg-sky-400 w-48 hover:bg-sky-500 text-white rounded"
            onClick={() => {
                handleAddTodo()
            }}
            >Add</button>
            {addTodoAttempted || todo.lenght === 0 ? (
                <p className="text-red-500 mt-4">Please add a to do item</p>
                ) : null}
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
            <ul className="text-xl">
                {todo.map((groceries) => (
                    <li className="mt-1" key={groceries.id}>
                        <input 
                            className="mr-2 w-4 h-4"
                            type="checkbox" 
                            checked={groceries.completed} onChange={(e) => handleToggleTodo(todo.id)} />
                        {groceries.text}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}