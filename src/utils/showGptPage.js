import { createSlice } from "@reduxjs/toolkit";

const showGptPage = createSlice({
    name:"Gpt",
    initialState:{
        gptState:false
    },
    reducers:{
        addGptState : (state) => {
            state.gptState=!state.gptState;
        }
    }
});

export const {addGptState} = showGptPage.actions
export default showGptPage.reducer;