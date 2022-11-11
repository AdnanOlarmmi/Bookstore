import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import getBooks from '../api/getBooks';
import { populateBooks } from '../redux/books/books';


const Books = () => {
  const books = useSelector((state) => state.bookSlice);

  return (
    <main>
      <ul>
        {books.map((book) => (<Book key={book.id} book={book} />))}
      </ul>
    </main>
  );
};

export default Books;