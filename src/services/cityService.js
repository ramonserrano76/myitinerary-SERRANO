import axios from 'axios'

const citiesQueries = axios.create({
    baseURL: 'http://localhost:8090/api/cities/',
})

export const read = async (query) => {
    try {
        const response = await citiesQueries(query)
        console.log(response.data);
        return response.data
        
    } catch (error) {
        return []
    }
};

export default read;