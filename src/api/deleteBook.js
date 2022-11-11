import apiURL from './config';

const apiDeleteBook = async (id) => {
  const response = await fetch(`${apiURL}${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());
  return response;
};

export default apiDeleteBook;
