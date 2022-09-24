import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
      name: 'Admin',
      initialState:{
         admins: [],
         errorMessage: null,
      },
      reducers:{
            onListAdmin:(state, {payload=[]})=>{
            state.admins=payload;
           }
       }
})

export const { onListAdmin } = adminSlice.actions