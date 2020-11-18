import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.mercadobitcoin.net/',
});

export default api;
