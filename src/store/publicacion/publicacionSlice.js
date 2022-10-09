import { createSlice } from '@reduxjs/toolkit';

export const publicacionSlice = createSlice({
      name: 'Publicacion',
      initialState:{
         publicaciones: [],
         errorMessage: null,
      },
      reducers:{
            onListPublicaciones:(state, {payload=[]})=>{
            state.publicaciones=payload;
           }
       }
})

export const { onListPublicaciones } = publicacionSlice.actions