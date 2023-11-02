import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Quote from "../img/quote.webp";
import airbot from "../img/airobot.png";

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

        <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center justify-center h-screen w-96">
                <img src={airbot} alt="Airbot"/>
            </div>
            
            <div className="flex flex-col items-center justify-center">
            <div className="home-heading mb-2">
            <h1 className="p-2 text-5xl font-bold italic">Home page</h1>
            </div>

            <div className="login-btn flex-col items-center justify-center min-w-min">
            <button className="p-2 mr-2 border-2 w-48 bg-sky-400 hover:bg-sky-500"
                onClick={login}>Login</button>
            
            <button className="signup-btn p-2 ml-2 border-2 w-48 bg-sky-400 hover:bg-sky-500"
                onClick={signup}>Signup</button>
            </div>
            </div>
        </div>
        </>
    )
}