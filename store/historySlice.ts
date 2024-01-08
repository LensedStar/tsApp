import {createSlice,PayloadAction} from "@reduxjs/toolkit";

type transaction = {
    id:number,
    date:string,
    type:string,
    quantity:string,
}

type initialStateType = {
    value:transaction[]
}

const initialState:initialStateType = {
    value:[]
}

const historySlice = createSlice({
    name:"history",
    initialState,
    reducers:{
        addTransaction:(state,action:PayloadAction<transaction>)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addTransaction} = historySlice.actions

export default historySlice.reducer