import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <button type="submit">Remove</button>
    </li>
  );
};

export default Book;
