import "./notes.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNotes } from "../../context/NotesContext";


function Notes() {
    const { notesState } = useNotes();
    return (
        <div className="notes" >
            {/* <button onClick={() => toast.info("Hi first toast", { theme: "colored" })} className="toast">Click</button>
            <ToastContainer style={{fontSize:"1.5rem"}}/> */}
            
        </div>
    )
}

export { Notes }