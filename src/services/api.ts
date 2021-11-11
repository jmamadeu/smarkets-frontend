import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://api.smarkets.com/v3',
});

export { api };
