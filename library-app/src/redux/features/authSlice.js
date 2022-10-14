import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: 0,
    NIM: 0,
    username: "",
    email: "",
    role: "",
    profile_picture: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.email = action.payload.email
            state.NIM = action.payload.NIM
        },
        logout: (state) => {
            state.id = 0
            state.username = ""
            state.email = ""
            // return initialState
        },
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
