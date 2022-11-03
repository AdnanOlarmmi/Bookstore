import React from 'react';

const AddBook = () => (
  <form>
    <input type="text" name="title" />
    <input type="text" name="author" />
    <button type="submit">Add Book</button>
  </form>
);

export default AddBook;
