import axios from 'axios';

export const ApiCall = axios.create({
  baseURL: 'https://reqres.in/api',
});
