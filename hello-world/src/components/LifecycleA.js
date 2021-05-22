import React, { Component } from 'react'

import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Suresh'
        }
        console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    handleChange = () => {
        this.setState({
            name: 'Chris'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.handleChange}>Update</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
