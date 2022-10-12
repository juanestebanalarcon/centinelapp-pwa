import { createSlice } from '@reduxjs/toolkit';

export const eventoSlice = createSlice({
      name: 'Evento',
      initialState:{
         eventos: [],
         errorMessage: null,
      },
      reducers:{
            onListEventos:(state, {payload=[]})=>{
            state.eventos=payload;
           }
       }
})

export const { onListEventos } = eventoSlice.actions