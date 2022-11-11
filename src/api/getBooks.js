import apiURL from "./config";





const getBooks = async () => {
    try {
      const response = await fetch(`${apiURL}`);
       const data = await response.json();
       return data;
    }
    catch(error) {
      console.log(error);
    }    
  };

  export default getBooks;


