import { useNavigate } from "react-router-dom";

export function LoggedInHeader () {

    // const navigate = useNavigate();

   
    // const logout = () => {
    //     navigate('/home');
    // }

    return (
        <>
        <div className="fixed top-0 right-0 flex justify-between items-start">

            <button className="p-1 m-3 mr-4"
            >Logout</button>
        </div>
        </>
    )
}