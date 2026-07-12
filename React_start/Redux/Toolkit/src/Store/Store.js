

import {configureStore} from  "@reduxjs/toolkit"

import { CounterReducers } from "../Slicer/CounterSlicer"


export const myStore = configureStore({
    reducer:CounterReducers
})