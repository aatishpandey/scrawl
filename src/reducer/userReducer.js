const UserReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            const { firstName, archives, notes } = action.payload;
            return ({
                ...state,
                isLoggedIn: true,
                firstName: firstName,
                archives: archives,
                notes: notes
            });
        case "LOGOUT": return ({
            ...state,
            isLoggedIn: false,
            firstName: "",
            archives: [],
            notes: []

        })
        default: return state;
    }
}

export { UserReducer }