import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Footer from "../../components/Footer";

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
        <div className="todo-container">
            <h1>To Do</h1>
      
            <div className="todo-input-container">
                <label className="todo-label">Add your item</label>
                <input className="todo-input" 
                    type="text"
                    placeholder="Add item"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onAddTodoKeypress}
                    ></input>
                <button className="blue-btn_small"
                    onClick={() => {addTodo()}}>Add
                </button>
            
                {/* TODO: Make sure that the red text goes away when the input is not empty */}
                {addTodoAttempted || todo.lenght === 0 ? (
                <p className="todo-error">Please add a todo item</p>
                ) : null}
            </div>

            <div className="todo-list-container">
                <ul className="todo-list-ul">
                    {getTodos.map((getTodo) => (
                        <li className="todo-li" key={`${getTodo.text}-${getTodo.id}`}>
                            <div className="todo-item-container">
                            <input className="todo-checkbox" type="checkbox" />
                            <span className="todo-text">
                            {getTodo.text}
                            </span>
                            </div>
                            <DeleteOutlinedIcon className="todo-delete-icon"
                            onClick={deleteTodo} />
                        </li>
                    ))}
                    
                    {todo.map((addTodo) => (
                        <li className="todo-li" key={`${addTodo.text}-${addTodo.id}`}>
                            <div className="">
                            <input 
                                className="todo-checkbox"
                                type="checkbox"
                                checked={todo.completed} onChange={(e) => handleToggleTodo(todo.id)} />
                            {addTodo.text}
                            </div>
                            <DeleteOutlinedIcon className="todo-delete-icon" onClick={deleteTodo} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* TODO: Fix so the width of the footer is flexible with the sidebar */}
            {/* <div>
                <Footer />
            </div> */}
        </div>
        </>
    )
}