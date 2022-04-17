import { Navigate, useLocation } from "react-router";
import { useUser } from "../../context/userContext"


const RequiresAuth = ({ children }) => {
    const { state } = useUser();
    const { isLoggedIn } = state;
    const location = useLocation();
    return (
        isLoggedIn ? children : <Navigate to={"/login"} state={{ from: location }} replace />
    )
}

export { RequiresAuth }