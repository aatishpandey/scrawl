import { useUser } from "../../context/userContext"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import "./login.css"
import { validateSignup } from "../../utils/authHandler";

function SignupPage() {
    const navigate = useNavigate();
    const { dispatch } = useUser();
    const [confirmPass, setConfirmPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const matchPasswords = (e) => {
        signupData.password === e.target.value ? setErrorMsg("") : setErrorMsg("Passwords don't match!! Re-enter password")
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        console.log("signudata", signupData)
        const payload = await validateSignup(signupData);
        console.log("signup payload", payload)
        if (payload) {
            dispatch({ type: "LOGIN" })
            navigate(from, { replace: true });
        }
    }
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    return (
        <div className="login-container">
            <div className="header-text text-center">
                Login
            </div>
            <form className="generic-form">
                <div className="input-container">
                    <span className="large-text input-label">First Name</span>
                    <input className="form-input"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                    />
                </div>

                <div className="input-container">
                    <span className="large-text input-label">Last Name</span>
                    <input className="form-input"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={signupData.lastName}
                        onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                    />
                </div>

                <div className="input-container">
                    <span className="large-text input-label">Email</span>
                    <input className="form-input"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    />
                </div>

                <div className="input-container">
                    <span className="large-text input-label">Password</span>
                    <input className="form-input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    />
                </div>

                <div className="input-container">
                    <span className="large-text input-label">Re enter Password</span>
                    <input className="form-input"
                        type="password"
                        placeholder="Password"
                        value={confirmPass}
                        onChange={(e) => {
                            matchPasswords(e)
                            setConfirmPass(e.target.value)
                        }}
                    />
                </div>

                <div className="form-buttons">
                    <button className="input-btn" onClick={signupHandler}>Signup</button>
                    <button onClick={() => navigate("/login")}>Already a user? Login</button>
                </div>
                {errorMsg && <div className="medium-text">{errorMsg}</div>}
            </form>

        </div>
    )
}

export { SignupPage }