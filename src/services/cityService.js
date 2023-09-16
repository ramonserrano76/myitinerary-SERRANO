import axios from 'axios'

const citiesQueries = axios.create({
    baseURL: 'https://back-mytinerary-09o3.onrender.com/api/cities/',
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