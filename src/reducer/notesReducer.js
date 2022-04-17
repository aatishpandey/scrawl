const NotesReducer = (notesState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return (
                {
                    ...notesState,
                    [action.payload.name]: action.payload.value
                })
        case "UPDATE_NOTE": return {}
        case "DELETE_NOTE": return {}

        default: return notesState;
    }
}

export { NotesReducer }