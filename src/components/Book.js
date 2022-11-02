/*eslint-disable */
import React from "react";

const Book = (props) => {
    return(<li>{props.title} by {props.author} <button type="submit">Remove</button></li>)
    
}

export default Book;