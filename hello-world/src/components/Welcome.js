import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const { name, hero, children } = this.props;

        // for states we have
        // const {state1, state2} = this.state;
        return (
            <div>
                <h1>Welcome {name} a.k.a {hero}</h1>
                { children}
            </div>
        )
    }
}

export default Welcome;