import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;
  const dispatch = useDispatch();
  const onRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
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
