import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postNewBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
    category: '',
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
    category: inputText.category,
  };

  const dispatch = useDispatch();
  const onAdd = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim() && inputText.category.trim() ) {
      dispatch(addBook(newBook));
      dispatch(postNewBook(newBook));
      setInputText({
        title: '',
        author: '',
        category: '',
      });
    } else {
      alert('Please Input a Title, Author and Category');
    }
  };

  return (
    <form className='addBook flex-column'>
      <h5 id='addHeading'>ADD NEW BOOK</h5>
      <div className='addform flex-row'>
      <input type="text" placeholder="Book title" name="title" onChange={onChange} value={inputText.title} />
      <input type="text" placeholder="Author name" name="author" onChange={onChange} value={inputText.author} />
    <select name="category" id="category" onChange={onChange}>
    <option value=''>Category</option>
    <option value='Fiction'>Fiction</option>
    <option value='Comedy'>Comedy</option>
    <option value='Action'>Action</option>
    <option value='Finance'>Finance</option>
    <option value='Self Help'>Self Help</option>
    <option value='History'>History</option>
    </select>
    <button className='addButton' type="submit" onClick={onAdd}>Add Book</button>
    </div>
    </form>
  );
};

export default AddBook;
