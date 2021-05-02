import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement() {
        // Async code part
        /*
        this.setState({
            count: this.state.count + 1
        }, () => console.log('callback value is ', this.state.count));
        console.log(this.state.count); // this line will be rendered before setState 
        */

        // Best way to update state when we are updating state based on the previous state

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => console.log('callback value is ', this.state.count));
        console.log(this.state.count);
    }

    incrementFive() {
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.handleIncrement()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment 5</button>
            </div>
        )
    }
}

export default Counter
