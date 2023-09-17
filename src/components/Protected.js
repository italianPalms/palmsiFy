import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Protected = ({ children }) => {
    const [cookies] = useCookies(["access_token"]);

    const isAuthenticated = !!cookies.access_token;

    if (!isAuthenticated) {
        return <Navigate to ="/" replace />;
    }
    return children;
};

export default Protected;
