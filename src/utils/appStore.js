import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptPage from "./showGptPage";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        Gpt:gptPage,
    },
});

export default appStore;