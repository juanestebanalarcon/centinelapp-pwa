import { createSlice } from '@reduxjs/toolkit';

export const scoutSlice = createSlice({
      name: 'Scout',
      initialState:{
         scouts: [],
         errorMessage: null,
      },
      reducers:{
           onListScouts:(state, {payload=[]})=>{
            state.scouts=payload;
           }
       }
})

export const { onListScouts } = scoutSlice.actions