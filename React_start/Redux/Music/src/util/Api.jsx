import axios from "axios";

export const musicApi = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres_c27db760fb6f4b06a48a548c02bf449f", // Required for the free ReqRes API
  },
});
