import { AddNotes } from "./AddNotes";
import { Notes } from "./note";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./note.css"

const NotesList = () => {

    const [notes, setNotes] = useState([]);
    const addNote = (text) => {
        const date = new Date();
        const noteobj = {
            id: uuid(),
            text: text,
            date: date.toLocaleDateString()
        };
        setNotes([...notes, noteobj]);
    };

    const deleteNote = (id) => {
        const tempNote = notes.filter((item) => item.id !== id);
        setNotes(tempNote);
    };
    return (
        <div className="notes-list">
            {notes.map((item) => (
                <Notes
                    text={item.text}
                    date={item.date}
                    notes={notes}
                    id={item.id}
                    deleteNote={deleteNote}
                />
            ))}
            <AddNotes handleAddNote={addNote} />
        </div>
    );
};

export { NotesList };
