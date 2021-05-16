import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Suresh'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Suresh'
            })
        }, 2000);
    }

    render() {
        console.log('Parent Component Render');
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />

                {/* A regular component does not implement the shouldComponentUpdate method.
                It always returns tru by default.

                A pure component on the other hand implement shouldComponentUpdate with a
                shallow prop and state comparision */}

                {/* Shallow comparison

                Primitive type
                a SC b returns true if a and b are of same type and value 

                Complex type
                a SC b return true if a and b reference the exact same  object */}


            </div>
        )
    }
}

export default ParentComp
