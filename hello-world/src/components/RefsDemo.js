import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
        this.emailRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleClick = () => {
        alert(`Hi ${this.inputRef.current.value}`);
    }

    render() {
        console.log(this.inputRef); // Is null at the beginning
        return (
            <div>
                <label>Enter name: </label>
                <input type="text" name="name" ref={this.inputRef} />
                <br />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
