import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filter",
    initialState:{ 
        value:{currentFilter: '*'},
        cartItems:[],
        totalPrice:0,
    },
    reducers:{
        confirmPayment:(state) =>{
            state.totalPrice = 0;
            state.cartItems = [];

        },
        changeFilter: (state,action) =>{
            state.value = action.payload;
        },
        updateCart: (state,action) =>{
            state.cartItems = [...state.cartItems,action.payload];
        },
        deleteCart: (state,action) =>{
            let arr = [...state.cartItems];
            console.log(action.payload);
            
            arr = arr.filter((item)=>{
                return item.shoe_id !== action.payload.shoe_id;
            })
            console.log(arr);
            state.cartItems = arr;

            let price = state.totalPrice  - action.payload.sale_price;
            state.totalPrice = price;
            
        },
        updatePrice:(state,action) =>{
            let newPrice = state.totalPrice + action.payload;
            console.log("received price: ",action.payload,"old price: ",state.totalPrice, "new price: ", newPrice);
            state.totalPrice = newPrice;
            
        }

        
    }
})



export const {changeFilter,updateCart,deleteCart,updatePrice,confirmPayment} = filterSlice.actions;
export default filterSlice.reducer;