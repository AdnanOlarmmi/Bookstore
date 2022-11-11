import apiURL from "./config";


const getBooks = async () => {
  const fetchedData = await fetch(`${apiURL}`)
    .then((response) => response.json());
  return fetchedData;
};

export default getBooks;