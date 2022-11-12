import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/books';
import Chapter from './Chapter';
import Circle from './Circle';

const Book = (props) => {
  const { book } = props;
  // eslint-disable-next-line
  const { item_id, title, author, category } = book;
  const dispatch = useDispatch();
  const onRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(item_id));
    dispatch(deleteBook(item_id));
  };

  return (
    <li className='book flex-row'>
      <div className='bookInfo'>
      <span id='bookCategory'>{category}</span>
      <span id='bookTitle'>{title}</span>
      <span id='bookAuthor'>{author}</span>
      <ul className='actions flex-row'>
        <li>Comments</li>
        <li  onClick={onRemove}>Remove</li>
        <li>Edit</li>
      </ul>
      </div>
      <Circle />
      <Chapter />
    </li>
  );
};

export default Book;
