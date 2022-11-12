/* eslint-disable*/
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getBooks from '../../api/getBooks';
import postBook from '../../api/postBook';
import apiDeleteBook from '../../api/deleteBook';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', getBooks);

export const postNewBook = createAsyncThunk('books/postBook', postBook);

export const deleteBook = createAsyncThunk('book/deleteBook', apiDeleteBook);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const booksArray = [];
        Object.entries(action.payload).map((book) => {
          booksArray.push({
            item_id: book[0],
            title: book[1][0].title,
            author: book[1][0].author,
            category: book[1][0].category,
          });
        });
        state.books = booksArray;
      });
    builder
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
