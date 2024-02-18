import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Todo() {

    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [addTodoAttempted, setAddTodoAttempted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [getTodos, setGetTodos] = useState([]);

    const addTodo = async () => {
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

            const response = await axios.post("http://localhost:4000/storeTodo", newTodo);
            console.log("New todo added", response.data)
            setLoading(true);

        } catch (error) {
            console.log("Post todo failed" + error)
        } finally {
            setInput(''); //Clear the input field
            setLoading(false);
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
            addTodo();
        }
    }

    useEffect(() => {
        if (todo.length > 0) {
            setButtonDisabled(false); 
        } else {
            setButtonDisabled(true);
        }
    }, []);

    // TODO: Retrieve the data from the DB
    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:4000/getTodos")
            setGetTodos(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Failed to fetch todos", error)
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    //Delete the todo from the DB
    const deleteTodo = async (_id) => {
        try {
            const response = await axios.delete("http://localhost:4000/deleteTodo")
            console.log("Todo deleted", response.data)
        } catch (error) {
            console.log("Failed to delete todo item", error)
        }
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center mt-16">
            <h1 className="font-semibold sm:text-2xl md:text-3xl lg:text-4xl">To Do</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-medium mt-3">Add your item</label>
            <input className="p-1 text-black mt-2 w-48" 
                type="text"
                placeholder="Add item"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onAddTodoKeypress}
                ></input>
            <button className="p-1 mt-4 bg-sky-400 w-48 hover:bg-sky-500 text-white rounded"
            onClick={() => {
                addTodo()
            }}
            >Add</button>
            
{/* TODO: Make sure that the red text goes away when the input is not empty */}
            {addTodoAttempted || todo.lenght === 0 ? (
                <p className="text-red-500 mt-4">Please add a todo item</p>
                ) : null}
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
            <ul className="text-xl">
                {getTodos.map((getTodo) => (
                    <li className="flex justify-between items-center mt-1" key={`${getTodo.text}-${getTodo.id}`}>
                        <div className="flex items-center">
                        <input className="mr-2 w-4 h-4" type="checkbox" />
                        {getTodo.text}
                        </div>
                    {/* <pre className="whitespace-pre-wrap ml-5"
                    key={todo.id}>
                        {JSON.stringify(todo, null, 2)}
                    </pre> */}
                    <DeleteOutlinedIcon className="ml-10 cursor-pointer"
                    onClick={deleteTodo} />
                    </li>
                ))}
                
                {todo.map((addTodo) => (
                    <li className="flex justify-between mt-1" key={`${addTodo.text}-${addTodo.id}`}>
                        <div className="flex items-center">
                        <input 
                            className="mr-2 w-4 h-4"
                            type="checkbox"
                            checked={todo.completed} onChange={(e) => handleToggleTodo(todo.id)} />
                        {addTodo.text}
                        </div>
                        <DeleteOutlinedIcon className="ml-10 cursor-pointer"
                    onClick={deleteTodo} />
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}