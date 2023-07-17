import { createSlice, configureStore } from '@reduxjs/toolkit'
import {PayloadAction} from "@reduxjs/toolkit";
interface searchState{
    value: string
}

const initialState: searchState = {
    value:''
}
const searchSlice = createSlice({
    name:'Search',
    initialState,
    reducers:{
        setSearch: (state, action: PayloadAction<string>) => {
            state.value += action.payload
        }
    }
})