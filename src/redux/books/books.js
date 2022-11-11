import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from './initialState';


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
           state.push(action.payload);
        },
        removeBook: (state, action) =>  state.filter((book) => book.id !== action.payload)
        
    }
})

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;