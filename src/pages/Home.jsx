import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import airbot from "../img/airobot.png";
import Parallax_bg from "../img/bg.jpg";
import Parallax_dust from "../img/dust.webp";
import Parallax_foreground_back from "../img/foreground-back.webp";
import Parallax_foreground_front from "../img/foreground-front.webp";
import Parallax_jax from "../img/jax.webp";
import Parallax_luna from "../img/luna.webp";
import Parallax_manny from "../img/manny.webp";
//import Parallax_rays from "../img/rays.webp";
import Founder from "../img/hunter-2_2x.webp";


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
        //TODO: Fix heading on small screens
        //TODO: Fix bug when user scroll all the way down
        <>
        <div className="parallax">
            <div className="main-header max-h-10 ">
                <Header />
            </div>
            <div className="hero relative">
                <div className="wrapper absolute top-96 left-56 ">
                    <h1 className="hero_title absolute">
                    <span>Gear up!</span> Welcome to PalmsiFy
                    </h1>
                    <button className="login-btn p-2 mr-2 border-2 w-48 bg-pink-400 hover:bg-pink-500" onClick={login}>Login</button>
                    <button className="login-btn p-2 mr-2 border-2 w-48 bg-pink-400 hover:bg-pink-500" onClick={signup}>Signup</button>
                </div>
            </div>

            <img className="parallax_bg" src={Parallax_bg} alt="" />
            <img className="parallax_dust" src={Parallax_dust} alt="" />
            <img className="parallax_foreground-back" src={Parallax_foreground_back} alt="" />
            <img className="parallax_foreground-front" src={Parallax_foreground_front} alt="" />
            <img className="parallax_jax" src={Parallax_jax} alt="" />
            <img className="parallax_luna" src={Parallax_luna} alt="" />
            <img className="parallax_manny" src={Parallax_manny} alt="" />
            {/* <img className="parallax_rays" src={Parallax_rays} alt="" /> */}
        </div>
        <div className="main-content">
            <div className="full-home-containecolr flex flex- justify-center justify-center items-center p-4 bg-navy-900">
                <div className="flex flex-col items-center justify-center mr-20 ml-10 h-screen">
                    <h2 className="text-4xl font-bold mb-4"><strong>Meet the team </strong></h2>
                    {/* <p className="text-4xl font-bold"><strong>The founder</strong></p> */}
                    <img className="w-96" src={Founder} alt=""></img>
                    {/* <p className="font-medium text-xl mt-4">Tech guy</p> */}
                    <p className="font-bold text-2xl mt-4 italic">Eirik</p>
                    <p className="font-medium text-xl">Engineering for the future</p>
                </div>
                {/* <div className="flex flex-col items-center justify-center h-screen w-96 ml-4">
                    <img className="home-img" src={airbot} alt="Airbot"/>
                </div> */}
                
                <div className="home-container items-center justify-center">
                    <div className="mb-2 flex items-center justify-center">
                    <h1 className="home-heading p-2 text-5xl font-bold italic">Check it out!</h1>
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