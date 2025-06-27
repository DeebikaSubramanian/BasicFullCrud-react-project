import {configureStore} from "@reduxjs/toolkit"
import cartSliceReducer from "./cartSlice"  
//as it is a default export i can use anyname as alias actually it is cartslice.reducer


export const store=configureStore({
    reducer:{cart:cartSliceReducer}  //this cartSliceReducer is imported from ./cartSlice
})