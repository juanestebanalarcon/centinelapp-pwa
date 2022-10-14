import { createSlice } from '@reduxjs/toolkit';

export const scoutSlice = createSlice({
      name: 'Scout',
      initialState:{
         scouts: [],
         errorMessage: null,
         isFileUploading: false,
      },
      reducers:{
           onListScouts:(state, {payload=[]})=>{
            state.scouts=payload;
           },
           onUploadFileScout:(state, { payload })=>{
            state.isFileUploading = payload;
           }
       }
})

export const { onListScouts, onUploadFileScout } = scoutSlice.actions