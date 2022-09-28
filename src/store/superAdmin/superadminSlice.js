import { createSlice } from '@reduxjs/toolkit';

export const superadminSlice = createSlice({
      name: 'SuperAdmin',
      initialState:{
         superadmins: [],
         errorMessage: null,
      },
      reducers:{
            onListSuperAdmin:(state, {payload=[]})=>{
            state.superadmins=payload;
           }
       }
})

export const { onListSuperAdmin } = superadminSlice.actions