import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice, ramaSlice, scoutSlice } from './';

export const store = configureStore({
    reducer:{
        auth: AuthSlice.reducer,
        rama: ramaSlice.reducer,
        scout: scoutSlice.reducer,
    },
})