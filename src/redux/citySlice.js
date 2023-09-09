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

// Agrega más reducers para manejar otros eventos
const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        // Actualiza el estado de la ciudad seleccionada
        setSelectedCity(state, action) {
            state.selectedCity = action.payload;
        },
        
        // Actualiza el estado de la búsqueda
        setSearchTerm(state, action) {
            state.title = action.payload;
            state.location = action.payload;
            state.filteredCities = state.cities.filter((item) =>
                item.title.toLowerCase().includes(state.title.toLowerCase()) &&
                item.location.toLowerCase().includes(state.location.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.cities = action.payload.cities;
                state.filteredCities = action.payload;
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
            })
            
            
    },
});

export default citySlice.reducer;