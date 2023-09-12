import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './redux/citySlice.js';
import userReducer from './redux/userSlice.js';
const store = configureStore({
    reducer: {
        cities: cityReducer,
        user: userReducer
    },
});

export default store;
