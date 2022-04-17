import { useState } from "react";
import { useNotes } from "../../context/NotesContext";
// import { useUser } from "../../context/userContext";

const AddNotes = ({ }) => {
    const { notesState, dispatchNotes } = useNotes();
    const [noteText, setNoteText] = useState("");
    const totalCharacters = 200;
    return (
        <div className="note add-note">
            <textarea
                placeholder="Title"
                rows="3"
                cols="10"
                name="title"
                value={notesState.title}
                onChange={(e) => {
                    if (totalCharacters - e.target.value.length >= 0) {
                        dispatchNotes({ type: "ADD_NOTE", payload: e.target })
                    }
                }}
            />
            <textarea
                placeholder="Type something..."
                rows="8"
                cols="10"
                name="text"
                value={notesState.text}
                onChange={(e) => {
                    if (totalCharacters - e.target.value.length >= 0) {
                        dispatchNotes({ type: "ADD_NOTE", payload: e.target })
                    }
                }}
            />
            <div className="notes-footer">
                <div>{totalCharacters - noteText.length} characters remaining</div>
                <button
                    onClick={() => {
                        if (noteText.trim().length > 0) {
                            dispatchNotes({ type: "" })
                            setNoteText("");
                        }
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export { AddNotes };
