import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
// import airbot from "../img/airobot.png";
import Parallax_bg from "../../img/bg.jpg";
import Parallax_dust from "../../img/dust.webp";
import Parallax_foreground_back from "../../img/foreground-back.webp";
import Parallax_foreground_front from "../../img/foreground-front.webp";
import Parallax_jax from "../../img/jax.webp";
import Parallax_luna from "../../img/luna.webp";
import Parallax_manny from "../../img/manny.webp";
// import Parallax_rays from "../../img/rays.webp";
import Founder from "../../img/hunter-2_2x.webp";


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
            <div className="homePage-header">
                <Header />
            </div>  
            <div className="hero-homePage_btn">
                <div>
                    <h1 className="hero_title">
                    <span>Gear up!</span> Welcome to PalmsiFy
                    </h1>
                    <button className="login-btn_1" onClick={login}>Login</button>
                    <button className="signup-btn_1" onClick={signup}>Signup</button>
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
            <div className="main-container">
                <div className="content-wrapper_homePage">
                    <div className="main-container img-container">
                        <h2 className="mid-title"><strong>Meet the team </strong></h2>
                        <img className="team-img" src={Founder} alt=""></img>
                        <p className="info-homePage">Eirik</p>
                        <p className="info-homePage">Engineering for the future</p>
                    </div>
                
                    <div className="home-container">
                        <div>
                            <h2 className="homePage-heading">Check it out!</h2>
                        </div>

                        <div>
                            <button className="login-btn_2"
                            onClick={login}>Login</button>

                            <button className="signup-btn_2"
                            onClick={signup}>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}