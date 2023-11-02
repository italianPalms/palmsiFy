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

        <div className="full-home-container flex flex-row justify-center items-center p-4">
            <div className="flex flex-col items-center justify-center h-screen w-96">
                <img className="home-img" src={airbot} alt="Airbot"/>
            </div>
            
            <div className="home-container items-center justify-center">
            <div className="mb-2 flex items-center justify-center">
            <h1 className="home-heading p-2 text-5xl font-bold italic">Home page</h1>
            </div>

            <div className="home-btn-container flex-col items-center justify-center min-w-min">
            <button className="login-btn p-2 mr-2 border-2 w-48 bg-sky-400 hover:bg-sky-500"
                onClick={login}>Login</button>
            
            <button className="signup-btn p-2 mt-2 border-2 w-48 bg-sky-400 hover:bg-sky-500"
                onClick={signup}>Signup</button>
            </div>
            </div>
        </div>
        </>
    )
}