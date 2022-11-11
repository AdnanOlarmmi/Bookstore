import apiURL from "./config";

const deleteBook = async (id) => {
    const response = await fetch(`${apiURL}${id}`, {
      method: 'DELETE',
    }).then((response) => response.text());
    return response;
};

export default deleteBook;