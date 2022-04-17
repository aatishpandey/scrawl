const Notes = ({ text, date, id, deleteNote }) => {
    return (
        <div className="note">
            <div>{text}</div>
            <div className="notes-footer">
                <div>{date}</div>
                <button onClick={() => deleteNote(id)}>Delete</button>
            </div>
        </div>
    );
};

export { Notes };