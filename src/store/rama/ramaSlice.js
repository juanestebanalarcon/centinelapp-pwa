import { createSlice } from '@reduxjs/toolkit';

export const ramaSlice = createSlice({
      name: 'rama',
      initialState:{
         ramas: [],
      },
      reducers:{
          ListarRamas: (state, { payload = [] }) => {
            state.ramas = payload;
          }
       }
})

export const { ListarRamas } = ramaSlice.actions