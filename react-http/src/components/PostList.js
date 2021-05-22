import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log('Error Occured', err);
                this.setState({
                    errorMsg: 'Something went wrong'
                })
            });
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                List of Posts
                {
                    posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default PostList
