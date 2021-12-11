import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filter",
    initialState:{ 
        value:{currentFilter: '*'},
        cartItems:[]
    },
    reducers:{
        changeFilter: (state,action) =>{
            state.value = action.payload;
            console.log("filter called");
        },
        updateCart: (state,action) =>{
            state.cartItems = [...state.cartItems,action.payload];
        },
        deleteCart: (state,action) =>{
            let arr = [...state.cartItems];
            let index = arr.indexOf(action.payload)
            arr.splice(index, 1);
            state.cartItems = arr;
        },
        
    }
})



export const {changeFilter,updateCart,deleteCart} = filterSlice.actions;
export default filterSlice.reducer;