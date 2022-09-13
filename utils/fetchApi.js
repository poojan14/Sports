import axios from "axios";

export const baseUrl = 'https://api.npoint.io/20c1afef1661881ddc9c';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url));
    return data;
}