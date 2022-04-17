import axios from "axios";


const validateInput = (email, password) => {
    console.log("validateinput: ", email, password)
    return email.includes("@") && password.length >= 6 ? true : false
}

const validateLogin = async (loginState) => {
    if (validateInput(loginState.email, loginState.password)) {
        try {
            const res = await axios.post("/api/auth/login", loginState);
            if (res.status === 200 || res.status === 201) {
                console.log("success", res)
                const { foundUser, encodedToken } = res.data;
                localStorage.setItem("authToken", encodedToken);
                return foundUser;
            } else {
                return false;
            }
        }
        catch (e) {
            console.log("Error", e.response);
            return false;
        }
    }
    else {
        return false;
    }
}

const validateSignup = async (signupState) => {
    if (validateInput(signupState.email, signupState.password)) {
        try {
            const res = await axios.post("/api/auth/signup", signupState)
            if (res.status === 200 || res.status === 201) {
                console.log("success signup", res)
                const { createdUser, encodedToken } = res.data;
                localStorage.setItem("authToken", encodedToken);
                return createdUser;
            } else {
                return false;
            }
        } catch (e) {
            console.log("Error", e.response)
            return false;
        }
    }
    else {
        return false;
    }
}

export { validateInput, validateLogin, validateSignup };

