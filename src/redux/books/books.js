import initialBooks from "./initialBooks";
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = () => ({
  type: ADD_BOOK,
  id: 1,
  title: 'The Hunger Games',
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
