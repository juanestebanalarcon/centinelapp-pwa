import { createSlice } from '@reduxjs/toolkit';

export const ramaSlice = createSlice({
      name: 'rama',
      ramaScout: "",
      ramaIdScout:"",
      ramaSel:"",
      initialState:{
         ramas: [],
      },
      reducers:{
          ListarRamas: (state, { payload = [] }) => {
            state.ramas = payload;
         },
         ListarRamasSel: (state, { payload}) => {
          state.ramaSel = payload;
       },
         ListarRamaScout: (state, { payload}) => {
           state.ramaScout = payload; 
         },
         ListarIDRamaScout: (state, { payload}) => {
          state.ramaIdScout = payload; 
        }
       }
})

export const { ListarRamas,ListarRamasSel, ListarRamaScout,ListarIDRamaScout } = ramaSlice.actions