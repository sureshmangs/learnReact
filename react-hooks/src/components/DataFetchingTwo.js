import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    posts: {},
    errorMsg: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                errorMsg: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                errorMsg: 'Something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' });
            })
    }, []);

    return (
        < div >
            { state.loading ? 'Loading' : state.post.title}
            { state.errorMsg ? state.errorMsg : null}
        </div >
    )
}

export default DataFetchingTwo
