import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.bookSlice.books);
  return (
    <main>
      <ul className='booksContainer flex-column'>
        {books.map((book) => (<Book key={book.item_id} book={book} />))}
      </ul>
    </main>
  );
};

export default Books;
