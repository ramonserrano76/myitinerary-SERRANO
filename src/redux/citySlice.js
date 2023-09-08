import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { read } from '../services/cityService.js'; // Importa la función de servicio que lee los datos

const initialState = {
    data: [],
    cityData: null,
    cities: [], // Nuevo campo para las ciudades no filtradas
    filteredCities: [], // Un nuevo campo para las ciudades filtradas
    loading: false,
    error: null,
};

// Define las acciones asíncronas existentes
export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    try {
        const data = await read();
        return data;
    } catch (error) {
        throw error;
    }
});

export const fetchCityDetail = createAsyncThunk('cities/fetchCityDetail', async (id) => {
    const cityData = await read(`?_id=${id}`);
    const city = cityData.find((city) => city._id === id);
    return city || null; // Devolver null si no se encontró la ciudad
});

const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.loading = false;                
                state.data = action.payload; // Actualiza las ciudades no filtradas con los datos
                state.cities = action.payload.cities; // Actualiza las ciudades
                state.filteredCities = action.payload; // Actualiza las ciudades filtradas
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCityDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCityDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.cityData = action.payload;
            })
            .addCase(fetchCityDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default citySlice.reducer; 
