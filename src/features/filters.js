import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filter",
    initialState:{ value:{currentFilter: '*'}},
    reducers:{
        filter: (state,action) =>{
            state.value = action.payload;
        },
    }
})

export const {login} = filterSlice.actions;
export default filterSlice.reducer;