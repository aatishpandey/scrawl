import { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const totalCharacters = 200;
    return (
        <div className="note add-note">
            <textarea
                placeholder="Type something..."
                rows="8"
                cols="10"
                value={noteText}
                onChange={(e) => {
                    if (totalCharacters - e.target.value.length >= 0) {
                        setNoteText(e.target.value);
                    }
                }}
            />
            <div className="notes-footer">
                <div>{totalCharacters - noteText.length} characters remaining</div>
                <button
                    onClick={() => {
                        if (noteText.trim().length > 0) {
                            handleAddNote(noteText);
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
