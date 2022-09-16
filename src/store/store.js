import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice, ramaSlice } from './';

export const store = configureStore({
    reducer:{
        auth: AuthSlice.reducer,
        rama: ramaSlice.reducer,
    },
})