import { createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducer/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const [notesState, dispatchNotes] = useReducer(NotesReducer, {
        title: "",
        text: "",
        color: "",
        label: "",
        priority: ""
    })
    return (
        <NotesContext.Provider value={{ notesState, dispatchNotes }}>
            {children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };