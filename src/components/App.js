import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BooksContainer from './BooksContainer';
import Categories from './Categories';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer, { addBooks } from '../redux/books/books';

const books = configureStore({
  reducer: {bookReducer},
})

console.log(books.getState());

books.subscribe(() => console.log(books.getState()));

books.dispatch(addBooks());

console.log(books.getState());



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
