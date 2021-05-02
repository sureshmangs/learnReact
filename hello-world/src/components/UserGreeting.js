import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedInIn: true
        }
    }

    render() {
        // Method 1
        // if (this.state.isLoggedInIn) {
        //     return <h1>Hello Suresh</h1>
        // } else {
        //     return <h1>Hello Guest</h1>
        // }



        // Method 2
        // let message;
        // if (this.state.isLoggedInIn) {
        //     message = <h1>Hello Suresh</h1>
        // } else {
        //     message = <h1>Hello Guest</h1>
        // }

        // return (
        //     <div>{message}</div>
        // )



        // Method 3
        // return (
        //     this.state.isLoggedInIn ? <h1>Hello Suresh</h1> : <h1>Hello Guest</h1>
        // )

        // Method 4 aka short circuit operator (only showing logged In)
        return this.state.isLoggedInIn && <h1>Hello Suresh</h1>

    }
}

export default UserGreeting
