import { useNavigate } from "react-router-dom";


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
        <div className="flex justify-between ">
            <button className="p-2 m-4"
            onClick={homePage}
            >Got to home page</button>
        {/* <h1> <a href="/home">Welcome to the home page</a></h1> */}
        <div className="">
        
        <button className="p-2 m-4"
        onClick={about}
        >About</button>
        
        <button className="p-2 m-4"
        onClick={investors}
        >Investors</button>
        
        <button className="p-2 m-4"
        onClick={forgotPassword}
        >Forgot password</button>
        </div>
        </div>
        </>
    )

}