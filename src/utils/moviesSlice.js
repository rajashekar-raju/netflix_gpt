import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailarVideo:null,
    },
    
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailarVideo:(state,action)=>{
            state.trailarVideo=action.payload;
        }
    },
});

export const {addNowPlayingMovies,addTrailarVideo} = moviesSlice.actions;
export default moviesSlice.reducer;