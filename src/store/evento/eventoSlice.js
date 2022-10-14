import { createSlice } from '@reduxjs/toolkit';

export const eventoSlice = createSlice({
      name: 'Evento',
      initialState:{
         eventos: [],
         eventoSelect:[],
         errorMessage: null,
      },
      reducers:{
            onListEventos:(state, {payload=[]})=>{
            state.eventos=payload;
           },
           onListEventoSelect:(state, {payload=[]})=>{
            state.eventoSelect=payload;
           },
           
       }
})

export const { onListEventos, onListEventoSelect } = eventoSlice.actions