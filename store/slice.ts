import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface Balance {
    value:number
}

const initialState : Balance = {
    value:0
}

export const balanceSlice = createSlice({
    name:"balance",
    initialState,
    reducers:{
        income:(state,action:PayloadAction<number>)=>{
            const safeState = state.value * 100
            const safeAction = action.payload * 100
            state.value = (safeState + safeAction) / 100
        },
        outcome:(state,action:PayloadAction<number>)=>{
            const safeState = state.value * 100
            const safeAction = action.payload * 100
            state.value = (safeState - safeAction) / 100
        }
    }
})


export const {income,outcome} = balanceSlice.actions
export default balanceSlice.reducer