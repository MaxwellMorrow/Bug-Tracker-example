import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Max Morrow"})
             state.push({ name: "Jane Doe" });
        }
    }
})
export default slice.reducer;

export const { getUser} = slice.actions
