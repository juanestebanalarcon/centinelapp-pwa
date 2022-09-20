import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
      name: 'Auth',
      initialState:{
         status: 'checking',
         user: {},
         
         errorMessage: null,
      },
      reducers:{
           onChecking: (state) => {
            state.status = 'checking';
           },
           onLogin: (state, { payload = {} }) => {
            state.status = 'Authenticated';
            state.user = payload;
   
           },
           onLogout: (state) => {
            state.status = 'Not-Authenticated';
            state.user = {};
           },
           clearErrorMessage: (state) => {
            state.errorMessage = null;
           }
       }
})

export const { onChecking, onLogin, onLogout, clearErrorMessage } = AuthSlice.actions