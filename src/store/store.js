import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './';

export const store = configureStore({
    reducer:{
        auth: AuthSlice.reducer,
    },
})