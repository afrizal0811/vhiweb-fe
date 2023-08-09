import axios from 'axios';

export const getApi = async (URL) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return url;
};
