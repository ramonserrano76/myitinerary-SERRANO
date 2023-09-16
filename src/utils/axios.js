import axios from "axios";

export const server = axios.create({
    baseURL: 'https://back-mytinerary-09o3.onrender.com/api'
})