import React from 'react';
import Book from './Book';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
const Books = () => (
  <Provider store={store}>
  <main>
    <ul>
      {store.getState().books.map((book) => {
        return (<Book key={book.id} title={book.title } author={book.author} />)})}
    </ul>
  </main>
  </Provider>
);
console.log(store.getState().books)
export default Books;
