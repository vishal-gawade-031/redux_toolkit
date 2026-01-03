import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice = createSlice({
  name: "counter",
  initialState:{
    value:0
  },
  reducers:{
    increment:(state)=>{
        state.value +=1;
    },
    decrement:(state)=>{
        state.value -=1; 
    },
    increaseby5:(state,actions)=>{
      state.value +=actions.payload;
    }
  }  
})
export const{increment,decrement,increaseby5}=counterSlice.actions;
export default counterSlice.reducer;