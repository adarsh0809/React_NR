import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        item : [],
    },
    reducers : {
        addition : (state, action)=>{
            state.item.push(action.payload);
        } ,
        removeItem  : (state, action) =>{
            state.item.pop();
        },
        clearItem : (state) =>{
            state.item.length = 0;
        }
    }


})

export const {addition , removeItem , clearItem} = cartSlice.actions
export default cartSlice.reducer;
