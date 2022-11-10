import { addBook } from "./books";

const action = (newBook) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addBook(newBook));
       }, 2000);
    }
}

export default action;