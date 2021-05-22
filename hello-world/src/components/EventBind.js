import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        //     Method 3
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }

    // Method 4
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>

                {/* Best way according to React docs is Method 3 and 4 */}

                {/* Binding in render method 1
                    Not a good idea to use in large applications as on every UI update event binding will be done
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}



                {/* Using arrow function in render method 2
                    Faces similiar performance issue like method 1
                <button onClick={() => this.clickHandler()}>Clickk</button> */}


                {/* Binding in class constructor method 3 */}
                <button onClick={this.clickHandler}>Click</button>


                {/* Class property as arrow function method 4
                <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
