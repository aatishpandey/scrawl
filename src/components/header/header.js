import { useTheme } from "../../context/ThemeContext"
import { useUser } from "../../context/userContext";
import "./header.css"
import { Link } from "react-router-dom";

function Header({ ham, setHam }) {
    const { theme, setTheme } = useTheme();
    const { state, dispatch } = useUser();
    const { isLoggedIn } = state;
    const handleClick = () => {

        setTheme(theme === "dark-theme" ? "white-theme" : "dark-theme")
    }
    const logoutHandler = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="header">
            <div className="hero header-text    ">
                Scrawl
            </div>
            <div className="header-search">
                <input type="search" className="search" />
            </div>
            <i class="fas fa-caret-square-down large-text" onClick={() => { setHam(prev => !prev) }}></i>
            {
                isLoggedIn ?
                    <button className="btn" onClick={logoutHandler}>Logout</button> :
                    <Link to="/login" className="btn-link">Login</Link>
            }
            <i class="far fa-moon large-text" onClick={handleClick}></i>
        </div>
    )
}

export { Header }