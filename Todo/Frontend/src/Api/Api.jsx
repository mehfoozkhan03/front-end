import axios from "axios";


export const Api = axios.create({
    baseURL: "http://localhost:1000/todo"
})