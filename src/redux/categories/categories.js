const CHECK_CATEGORY = 'bookstore/categories/CHECK_CATEGORY';

export const checkCategory = (id) => ({
    type:   CHECK_CATEGORY,
})

const categoryReducer = (state = [], action) => {
    switch(action.type) {
        case 'CHECK_CATEGORY':
            return 'Not available at the moment'
        default:
            return state
    }
}