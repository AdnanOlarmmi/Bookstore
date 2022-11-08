

export const addBooks = () => ({
        type: 'ADD_BOOK',
        id: 1,
        title: 'The Hunger Games',
})

export const removeBooks = (id) => ({
        type: 'REMOVE_BOOK',
        id,
})

const bookReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BOOk':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
            }
            ];
        case 'REMOVE_BOOK':
            return state.filter(book=> book.id !== action.id);
        default: 
            return state
    }
}


export default bookReducer;
