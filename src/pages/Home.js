import { useNavigate } from "react-router-dom";
import backgroundImage from "../picture-bg.jpeg";

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
        <div
        style={{
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center center', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',   
        }}
        >
        <div className="flex items-center">
        <h1 className=" text-5xl font-bold mr-10 text-zinc-50">Home page</h1>
        
        <button className="p-2 border-2 mr-3 w-28 bg-sky-400"
            onClick={signup}>Signup</button>

        <button className="p-2 border-2 ml-3 w-28 bg-sky-400"
            onClick={login}>Login</button>
        </div>
        </div>




        {/* add background picture later */}

        </>
    )
}