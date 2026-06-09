import axios from 'axios';

export const ApiCall = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
  },
});
