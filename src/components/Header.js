import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
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
        <div className="flex justify-between ">
            <button className="p-1 m-3 ml-4 flex items-center"
            onClick={homePage}
            > 
            <img src={logo} alt="logo" className="w-28"></img>
            <span className="text-[#FF00FF] font-bold text-4xl italic">PalmsiFy</span>
            </button>
        </div>
            
        <div className="fixed top-0 right-0 flex justify-between items-start">
        
        <button className="p-1 m-3"
        onClick={about}
        >About</button>
        
        <button className="p-1 m-3"
        onClick={investors}
        >Investors</button>
        
        <button className="p-1 m-3 mr-4"
        onClick={forgotPassword}
        >Forgot password</button>
        </div>
        </div>
        </>
    )

}