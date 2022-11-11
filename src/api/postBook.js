import apiURL from './config';

const postBook = async (data) => {
  const response = await fetch(`${apiURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.text());
  return response;
};

export default postBook;
