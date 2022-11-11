import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  //eslint-disable-next-line
  const { item_id, title, author } = book;
  const dispatch = useDispatch();
  const onRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(item_id));
    dispatch(deleteBook(item_id));
  };

  return (
    <li>
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <button type="submit" onClick={onRemove}>Remove</button>
    </li>
  );
};

export default Book;
