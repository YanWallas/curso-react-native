import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da api: /movie/now_playing?api_key=10336075e69e824f4134ca90376b9ed8

//https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
});

export default api;