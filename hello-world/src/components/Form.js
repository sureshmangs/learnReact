import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: 'React'
        }
    }

    handleUsername = e => {
        this.setState({
            username: e.target.value
        }, () => console.log(this.state.username))
    }

    handleComment = e => {
        this.setState({
            comment: e.target.value
        }, () => console.log(this.state.comment))
    }

    handleTopic = e => {
        this.setState({
            topic: e.target.value
        }, () => console.log(this.state.topic))
    }

    handleSubmit = (e) => {
        alert(`${this.state.username}: ${this.state.comment} \n ${this.state.topic}`)
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Form Component</h3>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input type="text" value={this.state.username} onChange={this.handleUsername} />
                    </div>

                    <br />

                    <div>
                        <label>Comment: </label>
                        <textarea type="text" value={this.state.comment} onChange={this.handleComment} />
                    </div>

                    <br />

                    <div>
                        <label>Topic: </label>
                        <select value={this.state.topic} onChange={this.handleTopic}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
