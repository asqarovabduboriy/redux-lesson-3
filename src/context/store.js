import { configureStore } from "@reduxjs/toolkit";
import userClise from "./userClise";

export const store = configureStore({
    reducer:{
        users: userClise
    }
})