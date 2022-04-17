import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {
    const { theme } = useTheme();

    return (
        <div className={`sidebar ${theme === "dark-theme" ? "sidebar" : "sidebar-white"}`}>
            <Link to="/" className="link">
                <div className={`large-text sidebar-element ${theme === "dark-theme" ? "sidebar-element" : "sidebar-element-white"}`} >
                    <i class="fas fa-home sidebar-icon"></i>
                    <div className="sidebar-text">Home</div>
                </div>
            </Link>
            <Link to="/label" className="link">
                <div className={`large-text sidebar-element ${theme === "dark-theme" ? "sidebar-element" : "sidebar-element-white"}`}>
                    <i class="fas fa-tags sidebar-icon"></i>
                    <div className="sidebar-text">Label</div>
                </div>
            </Link>

            <Link to="/archive" className="link">
                <div className={`large-text sidebar-element ${theme === "dark-theme" ? "sidebar-element" : "sidebar-element-white"}`}>
                    <i class="fas fa-archive sidebar-icon"></i>
                    <div className="sidebar-text">Archive</div>
                </div>
            </Link>
            <Link to="/trash" className="link">
                <div className={`large-text sidebar-element ${theme === "dark-theme" ? "sidebar-element" : "sidebar-element-white"}`}>
                    <i class="fas fa-archive sidebar-icon"></i>
                    <div className="sidebar-text">Trash</div>
                </div>
            </Link>
            <Link to="/profile" className="link">
                <div className={`large-text sidebar-element ${theme === "dark-theme" ? "sidebar-element" : "sidebar-element-white"}`}>
                    <i class="fas fa-id-badge sidebar-icon"></i>
                    <div className="sidebar-text">Profile</div>
                </div>
            </Link >
        </div >
    )
}

export { Sidebar };