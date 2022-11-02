/*eslint-disable */
import React from "react";
import Book from "./Book";

const Books = () => {
    return(
        <main>
            <ul>
            <Book title="My book" author="Adnan" />
            <Book title="Your book" author="Musa" />
            <Book title="Our book" author="Ismail" />
            </ul>
        </main>
    )
}

export default Books;