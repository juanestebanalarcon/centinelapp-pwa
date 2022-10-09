import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice, ramaSlice, scoutSlice, adminSlice, acudienteSlice, superadminSlice, publicacionSlice } from './';

export const store = configureStore({
    reducer:{
        auth: AuthSlice.reducer,
        rama: ramaSlice.reducer,
        scout: scoutSlice.reducer,
        admin: adminSlice.reducer,
        acudiente: acudienteSlice.reducer,
        superadmin: superadminSlice.reducer,
        publicacion: publicacionSlice.reducer,
    },
})