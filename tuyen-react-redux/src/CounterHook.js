import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

//actions
import {setIncrement,setDecrement} from './actions/counterActions'

export default function CounterHook() {
    const dispatch = useDispatch();
    const stateNumber = state => state.counter.number;
    //const number = useSelector(state => state.counter.number)

    return (
        <div>
            <h3>Sample with useSelector & useDispatch</h3>
            <div>Number is {number}</div>
            <br/>
            <button type="button" onClick={() => dispatch(setDecrement(2))}>decrement</button>
            <button type="button" onClick={() => dispatch(setIncrement(5))}>increment</button>
        </div>
    )
}