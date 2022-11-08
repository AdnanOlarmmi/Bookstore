const CHECK_CATEGORY = 'bookstore/categories/CHECK_CATEGORY';

export const checkCategory = () => ({
  type: CHECK_CATEGORY,
});

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_CATEGORY':
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
