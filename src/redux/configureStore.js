import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';
import categorySlice from './categories/categories';

const store = configureStore({
  reducer: {
    bookSlice,
    categorySlice,
  },
});

export default store;
