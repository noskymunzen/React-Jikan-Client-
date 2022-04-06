import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

const getAnime = async (search = "", page = 1) => {
  const endpoint = `/anime?q=${search}&page=${page}`;
  const { data } = await instance.get(endpoint);
  return data;
};

const getAnimeById = async (id) => {
  const endpoint = `/anime/${id}`;
  const { data } = await instance.get(endpoint);
  return data.data;
};

export default {
  getAnime,
  getAnimeById,
};
