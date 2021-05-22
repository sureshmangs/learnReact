import React, { Component } from 'react';

import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef();
    }

    clickHandle = () => {
        console.log('In click handle -> focusinput component')
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandle}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
