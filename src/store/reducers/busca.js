const { createSlice } = require("@reduxjs/toolkit");


const initialState = []

const buscaSlice = createSlice({
    name:'busca',
    initialState,
    reducers:{
        mudarbusca:(state, {payload}) => payload,
        resetarBusca: () => initialState,

    }
});


export const { mudarbusca, resetarBusca} = buscaSlice.actions;


export default buscaSlice.reducer;