import axios from "axios";

export const server = axios.create({
    baseURL: 'http://localhost:8090/api'
})