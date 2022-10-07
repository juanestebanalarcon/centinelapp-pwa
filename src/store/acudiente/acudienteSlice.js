import { createSlice } from '@reduxjs/toolkit';

export const acudienteSlice = createSlice({
      name: 'Acudiente',
      initialState:{
         acudientes: [],
         acudienteScout:[],
         errorMessage: null,
      },
      reducers:{
           onListAcudiente:(state, {payload=[]})=>{
            state.acudientes=payload;
           },
           onListAcudienteScout:(state, {payload=[]})=>{
            state.acudienteScout=payload;
           }
       }
})

export const { onListAcudiente, onListAcudienteScout } = acudienteSlice.actions