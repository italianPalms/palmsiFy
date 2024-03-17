import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import Youtube from "../img/yt_logo_rgb_dark.png";
import X from "../img/logo-white.png";
import Instagram from "../img/Instagram_Glyph_Gradient.png";
export default function Header() {

    const navigate = useNavigate();

    const homePage = () => {
        console.log("Home page button clicked");
        navigate('/home');
    }

    const about = () => {
        console.log("About button clicked");
        navigate('/about');
    }

    const forgotPassword = () => {
        console.log("Forgot password button clicked");
        navigate('/forgotPassword');
    }

    const investors = () => {
        navigate('/investors');
    }

    return (
        <>
        <div className="header-container">
            <div className="header-logo_text">
                <a href="/home"> 
                <img src={logo} alt="logo" className="header_logo"></img>
                <span className="header_text">PalmsiFy</span>
                </a>
            </div>
            
            <div className="header-links">
                <a href="/about" className="header_about"
                >About</a>
                
                <a href="/investors" className="header_investor"
                >Investors</a>
                
                <a href="/forgotPassword" className="header_forgotPassword"
                >Forgot password</a>
                        
                <div>
                    <a href="https://www.youtube.com">
                    <img className="youtube-logo-homePage SOME-logo-front w-20 mr-4 hover:w-24 transition-transform duration-100 transform origin-center" src={Youtube} alt="" />
                    </a>

                    <a href="https://www.x.com">
                    <img className="x-logo-homePage SOME-logo-front w-5 mr-4 hover:w-6 transition-transform duration-100 transform origin-center" src={X} alt="" />
                    </a>
                            
                    <a href="https://www.instagram.com">
                    <img className="instagram-logo-homePage" src={Instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
        </>
    )

}