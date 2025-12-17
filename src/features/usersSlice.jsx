import { createSlice } from "@reduxjs/toolkit"
const initValue = {
    users: [
        { id: 1, userName: "rd", password: "123", fullName: "רחלי דבוש", Email: "dd@gmail.com", isManager: true },
               { id: 4, userName: "avital", password: "123", fullName: 'אביטל שי', Email: "dd@gmail.com", isManager: true },
        { id: 2, userName: "ddd", password: "100", fullName: "nm", Email: "dd@gmail.com", isManager: false },
        { id: 3, userName: "טובה דאבוש", password: "100", fullName: "❤️טובווווש", Email: "dd@gmail.com", isManager: false },
    ],
    currentUser: null


}
const usersSlice = createSlice({
    name: "users",
    initialState: initValue,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        delUser: (state, action) => {
            const del = state.users.findIndex(user => user.id === action.payload)
            if (del !== -1) {
                state.users.splice(del, 1);
            }
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        logOut: (state,action) => {
            state.currentUser = null;
            localStorage.removeItem('currentUser');
        }


    }
})

export const {addUser, delUser, updateUser, setCurrentUser, logOut} = usersSlice.actions

export default usersSlice.reducer 