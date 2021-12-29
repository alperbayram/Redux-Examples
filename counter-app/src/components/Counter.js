import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import { decrement, increment, incrementByAmount } from '../redux/counter/counterSlice';


function Counter() {
    const countValue = useSelector((state) => state.counter.value);
    const [amount, setAmount] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{countValue}</h1>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>İncrement</button>

            <br />
            <br />

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(amount))} >Increment by Amount</button>

        </div>
    )
}
export default Counter
