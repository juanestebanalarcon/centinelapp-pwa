import { createSlice } from '@reduxjs/toolkit';

export const acudienteSlice = createSlice({
      name: 'Acudiente',
      initialState:{
         acudientes: [],
         acudienteScout:[],
         errorMessage: null,
         isFileUploading: false,
      },
      reducers:{
           onListAcudiente:(state, {payload=[]})=>{
            state.acudientes=payload;
           },
           onListAcudienteScout:(state, {payload=[]})=>{
            state.acudienteScout=payload;
           },
           onUploadFileAcudiente:(state, { payload })=>{
            state.isFileUploading = payload;
           }
       }
})

export const { onListAcudiente, onListAcudienteScout, onUploadFileAcudiente } = acudienteSlice.actions