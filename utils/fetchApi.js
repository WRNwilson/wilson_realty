import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "dda42d6076msh47f9e96410793b9p1b1e86jsn85bc3f862b5d",
    },
  });
  return data;
};
