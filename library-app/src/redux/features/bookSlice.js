import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: 0,
    title: "",
    author: "",
    release_year: 0,
    ISBN: "",
    publisher: "",
    genre: "",
    pages: "",
    language: "",
    image_url: "",
    stock: 0,
    createdAt: "",
    updatedAt: "",
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        detailsBook: (state, action) => {
            state.id = action.payload.id
            state.title = action.payload.title
            state.author = action.payload.author
            state.release_year = action.payload.release_year
            state.ISBN = action.payload.ISBN
            state.publisher = action.payload.publisher
            state.genre = action.payload.genre
            state.pages = action.payload.pages
            state.language = action.payload.language
            state.image_url = action.payload.image_url
            state.stock = action.payload.stock
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        },
    },
})

export const { detailsBook } = bookSlice.actions
export default bookSlice.reducer
