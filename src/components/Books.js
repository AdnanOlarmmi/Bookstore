import React from 'react';
import Book from './Book';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
const Books = () => (
  <main>
    <ul>
      <Book title="My book" author="Adnan" />
      <Book title="Your book" author="Musa" />
      <Book title="Our book" author="Ismail" />
    </ul>
  </main>
);
console.log(store.getState())
export default Books;
