import { createSlice } from '@reduxjs/toolkit';

export const acudienteSlice = createSlice({
      name: 'Acudiente',
      initialState:{
         acudientes: [],
         errorMessage: null,
      },
      reducers:{
           onListAcudiente:(state, {payload=[]})=>{
            state.acudientes=payload;
           }
       }
})

export const { onListAcudiente } = acudienteSlice.actions