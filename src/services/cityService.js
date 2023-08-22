import axios from 'axios'

const citiesQueries = axios.create({
    baseURL: 'http://localhost:8090/api/cities/',
})

export const read = async (queryParams = "") => {
    try {
        const response = await citiesQueries(queryParams);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return [];
    }
};

export default read;