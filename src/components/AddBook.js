import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';


const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  })

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value})
  }

  const dispatch = useDispatch();
  const onAdd = (e)=>{
    e.preventDefault()
    if (inputText.title.trim() && inputText.author.trim()) {
      dispatch(addBook());
      setInputText({
        title: '',
        author:''})
      
    } else {
      alert("Please write item")
    }
  }
 
  return(
  <form>
    <input type="text" placeholder='Book title' name="title" onChange={onChange} value={inputText.title}  />
    <input type="text" placeholder="Author name" name="author" onChange={onChange} value={inputText.author}/>
    <button type="submit" onClick={onAdd}>Add Book</button>
  </form>
)};

export default AddBook;
