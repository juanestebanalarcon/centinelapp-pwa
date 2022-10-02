import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
      name: 'Admin',
      initialState:{
         admins: [],
         ramasAdmin:[],
         errorMessage: null,
      },
      reducers:{
            onListAdmin:(state, {payload=[]})=>{
            state.admins=payload;
           },
           onListAdminRamas:(state, {payload=[]})=>{
            state.ramasAdmin=payload;
           }
       }
})

export const { onListAdmin, onListAdminRamas } = adminSlice.actions