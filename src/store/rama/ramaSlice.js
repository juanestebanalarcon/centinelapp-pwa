import { createSlice } from '@reduxjs/toolkit';

export const ramaSlice = createSlice({
      name: 'rama',
      ramaScout: "",
      ramaIdScout:"",
      initialState:{
         ramas: [],
      },
      reducers:{
          ListarRamas: (state, { payload = [] }) => {
            state.ramas = payload;
         },
         ListarRamaScout: (state, { payload}) => {
           state.ramaScout = payload; 
         },
         ListarIDRamaScout: (state, { payload}) => {
          state.ramaIdScout = payload; 
        }
       }
})

export const { ListarRamas, ListarRamaScout,ListarIDRamaScout } = ramaSlice.actions