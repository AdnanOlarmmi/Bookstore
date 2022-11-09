import { v4 as uuidv4 } from 'uuid';

const initialBooks = [
    {
        id: uuidv4(),
        author: 'The Hunger',
        title: 'The Hunger Games',
    },
    {
        id: uuidv4(),
        author: 'The Games',
        title: 'The Hunger Games',
    }
]

export default initialBooks;