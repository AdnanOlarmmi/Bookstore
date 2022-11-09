import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <main>
      <ul>
        {books.map((book) => (<Book key={book.id} book={book} />))}
      </ul>
    </main>
  );
};

export default Books;
