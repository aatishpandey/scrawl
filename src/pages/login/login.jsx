import { useUser } from "../../context/userContext"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import "./login.css"
import { validateLogin } from "../../utils/authHandler";

function LoginPage() {
    const navigate = useNavigate();
    const { dispatch } = useUser();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const guestCredentials = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123"
    }

    const guestLogin = () => {
        setLoginData(guestCredentials);
    }

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log(loginData)
        const payload = await validateLogin(loginData)
        console.log("login payload", payload)
        if (payload) {
            console.log(payload)
            dispatch({ type: "LOGIN", payload: payload })
            console.log(from)
            navigate(from, { replace: true })
        }
    }

    return (
        <div className="login-container">
            <div className="header-text text-center">
                Login
            </div>
            <form className="generic-form">
                <div className="input-container">
                    <span className="large-text input-label">Email</span>
                    <input className="form-input"
                        type="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                </div>

                <div className="input-container">
                    <span className="large-text input-label">Password</span>
                    <input className="form-input"
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                </div>

                <div className="form-buttons">
                    <div className="medium-text" onClick={guestLogin}>Guest Login?</div>
                    <button className="input-btn" onClick={loginHandler}>Login</button>
                    <button onClick={() => navigate("/signup")}>New User? Signup</button>
                </div>
            </form>

        </div>
    )
}

export { LoginPage }