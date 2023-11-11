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
        <div className="fixed">
            <div className="flex justify-between header-logo">
                <button className="p-1 m-3 ml-4 flex items-center"
                onClick={homePage}
                > 
                <img src={logo} alt="logo" className="w-28"></img>
                <span className="font-bold text-4xl italic">PalmsiFy</span>
                </button>
            </div>
            
            <div className="fixed top-0 right-0 flex justify-between items-start mt-6">
                <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
                onClick={about}
                >About</button>
                
                <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
                onClick={investors}
                >Investors</button>
                
                <button className="p-1 m-3 hover:font-bold transition-transform duration-100 transform origin-center"
                onClick={forgotPassword}
                >Forgot password</button>
                        
                <div className="flex items-center p-1 m-3 mr-6">
                    <a href="https://www.youtube.com">
                    <img className="w-20 mr-8 hover:w-24 transition-transform duration-100 transform origin-center" src={Youtube} alt="" />
                    </a>

                    <a href="https://www.x.com">
                    <img className="w-5 mr-8 hover:w-6 transition-transform duration-100 transform origin-center" src={X} alt="" />
                    </a>
                            
                    <a href="https://www.instagram.com">
                    <img className="w-7 hover:w-8 transition-transform duration-100 transform origin-center" src={Instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
        </>
    )

}