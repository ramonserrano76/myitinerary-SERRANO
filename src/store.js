import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './redux/citySlice.js';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = configureStore({
    reducer: {
        cities: cityReducer,
    },
});

export default store;
