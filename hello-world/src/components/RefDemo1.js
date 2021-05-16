import React, { Component } from 'react'

class RefsDemo1 extends Component {
    constructor(props) {
        super(props)

        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus();
        }
    }

    handleClick = () => {
        alert(`Hi ${this.cbRef.value}`);
    }

    render() {
        console.log(this.cbRef); // Is null at the beginning
        return (
            <div>
                <label>Enter name: </label>
                <input type="text" name="name" ref={this.setCbRef} />
                <br />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default RefsDemo1
