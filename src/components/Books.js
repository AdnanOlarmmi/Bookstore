import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import getBooks from '../api/getBooks';
import { fetchBooks } from '../redux/books/books';





const Books = () => {
const dispatch = useDispatch();

useEffect(() => {
dispatch(fetchBooks())
}, []);


const books = useSelector((state) => state.bookSlice.books); 
  return (
    <main>
      <ul>
        {books.map((book) => (<Book key={book.item_id} book={book} />))}
      </ul>
    </main>
  );
};

export default Books;