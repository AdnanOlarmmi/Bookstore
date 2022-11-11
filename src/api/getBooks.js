import apiURL from './config';

const getBooks = async () => {
  try {
    const response = await fetch(`${apiURL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getBooks;
