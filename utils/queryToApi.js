const BASE_URI = 'https://deploy-api-bsale.herokuapp.com/api/'; // Uri para conexión con el servidor servidor

// Método que realiza la consulta a la api para obtener los datos según el endpoint.
const queryToAPI = async (endPoint) => {
  const apiURL = `${BASE_URI}${endPoint}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    return data;
  } 
  
  catch (error) {
    console.log('Fetch Error', error);
  };
};

export default queryToAPI;