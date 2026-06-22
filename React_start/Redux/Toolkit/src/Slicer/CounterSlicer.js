import { createSlice } from "@reduxjs/toolkit"

const CounterReducer = createSlice({
    name: "mehfooz",
    initialState: { count: 0 },
    reducers: {
        increment: (state, action) => {
            state.count = state.count + 1
        },
        decrement: (state, action) => {
            state.count = state.count - 1
        }
    }
})


export const { increment, decrement } = CounterReducer.actions

export const CounterReducers = CounterReducer.reducer