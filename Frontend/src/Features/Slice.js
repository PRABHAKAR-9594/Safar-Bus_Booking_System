// In your Redux slice (e.g., userSlice.js)
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user : null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user",state.user)
        },
        logout: (state) => {
            alert("Logout Successfully")
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
        },
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
