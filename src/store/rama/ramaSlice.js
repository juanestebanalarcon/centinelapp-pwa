import { createSlice } from '@reduxjs/toolkit';

export const ramaSlice = createSlice({
      name: 'rama',
      initialState:{
         ramas: [],
         ramaScout: "",
      },
      reducers:{
          ListarRamas: (state, { payload = [] }) => {
            state.ramas = payload;
          },
          ListarRamaScout: (state, { payload}) => {
            state.ramaScout = payload;
          }
       }
})

export const { ListarRamas, ListarRamaScout } = ramaSlice.actions