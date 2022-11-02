/*eslint-disable*/
import React from "react";

const AddBook = () => {
    return(<form>
        <input type="text" name="title"></input>
        <input type="text" name="author"></input>
        <button type="submit">Add Book</button>
    </form>)
}

export default AddBook;