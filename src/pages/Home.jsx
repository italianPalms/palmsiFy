import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import airbot from "../img/airobot.png";
import Parallax_bg from "../img/bg.jpg";
import Parallax_dust from "../img/dust.webp";
import Parallax_foreground_back from "../img/foreground-back.webp";
import Parallax_foreground_front from "../img/foreground-front.webp";
import Parallax_jax from "../img/jax.webp";
import Parallax_luna from "../img/luna.webp";
import Parallax_manny from "../img/manny.webp";
import Parallax_rays from "../img/rays.webp";


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
        <div className="parallax">
        <div>
            <Header className="primary-header" />
        </div>
        <div className="hero">
            <div className="wrapper flex flex-col justify-end">
                <h1 className="hero_title">
                   <span>Gear up!</span> Welcome to PalmsiFy
                </h1>
                <button className="login-btn p-2 mr-2 border-2 w-48 bg-pink-400 hover:bg-pink-500" onClick={login}>Login</button>
            </div>
            </div>

        <img className="parallax_bg" src={Parallax_bg} alt="" />
        <img className="parallax_dust" src={Parallax_dust} alt="" />
        <img className="parallax_foreground-back" src={Parallax_foreground_back} alt="" />
        <img className="parallax_foreground-front" src={Parallax_foreground_front} alt="" />
        <img className="parallax_jax" src={Parallax_jax} alt="" />
        <img className="parallax_luna" src={Parallax_luna} alt="" />
        <img className="parallax_manny" src={Parallax_manny} alt="" />
        <img className="parallax_rays" src={Parallax_rays} alt="" />
        </div>
        <div className="main-content">
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
        </div>
        
        </>
    )
}