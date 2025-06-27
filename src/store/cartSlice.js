import { createSlice } from "@reduxjs/toolkit";


let dataFromWeb =JSON.parse(localStorage.getItem("cart"))
console.log(typeof(dataFromWeb))

const cartSlice=createSlice({    //this createSlice is a redux props.
    name:"cart",
    initialState : dataFromWeb ,    //this is also props
    reducers:{          //reducers is also its props
        addItem(state,action){
            //console.log(action)
            state.push(action.payload)
            localStorage.setItem("cart",JSON.stringify([...state]))  //This "cart" is a key name to set the items, so its our choice of name
            console.log(dataFromWeb)
        },
        removeItem(state,action){
            let itemId=action.payload   //payload is a in-built props.
            let newItems=state.filter(e=>e.id!==itemId)
            localStorage.setItem("cart",JSON.stringify([...newItems]));
            return newItems;
    }
}
})

export default cartSlice.reducer;

export let {addItem,removeItem}=cartSlice.actions;
 
export let newItems;