import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <p>Count: {countTwo}</p>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree

// Multiple useReducers is to be used when dealing with multiple variables 
// which have the same state transition, the reducer function is share among 
// the multiple useReducers. This will reducing code and complexity
