import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
      name: 'Admin',
      initialState:{
         admins: [],
         ramasAdmin:[],
         errorMessage: null,
         isFileUploading: false,
      },
      reducers:{
            onListAdmin:(state, {payload=[]})=>{
            state.admins=payload;
           },
           onListAdminRamas:(state, {payload=[]})=>{
            state.ramasAdmin=payload;
           },
           onUploadFileAdmin:(state, { payload })=>{
            state.isFileUploading = payload;
           }
       }
})

export const { onListAdmin, onListAdminRamas, onUploadFileAdmin } = adminSlice.actions