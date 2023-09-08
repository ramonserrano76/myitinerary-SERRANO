import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './redux/citySlice.js';

const store = configureStore({
    reducer: {
        cities: cityReducer,
    },
});

export default store;
