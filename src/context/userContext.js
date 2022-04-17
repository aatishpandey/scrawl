import { createContext, useContext, useReducer } from "react";
import { UserReducer } from "../reducer/userReducer";


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        isLoggedIn: false,
    })
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };