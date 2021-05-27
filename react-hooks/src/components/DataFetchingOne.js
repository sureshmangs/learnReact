import React, { useState, useEffect } from 'react';
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false);
                setPost(res.data);
                setErrorMsg('')
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setErrorMsg('Something went wrong');

            })
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {errorMsg ? errorMsg : null}
        </div>
    )
}

export default DataFetchingOne
