import { createSlice } from '@reduxjs/toolkit';

export const publicacionSlice = createSlice({
      name: 'Publicacion',
      initialState:{
         publicaciones: [],
         publicacionSel:[],
         errorMessage: null,
      },
      reducers:{
            onListPublicaciones:(state, {payload=[]})=>{
            state.publicaciones=payload;
           },
           onListPublicacionSel:(state, {payload=[]})=>{
            state.publicacionSel=payload;
           }
       }
})

export const { onListPublicaciones, onListPublicacionSel } = publicacionSlice.actions