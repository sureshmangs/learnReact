import React, { Component } from 'react';
import ComponentF from './ComponentF';

class ComponentE extends Component {
    render() {
        return (
            <div>
                Component E
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
