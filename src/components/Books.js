import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books);
  
  return (
  <main>
    <ul>
      {books.map((book) => {
        return (<Book key={book.id} book={book} />)})}
    </ul>
  </main>
)
};


export default Books;
