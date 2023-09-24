import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Quote from "../img/quote.webp";

export default function Home() {
    const navigate = useNavigate();

    const signup = () => {
        console.log("Home signup clicked");
        navigate("/signup")
    };

    const login = () => {
        console.log("Home login button clicked");
        navigate("/login")
    };

    return (
        <>
        <div>
            <Header />
        </div>
        <div className="flex items-center justify-center">
            <img src={Quote} alt="Quote: It's like i have ESPN or something." className="w-96 mt-72" />
        </div>

        <div className="flex items-center justify-center">
        <h1 className=" text-5xl font-bold mr-4 text-zinc-50">Home page</h1>
        
        <button className="p-2 border-2 mr-3 w-48 bg-sky-400 hover:bg-sky-500"
            onClick={signup}>Signup</button>

        <button className="p-2 border-2 ml-3 w-48 bg-sky-400 hover:bg-sky-500"
            onClick={login}>Login</button>
        </div>
       
        </>
    )
}