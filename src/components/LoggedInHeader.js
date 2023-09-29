import { useNavigate } from "react-router-dom";

export function LoggedInHeader () {

    const navigate = useNavigate();

   
    // const logout = () => {
    //     navigate('/home');
    // }

    const profile = () => {
        navigate('/profile');
    }

    const movies = () => {
        navigate('/movies');
    }

    return (
        <>
        <div>
            <button className="p-1 m-3 ml-4"
            onClick={profile}
            >Go to profile page</button>

            <button className="p-1 m-3"
            onClick={movies}
            >Movies</button>
        </div>
        <div className=" fixed top-0 right-0 flex justify-between items-start">
            <button className="p-1 m-3 mr-4"
            >Logout</button>
        </div>
        </>
    )
}