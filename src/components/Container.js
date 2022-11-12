import React from 'react';
import AddBook from './AddBook';
import Books from './Books';

const Container = () => (
  <div className="flex-column container">
    <Books />
    <AddBook />
  </div>
);

export default Container;
