import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count1: {count.firstCounter}</p>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment Counter 1 by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement Counter by 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment Counter by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement Counter by 5</button>

            <p>Count2: {count.secondCounter}</p>

            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2 by 1</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2 by 1</button>

            <br />
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo