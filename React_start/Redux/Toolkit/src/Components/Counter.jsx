import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../Slicer/CounterSlicer";


export const Counter = () => {

    const dispatch = useDispatch()
    const value = useSelector(store => store.count)
    console.log(value)

    const handleAdd = () => {
        dispatch(increment());
    }

    const handleSub = () => {
        dispatch(decrement());
    }

    return <>
        <h1>Counter {value}</h1>
        <input type="text" />
        <button onClick={handleAdd}>increment</button>
        <button onClick={handleSub}>decrement</button>
        <button onClick={handleSub}>increment by Value</button>
        <button onClick={handleSub}>decrement by value</button>
    </>
}