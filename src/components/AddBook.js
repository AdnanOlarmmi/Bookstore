import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postNewBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const newBook = {
    item_id: uuidv4(),
    title: inputText.title,
    author: inputText.author,
    category: 'Fiction',
  };

  const dispatch = useDispatch();
  const onAdd = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim()) {
      dispatch(addBook(newBook));
      dispatch(postNewBook(newBook));
      setInputText({
        title: '',
        author: '',
      });
    } else {
      alert('Please Input a Title and Author');
    }
  };

  return (
    <form>
      <input type="text" placeholder="Book title" name="title" onChange={onChange} value={inputText.title} />
      <input type="text" placeholder="Author name" name="author" onChange={onChange} value={inputText.author} />
      <button type="submit" onClick={onAdd}>Add Book</button>
    </form>
  );
};

export default AddBook;
