import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        // A call to the super method is made because we are extending Reacts component class so a call to the base class contructor is required
        super();
        this.state = {
            message: 'Hello Visitor'
        }
    }

    handleSubscribe() {
        this.setState({
            message: 'Thanks for the sub'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
