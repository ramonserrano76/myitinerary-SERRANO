import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { read } from '../services/cityService'; // Importa la función de servicio que lee los datos

const initialState = {
    data: [],
    cityData: null,
    loading: false,
    error: null,
};

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    const data = await read();
    return data;
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
                state.data = action.payload;
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
