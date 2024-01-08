import {configureStore} from "@reduxjs/toolkit";
import balanceReducer from "./slice";
import historySlice from "./historySlice";


export const store = configureStore({
    reducer:{
        balance:balanceReducer,
        history:historySlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch